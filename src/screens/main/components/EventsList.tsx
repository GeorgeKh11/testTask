import React, { useCallback, memo } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { EventsItem } from './EventsItem';

interface EventsListProps {
  events: any[];
  openUrl: (url: string) => void;
  openDetailHandler: (id: string) => void;
}

export const EventsList = memo(({ events, openUrl, openDetailHandler }: EventsListProps) => {
  const renderItem = useCallback(
    ({ item, index }) => (
      <EventsItem event={item} idx={index} openUrl={openUrl} openDetailHandler={openDetailHandler} />
    ),
    [],
  );
  const keyExtractor = useCallback(item => item.id.toString(), []);

  return (
    <View style={styles.containerList}>
      <FlatList
        contentContainerStyle={styles.containerStyle}
        data={events}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  containerList: {
    flex: 1,
    marginTop: 20,
  },

  containerStyle: {
    paddingHorizontal: 15,
  },
});
