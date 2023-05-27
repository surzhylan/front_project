import Nav from "../Nav/Nav";
import React, { useState } from "react";
import { Context } from "../context";
import r from "./Reviews.module.css";

function Reviews(props) {
  const [editMode, setEditMode] = useState({});
  let newReviewElement = React.createRef();

  let addReview = () => {
    props.addReview();
    console.log(props.reviewsPage.reviews);
    newReviewElement.current.value = "";
  };

  function openEdit(id) {
    setEditMode({ ...editMode, [id]: true });
  }
  let newMessageElement = React.createRef();

  function updateReview(id) {
    props.updateReview(id);
    newMessageElement.current.value = "";
    setEditMode({ ...editMode, [id]: false });
  }

  let onTextChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };
  let onReviewChange = () => {
    let text = newReviewElement.current.value;
    props.updateNewReviewText(text);
  };

  let deleteReview = (id) => {
    props.deleteReview(id);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") addReview();
  };

  const handleKeyUpForEdit = (e, id) => {
    if (e.key === "Enter") updateReview(id);
  };
  return (
    <div className={r.Reviews}>
      <Nav />
      <div className="content">
        <p className="title">Reviews</p>
        <div className="hr"></div>
        <textarea
          cols="50"
          rows="5"
          className={r.textarea}
          ref={newReviewElement}
          onChange={onReviewChange}
          onKeyUp={(e) => handleKeyUp(e)}
        ></textarea>
        <button onClick={addReview} className={`${r.btn} ${r.underInputBtn}`}>
          Опубликовать
        </button>
        {props.reviewsPage.reviews.map((review) => (
          <div className={r.reviewsBlock} key={review.id}>
            <span className={r.circleImage}>
              <img src="./img/user.png" alt="" />
            </span>
            <div className={r.containerReviewsDetails}>
              <div className={r.header}>
                <h4>Anonym</h4>
                <div className={r.buttons}>
                  <button className={r.btn} onClick={() => openEdit(review.id)}>
                    Edit
                  </button>
                  <button
                    className={r.btn}
                    onClick={(e) => deleteReview(review.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>

              {editMode[review.id] ? (
                <div>
                  <input
                    ref={newMessageElement}
                    type="text"
                    onChange={onTextChange}
                    onKeyUp={(e) => handleKeyUpForEdit(e, review.id)}
                  />
                </div>
              ) : (
                <div className={r.message}>{review.message}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
