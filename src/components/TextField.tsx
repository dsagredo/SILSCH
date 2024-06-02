import React from 'react';
import { TextInput } from 'react-native';
import { TextFieldT } from '../types/TextField.types';

const TextField = (props: TextFieldT): JSX.Element => {
  const { placeholdertext } = props;
  return <TextInput placeholder={placeholdertext} {...props} />;
};

export default TextField;
