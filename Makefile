build:
	npm run build

run: build
	cd out; python3 -m http.server 8000
