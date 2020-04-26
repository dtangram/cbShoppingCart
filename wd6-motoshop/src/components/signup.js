import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RRPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import { fetchUser, saveUser, deleteUser } from '../actions/userActions';
// import { Link } from 'react-router-dom';
import '../css/main.css';

class Signup extends Component {
  state = {
    firstname: undefined,
    lastname: undefined,
    username: undefined,
    email: undefined,
    password: undefined,
  }

  componentDidMount() {
    const { fetchUser, match: { params: { id } } } = this.props;
    if (id) fetchUser(id);
  }

  handleInputChange = (event) => {
    // pull the name of the input and value of input out of the even object
    const { target: { firstname, lastname, username, email, password } } = event;
    // update the state to a key of the name of the input and value of the value of the input
    // ex: type: 'private'
    this.setState({
      [firstname]: firstname,
      [lastname]: lastname,
      [username]: username,
      [email]: email,
      [password]: password
    });
  }

  save = async (event) => {
    event.preventDefault();
    const {
      users: { id }, saveUser, location,
    } = this.props;

    const {
      firstname, lastname, username, email, password,
    } = this.state;
    // get the query params from the url
    const queryParams = new URLSearchParams(location.search);
    // get the questionId from query params
    queryParams.get('id');
    await saveUser({
      id, firstname, lastname, username, email, password,
    });
  }

  delete = async () => {
    const { deleteUser, users: { id } } = this.props;
    await deleteUser(id);
  }

  render() {
    const {
      users: {
        // rename value prop to "defaultTitle"
        firstname: defaultFirstname = '',
        lastname: defaultLastname = '',
        username: defaultUsername = '',
        email: defaultEmail = '',
        password: defaultPassword = '',
      },
    } = this.props;

    const {
      // get the value from the state and if it doesn't exist use the prop
      firstname = defaultFirstname,
      lastname = defaultLastname,
      username = defaultUsername,
      email = defaultEmail,
      password = defaultPassword,
    } = this.state;

    return (
      <React.Fragment>
        <article className="signupForm">
          <section className="wrapper">
            <h3>Sign Up</h3>

            <form method="POST" onSubmit={this.save}>
              <fieldset>
                <label htmlFor="login-firstname">
                  Firstname

                  <input
                    id="login-firstname"
                    type="text"
                    name={firstname}
                    onChange={this.handleInputChange}
                  />
                </label>

                <label htmlFor="login-lastname">
                  Lastname

                  <input
                    id="login-lastname"
                    type="text"
                    name={lastname}
                    onChange={this.handleInputChange}
                  />
                </label>

                <label htmlFor="login-username">
                  Username

                  <input
                    id="login-username"
                    type="text"
                    name={username}
                    onChange={this.handleInputChange}
                  />
                </label>

                <label htmlFor="login-email">
                  Email

                  <input
                    id="login-email"
                    type="text"
                    name={email}
                    onChange={this.handleInputChange}
                  />
                </label>

                <label htmlFor="login-password">
                  Password

                  <input
                    id="login-password"
                    type="password"
                    name={password}
                    onChange={this.handleInputChange}
                  />
                </label>
              </fieldset>

              <input
                id="submitQ1"
                className="submit"
                type="submit"
                value="Submit"
              />
            </form>
          </section>
        </article>
      </React.Fragment>
    );
  }
}

Signup.propTypes = {
  users: PropTypes.shape({
    id: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  saveUser: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  history: RRPropTypes.history.isRequired,
  location: RRPropTypes.location.isRequired,
  match: RRPropTypes.match.isRequired,
};

Signup.defaultProps = {
  users: {},
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchUser: fetchUser,
    saveUser: saveUser,
    deleteUser: deleteUser
  }
}

export default connect(mapDispatchToProps)(Signup);
