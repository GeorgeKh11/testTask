import * as React from 'react';
import { StackActions } from '@react-navigation/native';

// @ts-ignore
export const navigationRef: NavigationContainer = React.createRef();

export interface NavigationParams {
  [key: string]: any;
}

const navigate = (routeName: any, params?: NavigationParams) => {
  navigationRef.current?.navigate(routeName, params);
};

const replace = (rootName: string, params?: object) => {
  navigationRef.current.dispatch(StackActions.replace(rootName, params));
};

const pop = () => {
  navigationRef.current?.goBack();
};

export default {
  navigate,
  pop,
  replace,
};
