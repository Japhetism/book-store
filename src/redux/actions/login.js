import axios from 'axios';
export const BEGIN_LOGIN = 'BEGIN_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const beginLogin = () => ({
    type: BEGIN_LOGIN
});

export const loginSuccess = response => ({
    type: LOGIN_SUCCESS,
    payload: { response }
});

export const loginFailure = error => ({
    type: LOGIN_FAILURE,
    payload: { error }
});

export const loginUser = (payload) => {
    console.log(payload)
    return dispatch => {
        dispatch(beginLogin());
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/login`, payload)
          .then(response => {
            dispatch(loginSuccess(response))
          })
          .catch(function (error) {
            dispatch(loginFailure(error))
          });
    }
}