import ZodiacSelector from "./screens/ZodiacSelector";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ZodiacInfo from "./screens/ZodiacInfo";
import {useState} from "react";

function App() {
  const [sign, setSign] = useState('');

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
