import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import ZodiacSelector from "./screens/ZodiacSelector";
import ZodiacInfo from "./screens/ZodiacInfo.jsx";
import { ZodiacSignContext } from "./contexts/ZodiacSignContext";
import { setStore } from "./store";

function App() {
  const { sign } = useContext(ZodiacSignContext);

  useEffect(() => {
    setStore(sign);
  }, [sign]);

  return (
    <Routes>
      <Route path="/" element={<ZodiacSelector />} />
      <Route path={`${sign}`} element={<ZodiacInfo sign={sign} />} />
    </Routes>
  );
}
export default App;
