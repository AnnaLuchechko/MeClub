#!/bin/bash
now=$(date +"%Y_%m_%d_%H_%M")
version=MeClub_${now}
cd ../android && ./gradlew assembleRelease
buildPath=$HOME/Desktop/Build_MeClub
### Check if a directory does not exist ###
if [ ! -d ${buildPath} ]
then
    mkdir -p ${buildPath}
fi
cp app/build/outputs/apk/app-release.apk ${buildPath}
newFile=${buildPath}/${version}.apk
mv ${buildPath}/app-release.apk ${buildPath}/${version}.apk
echo ${newFile}
