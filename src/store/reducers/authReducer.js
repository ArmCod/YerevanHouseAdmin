import { CHANGE_AUTH, CHANGE_LOGIN_CREDENTIALS } from "../types"

const initialState = {
    isAuth: false,
    roleType: null
}


export const isAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        case CHANGE_LOGIN_CREDENTIALS:
            return {
                ...state,
                roleType: action.payload
            }
        default:
            return state
    }
}