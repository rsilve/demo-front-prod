#!/usr/bin/env bash

mkdir -p public
sudo cp -rv dist/* $PWD/public

URL=$(gp url 8002)
echo "${URL}/v0/"
echo "${URL}/v1/"
