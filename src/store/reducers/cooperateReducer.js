import { GET_COOPERATE, GET_FORMING, GET_FORMING_ITEM } from "../types"

const initialState = {
    cooperate: [],
    forming: [],
    item: null,
}


export const cooperateReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COOPERATE:
            return {
                ...state,
                cooperate: action.payload
            }
        case GET_FORMING:
            return {
                ...state,
                forming: action.payload
            }
        case GET_FORMING_ITEM:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
}

