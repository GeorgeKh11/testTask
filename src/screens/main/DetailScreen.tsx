import React from 'react';
import { StyleSheet, ScrollView, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

import { Container } from '../../components/Container';
import { AppState } from '../../store/store';
import { detailInfoSelector } from '../selectors/detailInfoSelector';

const DetailScreen = () => {
  const detailInfo = useSelector((state: AppState) => detailInfoSelector(state));

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.detailAvatar} source={{ uri: detailInfo && detailInfo?.actor?.avatar_url }} />
        <Text style={styles.detailLogin}>{detailInfo?.actor.login}</Text>

        <Text>{detailInfo?.actor?.url}</Text>

        <Text>Repo: {detailInfo?.repo?.name}</Text>
        <Text numberOfLines={1}>Repo URL: {detailInfo?.repo?.url}</Text>
      </ScrollView>
    </Container>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  detailAvatar: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },

  detailLogin: {
    fontSize: 20,
    marginTop: 15,
    marginBottom: 5,
  },
});
