.PHONY: upgit docs site check lint wrap hooks

UWIKI ?= $(HOME)/prj/hiqsol/uwiki/src/uwiki.py
export UWIKI
MDLINT ?= npx --yes markdownlint-cli2@0.23.3
MD ?= "docs/**/*.md" "ideas/**/*.md" "adr/**/*.md" "*.md"

upgit:
	rm -rf  ~/prj/Sync/8bitgalaxy/.git
	cp -r ~/prj/hiqsol/8bitgalaxy/.git .git
docs:
	$(UWIKI) docs
# the site in dist/: the game at /, the legacy prototype at /legacy/,
# the rules at /docs.html, online play through /colyseus
site:
	rm -rf dist
	VITE_SERVER_URL=/colyseus npm run build -w @8bitgalaxy/client -- --outDir ../../dist
	cd legacy && npx vite build --outDir ../dist/legacy --emptyOutDir
	$(UWIKI) docs -o dist --html
check:
	bin/checkdocs
lint:
	$(MDLINT) $(MD)
wrap:
	git ls-files "*.md" | xargs bin/wrapmd
hooks:
	git config core.hooksPath .githooks
