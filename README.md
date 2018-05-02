# TrumpNamer.com
The internet's best Trump namer! Admire it in all its hideous glory at [david-davidson.github.io/trump-namer/](https://david-davidson.github.io/trump-namer/).

### To build locally:
```
npm install
npm start # App served at localhost:8080
```

### To update copy/content:
* Add new sliders/adjectives in `/config/sliders.js`
* Add new Trump faces in `/img`, and add their paths in `/config/trump-images.js`
* App should update automatically!

### Workflow:
* Work on task-specific branch (e.g., `task/add-new-photos`)
* Open pull request from dev branch into `master`; merge once approved
* Once feature is in `master`, deploy as follows:

### Deployment:
```
npm build # Builds minified app bundle
git status # Should show changed `dist/` bundle and no other changes
git commit dist/ -m "Rebuild site"
git push origin master # Not part of deployment, but keeps everyone's history in sync
git checkout gh-pages # <= GitHub Pages "publishing" branch
git merge master
git push origin gh-pages # Updates live site
```
