#!/usr/bin/env -S uv run --quiet --script
# Managed by devkit (github.com/hiqdev/devkit): `devkit update` rewrites it, change the template instead.
# /// script
# requires-python = ">=3.11"
# ///
# MISE description="gitleaks over the working tree as git sees it, ignored files left out; more options: -v"
# MISE hide=true
"""gitleaks over the working tree as git sees it: tracked and untracked files, ignored ones left out,
so a local .env or a private folder is no leak, but a key in a new untracked file is. gitleaks dir takes
one folder, not a file list, so the ignored paths go into a config that extends the project's own."""

import os
import re
import subprocess
import sys
import tempfile
from pathlib import Path


def leaks_config(ignored: list[str], own: Path | None) -> str:
    """gitleaks config that extends the project's own .gitleaks.toml, or the default rules, and skips what
    git ignores."""
    lines = ["[extend]", f"path = '{own.resolve()}'" if own else "useDefault = true"]
    if ignored:
        patterns = ["^" + re.escape(p) + ("" if p.endswith("/") else "$") for p in ignored]
        lines += ["", "[[allowlists]]", 'description = "ignored by git, devkit:leaks"', "paths = ["]
        lines += [f"  '''{p}'''," for p in patterns]
        lines += ["]"]
    return "\n".join(lines) + "\n"


def ignored() -> list[str]:
    cmd = ["git", "ls-files", "-z", "-oi", "--exclude-standard", "--directory"]
    return [p for p in subprocess.run(cmd, check=True, stdout=subprocess.PIPE, text=True).stdout.split("\0") if p]


def main(args: list[str]) -> int:
    own = Path(".gitleaks.toml")
    with tempfile.NamedTemporaryFile("w", prefix="devkit-gitleaks-", suffix=".toml", delete=False) as f:
        f.write(leaks_config(ignored(), own if own.exists() else None))
    try:
        cmd = ["gitleaks", "dir", "--redact", "--no-banner", "--config", f.name, *args, "."]
        return subprocess.run(cmd, check=False).returncode
    except FileNotFoundError:
        sys.exit("devkit:leaks: gitleaks not found, mise install puts the project's tools on PATH")
    finally:
        os.unlink(f.name)


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
