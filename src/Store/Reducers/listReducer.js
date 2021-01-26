import { LIST } from "../Actions/types";

const initialState = {
  dataList: [],
  currentPage: 0,
  totalPage: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LIST:
      return {
        ...state,
        dataList: action.payload.data,
        currentPage: action.payload.currentPage,
        totalPage: action.payload.totalPages
      };
    default:
      return state;
  }
}
