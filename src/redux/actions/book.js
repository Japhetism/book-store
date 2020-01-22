import axios from 'axios';
import { getHeaders } from '../../utils/utility';
export const BEGIN_BOOK = 'BEGIN_BOOK';
export const BOOK_SUCCESS = 'BOOK_SUCCESS';
export const BOOK_FAILURE = 'BOOK_FAILURE';

const headers = getHeaders()

export const beginBook = () => ({
    type: BEGIN_BOOK
});

export const bookSuccess = response => ({
    type: BOOK_SUCCESS,
    payload: { response }
});

export const bookFailure = error => ({
    type: BOOK_FAILURE,
    payload: { error }
});

export function addBook (payload) {
    return dispatch => {
      dispatch(beginBook());
      axios({
        method: 'POST',
        url: `${process.env.REACT_APP_API_BASE_URL}/books`,
        headers,
        data: payload,
      })
      .then(response => {
        dispatch(bookSuccess(response))
      })
      .catch(function (error) {
        dispatch(bookFailure(error))
      });  
    }
  }
  
  export function getBooks () {
    return dispatch => {
      dispatch(beginBook());
      axios({
        method: 'GET',
        url: `${process.env.REACT_APP_API_BASE_URL}/books`,
        headers,
        data: {},
      })
      .then(response => {
        dispatch(bookSuccess(response))
      })
      .catch(function (error) {
        dispatch(bookFailure(error))
      });
    }
  }
  
  export function getBook (bookNumber) {
    return dispatch => {
      dispatch(beginBook());
      axios({
        method: 'GET',
        url: `${process.env.REACT_APP_API_BASE_URL}/books/${bookNumber}`,
        headers,
        data: {},
      })
      .then(response => {
        dispatch(bookSuccess(response))
      })
      .catch(function (error) {
        dispatch(bookFailure(error))
      });
    }
  }
  
  export function updateBook (bookNumber, payload) {
    return dispatch => {
      dispatch(beginBook());
      axios({
        method: 'PUT',
        url: `${process.env.REACT_APP_BACKEND_BASE_URL}/books/${bookNumber}`,
        headers,
        data: payload,
      })
      .then(response => {
        dispatch(bookSuccess(response))
      })
      .catch(function (error) {
        dispatch(bookFailure(error))
      });
    }
  }
  
  export function deleteBook (bookNumber) {
    return dispatch => {
      dispatch(beginBook());
      axios({
        method: 'DELETE',
        url: `${process.env.REACT_APP_BACKEND_BASE_URL}/books/${bookNumber}`,
        headers,
        data: {},
      })
      .then(response => {
        dispatch(bookSuccess(response))
      })
      .catch(function (error) {
        dispatch(bookFailure(error))
      });
    }
  }