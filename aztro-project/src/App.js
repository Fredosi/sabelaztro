import { useState, useMemo, useEffect } from "react";
// import { getStore } from './store';
import ZodiacSign from "./components/ZodiacSign";

const zodiacInfo = [
  { sign: "Aries", dates: "Mar 21 - Apr 19" },
  { sign: "Taurus", dates: "Apr 20 - May 20" },
  { sign: "Gemini", dates: "May 21 - Jun 20" },
  { sign: "Cancer", dates: "Jun 21 - Jul 22" },
  { sign: "Leo", dates: "Jul 23 - Aug 22" },
  { sign: "Virgo", dates: "Aug 23 - Sep 22" },
  { sign: "Libra", dates: "Sep 23 - Oct 22" },
  { sign: "Scorpio", dates: "Oct 23 - Nov 21" },
  { sign: "Sagittarius", dates: "Nov 22 - Dec 21" },
  { sign: "Capricorn", dates: "Dec 22 - Jan 19" },
  { sign: "Aquarius", dates: "Jan 20 - Feb 18" },
  { sign: "Pisces", dates: "Feb 19 - Mar 20" },
];

function App() {
  return (
    <div className="mx-auto container py-20 px-6">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 content-center">
        {/* <div className="rounded"> */}
          {zodiacInfo.map((info, i) => (
            <ZodiacSign
              key={i}
              name={info.sign}
              dates={info.dates}
              sign = {info.sign.toLowerCase()}
              color="red"
            />
          ))}
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
