import React, { memo } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

import { colors } from '../../../styles/colors';

interface EventsItemProps {
  event: any;
  idx: number;
  openUrl: (url: string) => void;
  openDetailHandler: (id: string) => void;
}

export const EventsItem = memo(({ event, idx, openUrl, openDetailHandler }: EventsItemProps) => {
  return (
    <TouchableOpacity onPress={() => openDetailHandler(event?.id)} style={styles.itemWrapper}>
      <View style={styles.cardHeader}>
        <Text style={styles.headerText}>#{idx + 1}</Text>
        <View style={styles.bageWrapper}>
          <Text style={styles.bageText} numberOfLines={1}>
            {event?.type}
          </Text>
        </View>
      </View>

      <View style={styles.actorWrapper}>
        <Image style={styles.actorAvatar} source={{ uri: event?.actor?.avatar_url }} />

        <View style={styles.actorContext}>
          <Text style={styles.actorLogin}>{event?.actor?.login}</Text>
          <TouchableOpacity onPress={() => openUrl(event?.actor?.url)}>
            <Text style={styles.actorLink}>{event?.actor?.url}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  itemWrapper: {
    borderRadius: 8,
    backgroundColor: colors.smokeWhite,
    padding: 20,
    marginBottom: 20,
  },

  bageWrapper: {
    width: '30%',
    padding: 8,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  bageText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },

  actorWrapper: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  actorContext: {
    flexShrink: 1,
    marginLeft: 20,
  },

  actorAvatar: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },

  actorLogin: {
    fontSize: 16,
    color: colors.secondary,
  },

  actorLink: {
    marginTop: 10,
    fontSize: 14,
    color: colors.primary,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 16,
    color: colors.secondary,
  },
});
