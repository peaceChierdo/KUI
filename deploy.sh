rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:peaceChierdo/kui-preview.git &&
git push -f -u origin main &&
cd -
echo https://peacechierdo.github.io/kui-preview/index.html