import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import ErrorBoundary from './src/components/errorBoundary/ErrorBoundary';
import { store } from './src/store/store';
import Navigator from './src/navigator/Navigator';

import { colors } from './src/styles/colors';

enableScreens();

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <SafeAreaProvider style={styles.container}>
          <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
          <Navigator />
        </SafeAreaProvider>
      </ErrorBoundary>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default App;
