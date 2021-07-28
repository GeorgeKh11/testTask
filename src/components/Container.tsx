import React from 'react';
import { View, StyleSheet } from 'react-native';

import { colors } from '../styles/colors';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: colors.white,
  },
});
