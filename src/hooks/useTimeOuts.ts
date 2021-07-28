import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

export const useTimeOuts = (getAllEventsChecker: any, setTimerCanUpdate: any) => {
  useFocusEffect(
    useCallback(() => {
      getAllEventsChecker();
      const timer = setInterval(() => tick(), 60000);
      const timerCount = setInterval(() => countTick(), 1000);

      return () => {
        clearInterval(timer);
        clearInterval(timerCount);
      };
    }, []),
  );

  const tick = () => {
    getAllEventsChecker();
  };

  const countTick = () => {
    setTimerCanUpdate((prev: any) => (prev < 15 ? prev + 1 : prev));
  };
};
