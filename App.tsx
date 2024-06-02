import React from 'react';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';
import LoginScreen from './src/screens/Login/LoginScreen';
import styles from './src/globals/globals.module';
const App = (): JSX.Element => {
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
