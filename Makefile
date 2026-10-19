.PHONY: upgit docs check lint hooks

UWIKI ?= $(HOME)/prj/hiqsol/uwiki/src/uwiki.py
export UWIKI
MDLINT ?= npx --yes markdownlint-cli2@0.23.3
MD ?= "docs/**/*.md" "ideas/**/*.md" "*.md"

upgit:
	rm -rf  ~/prj/Sync/8bitgalaxy/.git
	cp -r ~/prj/hiqsol/8bitgalaxy/.git .git
docs:
	$(UWIKI) docs
check:
	bin/checkdocs
lint:
	$(MDLINT) $(MD)
hooks:
	git config core.hooksPath .githooks
