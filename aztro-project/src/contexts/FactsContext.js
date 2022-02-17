import { createContext, useState } from "react";

export const FactsContext = createContext({
  factsData: [],
  setFactsData: () => [],
});

const FactsProvider = ({ children }) => {
  const [factsData, setFactsData] = useState([
    { name: "Color", data: "" },
    { name: "Mood", data: "" },
    { name: "Compatibility", data: "" },
    { name: "Lucky Number", data: "" },
  ]);

  return (
    <FactsContext.Provider value={{ factsData, setFactsData }}>
      {children}
    </FactsContext.Provider>
  );
};

export default FactsProvider;
