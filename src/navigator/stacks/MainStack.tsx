import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screens } from '../consts/screens';

// Screen
import MainScreen from '../../screens/main/MainScreen';
import DetailScreen from '../../screens/main/DetailScreen';

const Stack = createStackNavigator();

export const MainStack = (
  <>
    <Stack.Screen name={screens.MAIN} component={MainScreen} options={{ title: 'Event list' }} />
    <Stack.Screen name={screens.DETAIL} component={DetailScreen} />
  </>
);
