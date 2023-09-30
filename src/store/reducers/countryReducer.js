import { GET_COUNTRY, GET_FESTIVAL, GET_LANDMARK } from "../types"

const initialState = {
    country: [],
    landmark: [],
    festival: []
}


export const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRY:
            return {
                ...state,
                country: action.payload
            }
        case GET_LANDMARK:
            return {
                ...state,
                landmark: action.payload
            }
        case GET_FESTIVAL:
            return {
                ...state,
                festival: action.payload
            }
        default:
            return state
    }
}