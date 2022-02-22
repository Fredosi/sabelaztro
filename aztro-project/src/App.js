import {useContext, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import ZodiacSelector from "./screens/ZodiacSelector";
import ZodiacInfo from "./screens/ZodiacInfo.jsx";
import { ZodiacInfoContext} from "./contexts/ZodiacInfoContext";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ZodiacSelector />} />
      <Route path={`/:sign`} element={<ZodiacInfo/>} />
    </Routes>
  );
}
export default App;
