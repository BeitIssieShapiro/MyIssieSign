npm run build

rm -f cordova/platforms/ios/www/precache-*.*
rm -rf cordova/platforms/ios/www/static
cp -R build/* cordova/platforms/ios/www

#cp -R build/static cordova/IsraeliSignLanguage/platforms/ios/www/
#cp  build/* cordova/IsraeliSignLanguage/platforms/ios/www/

#if [[ -z "$debug" ]]; then
#   cp -R build/videos cordova/IsraeliSignLanguage/platforms/ios/www/
#else
#    rm -rf cordova/IsraeliSignLanguage/platforms/ios/www/videos
#    mkdir -p cordova/IsraeliSignLanguage/platforms/ios/www/videos
#    cp -R build/videos/אבא.mov cordova/IsraeliSignLanguage/platforms/ios/www/videos/
#    echo 'Only debug movies copied'
# fi



