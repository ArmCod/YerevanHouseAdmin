import {
    GET_SLIDER
} from "../types";

const initialState = {
    slider: null
};

export const sliderReducer = (state = initialState, action) => {
    switch (action.type) {
        case  GET_SLIDER:
            return {
                ...state,
                slider: action.payload,
            };
        default:
            return state;
    }
};
