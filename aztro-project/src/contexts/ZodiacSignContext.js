import { createContext, useState } from 'react';

export const ZodiacSignContext = createContext({
    sign: '',
    setSign: () => '',
});

const ZodiacSignProvider = ({ children }) => {
  const [sign, setSign] = useState('');


  return (
    <ZodiacSignContext.Provider value={{sign, setSign }}>
      {children}
    </ZodiacSignContext.Provider>
  );
};

export default ZodiacSignProvider;
