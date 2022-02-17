import { Link } from "react-router-dom";
import { useContext } from "react";

import { ZodiacSignContext } from "../contexts/ZodiacSignContext";
import { setStore } from "../store";

type ZodiacSignProps = {
  name: string;
  dates: string;
};

const ZodiacSign = ({ name, dates }: ZodiacSignProps): React.ReactElement => {
  const { setSign } = useContext(ZodiacSignContext);

  const handleClick = () => {
    setSign(() => name.toLowerCase());
    setStore(name);
  };

  return (
    <Link
      to={`/info/${name.toLowerCase()}`}
      onClick={handleClick}
      className="bg-white text-center rounded-3xl border shadow-lg p-10 xl:p-8 max-w-xs m-1 cursor-pointer hover:bg-sky-100"
    >
      <img
        className="mb-3 w-16 h-16 rounded-full shadow-lg mx-auto"
        src={require(`../images/${name.toLowerCase()}.JPG`)}
        alt="aries"
      ></img>
      <h1 className="text-lg text-gray-700"> {name} </h1>
      <h3 className="text-xs text-gray-400 "> {dates} </h3>
    </Link>
  );
};

export default ZodiacSign;
