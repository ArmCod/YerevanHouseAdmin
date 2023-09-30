import { GET_INFO } from "../types"

const initialState = {
    info: [],
}


export const infoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INFO:
            return {
                ...state,
                info: action.payload
            }

        default:
            return state
    }
}