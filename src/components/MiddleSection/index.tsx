import React from 'react';
import { Business } from '../Business';
import { SectionWrapper } from './styles';
import { useBusinessContext } from '../../state/Businesses/index';

export const MiddleSection: React.FunctionComponent = () => {
  const businesses = useBusinessContext();

  return (
    <SectionWrapper>
        {Object.values(businesses).map(business =>
          <Business
            business={business}
            key={business.id} />
        )}
    </SectionWrapper>
  );
}
