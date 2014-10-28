#!/bin/bash

rm -rf ../www || exit 0
mkdir ../www
grunt build
(
  cd ../www
  git init
  git config user.name "Travis-CI"
  git config user.email "travis@travis.travis"
  git add .
  git commit -m "Automated gh-pages deploy"
  git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
)
