import { all, call } from "redux-saga/effects";
import adminSagas from "./adminSagas";

export default function* rootSaga() {
  yield all([call(adminSagas)]);
}
