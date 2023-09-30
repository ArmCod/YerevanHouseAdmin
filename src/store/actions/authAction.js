import { CHANGE_AUTH, CHANGE_LOGIN_CREDENTIALS } from "../types"
import { baseUrl } from '../../config/config';
import axios from 'axios';
import Swal from "sweetalert2";


export const getLoginDara = (data) => {
    return async (dispatch) => {

        await axios.post(`${baseUrl}/login`, data)
            .then(async response => {

                if (response.data !== "No User Found") {
                    await Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    localStorage.setItem("autorization-token", response.data)


                    dispatch({
                        type: CHANGE_AUTH,
                        payload: true,
                    });
                    dispatch({
                        type: CHANGE_LOGIN_CREDENTIALS,
                        payload: response.data[1]
                    })
                    window.location.reload(false)
                } else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
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

export const getAdminCredetials = () => {
    return async (dispatch) => {
        await axios.post(`${baseUrl}/user`, { token: localStorage.getItem("autorization-token") },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("autorization-token")}`
                },
            },)
            .then(async response => {

                localStorage.setItem('admintypeasd', response.data[0].type)
                dispatch({
                    type: CHANGE_AUTH,
                    payload: true,
                });
                dispatch({
                    type: CHANGE_LOGIN_CREDENTIALS,
                    payload: response.data
                })
            })
            .catch(() => {
                // dispatch(thchangeAuAC(false))
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    showConfirmButton: false,
                    timer: 1500
                })
                // window.location.reload(false)
            })
    }
}

export const adminLogout = () => {
    return async (dispatch) => {
        await axios.post(`${baseUrl}/logout`, {},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("autorization-token")}`
                },
            },)
            .then(async () => {
                localStorage.removeItem("autorization-token")
                dispatch({
                    type: CHANGE_AUTH,
                    payload: false,
                })
                // window.location.reload(false)
                window.location.href = '/'
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



export const thchangeAuAC = (auth) => {
    return {
        type: CHANGE_AUTH,
        payload: auth
    }
}