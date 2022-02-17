import { Link } from "react-router-dom";
import { useContext } from "react";

import { ZodiacSignContext } from "../contexts/ZodiacSignContext";
import { setStore } from "../store";

type ZodiacSignProps = {
  name: string;
  dates: string;
};

const ZodiacSignSabela = (props: ZodiacSignProps): React.ReactElement => {
  const { setSign } = useContext(ZodiacSignContext);

  const handleClick = () => {
    setSign(() => props.name.toLowerCase());
    setStore(props.name);
  };

  return (
    <Link
      to={`/${props.name.toLowerCase()}`}
      onClick={handleClick}
      className="bg-white text-center rounded-3xl border shadow-lg p-10 xl:p-8 max-w-xs m-1 cursor-pointer hover:bg-sky-100"
    >
      <img
        className="mb-3 w-16 h-16 rounded-full shadow-lg mx-auto"
        src={require(`../images/${props.name.toLowerCase()}.JPG`)}
        alt="aries"
      ></img>
      <h1 className="text-lg text-gray-700"> {props.name} </h1>
      <h3 className="text-xs text-gray-400 "> {props.dates} </h3>
    </Link>
  );
};

export default ZodiacSignSabela;
