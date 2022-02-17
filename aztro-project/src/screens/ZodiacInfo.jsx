import { useContext, useEffect } from "react";

import { ZodiacInfoContext } from "../contexts/ZodiacInfoContext";
import { FactsContext } from "../contexts/FactsContext";
import Fact from "../components/Fact.tsx";
import { getStore } from "../store";

const ZodiacInfo = ({ sign }) => {
  const { zodiacInfoData, setZodiacInfoData } = useContext(ZodiacInfoContext);
  const { factsData, setFactsData } = useContext(FactsContext);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://aztro.sameerkumar.website/?sign=${sign}&day=today`,
        {
          method: "POST",
        }
      );

      const data = await response.json();

      setZodiacInfoData(() => ({
        color: data.color,
        dateRange: data.date_range,
        currentDate: data.current_date,
        description: data.description,
        compatibility: data.compatibility,
        mood: data.mood,
        luckyNumber: data.lucky_number,
      }));

      setFactsData(() => ([
        { name: "Color", data: data.color },
        { name: "Compatibility", data: data.compatibility },
        { name: "Mood", data: data.mood },
        { name: "Lucky Number", data: data.lucky_number },
      ]));

    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    console.log("HEHE");
    fetchData();
  }, []);

  useEffect(() => {
    console.log("HAHA");
    console.log(sign);
    console.log(getStore());
  });

  return (
    <div className="mx-auto container py-10 xl:px-40 flex justify-center flex-col">
      <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 flex self-center">
        <div className="flex justify-center md:justify-end -mt-16">
        </div>
        <div>
          <h2 className="text-gray-800 mt-2 font-semibold">
            {zodiacInfoData.currentDate}
          </h2>
          <p className="mt-2 text-gray-600">{zodiacInfoData.description}</p>
        </div>
      </div>
       <div className="mx-auto container py-10 xl:px-40 flex justify-evenly flex-col sm:flex-row">
         {factsData.map((data, i) => (
          <Fact name={data.name} data={data.data} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ZodiacInfo;
