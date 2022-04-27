import * as actions from "../constants/actionsConstants";

// actions

export const addRestaurant = (id) => {
  return {
    type: actions.addRestaurantAction.ADD_RESTAURANT,
    payload: id,
  };
};

export const addRestaurantSuccess = (data) => {
  return {
    type: actions.addRestaurantAction.ADD_RESTAURANT_SUCCESS,
    payload: data,
  };
};

export const addRestaurantFailed = (error) => {
  return {
    type: actions.addRestaurantAction.ADD_RESTAURANT_FAILED,
    payload: error,
  };
};
