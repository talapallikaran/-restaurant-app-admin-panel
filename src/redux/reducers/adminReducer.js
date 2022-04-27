import { addRestaurantAction } from "../constants/actionsConstants";

const initialState = {
  restaurant: [],
  apiLoading: false,
  apiGetDataSuccess: false,
  apiGetDataFail: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case addRestaurantAction.ADD_RESTAURANT: {
      return { ...state, apiLoading: true };
    }
    case addRestaurantAction.ADD_RESTAURANT_SUCCESS: {
      return {
        ...state,
        restaurant: action.payload.restaurant,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };
    }
    case addRestaurantAction.ADD_RESTAURANT_FAILED: {
      return {
        ...state,
        restaurant: action.payload.restaurant,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };
    }
    default:
      return state;
  }
};

export default adminReducer;
