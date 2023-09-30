import { GET_CITY, GET_REGION } from "../types"

const initialState = {
    region: [],
    city: [],
}


export const regionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REGION:
            return {
                ...state,
                region: action.payload
            }
        case GET_CITY:
            return {
                ...state,
                city: action.payload
            }
        default:
            return state
    }
}