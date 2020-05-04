import React from 'react';

let count: () => void;

export const useTimer = (dur: number, loop: boolean = false) => {
  const [duration, setDuration] = React.useState(dur);
  const [begin, setBegin] = React.useState(false);
  const beginCount = () => setBegin(true);
  const countdown = React.useCallback(() => {
    const interval = setInterval(() => {
      console.log('INTERVAL--->', duration);
      setDuration(duration - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [duration]);

  React.useEffect(() => {
     if (begin === true) {
       count = countdown();
     }
  }, [begin, countdown]);

  React.useEffect(() => {
    if (duration === 0) {
      setDuration(dur);
      if (!loop) {
        setBegin(false);
        count()
      }
    }
  }, [dur, duration, loop])

  return { duration, beginCount };
}
