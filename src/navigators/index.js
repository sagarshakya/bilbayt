import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RegisterScreen} from '../screens';

const AppStack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
        }}>
        <AppStack.Screen name="Register" component={RegisterScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
//
