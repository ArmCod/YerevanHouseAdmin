import axios from "axios";
import Swal from "sweetalert2";
import { baseUrl, getUrl, token } from "../../config/config";
import { GET_CONDITION, GET_WISH } from "../types";

export const getConditionThunk = () => {
    return async (dispatch) => {
        const response = await axios.get(`${getUrl}/condition`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        dispatch({
            type: GET_CONDITION,
            payload: response.data,
        });
    };
};

export const ConditionPut = (data) => {
    return async (dispatch) => {
        await axios.put(`${baseUrl}/condition`, { ...data }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(async () => {
                await Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }
}

export const getWishThunk = () => {
    return async (dispatch) => {
        const response = await axios.get(`${getUrl}/product/condition`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        dispatch({
            type: GET_WISH,
            payload: response.data,
        });
    };
};

export const WishPut = (data) => {
    return async (dispatch) => {
        await axios.put(`${baseUrl}/product/condition`, { ...data }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(async () => {
                await Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }
}