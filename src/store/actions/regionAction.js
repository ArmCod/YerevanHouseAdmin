import axios from "axios";
import { baseUrl, getUrl, token } from "../../config/config";
import { GET_CITY, GET_REGION } from "../types";

export const getRegionThunk = () => {
    return async (dispatch) => {
        const response = await axios.get(`${getUrl}/region`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        dispatch({
            type: GET_REGION,
            payload: response.data,
        });
    };
};

export const getCityThunk = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`${getUrl}/city/current?id=${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        dispatch({
            type: GET_CITY,
            payload: response.data,
        });
    };
};

export const getCitiesThunk = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/city`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        dispatch({
            type: GET_CITY,
            payload: response.data,
        });
    };
};