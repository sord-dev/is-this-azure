#!/bin/bash

# Create a temporary directory
mkdir deployment

# Copy files to the temporary directory
cp application/dist/* deployment/ -r
cp application/node_modules deployment/ -r
cp application/package.json deployment/
cp application/package-lock.json deployment/

# Zip all files in the temporary directory
cd deployment
zip -r release.zip .

# Move the zip file to the root directory
mv release.zip ../