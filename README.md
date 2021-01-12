# MyIssieSign
MyIssieSign is an application that helps recording and sharing gestures of sign language 
It supports English, Hebrew and Arabic and aim to be available in both iOS and Android (iOS first)

## Build instruction

Pre-requisites:
- XCode
- Cordova (install: `npm install -g cordova`)

Build:
- clone the project
- run `npm install`
- run `./scripts/make.sh` (Mac version)
- open XCode, open project under `./cordova/platforms/ios/myIssieSign/myIssieSign.xcworkplace`
- run in Simulator



The following cordova plugin are used
- `cordova plugin add cordova-plugin-camera --save`
- `cordova plugin add https://github.com/Telerik-Verified-Plugins/ImagePicker.git --save`
- `cordova plugin add cordova-plugin-file --save`
- `cordova plugin add cordova-plugin-x-socialsharing --save`
- `cordova plugin add cordova-plugin-media-capture --save`

### Run in Browser 
Note: most features won't work, as it requires device API such as filesystem

- run `npm start`
- browser will open with the App.
- On every file change, the browser will reload the App.


### Run on iPad, connected via cable
- same as before, select the iPad as the device
- On first run, you need to verify the app: in Settings->General->Device Management->choose you e-mail and the verify the app.
  
