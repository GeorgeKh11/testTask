import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

import { colors } from '../styles/colors';

export const Loader = () => {
  return (
    <View style={styles.loaderWrapper}>
      <ActivityIndicator size="large" color={colors.secondary} />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
