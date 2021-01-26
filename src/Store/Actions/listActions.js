import { LIST } from "./types";
import allData from "../../data.json";

// First Action
export const fetchList = (currentPage, text = "") => (dispatch) => {
  try {
    let completeData = [];
    if (text !== "") {
      let regex = new RegExp(text, "gi");
      console.log(regex);
      completeData = allData.filter((item) => {
        return (
          regex.test(item.name) ||
          regex.test(item.type) ||
          regex.test(item.company)
        );
      });
    } else {
      completeData = allData;
    }
    let totalData = completeData.slice(currentPage * 10, currentPage * 10 + 10);
    const totalPages = Math.ceil(completeData.length / 10);
    dispatch({
      type: LIST,
      payload: {
        data: totalData,
        totalPages: totalPages,
        currentPage: parseInt(currentPage)
      }
    });
  } catch (error) {
    console.log(error);
  }
};

// // First Action
// export const serachedList = (currentPage) => (dispatch) => {
//     try {
//         let totalData = allData.slice((currentPage * 10), (currentPage * 10 + 10))
//         const totalPages = Math.ceil(allData.length / 10)
//         dispatch({
//             type: LIST,
//             payload: { data: totalData, totalPages: totalPages, currentPage: parseInt(currentPage) }
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }
