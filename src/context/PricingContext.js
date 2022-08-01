import React, { useState } from 'react';

export const PricingState = React.createContext({
  period: 'monthly',
  toggleSetPeriod: () => {},
});

export const PricingContext = ({ children }) => {
  const [period, setPeriod] = useState('monthly');

  const toggleSetPeriod = () => {
    console.log(period);
    setPeriod(period === 'yearly' ? 'monthly' : 'yearly');
  };

  return (
    <PricingState.Provider value={{ period, toggleSetPeriod }}>
      {children}
    </PricingState.Provider>
  );
};
