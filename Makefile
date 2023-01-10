all: serve

serve:
	cd docs; python3 -m http.server

.PHONY: serve
