import axios from 'axios';
import { URL_GET } from '../../helpers/consts';

export class EventsApi {
  getEvents() {
    return axios.get(URL_GET);
  }
}
