import { Dispatch } from 'redux';

import Api from '../../../api/Api';
import { DispatchType, GET_EVENTS, LOADER_END, LOADER_START } from './eventsActionsType';

const getAllEvents = () => async (dispatch: Dispatch<DispatchType>) => {
  dispatch({ type: LOADER_START });
  try {
    const { data } = await Api.eventsApi.getEvents();
    // Call Fabric methods or transformers here
    dispatch({ type: GET_EVENTS, payload: data });
  } catch (e) {
    console.log(e);
  } finally {
    dispatch({ type: LOADER_END });
  }
};

export { getAllEvents };
