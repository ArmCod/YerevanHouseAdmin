import axios from "axios";
import Swal from "sweetalert2";
import { baseUrl, changeUrl, getUrl, token } from "../../config/config";
import { GET_ABOUT_US, GET_ABOUT_US_INFO } from "../types";

export const getAboutUsThunk = () => {
  return async (dispatch) => {
    const response = await axios.get(`${baseUrl}/about`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    dispatch({
      type: GET_ABOUT_US,
      payload: response.data,
    });
  };
};

export const AboutPut = (data) => {
  return async (dispatch) => {

    await axios.put(`${baseUrl}/about`, { ...data }, {
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

export const getStrideThunk = () => {
  return async (dispatch) => {
    const response = await axios.get(`${getUrl}/successes`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    dispatch({
      type: GET_ABOUT_US_INFO,
      payload: response.data,
    });
  };
};

export const StridePut = (data) => {
  return async (dispatch) => {
    await axios.put(`${baseUrl}/successes`, { ...data }, {
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