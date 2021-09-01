import axios from "axios";
import {
  CREATE_EXPENSE_FAIL,
  CREATE_EXPENSE_REQUEST,
  CREATE_EXPENSE_SUCCESS,
  DELETE_EXPENSE_FAIL,
  DELETE_EXPENSE_REQUEST,
  DELETE_EXPENSE_SUCCESS,
  GET_EXPENSES_BY_ACCOUNT_FAIL,
  GET_EXPENSES_BY_ACCOUNT_REQUEST,
  GET_EXPENSES_BY_ACCOUNT_SUCCESS,
  GET_EXPENSES_BY_MONTH_AND_YEAR_FAIL,
  GET_EXPENSES_BY_MONTH_AND_YEAR_REQUEST,
  GET_EXPENSES_BY_MONTH_AND_YEAR_SUCCESS,
  GET_EXPENSES_FAIL,
  GET_EXPENSES_REQUEST,
  GET_EXPENSES_SUCCESS,
  GET_EXPENSE_FAIL,
  GET_EXPENSE_REQUEST,
  GET_EXPENSE_SUCCESS,
  UPDATE_EXPENSE_FAIL,
  UPDATE_EXPENSE_REQUEST,
  UPDATE_EXPENSE_SUCCESS,
} from "../constants/expenseConstants";
import { BASE_URL } from "../constants/url";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createExpense = (expense) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_EXPENSE_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.post(`${BASE_URL}/expenses`, expense, {
      headers: { token },
    });
    dispatch({ type: CREATE_EXPENSE_SUCCESS, payload: data });
    const response = await axios.get(`${BASE_URL}/expenses`, {
      headers: { token },
    });
    dispatch({ type: GET_EXPENSES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: CREATE_EXPENSE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateExpense = (id, expense) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_EXPENSE_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.put(`${BASE_URL}/expenses/${id}`, expense, {
      headers: { token },
    });
    dispatch({ tyep: UPDATE_EXPENSE_SUCCESS, payload: data });
    const response = await axios.get(`${BASE_URL}/expenses`, {
      headers: { token },
    });
    dispatch({ type: GET_EXPENSES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: UPDATE_EXPENSE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteExpense = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_EXPENSE_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.delete(`${BASE_URL}/expenses/${id}`, {
      headers: { token },
    });
    dispatch({ tyep: DELETE_EXPENSE_SUCCESS, payload: data });
    const response = await axios.get(`${BASE_URL}/expenses`, {
      headers: { token },
    });
    dispatch({ type: GET_EXPENSES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: DELETE_EXPENSE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getExpense = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_EXPENSE_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.get(`${BASE_URL}/expenses/${id}`, {
      headers: { token },
    });
    dispatch({ tyep: GET_EXPENSE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_EXPENSE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getExpenses = () => async (dispatch) => {
  try {
    dispatch({ type: GET_EXPENSES_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.get(`${BASE_URL}/expenses`, {
      headers: { token },
    });
    dispatch({ type: GET_EXPENSES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_EXPENSES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getExpensesByAccount = (accountSlug) => async (dispatch) => {
  try {
    dispatch({ type: GET_EXPENSES_BY_ACCOUNT_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.get(`${BASE_URL}/expenses/${accountSlug}`, {
      headers: { token },
    });
    dispatch({ type: GET_EXPENSES_BY_ACCOUNT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_EXPENSES_BY_ACCOUNT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getExpensesByMonthAndYear = (month, year) => async (dispatch) => {
  try {
    dispatch({ type: GET_EXPENSES_BY_MONTH_AND_YEAR_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.get(`${BASE_URL}/expenses/${month}/${year}`, {
      headers: { token },
    });
    dispatch({ type: GET_EXPENSES_BY_MONTH_AND_YEAR_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_EXPENSES_BY_MONTH_AND_YEAR_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
