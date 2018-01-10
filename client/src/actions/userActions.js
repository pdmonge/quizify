// Some code courtesy of Will R. Stern
// https://github.com/learncodeacademy/react-js-tutorials

import axios from "axios";

export function createUser(user) {
  return function(dispatch) {
    dispatch({type: 'CREATE_USER'});

    axios.post
  }
}

export function fetchUser() {
  return {
    type: "FETCH_USER_FULFILLED",
    payload: {
      name: "Will",
      age: 35,
    }
  }
}

export function setUserEmail(email) {
  return {
    type: 'SET_USER_EMAIL',
    payload: email,
  }
}

export function setUserPwd(pwd) {
  return {
    type: 'SET_USER_PWD',
    payload: pwd,
  }
}


