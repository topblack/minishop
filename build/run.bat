@echo off
SET CURRENT=%cd%
SET TOP=%~dp0%\..

rd /S /Q %TOP%\dist
mkdir %TOP%\dist

cd %TOP%\ui
call npm install
call npm run build
xcopy /E dist %TOP%\dist\ui\

cd %TOP%\service
call npm install
call gulp
xcopy /E dist %TOP%\dist\service\
xcopy /E node_modules %TOP%\dist\node_modules\

cd %TOP%\dist
node service\index.js

cd %CURRENT%