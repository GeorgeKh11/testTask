import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Linking, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '../../components/Container';
import { Loader } from '../../components/Loader';
import { useTimeOuts } from '../../hooks/useTimeOuts';
import { screens } from '../../navigator/consts/screens';
import navigationService from '../../navigator/navigationService';
import { getAllEvents } from '../../store/actions/events/eventsActions';
import { SET_SELECTED_EVENT } from '../../store/actions/events/eventsActionsType';

import { AppState } from '../../store/store';
import { EventsList } from './components/EventsList';
import { ListHeader } from './components/ListHeader';

const MainScreen = () => {
  const dispatch = useDispatch();
  const { events, loader } = useSelector((state: AppState) => state.events);
  const [timerCanUpdate, setTimerCanUpdate] = useState<number>(0);

  const getAllEventsChecker = () => {
    dispatch(getAllEvents());
    setTimerCanUpdate(0);
  };

  useTimeOuts(getAllEventsChecker, setTimerCanUpdate);

  const openUrlHandler = (url: string) => {
    Linking.openURL(url);
  };

  const openDetailHandler = (id: string) => {
    dispatch({ type: SET_SELECTED_EVENT, payload: id });
    navigationService.navigate(screens.DETAIL);
  };

  const useCollbackList = useCallback(
    () => <EventsList events={events} openUrl={openUrlHandler} openDetailHandler={openDetailHandler} />,
    [events],
  );

  return (
    <Container>
      {loader ? (
        <Loader />
      ) : (
        <View style={styles.container}>
          <Text>{timerCanUpdate}</Text>
          <ListHeader eventsLength={events.length} onRefresh={getAllEventsChecker} timerCanUpdate={timerCanUpdate} />
          {useCollbackList()}
        </View>
      )}
    </Container>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
