import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ErrorIndicatorProps {
  error: Error;
}

const ErrorIndicator = ({ error }: ErrorIndicatorProps) => {
  return (
    <View style={styles.container}>
      <Text>{error.name}</Text>
      <Text>{error.message}</Text>
      {!!error?.stack && <Text>{error.stack}</Text>}
    </View>
  );
};

export default ErrorIndicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
