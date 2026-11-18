<!-- Managed by devkit (github.com/hiqdev/devkit): `devkit update` rewrites it, change the template instead. -->
# Lint, hooks and releases: devkit

This project's checks and tasks come from devkit, a copier template. [mise](https://mise.jdx.dev) pins
the tools and runs the tasks, [hk](https://hk.jdx.dev) runs the checks. Nothing needs the `devkit`
command but setting up and updating.

- `mise run check` before a commit: lint and the project's tests, as CI runs them; the pre-commit hook
  runs lint over the staged files.
  `mise run fix` fixes what markdownlint and the hygiene steps can; typos and Vale findings take a person.
- `mise tasks` lists the tasks; `mise tasks --hidden` also the `devkit:*` helpers they run.
- `mise run links` checks external links, `mise run secrets` the git history: on demand, not gates.

Files that say "Managed by devkit" are devkit's: `.config/devkit/`, `.config/mise/conf.d/devkit.toml`,
`.config/mise/tasks/devkit/` and the CI files. Leave them as they are, `devkit update` rewrites them.
The project's own, devkit writes once and never again:

- `mise.toml`: tools and tasks; a task there overrides devkit's of the same name, `test` is the project's
  tests.
- `hk.pkl`: steps, devkit's changed or the project's own.
- `.markdownlint.yaml`, `_typos.toml`: rules on top of devkit's; `.vale.ini` is devkit's, but an update
  keeps the project's own lines in it.
- `.vale/styles/config/vocabularies/Wiki/accept.txt`: words Vale takes as spelled right.

A finding on a word that is right goes into `accept.txt` (Vale) or `_typos.toml` (typos), not around it.
