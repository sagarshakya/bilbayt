import React from 'react';
import {View, Text, TextInput as RNTextInput} from 'react-native';

import {VerticalSpacer} from '../vertical-spacer';

import styles from './style';

export const TextInput = ({label, ...props}) => {
  return (
    <View>
      <Text>{label}</Text>
      <VerticalSpacer />
      <RNTextInput
        textAlignVertical="center"
        {...props}
        style={styles.textInput}
      />
    </View>
  );
};
