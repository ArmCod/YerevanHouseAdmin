import { GET_CONDITION, GET_WISH } from "../types"

const initialState = {
    condition: [],
    wish: []
}


export const conditionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONDITION:
            return {
                ...state,
                condition: action.payload
            }
        case GET_WISH:
            return {
                ...state,
                wish: action.payload
            }
        default:
            return state
    }
}