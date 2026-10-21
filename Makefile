.PHONY: upgit docs html site check lint wrap hooks

UWIKI ?= $(HOME)/prj/hiqsol/uwiki/src/uwiki.py
export UWIKI
MDLINT ?= npx --yes markdownlint-cli2@0.23.3
MD ?= "docs/**/*.md" "ideas/**/*.md" "adr/**/*.md" "*.md"

upgit:
	rm -rf  ~/prj/Sync/8bitgalaxy/.git
	cp -r ~/prj/hiqsol/8bitgalaxy/.git .git
docs:
	$(UWIKI) docs
# the site in dist/: the game at /, in the pixel perfect legacy look at
# /pp/, the legacy prototype at /legacy/, the rules at /docs.html,
# online play through /colyseus
site:
	rm -rf dist
	VITE_SERVER_URL=/colyseus npm run build -w @8bitgalaxy/client -- --outDir ../../dist
	VITE_SERVER_URL=/colyseus VITE_LOOK=pp npm run build -w @8bitgalaxy/client -- --outDir ../../dist/pp --base /pp/
	cd legacy && npx vite build --outDir ../dist/legacy --emptyOutDir
	$(MAKE) html
# the rules as one page: dist/docs.html
html:
	$(UWIKI) docs -o dist --html
check:
	bin/checkdocs
lint:
	$(MDLINT) $(MD)
wrap:
	git ls-files "*.md" | xargs bin/wrapmd
hooks:
	git config core.hooksPath .githooks
