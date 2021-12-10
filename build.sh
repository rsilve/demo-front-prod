#!/usr/bin/env bash

source .env


mkdir -p dist

echo "build index"
mkdir -p dist && cp -r src/index.html dist

echo "build v0"
mkdir -p dist && cp -r src/v0 dist

echo "build v1"
mkdir -p dist && cp -r src/v1 dist
echo "build v1.5"
mkdir -p dist && cp -r src/v1.5 dist

echo "build v2"
./node_modules/.bin/esbuild --bundle --platform=browser --define:NODE_ENV=\"${ENV}\" --outdir=dist/v2 src/v2/*.js && cp src/v2/*.html dist/v2/