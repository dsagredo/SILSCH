import { KeyboardAvoidingView, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './src/screens/Login/LoginScreen';
import styles from './src/globals/globals.module';

const App = (): JSX.Element => {
  useEffect((): void => {
    setTimeout((): void => {
      SplashScreen.hide();
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.inline}
        behavior="padding"
        enabled
        keyboardVerticalOffset={100}>
        <LoginScreen />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;
