export const GET_EVENTS = 'getEvents';
export const LOADER_START = 'loaderStart';
export const LOADER_END = 'loaderEnd';
export const SET_SELECTED_EVENT = 'setSelectedEvent';

interface IGetEvents {
  type: typeof GET_EVENTS;
  payload: any[];
}

interface ILoaderStart {
  type: typeof LOADER_START;
}

interface ILoaderEnd {
  type: typeof LOADER_END;
}

interface ISetSelectedEvent {
  type: typeof SET_SELECTED_EVENT;
  payload: string;
}

export type DispatchType = IGetEvents | ILoaderStart | ILoaderEnd | ISetSelectedEvent;
