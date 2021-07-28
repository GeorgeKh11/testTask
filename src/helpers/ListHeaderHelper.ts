enum EventsEndings {
  SINGLE = 'событие',
  MULTIPLE = 'событий',
  ABOUT = 'события',
}

export class ListHeaderHelper {
  static getEventsEndings(
    number: number,
    txt = [EventsEndings.SINGLE, EventsEndings.ABOUT, EventsEndings.MULTIPLE],
    cases = [2, 0, 1, 1, 1, 2],
  ) {
    return number + ' ' + txt[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
  }
}
