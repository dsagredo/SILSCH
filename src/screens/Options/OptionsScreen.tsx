import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './Options.module.ts';
import Logo from '../../assets/images/logo.png';

const OptionsScreen = (): JSX.Element => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentImg}>
          <Image source={Logo} style={styles.contentLogo} />
        </View>
        <View style={styles.contentOption}>
          <Text style={styles.contentText}>¿Que necesitas?</Text>
          <TouchableOpacity style={styles.contentButtom}>
            <View style={styles.contentIcon}>
              <FontAwesome
                name="american-sign-language-interpreting"
                size={28}
                color="#021649"
              />
            </View>
            <Text style={styles.contentButtomText}>
              Quiero ofrecer un servicio en Lengua de Señas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentButtom}>
            <View style={styles.contentIcon}>
              <FontAwesome name="search" size={28} color="#021649" />
            </View>
            <Text style={styles.contentButtomText}>
              Quiero buscar un servicio en Lengua de Señas
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default OptionsScreen;
