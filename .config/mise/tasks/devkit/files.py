#!/usr/bin/env -S uv run --quiet --script
# Managed by devkit (github.com/hiqdev/devkit): `devkit update` rewrites it, change the template instead.
# /// script
# requires-python = ">=3.11"
# ///
# MISE description="NUL-separated files lint takes: what git sees and the pages uwiki reads, gitignored ones too"
# MISE hide=true
"""Files git sees, tracked and untracked but not ignored, and the pages uwiki reads in $DEVKIT_VAULT,
ignored or not: a private page gitignored on purpose is still rendered, so it is linted too."""

import os
import subprocess
import sys


def listed(*cmd: str) -> list[str]:
    try:
        return subprocess.run(cmd, check=True, stdout=subprocess.PIPE, text=True).stdout.split("\0")
    except FileNotFoundError:
        sys.exit(f"devkit:files: {cmd[0]} not found, mise install puts the project's tools on PATH")
    except subprocess.CalledProcessError as e:
        sys.exit(e.returncode)


def file_list(vault: str) -> list[str]:
    paths = listed("git", "ls-files", "-z", "-co", "--exclude-standard") + listed("uwiki", "ls", "-z", vault)
    seen = {os.path.normpath(p) for p in paths if p}
    # deleted but still tracked, and submodules, are no files to check
    return sorted(p for p in seen if os.path.lexists(p) and not os.path.isdir(p))


if __name__ == "__main__":
    sys.stdout.write("".join(p + "\0" for p in file_list(os.environ.get("DEVKIT_VAULT") or ".")))
