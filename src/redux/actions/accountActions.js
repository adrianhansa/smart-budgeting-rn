import axios from "axios";
import {
  CREATE_ACCOUNT_FAIL,
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_FAIL,
  DELETE_ACCOUNT_REQUEST,
  DELETE_ACCOUNT_SUCCESS,
  GET_ACCOUNTS_FAIL,
  GET_ACCOUNTS_REQUEST,
  GET_ACCOUNTS_SUCCESS,
  GET_ACCOUNT_FAIL,
  GET_ACCOUNT_REQUEST,
  GET_ACCOUNT_SUCCESS,
  UPDATE_ACCOUNT_FAIL,
  UPDATE_ACCOUNT_REQUEST,
  UPDATE_ACCOUNT_SUCCESS,
} from "../constants/accountConstants";
import { BASE_URL } from "../constants/url";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createAccount = (account) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ACCOUNT_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.post(`${BASE_URL}/accounts`, account, {
      headers: { token },
    });
    dispatch({ type: CREATE_ACCOUNT_SUCCESS, payload: data });
    const response = await axios.get(`${BASE_URL}/accounts`, {
      headers: { token },
    });
    dispatch({ type: GET_ACCOUNTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: CREATE_ACCOUNT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAccounts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ACCOUNTS_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.get(`${BASE_URL}/accounts`, {
      headers: { token },
    });
    dispatch({ type: GET_ACCOUNTS_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: GET_ACCOUNTS_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const getAccount = (slug) => async (dispatch) => {
  try {
    dispatch({ type: GET_ACCOUNT_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.get(`${BASE_URL}/accounts/${slug}`, {
      headers: { token },
    });
    dispatch({ type: GET_ACCOUNT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ACCOUNT_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const updateAccount = (slug, account) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ACCOUNT_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.put(`${BASE_URL}/accounts/${slug}`, account, {
      headers: { token },
    });
    dispatch({ type: UPDATE_ACCOUNT_SUCCESS, payload: data });
    const response = await axios.get(`${BASE_URL}/accounts`, {
      headers: { token },
    });
    dispatch({ type: GET_ACCOUNTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: UPDATE_ACCOUNT_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const deleteAccount = (slug) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ACCOUNT_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.delete(`${BASE_URL}/accounts/${slug}`, {
      headers: { token },
    });
    dispatch({ type: DELETE_ACCOUNT_SUCCESS, payload: data });
    const response = await axios.get(`${BASE_URL}/accounts`, {
      headers: { token },
    });
    dispatch({ type: GET_ACCOUNTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: DELETE_ACCOUNT_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
