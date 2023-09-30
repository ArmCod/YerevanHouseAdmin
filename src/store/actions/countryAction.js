import axios from "axios";
import Swal from "sweetalert2";
import { baseUrl, getUrl, token } from "../../config/config";
import { GET_COUNTRY } from "../types";

export const getCountryThunk = () => {
  return async (dispatch) => {
    const response = await axios.get(`${baseUrl}/armenia`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    dispatch({
      type: GET_COUNTRY,
      payload: response.data,
    });
  };
};

export const CountryPut = (data) => {
  return async (dispatch) => {

    await axios.put(`${baseUrl}/armenia`, { ...data }, {
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

export const CountryPost = (data) => {
  return async (dispatch) => {

    await axios.post(`${baseUrl}/armenia`, { ...data }, {
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

export const CountryDelete = (id) => {
  return async (dispatch) => {

    await axios.delete(`${baseUrl}/armenia`, {
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



