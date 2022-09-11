import { configureStore } from "@reduxjs/toolkit";
import getData from "./RenderData";

export default configureStore({
  reducer: {
    allData: getData,
  },
});
