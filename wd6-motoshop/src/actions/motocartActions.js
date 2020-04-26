import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, SUB_SHIPPING } from './motocartActionsTypes';

// add cart action
export const addToCart = (id) => {
  return{
    type: ADD_TO_CART,
    id
  }
}

// remove cart action
export const removeItem = (id) => {
  return{
    type: REMOVE_ITEM,
    id
  }
}

// subtract qt action
export const subtractQuantity = (id) => {
  return{
    type: SUB_QUANTITY,
    id
  }
}

// add qt action
export const addQuantity = (id) => {
  return{
    type: ADD_QUANTITY,
    id
  }
}

// hint for shipping: add shipping
export const addShipping = (id) => {
  return{
    type: ADD_SHIPPING,
    id
  }
}

export const subtractShipping = (id) => {
  return{
    type: SUB_SHIPPING,
    id
  }
}
