import { CODE_FLAT, GET_COMMERCIAL, GET_CURRENT_FLAT, GET_FLAT, GET_HOUSE, GET_LAND, PHONE_FLAT, RESET_FLAT } from "../types"

const initialState = {
    flat: [],
    house: [],
    commercial: [],
    land: [],
    currentFlat: {},
    phoneflat: null,
    codeflat: null
}


export const flatReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FLAT:
            return {
                ...state,
                flat: action.payload
            }
        case GET_LAND:
            return {
                ...state,
                land: action.payload
            }
        case GET_HOUSE:
            return {
                ...state,
                house: action.payload
            }
        case GET_COMMERCIAL:
            return {
                ...state,
                commercial: action.payload
            }
        case GET_CURRENT_FLAT:
            return {
                ...state,
                currentFlat: action.payload
            }
        case RESET_FLAT:
            return {

                flat: [],
                house: [],
                commercial: [],
                land: [],
                currentFlat: {},
                phoneflat: null,
                codeflat: null
            }
        case PHONE_FLAT:
            return {
                ...state,
                phoneflat: action.payload
            }
        case CODE_FLAT:
            return {
                ...state,
                codeflat: action.payload
            }
        default:
            return state
    }
}