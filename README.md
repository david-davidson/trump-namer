To build locally:

```
npm install
npm start # App served at localhost:8080
```

To update copy/content:
```
* Add new sliders in `/js/slider-config.js`
* Add new adjectives in `/js/adjectives/js`
* App should include them automatically
```

To deploy:
```
npm install # If you've already done this once, no need
npm build # Builds minified app bundle
git commit -a # Do this on `master`, or eventually merge into master
git checkout gh-pages # <= GitHub Pages "publishing" branch
git merge master
git push origin gh-pages # Updates live site
```
