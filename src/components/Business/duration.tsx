import React from 'react';
import Countdown, { CountdownRenderProps, zeroPad } from 'react-countdown';
import { DurationDiv } from './styles';
interface DurationProps {
  timeTaken: number;
  uniqueId: number;
  autoStart: boolean;
  onTimerComplete: () => void;
}

const countdownRender = ({ hours, minutes, seconds }: CountdownRenderProps) => <span>{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>

const C: React.FunctionComponent<DurationProps> = ({ timeTaken, uniqueId, autoStart, onTimerComplete }) => {
  return (
    <DurationDiv>
      <Countdown
        date={Date.now() + timeTaken * 1000}
        autoStart={autoStart}
        zeroPadTime={2}
        key={uniqueId}
        onComplete={onTimerComplete}
        renderer={countdownRender}
      />
    </DurationDiv>
  )
}

export const Duration = React.memo(C, (prevProps, nextProps) => prevProps.uniqueId === nextProps.uniqueId);
