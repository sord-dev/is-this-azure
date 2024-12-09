mkdir deployment
cp application/dist/* deployment/ -r
cp application/node_modules deployment/ -r
cp application/package.json deployment/
cp application/package-lock.json deployment/
cd deployment
zip -r release.zip .
mv release.zip ../