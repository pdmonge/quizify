import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import { userActions } from '../_actions';

const style = {
  container: {
    display: "block",
    height: 100 + "%",
    width: 100 + "%",
    marginBottom: 125 + "px"
  },
  row: {
    // minHeight: 400 + "px",
    padding: 100 + "px",
    minHeight: 800 + "px",
    marginBottom: 10 + "px"
  },
  card: {
    opacity: 0.5,
    minHeight: 90 + "%",
  }
}

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.dispatch(userActions.logout());

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {
      name,
      value
    } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      submitted: true
    });
    const {
      username,
      password
    } = this.state;
    // const { dispatch } = this.props;
    // if (username && password) {
    //     dispatch(userActions.login(username, password));
    // }
  }

/*
    <div class="card mb-3">
      <h3 class="card-header">Card header</h3>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <h6 class="card-subtitle text-muted">Support card subtitle</h6>
      </div>
      <img style="height: 200px; width: 100%; display: block;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image">
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
      <div class="card-footer text-muted">
        2 days ago
      </div>
    </div>
*/

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <div className="container-fluid" style={style.container} >
        <div className="row" style={style.row} >
          <div className="col-md-2" />
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body" >
                <h3 className="card-header" >Login</h3>
                <form name="form" onSubmit={this.handleSubmit}>
                  <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                    {submitted && !username &&
                        <div className="help-block">Username is required</div>
                    }
                  </div>
                  <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                    {submitted && !password &&
                        <div className="help-block">Password is required</div>
                    }
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary">Login</button>
                    {loggingIn &&
                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                    }
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    // const { loggingIn } = state.authentication;
    // return {
    //     loggingIn
    // };
    return {
      globalState: state
    }
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 