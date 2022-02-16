import ZodiacSign from "../components/ZodiacSign";

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
  
function ZodiacSelector({setSign}) {

  return (
    <div className="mx-auto container py-10 xl:px-40">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 content-center place-items-center">
        {zodiacInfo.map((info, i) => (
          <ZodiacSign
            key={i}
            name={info.sign}
            dates={info.dates}
            setSign={setSign}
          />
        ))}
      </div>
    </div>
  );
}

export default ZodiacSelector;
