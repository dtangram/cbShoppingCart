import {
  SET_USER,
  ADD_USER,
  REMOVE_USER,
} from '../actions/motoCartActionsTypes';

import {
  removeIdFromObject,
  removeIdFromArray,
} from '../_utils';

const startState = {
  userLoadedAt: {},
  byUserId: {},
  byId: {},
};

export default function choicesReducer(state = startState, action) {
  // pull out the type and save every thing else to "payload"
  const { type, ...payload } = action;
  // see if the action type matches any that should make changes to this state
  switch (type) {
    case SET_USER: {
      const { user } = payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [user.id]: user,
        },
      };
    }

    case ADD_USER: {
      const { id, userId } = payload;
      // add the id to the array of all the choices for a specific quiz
      const allIds = [...state.byUserId[userId], id];
      return {
        ...state,
        byUserId: {
          ...state.byUserId,
          // we use a set here because it makes sure that all values are unique
          // we don't want the same id more than once in the array
          [userId]: [...new Set(allIds)],
        },
      };
    }

    case REMOVE_USER: {
      const { id } = payload;
      // pull the quiz id out of the existing object so we can remove it from the array
      const { userId } = state.byId[id];
      return {
        ...state,
        // remove the id from the object of all the choices
        byId: removeIdFromObject(id, state.byId),
        byUserId: {
          ...state.byUserId,
          // remove the user id from the array for the quiz it belongs to
          [userId]: removeIdFromArray(id, state.byUserId[userId]),
        },
      };
    }

    // no matches found, return the current unchanged state
    default: return state;
  }
}
