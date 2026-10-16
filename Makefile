.PHONY: upgit docs check

UWIKI ?= $(HOME)/prj/hiqsol/uwiki/src/uwiki.py
export UWIKI

upgit:
	rm -rf  ~/prj/Sync/8bitgalaxy/.git
	cp -r ~/prj/hiqsol/8bitgalaxy/.git .git
docs:
	$(UWIKI) docs
check:
	bin/checkdocs
