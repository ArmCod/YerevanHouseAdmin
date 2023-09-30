import axios from "axios";
import Swal from "sweetalert2";
import { baseUrl, token } from "../../config/config";
import { GET_LANDMARK } from "../types";


export const getLandmarkThunk = () => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/festival?id=2`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        dispatch({
            type: GET_LANDMARK,
            payload: response.data,
        });
    };
};

export const LandmarkPut = (data) => {
    return async (dispatch) => {

        await axios.put(`${baseUrl}/festival`, { ...data }, {
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

export const LandmarkPost = (data) => {
    return async (dispatch) => {

        await axios.post(`${baseUrl}/festival?cat_id=2`, { ...data }, {
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

export const LandmarkDelete = (id) => {
    return async (dispatch) => {

        await axios.delete(`${baseUrl}/festival`, {
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
                window.location.reload(false)
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
                window.location.reload(false)
            })
    }
}



