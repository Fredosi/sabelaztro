import { Link } from "react-router-dom";

const ZodiacSign = (props) => {

  const handleClick = () => {
    props.setSign(props.name);
  };

  return (
      <div className="bg-white text-center rounded-3xl border shadow-lg p-10 xl:p-8 max-w-xs m-1 cursor-pointer hover:bg-sky-100">
        <img className="mb-3 w-16 h-16 rounded-full shadow-lg mx-auto"  src={require(`../images/${props.name.toLowerCase()}.JPG`)} alt="aries"></img>
        <h1 className="text-lg text-gray-700"> {props.name} </h1>
        <h3 className="text-xs text-gray-400 "> {props.dates} </h3>
        <button className="text-xs text-gray-400 " onClick={handleClick}> <Link to={`/${props.name}`}>Ver detalles</Link> </button>
      </div>
  );
};

export default ZodiacSign;