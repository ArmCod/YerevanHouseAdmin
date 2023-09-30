import {GET_ADVANTAGES } from "../types"

const initialState = {
    advantages: []
}


export const advantagesReducer = (state=initialState,action) => {
    switch (action.type){
        case GET_ADVANTAGES:
            return {
                ...state,
                advantages: action.payload
            }
            
        default:
            return state
    }
}