import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: null,
    isLoading: false,
  },
  reducers: {
    isLoading: (state) => {
      state.isLoading = true;
    },
    isSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.slice(0,10);
    },
    isFailure: (state) => {
      state.isLoading = false;
      state.errors = true;
    },
    deletePhoto: (state) => {
      state.data = state.data?.slice(0,state.data.length-1);
    },
  },
});

export const { isLoading, isSuccess, isFailure, deletePhoto } = dataSlice.actions;

export const getData = () => (dispatch) => {
  dispatch(isLoading());
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((res) => {
      dispatch(isSuccess(res));
    })
    .catch((res) => {
      dispatch(isFailure());
    });
};

export default dataSlice.reducer;
