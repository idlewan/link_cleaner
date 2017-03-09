all: manifest.json background.js
	apack link_cleaner.zip *.js *.json

manifest.json: manifest.yaml
	remarshal -if yaml -of json --indent-json $< > $@

