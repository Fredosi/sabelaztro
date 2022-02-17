import { createContext, useState } from "react";

export const ZodiacInfoContext = createContext({
  zodiacInfoData: {},
  setZodiacInfoData: () => {},
});

const ZodiacInfoProvider = ({ children }) => {
  const [zodiacInfoData, setZodiacInfoData] = useState({
    color: "",
    dateRange: "",
    currentDate: "",
    description: "",
    compatibility: "",
    mood: "", 
    luckyNumber:"", 
  });

  return (
    <ZodiacInfoContext.Provider value={{ zodiacInfoData, setZodiacInfoData }}>
      {children}
    </ZodiacInfoContext.Provider>
  );
};

export default ZodiacInfoProvider;
