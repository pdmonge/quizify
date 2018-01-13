// Some code courtesy of Will R. Stern
// https://github.com/learncodeacademy/react-js-tutorials

import axios from "axios";

export function createUser(user) {
  return function(dispatch) {
    dispatch({type: 'CREATE_USER'});
    
    axios.post('/api/users', user)
    .then(function (response) {
      dispatch({type: 'CREATE_USER_FULFILLED', payload: response.data});
      console.log(response);
    })
    .catch(function (error) {
      dispatch({type: 'CREATE_USER_REJECTED', payload: error});
      console.log(error);
    });
  }
}

export function loginUser(user) {
  return function(dispatch) {
    dispatch({type: 'LOGIN_USER'});

    axios.get(`/api/users/login`, user)
    .then(function (response) {
      dispatch({type: 'LOGIN_USER_FULFILLED', payload: response.data});
      console.log(response);
    })
    .catch(function (error) {
      dispatch({type: 'LOGIN_USER_REJECTED', payload: error});
      console.log(error);
    });
  }
}

export function logoutUser() {
  return function(dispatch) {
    let newUserState = {
        id: null,
        email: null,
        password: null,
        creator: null,
        tester: null
    }

    return {
      type: "LOGOUT_USER_FULFILLED",
      payload: newUserState
    }
    // axios.get(`/api/users/logout`, user)
    // .then(function (response) {
    //   dispatch({type: 'LOGOUT_USER_FULFILLED', payload: response.data});
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   dispatch({type: 'LOGOUT_USER_REJECTED', payload: error});
    //   console.log(error);
    // });
  }
}

export function fetchUser(id) {
  return {
    type: "FETCH_USER_FULFILLED",
    payload: id
  }
}

export function setUserEmail(email) {
  return {
    type: 'SET_USER_EMAIL',
    payload: email
  }
}

export function setUserPwd(pwd) {
  return {
    type: 'SET_USER_PWD',
    payload: pwd,
  }
}


