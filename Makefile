all: serve

serve:
	cd docs; python -m http.server

.PHONY: serve
