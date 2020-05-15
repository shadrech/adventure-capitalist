import React from 'react';
import { Modal } from '../Modal';
import { ReactComponent as TitleSVG } from '../../assets/manager_title_bg.svg';
import { ReactComponent as HireSVG } from '../../assets/hire_bg.svg';
import { BackgroundDiv, HireDiv, ManagerBgSVG, InfoDiv, CloseSpan } from './styles';
import { useManagerContext } from '../../state/Managers/index';
import { priceIntl } from '../../helpers';
import { useBalanceContext, useBalanceDispatchContext } from '../../state/Balance/index';
import { useBusinessDispatchContext } from '../../state/Businesses/index';

interface Props {
  show: boolean;
  onClose: () => void;
}

export const ManagerPortal: React.FunctionComponent<Props> = ({ show, onClose }) => {
  const { managers, dispatch } = useManagerContext();
  const balance = useBalanceContext();
  const balanceDispatch = useBalanceDispatchContext();
  const businessDispatch = useBusinessDispatchContext();
  const onHire = (index: number) => () => {
    const manager = managers[index];
    dispatch({ type: 'HIRE', payload: { index } });
    balanceDispatch({ type: 'DECREASE', payload: { amount: manager.price } });
    businessDispatch({ type: 'ACQUIRE_MANAGER', payload: { id: manager.businessId } });
  }

  return (
    <Modal show={show}>
      <BackgroundDiv>
        <section>
          <CloseSpan onClick={onClose} />
          <h1>Managers</h1>
          <TitleSVG />
        </section>
        <section>
          {managers.map((manager, i) => {
            const active = balance >= manager.price;
            return (
              <div key={manager.businessId}>
                <InfoDiv>
                  <p>{manager.name}</p>
                  <p>{manager.description}</p>
                  <p>{priceIntl.format(manager.price)}</p>
                </InfoDiv>
                <HireDiv active={active} onClick={active ? onHire(i) : undefined}><HireSVG /></HireDiv>
                <ManagerBgSVG  />
              </div>
            )
          })}
        </section>
      </BackgroundDiv>
    </Modal>
  )
}
