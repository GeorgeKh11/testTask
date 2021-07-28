import {
  DispatchType,
  GET_EVENTS,
  LOADER_END,
  LOADER_START,
  SET_SELECTED_EVENT,
} from '../../actions/events/eventsActionsType';

const initialState = {
  events: [],
  selectedEvent: null,
  loader: false,
};

export const eventsReducer = (state: any = initialState, action: DispatchType) => {
  switch (action.type) {
    case LOADER_START:
      return {
        ...state,
        loader: true,
      };

    case LOADER_END:
      return {
        ...state,
        loader: false,
      };

    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };

    case SET_SELECTED_EVENT:
      return {
        ...state,
        selectedEvent: action.payload,
      };

    default:
      return state;
  }
};
