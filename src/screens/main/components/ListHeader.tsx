import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { ListHeaderHelper } from '../../../helpers/ListHeaderHelper';

import { colors } from '../../../styles/colors';

interface ListHeaderProps {
  eventsLength: number;
  onRefresh: () => void;
  timerCanUpdate: number;
}

export const ListHeader = ({ eventsLength, onRefresh, timerCanUpdate }: ListHeaderProps) => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.headerText}>{ListHeaderHelper.getEventsEndings(eventsLength)}</Text>

      <TouchableOpacity style={styles.buttonWrapper} onPress={onRefresh} disabled={timerCanUpdate < 15 ? true : false}>
        <Text style={styles.buttonText}>Refresh</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 16,
    color: colors.secondary,
  },

  buttonWrapper: {
    padding: 12,
    backgroundColor: colors.smokeWhite,
  },

  buttonText: {
    fontSize: 16,
    color: colors.primary,
  },
});
