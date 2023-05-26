const ADD_REVIEW = "ADD_REVIEW";
const UPDATE_NEW_REVIEW_TEXT = "UPDATE-NEW-REVIEW-TEXT";
const UPDATE_REVIEW = "UPDATE_REVIEW";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const DELETE_REVIEW = "DELETE_POST";

let initialState = {
    reviews: [{
        id: 1,
        message: "All good",
    }],
    newReviewText: '',
    newMessageText: ''
};
const reviewsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_REVIEW:{
        
            let newReview = {
                id: state.reviews.length+1,
                message: state.newReviewText,
            }
            return {...state,reviews:[...state.reviews, newReview], newReviewText: ""}
            
        }
        case UPDATE_NEW_REVIEW_TEXT:{
            return {...state, newReviewText: action.newText}
        }
        case UPDATE_NEW_MESSAGE_TEXT:{
            return {...state, newMessageText: action.newMessageText}
        }

        case UPDATE_REVIEW:{
            let reviews = state.reviews;
            for(let i = 0; i <reviews.length;i++){
                if(reviews[i].id==action.id){
                    reviews[i].message = state.newMessageText;

                }
            }
            return { ...state, reviews: [...reviews] };
        }
        case DELETE_REVIEW:{
            return {
                ...state,
                reviews: state.reviews.filter((review) => review.id !== action.id),
              };
        }
        default:
            return state;
        
    }
    
    
}

export const addReviewActionCreater = () => ({type: ADD_REVIEW});

export const updateNewReviewTextActionCreater = (text) => ({type: UPDATE_NEW_REVIEW_TEXT, newText: text});

export const updateNewMessageTextActionCreater = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});

export const updateReviewActionCreater = (id) => ({ type: UPDATE_REVIEW, id: id });

export const deleteReviewActionCreater = (id) => ({type: DELETE_REVIEW,id:id});

export default reviewsReducer;