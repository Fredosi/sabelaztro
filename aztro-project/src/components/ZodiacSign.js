import { useState, useContext, FormEvent, ChangeEvent } from "react";

const ZodiacSign = ({name, dates, sign}) => {
    console.log(name);
  return (
    // <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">
      <div className="bg-white text-center rounded-3xl border shadow-lg p-4 max-w-xs m-1">
        <img className="mb-3 w-16 h-16 rounded-full shadow-lg mx-auto"  src={require(`../images/${sign}.JPG`)} alt="aries"></img>
        {/* <img src={require('../images/aries.JPG')} alt="A Flower Bouquet"></img>  */}
        {/* <img src="../images/aries.JPG" alt="A Flower Bouquet"></img>  */}
        <h1 className="text-lg text-gray-700"> {name} </h1>
        <h3 className="text-xs text-gray-400 "> {dates} </h3>
      </div>
    // </div>
  );
};

export default ZodiacSign;

// import { useState, useContext, FormEvent, ChangeEvent } from "react";

// const ZodiacSign = ({ name, dates, color }) => {
//   console.log(name);
//   return (
//     <div className="w-full h-64 flex flex-col justify-between bg-pink-300 rounded-lg border border-pink-300 mb-6 py-5 px-4">
//       <div>
//         <h4 className="text-gray-800 font-bold mb-3">13 things to work on</h4>
//         <p className="text-gray-800 text-sm">
//           Our interior design experts work with you to create the space that you
//           have been dreaming about.
//         </p>
//       </div>
//       <div>
//         <div className="flex items-center justify-between text-gray-800">
//           <p className="text-sm">March 28, 2020</p>
//           <button
//             className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-pink-300   focus:ring-black"
//             aria-label="edit note"
//             role="button"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="icon icon-tabler icon-tabler-pencil"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               stroke-width="1.5"
//               stroke="currentColor"
//               fill="none"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             >
//               <path stroke="none" d="M0 0h24v24H0z"></path>
//               <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
//               <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ZodiacSign;
