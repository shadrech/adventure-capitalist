import React from 'react';
import Countdown from 'react-countdown';
import { BusinessData } from '../../state/Businesses/types';
import { UnpurchasedDiv, UnpurchasedSvg, PurchasedDiv, LeftSection, RightSection, ArrowDiv, BottomDiv, MoneyDiv, DurationDiv } from './styles';
import { Actions } from '../../state/Businesses/hook/reducer';
import arrowPng from '../../assets/arrow_outline.png';
import { ReactComponent as ArrowMaskSVG } from '../../assets/arrow_mask.svg';
import { ReactComponent as PurchaseSVG } from '../../assets/purchase_bg.svg';
import { priceIntl, unpurchasedIntl } from '../../helpers';
import { BalanceContext } from '../../state/Balance';

interface Props {
  business: BusinessData;
  dispatch: React.Dispatch<Actions>;
}

export const Business: React.FunctionComponent<Props> = ({ business }: Props) => {
  const { balance } = React.useContext(BalanceContext);
  const [timer, setTimer] = React.useState(false);
  const [key, setKey] = React.useState(1);
  const onTimerComplete = () => {
    const timeout = setTimeout(() => {
      if (!business.hasManager) {
        setTimer(false);
      }
      setKey(Math.random());
      clearTimeout(timeout);
    }, 1000);
  }

  return business.quantityPurchased ? (
    <PurchasedDiv>
      <LeftSection onClick={() => {
        setTimer(true)
        setKey(Math.random())
      }}>
        <p>{business.quantityPurchased}</p>
        <span></span>
      </LeftSection>
      <RightSection>
        <ArrowDiv>
          <p>{business.profit}</p>
          <span></span>
          <img src={arrowPng} alt="Business profit" />
          <ArrowMaskSVG />
        </ArrowDiv>
        <BottomDiv>
          <MoneyDiv>
            <p>Buy x1</p>
            <p>{priceIntl.format(business.price)}</p>
          </MoneyDiv>
          <DurationDiv>
            <Countdown
              date={Date.now() + business.timeTaken * 1000}
              autoStart={timer}
              zeroPadTime={2}
              key={key}
              onComplete={onTimerComplete}
            />
          </DurationDiv>
        </BottomDiv>
      </RightSection>
    </PurchasedDiv>
  ) : (
    <UnpurchasedDiv>
      <p>{business.name}</p>
      <p>{unpurchasedIntl.format(business.price)}</p>
      {balance >= business.price ?
        <PurchaseSVG className="purchase" />
        : <UnpurchasedSvg />
      }
    </UnpurchasedDiv>
  )
}
