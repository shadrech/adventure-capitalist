import React from 'react';
import { BusinessContext, BusinessDispatchContext } from '../../state/Businesses';
import { Business } from '../Business';
import { SectionWrapper } from './styles';

export const MiddleSection: React.FunctionComponent = () => {
  const businesses = React.useContext(BusinessContext);
  const businessDispatch = React.useContext(BusinessDispatchContext);

  return (
    <SectionWrapper>
      {Object.values(businesses).map(business =>
        <Business
          business={business}
          dispatch={businessDispatch}
          key={business.id} />
      )}
    </SectionWrapper>
  );
}
