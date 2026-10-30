.PHONY: upgit docs check stats lint wrap hooks

MDLINT ?= npx --yes markdownlint-cli2@0.23.3
MD ?= "docs/**/*.md" "ideas/**/*.md" "*.md"

upgit:
	rm -rf  ~/prj/Sync/8bitgalaxy/.git
	cp -r ~/prj/hiqsol/8bitgalaxy/.git .git
docs:
	uwiki build docs
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
