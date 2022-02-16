import ZodiacSelector from "./screens/ZodiacSelector";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ZodiacInfo from "./screens/ZodiacInfo";
import {useEffect, useState} from "react";
import {setStore, getStore} from "./store";

function App() {
  const [sign, setSign] = useState(getStore() ? getStore() : '');

  useEffect(() => {
    setStore(sign);
  }, [sign]);

  return (
  <BrowserRouter>
      <Routes>
    <Route path="/" element={<ZodiacSelector setSign={setSign}/>}>
    </Route>
    <Route path={`${sign}`} element={<ZodiacInfo sign={sign}/>}>
    </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
