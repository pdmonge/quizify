// Some code courtesy of Will R. Stern
// https://github.com/learncodeacademy/react-js-tutorials

import axios from "axios";

export function createTopic(topic) {
  return function(dispatch) {
    dispatch({type: 'CREATE_TOPIC'});
    
    axios.post('/api/topics', topic)
    .then(function (response) {
      dispatch({type: 'CREATE_TOPIC_FULFILLED', payload: response.data});
      console.log(response);
    })
    .catch(function (error) {
      dispatch({type: 'CREATE_TOPIC_REJECTED', payload: error});
      console.log(error);
    });
  }
}

export function fetchTopics(id) {
  return function(dispatch) {
    dispatch({type: 'FETCH_TOPICS'});
    
    type: "FETCH_TOPICS_FULFILLED",
    payload: id
  }
}

export function updateTopic(topicChanges) {
  return {
    type: 'UPDATE_TOPIC',
    payload: topicChanges
  }
}



