__Movie Quote App__
This repository contains a React Native app that allows users to manage and view their favorite movie quotes. The app is available in two branches: main and extra. The main branch was completed within a 3-hour time limit, while the extra branch includes additional features developed beyond the time limit.

__Getting Started__
git clone https://github.com/babraham23/ioconic_tech_test.git
npm install
npx expo start


### Main Branch ###
Completion Time: 2 hours 45 minutes
The main branch of the app includes all the required features specified in the project brief.

# Features
Allow users to add new movie quotes to the app.
Present a list of movie quotes added by users, ordered according to user preferences. The user's favorite quotes appear at the top of the list.
Display movie quotes based on data persisted within the app. The app state is persisted, and the latest state is presented even after the app is closed and reopened.
Functional on both iOS and Android platforms.
# Dependencies
The main branch of the app only requires the AsyncStorage dependency to ensure data persistence throughout the app usage.




### Extra Branch ###
The extra branch of the app builds upon the main features by adding additional functionality to enhance the user experience.

# Features
Search functionality to find specific movies or quotes.
Filter options to sort quotes by liked, newest, oldest, highest rated, and lowest rated.

# Dependencies
The extra branch introduces the following dependencies to implement the enhanced features:

react-native-reanimated: Used to create smooth animations and transitions.
@gorhom/bottom-sheet: Enables the implementation of the bottom sheet UI.
react-native-gesture-handler: Facilitates gesture handling for a smoother user experience.
