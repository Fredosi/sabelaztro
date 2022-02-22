type FactProps = {
  name: string;
  data: string;
};

const Fact = ({ name, data }: FactProps): React.ReactElement => {
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 text-center">
      <div className="flex justify-center md:justify-end -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          src={require(`../images/${name.toLowerCase()}.JPG`)}
        ></img>
      </div>
      <div>
        <h2 className="text-gray-800 mt-2 font-semibold">{name}</h2>
        <p className="mt-2 text-gray-600">{data}</p>
      </div>
    </div>
  );
};

export default Fact;
