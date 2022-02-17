import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import ZodiacSelector from "./screens/ZodiacSelector";
import ZodiacInfo from "./screens/ZodiacInfo.jsx";
import { ZodiacSignContext } from "./contexts/ZodiacSignContext";
import { getStore, setStore } from './store';

function App() {
  const { sign } = getStore();
   useContext(ZodiacSignContext);

   console.log(sign);
  // console.log(getStore());

  return (
    <Routes>
      <Route path="/" element={<ZodiacSelector />} />
      <Route path={`info/${sign}`} element={<ZodiacInfo sign={sign} />} />
    </Routes>
  );
}

export default App;
