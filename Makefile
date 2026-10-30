.PHONY: upgit docs view check stats lint wrap hooks

MDLINT ?= npx --yes markdownlint-cli2@0.23.3
MD ?= "docs/**/*.md" "ideas/**/*.md" "*.md"
BUILD ?= build
OPEN ?= $(shell command -v local-open || command -v xdg-open || echo open)

upgit:
	rm -rf  ~/prj/Sync/8bitgalaxy/.git
	cp -r ~/prj/hiqsol/8bitgalaxy/.git .git
docs:
	uwiki build docs -o $(BUILD)
view: docs
	$(OPEN) $(BUILD)/docs.html
check:
	bin/checkdocs
stats:
	uwiki stats docs ideas
lint:
	$(MDLINT) $(MD)
wrap:
	git ls-files "*.md" | xargs uwiki wrap
hooks:
	git config core.hooksPath .githooks
