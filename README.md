# Project has moved to https://github.com/ktp-dev/KTPoints

# KTPledge

A crossplatform KTP app made using react native

# Instructions to run on Mac:

## Step 1: Install all Dependecies
* Install Node: `brew install node`
* Install Watchman: `brew install watchman`
* Install React Native using the command: `npm install -g react-native-cli`
* Clone Repo into folder you want
* Change to the inner KTPoints directory (KTPoints/KTPoints/)
* Run: `npm install` (also might need to run `npm audit fix`)
* Note: if you're getting an error like `undefined is not a function (evaluating '_iterator2[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]()'`, try `npm i --save-dev babel-polyfill` and `import 'babel-polyfill';` in Index.js

## Step 2 Running the App:
* Change to the inner KTPoints directory (KTPoints/KTPoints/)
* Then (with Xcode installed) run: `react-native run-ios`
* For Android users open a virtual device or connect your phone to android studio
* Then (with your emulator open/phone ready) run: `react-native run-android`
* Alternative option: `react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`

# Instructions for PC:
## Installation instructions
* Follow instructions at this link: https://facebook.github.io/react-native/docs/getting-started
 * Use the `React Native CLI Quickstart` tab
 * Stop once you reach the `Creating New Application` header
* Clone Repo into folder you want
 * Change to the inner KTPoints directory (KTPoints/KTPoints/)
 * Run: `npm install` (also might need to run `npm audit fix`)
 
## Running Instructions
* In android studio select `Open an existing Android Studio project`
 * In the KtPoints directory select the folder KTPoints/Android/
 * In Android Studio navigate to Android Virtual Device Manager
 * If no devices are present set one up using the instructions here: https://developer.android.com/studio/run/managing-avds.html
 * Once device is set up start your emulator  (green play button on far right side)
* In KTPoints directory run the command `react-native run-android` 

# Additional Dependencies to try installing if it's not working:
* ReactNavigation install somewhere on this site: https://reactnavigation.org/en/
* To handle Scrolling on Login: `npm i react-native-keyboard-aware-scroll-view --save`
* To handle link routing/navigation: `npm install --save react-navigation`
* To handle firebase calls: `npm install --save firebase`
* To display images correctly: `npm install --save axios`
* To handle date time stuff: `npm install moment --save`
* For displaying data: `npm install --save react-native-progress-bar-animated`

# Tools/Organization

## Zeplin
* Designs can be made using whatever program you prefer (Sketch, Adobe XD, Figma, Photoshop)
* When finished with designs import them to Zeplin 
  * Zeplin is a design platform for all of our designs as well as easier handoffs between designer and programmer.
* Our Zeplin project can be found at: https://zpl.io/2j5ZPPW

## Trello
* Task management system
* Easy way to track where we are on various features of the app in a way that is visible to all members
* If you'd like to be added to this please contact EJ and he will make sure you are added

# General Branching:
* Create a new branch using the command: `git checkout -b  [name of branch]`
  * Naming scheme for branches is `hotfix/[yourname-hotfixname]`  or `feature/[yourname-feature_name]`
* Complete a feature in a branch, then create a pull request for that branch to come into the REDO branch (which will eventually be master)










