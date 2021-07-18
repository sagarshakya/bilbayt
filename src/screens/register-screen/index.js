import React, {useState} from 'react';
import {View, Button, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {axiosInstance} from '../../config/axios-config';

import {TextInput, VerticalSpacer} from '../../components';

import styles from './style';

export const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const onSubmit = () => {
    axiosInstance
      .post('/users', {
        username,
        password,
        extra: {
          fullName,
        },
      })
      .then(async response => {
        try {
          const {access_token: accessToken, id_token: idToken} = response.data;

          await AsyncStorage.multiSet([
            ['@app_access_token', accessToken],
            ['@app_id_token', idToken],
          ]);

          Alert.alert(
            'success',
            'You have been registered and tokens added to AsyncStorage',
          );
        } catch (e) {
          Alert.alert('Error', 'Registration failed, please try.');
        }
      })
      .catch(error => {
        Alert.alert('Error', error.response.data);
      });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.formContainer}>
        <TextInput
          label="Username"
          value={username}
          onChangeText={value => setUsername(value)}
          placeholder="Enter a username"
          autoCapitalize="none"
          returnKeyType="next"
        />
        <VerticalSpacer />
        <TextInput
          label="Password"
          value={password}
          onChangeText={value => setPassword(value)}
          placeholder="Enter a password"
          secureTextEntry
          returnKeyType="next"
        />
        <VerticalSpacer />
        <TextInput
          label="Full Name"
          value={fullName}
          onChangeText={value => setFullName(value)}
          placeholder="Enter your Full Name"
          autoCapitalize="words"
          returnKeyType="done"
        />
        <VerticalSpacer />
        <Button testID="register-button" title="Register" onPress={onSubmit} />
      </View>
    </View>
  );
};
