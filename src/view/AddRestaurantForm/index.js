import AddRestaurantForm from "./AddRestaurantForm";
import { connect } from "react-redux";
import { addRestaurant } from "../../redux/action/adminAction";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    addRestaurant: (parameter) => dispatch(addRestaurant(parameter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRestaurantForm);
