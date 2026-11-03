.PHONY: docs view serve check stats lint wrap links hooks

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
links:
	uwiki ls --external . | lychee -
hooks:
	git config core.hooksPath .githooks
