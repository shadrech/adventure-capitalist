import React from 'react';

const initialValue = Number(localStorage.getItem('BALANCE')) || 0;

export const useBalance = () => {
  const [balance, setBalance] = React.useState(initialValue);
  const decreaseBalance = (amount: number) => {
    setBalance(balance - amount);
    localStorage.setItem('BALANCE', String(balance));
  }
  const increaseBalance = (amount: number) => {
    setBalance(balance + amount);
    localStorage.setItem('BALANCE', String(balance));
  }
  
  return { balance, increaseBalance, decreaseBalance };
}
