import { GET_ADMINS, GET_USERS } from "../types";
import axios from "axios";
import { baseUrl, token } from "../../config/config";
import Swal from "sweetalert2";


export const getAdminsThunk = () => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/getter`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        dispatch({
            type: GET_ADMINS,
            payload: response.data,
        });
    };
};

export const deleteAdminsThunk = (id) => {
    return async (dispatch) => {
        const response = await axios.delete(`${baseUrl}/drop`, { data: { id } }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(async () => {
            await Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
            window.location.reload(false)
        }).catch((err) => {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Oops...',
                text: err,
                showConfirmButton: false,
                timer: 1500
            })
        })
    };
};

export const changeAdminsThunk = (truth) => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/change`, truth, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(async () => {
            await Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
        }).catch((err) => {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Oops...',
                text: err,
                showConfirmButton: false,
                timer: 1500
            })
        })
    };
};

export const addAdminsThunk = (data) => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/register`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(async () => {
            await Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
            window.location.reload(false)
        }).catch((err) => {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Oops...',
                text: err,
                showConfirmButton: false,
                timer: 1500
            })
        })
    };
};