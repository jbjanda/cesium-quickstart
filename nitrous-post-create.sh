#!/bin/bash


wget https://cesiumjs.org/releases/Cesium-1.19.zip
unzip Cesium-1.19.zip -d cesium
rm -rf Cesium-1.19.zip

cd cesium
npm install
