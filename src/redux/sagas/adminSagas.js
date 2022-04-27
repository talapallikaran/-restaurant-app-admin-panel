import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../constants/actionsConstants";
import * as apiServices from "../../services/apiServices";

// Define handlers
function* POST_RESTAURANT(action) {
  // Shoud be in try
  // Need to validate if we got the response
  try {
    // Add error handling
    // if response !== 200
    // if response !== null
    // if response !== undefined
    // if reponse has error message
    // api in progress - State - true
    // Api is successful - State
    // Api failed - State - true

    const postRestaurant = async () => {
      const response = await apiServices.fetchRestaurant(action.payload);
      return response;
    };
    const response = yield call(postRestaurant);
    if (response.status === 200) {
      // api in progress - State - false
      // Api is successful - State - true
      // Api failed - State - false
      yield put({
        type: actions.addRestaurantAction.ADD_RESTAURANT_SUCCESS,
        payload: {
          user: response.data,
          apiLoading: false,
          apiGetDataSuccess: true,
          apiGetDataFail: false,
        },
      });
    } else if (response === null && undefined) {
      yield put({
        type: actions.addRestaurantAction.ADD_RESTAURANT_SUCCESS,
        payload: {
          apiLoading: false,
          apiGetDataSuccess: false,
          apiGetDataFail: false,
        },
      });
    } else {
      yield put({
        type: actions.addRestaurantAction.ADD_RESTAURANT_SUCCESS,
        payload: {
          apiLoading: false,
          apiGetDataSuccess: false,
          apiGetDataFail: true,
        },
      });
    }
  } catch (e) {
    // api in progress - State - false
    // Api is successful - State - false
    // Api failed - State - true
    yield put({
      type: actions.addRestaurantAction.ADD_RESTAURANT_FAILED,
      payload: {
        apiLoading: false,
        apiGetDataSuccess: false,
        apiGetDataFail: true,
      },
    });
  }
}

// Declare watcher
function* initializeWatcher() {
  yield takeLatest(actions.addRestaurantAction.ADD_RESTAURANT, POST_RESTAURANT);
}

export default initializeWatcher;
