import { createContext, useState } from "react";

export const ZodiacInfoContext = createContext({
  zodiacInfoData: {},
  setZodiacInfoData: () => {},
});

const ZodiacInfoProvider = ({ children }) => {
  const [zodiacInfoData, setZodiacInfoData] = useState({
    sign: "",
    color: "",
    dateRange: "",
    currentDate: "",
    description: "",
    compatibility: "",
    mood: "", 
    luckyNumber:"", 
    facts:
    [
      { name: "Color", data: "" },
      { name: "Mood", data: "" },
      { name: "Compatibility", data: "" },
      { name: "Lucky Number", data: "" },
    ]
  });

  const fetchData = async (sign) => {
    try {
      const response = await fetch(
        `https://aztro.sameerkumar.website/?sign=${sign}&day=today`,
        {
          method: "POST",
        }
      );
  
      const data = await response.json();
  
      setZodiacInfoData((prevState) => ({
        ...prevState,
        color: data.color,
        dateRange: data.date_range,
        currentDate: data.current_date,
        description: data.description,
        compatibility: data.compatibility,
        mood: data.mood,
        luckyNumber: data.lucky_number,
        facts: [
          { name: "Color", data: data.color },
          { name: "Compatibility", data: data.compatibility },
          { name: "Mood", data: data.mood },
          { name: "Lucky Number", data: data.lucky_number },
        ]
      }));
  
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ZodiacInfoContext.Provider value={{ zodiacInfoData, setZodiacInfoData, fetchData}}>
      {children}
    </ZodiacInfoContext.Provider>
  );
};

export default ZodiacInfoProvider;
