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
Use this guide to set up your React Native environment. Follow the React Native CLI Quickstart instructions until the "Creating a new application" section: \
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
If you're going to run the app on iOS, navigate to the ios folder and run this command:
```
pod install
```

### Run the app
Assuming you have everything set up properly, you can now run the app on a device or emulator. If you're using an emulator, start it now.
If you want to run the app on a physical device, this guide will help: \
https://reactnative.dev/docs/running-on-device
#### iOS
In the main project folder, run the following command:
```
npx react-native run-ios
```
#### Android
When cloning this to macOS, you might run into an issue with permissions for the gradle wrapper file. Running this command fixes it:
```
chmod 755 android/gradlew
```
Run the following command in the main project folder:
```
npx react-native run-android
```



