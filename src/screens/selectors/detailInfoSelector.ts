import { createSelector } from 'reselect';
import { AppState } from '../../store/store';

const eventList = (state: AppState) => state.events.events;
const selectedEventId = (state: AppState) => state.events.selectedEvent;

export const detailInfoSelector = createSelector([eventList, selectedEventId], (events, id) => {
  console.log(events);
  console.log(id);
  return events.find((item: any) => item.id == id);
});
