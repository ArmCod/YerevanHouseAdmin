import axios from "axios";
import { baseUrl, token } from "../../config/config";
import {
  GET_SLIDER
} from "../types";
import Swal from "sweetalert2";

export const getSldierThunk = () => {
  return async (dispatch) => {
    const response = await axios.get(`${baseUrl}/slider`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    dispatch({
      type: GET_SLIDER,
      payload: response.data,
    });
  };
};


export const SliderPut = (data) => {
  return async (dispatch) => {

    await axios.put(`${baseUrl}/slider`, { ...data }, {
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

export const SliderPost = (data) => {
  return async (dispatch) => {

    await axios.post(`${baseUrl}/slider`, { ...data }, {
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

export const SliderDelete = (id) => {
  return async (dispatch) => {

    await axios.delete(`${baseUrl}/slider`, {
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










