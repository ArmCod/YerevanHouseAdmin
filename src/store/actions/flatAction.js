import axios from "axios";
import Swal from "sweetalert2";
import { baseUrl, getUrl, token } from "../../config/config";
import {
  CODE_FLAT,
  GET_COMMERCIAL,
  GET_CURRENT_FLAT,
  GET_FLAT,
  GET_HOUSE,
  GET_LAND,
  PHONE_FLAT,
  RESET_FLAT,
} from "../types";

export const getFlatThunk = (page, par) => {
  return async (dispatch) => {
    const response = await axios.get(
      `${baseUrl}/flat/filter?page=${page}&${par}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("autorization-token")}`,
        },
      }
    );

    dispatch({
      type: GET_FLAT,
      payload: response.data,
    });
  };
};

export const getFlatSearchThunk = (page, code) => {
  return async (dispatch) => {
    const response = await axios.get(`${baseUrl}/search/code?search=${code}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("autorization-token")}`,
      },
    });
    dispatch({
      type: CODE_FLAT,
      payload: response.data,
    });
  };
};

export const getFlatPhoneThunk = (page, code) => {
  return async (dispatch) => {
    const response = await axios.get(`${baseUrl}/phone/search?search=${code}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("autorization-token")}`,
      },
    });
    dispatch({
      type: PHONE_FLAT,
      payload: response.data,
    });
  };
};

export const resetFlatThunk = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_FLAT,
    });
  };
};

export const getLandThunk = (page, par) => {
  return async (dispatch) => {
    const response = await axios.get(
      `${baseUrl}/landarea/filter?page=${page}&${par}`
    );
    dispatch({
      type: GET_LAND,
      payload: response.data,
    });
  };
};

export const getCommericalThunk = (page, par) => {
  return async (dispatch) => {
    const response = await axios.get(
      `${baseUrl}/commercial/filter?page=${page}&${par}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
    dispatch({
      type: GET_COMMERCIAL,
      payload: response.data,
    });
  };
};

export const getHouseThunk = (page, par) => {
  return async (dispatch) => {
    const response = await axios.get(
      `${baseUrl}/house/filter?page=${page}&${par}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    );
    dispatch({
      type: GET_HOUSE,
      payload: response.data,
    });
  };
};

export const getCurrentFlat = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`${baseUrl}/flats/current?id=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    dispatch({
      type: GET_CURRENT_FLAT,
      payload: response.data,
    });
  };
};

export const FlatPut = (data) => {
  return async (dispatch) => {
    await axios
      .post(`${baseUrl}/flats/update`, { ...data }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then(async () => {
        await Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
};

export const FlatPost = (data) => {
  return async (dispatch) => {
    await axios
      .post(`${baseUrl}/flats`, { ...data }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then(async () => {
        await Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
};

export const FlatDelete = (id) => {
  return async (dispatch) => {
    await axios
      .delete(`${baseUrl}/flats`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { id }
      })
      .then(async () => {
        await Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.replace('/');
      })
      .catch(async () => {
        await Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
};
