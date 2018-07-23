echo "Starting build"
PROJECT_DIR=$PWD
cd android
cmd.exe /C gradlew.bat installDebug
cd $PROJECT_DIR
react-native start