import axios from "axios";
import Swal from "sweetalert2";
import { baseUrl, token } from "../../config/config";
import { GET_CURRENT_FLAT } from "../types";

export const getCurrentCommercial = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/commercial/current?id=${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        dispatch({
            type: GET_CURRENT_FLAT,
            payload: response.data,
        });
    };
}

export const CommercialPut = (data) => {
    return async (dispatch) => {

        await axios.post(`${baseUrl}/commercial/update`, { ...data }, {
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

export const CommercialPost = (data) => {

    return async (dispatch) => {

        await axios.post(`${baseUrl}/commercial`, { ...data }, {
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

export const CommercialDelete = (id) => {
    return async (dispatch) => {
        await axios.delete(`${baseUrl}/commercial`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: { id }
        })
            .then(async () => {
                await Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                window.location.replace('/')
            })
            .catch(async () => {
                await Swal.fire({
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
