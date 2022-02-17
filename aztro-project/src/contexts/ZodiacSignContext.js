import { createContext, useState } from 'react';
import { getStore } from "../store";

export const ZodiacSignContext = createContext({
    sign: '',
    setSign: () => '',
});

const ZodiacSignProvider = ({ children }) => {
  const [sign, setSign] = useState(getStore() ? getStore() : '');


  return (
    <ZodiacSignContext.Provider value={{sign, setSign }}>
      {children}
    </ZodiacSignContext.Provider>
  );
};

export default ZodiacSignProvider;
