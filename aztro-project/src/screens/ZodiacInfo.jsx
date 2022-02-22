import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ZodiacInfoContext } from "../contexts/ZodiacInfoContext";
import Fact from "../components/Fact.tsx";

const ZodiacInfo = () => {
  const { sign } = useParams();
  const { fetchData, zodiacInfoData } = useContext(ZodiacInfoContext);

  useEffect(() => {
    fetchData(sign);
  }, []);

  return (
    <div className="mx-auto container py-10 xl:px-40 flex justify-center flex-col">
      <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 flex self-center">
        <div className="flex justify-center md:justify-end -mt-16"></div>
        <div>
          <h2 className="text-gray-800 mt-2 font-semibold">
            {zodiacInfoData.currentDate}
          </h2>
          <p className="mt-2 text-gray-600">{zodiacInfoData.description}</p>
        </div>
      </div>
      <div className="mx-auto container py-10 xl:px-40 flex justify-evenly flex-col sm:flex-row">
        {zodiacInfoData.facts.map((data, i) => (
          <Fact name={data.name} data={data.data} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ZodiacInfo;
