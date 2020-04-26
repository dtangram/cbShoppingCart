import API from '../API';
import {
  SET_USER,
  ADD_USER,
  REMOVE_USER,
} from './motocartActionsTypes';
import { connect } from 'react-redux';

export const fetchUser = id => async (dispatch, getState) => {
  // pull the user out of the state
  const { users: { byId: { [id]: existinguser } } } = getState();
  // if the user already exists, don't do anything
  if (existinguser) return;
  // get the details of the user
  const user = await API.get(`/users/${id}`);
  // update the state with the user
  dispatch({ type: SET_USER, user });
};

export const saveUser = user => async (dispatch) => {
  if (user.id) {
    // make the update api call to save the changes
    const updateduser = await API.put(`/users/${user.id}`, user);
    // update the state
    dispatch({ type: SET_USER, user: { ...user, ...updateduser } });
  } else {
    // make the create api call to make a new user
    const newuser = await API.post('/users', user);
    // add the new user
    dispatch({ type: SET_USER, user: { ...user, ...newuser } });
    dispatch({ type: ADD_USER, id: newuser.id, quizId: user.quizId });
  }
};

export const deleteUser = id => async (dispatch) => {
  // send the delete to the api
  await API.delete(`/users/${id}`);
  // dispatch the action to remove the user with the id to remove
  dispatch({ type: REMOVE_USER, id });
};

function mapStateToProps(state, props) {
  // get the id from the route params
  const { match: { params: { id } } } = props;
  const {
    users: {
      byId: {
        // find the key with the id from the route and pull out the user
        [id]: user,
      },
    },
  } = state;

  return { user };
}

export default connect(mapStateToProps);
