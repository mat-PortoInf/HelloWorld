
# Homework Assignment #1

## Description

A RESTful JSON API that returns a Hello World message in JSON format in /hello route and a 404 in everything else.

## Files

./index.js

	Server setup and start up

./libs/config.js

	NODE_ENV setup.
	Allows 3 diferent environments
	dev - Development
	beta - Beta Testing
	prod - Production

./libs/handlers.js

	Route the request to the handler

./libs/reqParser.js

	Construct the data object to send to the handler