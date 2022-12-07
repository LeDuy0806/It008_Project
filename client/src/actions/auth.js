import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    if(data === "Not allowed")
    {
      alert("sai mat khau r te")
    }
    else
    {
      dispatch({ type: AUTH, data });
      history.push("/");
    }
  } catch (error) {
    console.log(error);
  }
};

export const register = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
