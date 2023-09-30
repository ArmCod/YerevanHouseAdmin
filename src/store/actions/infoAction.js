import axios from "axios";
import Swal from "sweetalert2";
import { baseUrl, getUrl, token } from "../../config/config";
import { GET_INFO } from "../types";

export const getInfoThunk = () => {
    return async (dispatch) => {
        const response = await axios.get(`${getUrl}/contact`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        dispatch({
            type: GET_INFO,
            payload: response.data,
        });
    };
};

export const InfoPut = (data) => {
    return async (dispatch) => {
        await axios.put(`${baseUrl}/contact`, { ...data }, {
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