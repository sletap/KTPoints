# KTPledge

A crossplatform KTP app made using react native

# Instructions to run on Mac:

## Step 1: Install all Dependecies
* Install Node: `brew install node`
* Install Watchman: `brew install watchman`
* Install React Native using the command: `npm install -g react-native-cli`

## Step 2 Running the App:
* Change to the inner KTPoints directory (KTPoints/KTPoints/)
* Run: `npm install` (also might need to run `npm audit fix`)
* Then (with Xcode installed) run: `react-native run-ios`
* For Android users build using Android Studio
* Alternative option: `react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`

# Instructions for PC:
* Follow instructions at this link: https://facebook.github.io/react-native/docs/getting-started

# Dependencies to Install:
* This may or may not be required anymore
* ReactNavigation install somewhere on this site: https://reactnavigation.org/en/
* To handle Scrolling on Login: `npm i react-native-keyboard-aware-scroll-view --save`
* To handle link routing/navigation: `npm install --save react-navigation`
* To handle firebase calls: `npm install --save firebase`
* To display images correctly: `npm install --save axios`
* To handle date time stuff: `npm install moment --save`
* For displaying data: `npm install --save react-native-progress-bar-animated`

# General Branching:
* Complete a feature in a branch, then create a pull request for that branch to come into the REDO branch (which will eventually be master)
