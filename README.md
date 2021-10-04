# udrop
## Current state
The app currently only has sign in and sign up features using Realm authentication.
For authentication, we still need:
- Reset Password
- Google sign in
- Email confirmation
- Email verification - Currently any string of text can be used as the user name

## Using the App
### Set up environment
Use this guide to set up your React Native environment: \
https://reactnative.dev/docs/environment-setup

### Clone this repository
```
git clone git@github.com:joeyturczak/udrop.git
```

### Install dependencies
In the project folder, run the following command to install the packages from package.json.
```
npm install
```

### Run the app
In the project folder, run the following command to run it on iOS:
```
npx react-native run-ios
```

Run the following command to run it on Android:
```
npx react-native run-android
```

For Android, you'll need to have an emulator or device running. This guide will help you if you want to run the app on a physical device:
https://reactnative.dev/docs/running-on-device

