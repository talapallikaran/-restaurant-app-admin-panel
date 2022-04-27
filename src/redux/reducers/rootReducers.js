import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import AdminReducer from "./adminReducer";
import AppReducer from "./appReducer";

const rootReducer = combineReducers({
  admin: AdminReducer,
  app: AppReducer,
  routing: routerReducer,
});

export default rootReducer;
