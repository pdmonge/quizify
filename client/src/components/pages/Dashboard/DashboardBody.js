import React from 'react';
// import NewAccountForm from './NewAccountForm.js';

const style = {
  container: {
    display: "block",
    height: 100 + "%",
    width: 100 + "%",
    marginBottom: 125 + "px"
  },
  row: {
    minHeight: 400 + "px",
    marginBottom: 10 + "px"
  },
  card: {
    opacity: 0.9,
    minHeight: 95 + "%",
  }
}


const topics = {

}

const DashboardBody = () => {
  return (
    <div className="container-fluid" style={style.container}>
      <div className="row fluid" style={style.row} >

        <div className="col-md-3">
          <div className="card text-white bg-success mb-3" style={style.card}>
            <div className="card-header text-center" >TOPICS</div>
            <div className="card-body">
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card text-white bg-info mb-3" style={style.card}>
            <div className="card-header text-center">QUESTIONS</div>
            <div className="card-body">
              <h4 className="card-title"></h4>
              <ul className="card-text">
                <li>Create Topics</li>
                <li>Create Questions Within Topics
                  <ul>
                    <li>Multiple Choice</li>
                    <li>Short Answer</li>
                    <li>Long Answer</li>
                  </ul>
                </li>
                <li>Create Correct and Incorrect Answers</li>
                <li>Generate Online and PDF Quizzes</li>
                <li>Share Quizzes Publicly or Privately</li>
                <li>Automate Grading of Online Quizzes</li>
                <li>Track Quiz-taker History</li>
              </ul>
              <h4 className="card-title">Quiz Takers:</h4>
              <ul className="card-text">
                <li>Take Public Quizzes</li>
                <li>Take Privately Shared Quizzes</li>
                <li>Track Your Quiz History and Grades</li>
                <li>Send Messages to Quiz-makers</li>
                <li>Print PDF Versions of Quizzes</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Body;