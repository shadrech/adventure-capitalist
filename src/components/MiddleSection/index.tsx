import React from 'react';
import { BusinessContext, BusinessDispatchContext } from '../../state/Businesses';
import { BalanceProvider } from '../../state/Balance';
import { Business } from '../Business';
import { SectionWrapper } from './styles';

export const MiddleSection: React.FunctionComponent = () => {
  const businesses = React.useContext(BusinessContext);
  const businessDispatch = React.useContext(BusinessDispatchContext);

  return (
    <SectionWrapper>
      <BalanceProvider>
        {Object.values(businesses).map(business =>
          <Business
            business={business}
            dispatch={businessDispatch}
            key={business.id} />
        )}
      </BalanceProvider>
    </SectionWrapper>
  );
}
