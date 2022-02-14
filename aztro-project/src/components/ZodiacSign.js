const ZodiacSign = ({name, dates}) => {
  return (
      <div className="bg-white text-center rounded-3xl border shadow-lg p-10 xl:p-8 max-w-xs m-1 cursor-pointer hover:bg-sky-100">
        <img className="mb-3 w-16 h-16 rounded-full shadow-lg mx-auto"  src={require(`../images/${name.toLowerCase()}.JPG`)} alt="aries"></img>
        <h1 className="text-lg text-gray-700"> {name} </h1>
        <h3 className="text-xs text-gray-400 "> {dates} </h3>
      </div>
  );
};

export default ZodiacSign;

