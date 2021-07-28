import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './navigationService';
import { MainStack } from './stacks/MainStack';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>{MainStack}</Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
