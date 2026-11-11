.PHONY: docs view serve site html check stats lint wrap link links hooks

# uwiki.toml holds uwiki defaults: excluded build/, checks, schema
MDLINT ?= npx --yes markdownlint-cli2@0.23.3
BUILD ?= build
MD ?= $(shell uwiki ls .)
OPEN ?= $(shell command -v local-open || command -v xdg-open || echo open)

docs:
	uwiki build . -o $(BUILD)/
view: docs
	$(OPEN) $(BUILD)/8bitgalaxy.html
serve:
	uwiki serve . --open
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
	uwiki build . -o dist/docs.html
check:
	uwiki check .
	bin/checkdocs
stats:
	uwiki stats .
	uwiki stats . --by status --top 0
	uwiki stats . --by scope --top 0
lint:
	@$(MDLINT) $(MD)
	@echo uwiki wrap --check; uwiki wrap --check $(MD)
wrap:
	@echo uwiki wrap; uwiki wrap $(MD)
link:
	uwiki link .
links:
	uwiki ls --external . | lychee -
hooks:
	git config core.hooksPath .githooks
