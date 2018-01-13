// Some code courtesy of Will R. Stern
// https://github.com/learncodeacademy/react-js-tutorials

export default function reducer(state={
  user: {
    id: null,
    email: null,
    password: null,
    creator: null,
    tester: null
  },
  fetching: false,
  fetched: false,
  error: null,
  loggedIn: false
}, action) {

  switch (action.type) {

    case "CREATE_USER": {
      return {...state, fetching: true}
    }
    case "CREATE_USER_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "CREATE_USER_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        loggedIn: true,
        user: action.payload,
      }
    }
    
    case "FETCH_USER": {
      return {...state, fetching: true}
    }
    case "FETCH_USER_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_USER_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      }
    }

    case "LOGIN_USER": {
      return {...state, fetching: true}
    }
    case "LOGIN_USER_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "LOGIN_USER_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      }
    }

    case "LOGOUT_USER": {
      return {...state, fetching: true}
    }
    case "LOGOUT_USER_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "LOGOUT_USER_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        loggedIn: false,
        user: action.payload,
      }
    }

    case "SET_USER_EMAIL": {
      return {
        ...state,
        user: {...state.user, email: action.payload},
      }
    }
    
    case "SET_USER_PWD": {
      return {
        ...state,
        user: {...state.user, password: action.payload},
      }
    }
    default: {
      return {...state}
    }
  }

}