// Some code courtesy of Will R. Stern
// https://github.com/learncodeacademy/react-js-tutorials

export default function reducer(state={
    topics: [],
    fetching: false,
    fetched: false,
    error: null
  }, action) {

  switch (action.type) {

    case "CREATE_TOPIC": {
      return {...state, fetching: true}
    }
    case "CREATE_TOPIC_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "CREATE_TOPIC_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        topics: action.payload,
      }
    }
    
    case "FETCH_TOPICS": {
      return {...state, fetching: true}
    }
    case "FETCH_TOPICS_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_TOPICS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        topics: action.payload,
      }
    }

    case "UPDATE_TOPIC": {
      return {...state, fetching: true}
    }
    case "UPDATE_TOPIC_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "UPDATE_TOPIC_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        topics: action.payload,
      }
    }

    default: {
      return {...state}
    }
  }

}