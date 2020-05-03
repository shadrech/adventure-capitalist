import React from 'react';
import { BusinessData } from '../../state/Businesses/types';
import { UnpurchasedDiv, UnpurchasedSvg, PurchasedDiv, LeftSection, RightSection, ArrowDiv, BottomDiv, MoneyDiv, DurationDiv } from './styles';
import { Actions } from '../../state/Businesses/hook/reducer';
import arrowPng from '../../assets/arrow_outline.png';
import { ReactComponent as ArrowMaskSVG } from '../../assets/arrow_mask.svg';
import { priceIntl, secondsToTime, unpurchasedIntl } from '../../helpers';

interface Props {
  business: BusinessData;
  dispatch: React.Dispatch<Actions>;
}

export const Business: React.FunctionComponent<Props> = ({ business }: Props) => {
  return business.quantityPurchased ? (
    <PurchasedDiv>
      <LeftSection>
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
            <p>{secondsToTime(business.timeTaken)}</p>
          </DurationDiv>
        </BottomDiv>
      </RightSection>
    </PurchasedDiv>
  ) : (
    <UnpurchasedDiv>
      <p>{business.name}</p>
      <p>{unpurchasedIntl.format(business.price)}</p>
      <UnpurchasedSvg />
    </UnpurchasedDiv>
  )
}
