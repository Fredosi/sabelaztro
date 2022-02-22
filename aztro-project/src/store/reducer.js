// import { TODO_ACTIONS } from './actions';

// function reducer(state, action) {
//   switch (action.type) {

//     case TODO_ACTIONS.FETCH_DATA: {
//         const fetchData = async (sign) => {
//             try {
//               const response = await fetch(
//                 `https://aztro.sameerkumar.website/?sign=${sign}&day=today`,
//                 {
//                   method: "POST",
//                 }
//               );
          
//               const data = await response.json();
          
//               setZodiacInfoData((prevState) => ({
//                 ...prevState,
//                 color: data.color,
//                 dateRange: data.date_range,
//                 currentDate: data.current_date,
//                 description: data.description,
//                 compatibility: data.compatibility,
//                 mood: data.mood,
//                 luckyNumber: data.lucky_number,
//                 facts: [
//                   { name: "Color", data: data.color },
//                   { name: "Compatibility", data: data.compatibility },
//                   { name: "Mood", data: data.mood },
//                   { name: "Lucky Number", data: data.lucky_number },
//                 ]
//               }));
          
//             } catch (e) {
//               console.error(e);
//             }
//           };
//       }
//     case TODO_ACTIONS.ADD_TASK: {
//       const newState = {
//         active: [...state.active, action.taskName],
//         completed: state.completed,
//       };
//       action.storeInDatabase(newState);
//       return newState
//     }
//     case TODO_ACTIONS.CHECK_TASK: {
//       const newState = {
//         active: action.isChecked
//           ? state.active.filter((task) => task !== action.taskName)
//           : [...state.active, action.taskName],
//         completed: action.isChecked
//           ? [...state.completed, action.taskName]
//           : state.completed.filter((task) => task !== action.taskName),
//       };
//       action.storeInDatabase(newState);
//       return newState;
//     }
//     case TODO_ACTIONS.REMOVE_TASK: {     
//       const newState = {
//         active: state.active.filter((task) => task !== action.taskName),
//         completed: state.completed.filter((task) => task !== action.taskName),
//       };
//       action.storeInDatabase(newState);
//       return newState;
//     }
//     case TODO_ACTIONS.SET_TASKS:
//       return {
//         active: action.tasksList.active ?? [],
//         completed: action.tasksList.completed ?? []
//       }
//     default:
//       return state;
//   }
// }

// export default reducer;
