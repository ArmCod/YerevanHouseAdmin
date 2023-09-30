import axios from "axios";
import Swal from "sweetalert2";
import { baseUrl, changeUrl, getUrl, token } from "../../config/config";
import { GET_ADVANTAGES } from "../types";

export const getAdvantagesThunk = () => {
  return async (dispatch) => {
    const response = await axios.get(`${baseUrl}/advantage`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    dispatch({
      type: GET_ADVANTAGES,
      payload: response.data,
    });
  };
};

export const AdvantagesPut = (data) => {
  return async (dispatch) => {

    await axios.put(`${baseUrl}/advantage`, { ...data }, {
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

