import { SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import {
  KeyboardProvider,
  KeyboardAvoidingView,
} from 'react-native-keyboard-controller';
import SplashScreen from 'react-native-splash-screen';
//import LoginScreen from './src/screens/Login/LoginScreen';
//import OptionsScreen from './src/screens/Options/OptionsScreen';
import styles from './src/globals/globals.module';

const App = (): JSX.Element => {
  useEffect((): void => {
    setTimeout((): void => {
      SplashScreen.hide();
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardProvider>
        <KeyboardAvoidingView behavior="padding" style={styles.inline}>
          {/*<OptionsScreen />*/}
          {/*<LoginScreen />*/}
        </KeyboardAvoidingView>
      </KeyboardProvider>
    </SafeAreaView>
  );
};

export default App;
