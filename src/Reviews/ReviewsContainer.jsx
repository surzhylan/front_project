import { connect } from "react-redux";
import {
  addReviewActionCreater,
  deleteReviewActionCreater,
  updateNewMessageTextActionCreater,
  updateNewReviewTextActionCreater,
  updateReviewActionCreater,
} from "../redux/reviews-reducer";
import Reviews from "./Reviews";

let mapStateToProps = (state) => {
  return {
    reviewsPage: state.reviewsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewReviewText: (text) => {
      let action = updateNewReviewTextActionCreater(text);
      dispatch(action);
    },
    addReview: () => {
      dispatch(addReviewActionCreater());
    },
    updateReview: (id) => {
      let action = updateReviewActionCreater(id);
      dispatch(action);
    },
    updateNewMessageText: (text) => {
      let action = updateNewMessageTextActionCreater(text);
      dispatch(action);
    },
    deleteReview: (id) => {
      let action = deleteReviewActionCreater(id);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
