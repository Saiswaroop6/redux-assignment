import { combineReducers } from "redux";
import  dataSlice  from "./RenderData";
const rootReducers = combineReducers({
  allData:dataSlice
});
export default rootReducers;