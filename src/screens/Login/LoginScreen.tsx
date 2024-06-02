import React from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './Login.module.ts';
import TextField from '../../components/TextField.tsx';

const LoginScreen = (): JSX.Element => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentImg}>
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/wix/react-native-ui-lib/master/demo/src/assets/images/card-example.jpg',
            }}
            width={100}
            height={100}
          />
        </View>
        <View style={styles.contentForm}>
          <TextField
            placeholdertext="Email"
            placeholderTextColor="#FFFFFF"
            style={styles.contentInput}
            autoCapitalize="none"
          />
          <TextField
            placeholdertext="Contraseña"
            placeholderTextColor="#FFFFFF"
            style={styles.contentInput}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.contentButtom}>
          <Text style={styles.contentButtomText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <Button
          //onPress={onPressLearnMore}
          title="Crear una cuenta"
          color="#ffffff"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </>
  );
};

export default LoginScreen;
