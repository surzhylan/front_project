const SET_MENU = "SET_MENU";

let initialState = {
    menu: [
        
    ],
}
const menuReducer = (state = initialState, action) => {
    switch (action.type){
        
        case SET_MENU:
            return {...state, menu: [...state.menu, ...action.menu]}

        default: 
            return state;
    }
    
}

export const setMenuActionCreator = (menu)=> ({type: SET_MENU, menu});
export default menuReducer;