import axios from "axios";
import Swal from "sweetalert2";
import { baseUrl, token } from "../../config/config";
import { GET_COOPERATE, GET_FORMING, GET_FORMING_ITEM } from "../types";

export const getCooperateThunk = (page) => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/cooperate?page=${page}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        dispatch({
            type: GET_COOPERATE,
            payload: response.data,
        });
    };
};

export const CooperateDelete = (id) => {
    return async (dispatch) => {
        await axios.delete(`${baseUrl}/cooperate`, { data: { id } }, {
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
                window.location.reload(false)
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

export const getFormingThunk = (page) => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/order/get?page=${page}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        dispatch({
            type: GET_FORMING,
            payload: response.data,
        });
    };
};

export const getFormingItemThunk = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/order/current?id=${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        dispatch({
            type: GET_FORMING_ITEM,
            payload: response.data,
        });
    };
};

export const FormingDelete = (id) => {
    return async (dispatch) => {
        await axios.post(`${baseUrl}/order/drop`, { id }, {
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
                window.location.reload(false)
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

export const FormingChange = (data) => {
    return async (dispatch) => {
        await axios.post(`${baseUrl}/order/update`, data, {
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