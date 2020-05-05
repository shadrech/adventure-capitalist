import React from 'react';
import { BusinessData } from '../../state/Businesses/types';
import { PurchasedDiv, LeftSection, RightSection, ArrowDiv, BottomDiv, MoneyDiv, BuySVG } from './styles';
import arrowPng from '../../assets/arrow_outline.png';
import { ReactComponent as ArrowMaskSVG } from '../../assets/arrow_mask.svg';
import { unpurchasedIntl, priceIntl } from '../../helpers';
import { useBalanceDispatchContext } from '../../state/Balance';
import { useBusinessDispatchContext } from '../../state/Businesses';
import { Duration } from './duration';
import { useBalanceContext } from '../../state/Balance/index';

interface Props {
  business: BusinessData;
}

const Component: React.FunctionComponent<Props> = ({ business }) => {
  const balance = useBalanceContext();
  const balanceDispatch = useBalanceDispatchContext();
  const businessDispatch = useBusinessDispatchContext();
  const [timer, setTimer] = React.useState(business.hasManager);
  const [uniqueId, setUniqueId] = React.useState(1);
  const purchaseable = balance >= business.price ? 1 : 0;
  const hasManager = business.hasManager || false;
  const onTimerComplete = () => {
    balanceDispatch({ type: 'INCREASE', payload: { amount: business.profit } });

    if (!business.hasManager) {
      setTimer(false);
    }
    setUniqueId(Math.random());
  }
  const onLeftSectionClick = () => {
    if (!timer) {
      setTimer(true)
      setUniqueId(Math.random())
    }
  }
  const onBuyClick = () => {
    businessDispatch({ type: 'BUY', payload: { id: business.id, quantity: 1 } });
    balanceDispatch({ type: 'DECREASE', payload: { amount: business.price } });
  }

  React.useEffect(() => {
    if (!timer && hasManager) {
      setTimer(true)
      setUniqueId(Math.random())
    }
  }, [hasManager, timer])

  return (
    <PurchasedDiv>
      <LeftSection onClick={business.hasManager ? undefined : onLeftSectionClick} clickable={!timer}>
        <p>{business.quantityPurchased}</p>
        <span></span>
      </LeftSection>
      <RightSection>
        <ArrowDiv animationDuration={business.timeTaken} activeAnimation={timer} loopAnimation={business.hasManager}>
          <p>{unpurchasedIntl.format(business.profit)}</p>
          <span></span>
          <img src={arrowPng} alt="Business profit" />
          <ArrowMaskSVG />
        </ArrowDiv>
        <BottomDiv>
          <MoneyDiv onClick={purchaseable ? onBuyClick : undefined}>
            <p>Buy x1</p>
            <p>{priceIntl.format(business.price)}</p>
            <BuySVG purchaseable={purchaseable} />
          </MoneyDiv>
          <Duration onTimerComplete={onTimerComplete} uniqueId={uniqueId} autoStart={timer} timeTaken={business.timeTaken} />
        </BottomDiv>
      </RightSection>
    </PurchasedDiv>
  )
}

export const Purchased = React.memo(Component);
