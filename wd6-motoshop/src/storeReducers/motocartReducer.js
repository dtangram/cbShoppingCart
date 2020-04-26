/* Magnanimous Comic Book Shop
Author/Developer:  Douglas T. Angram
WDD-469 Project & Portfolio - Full Sail University
Source:  motocartReducer.js
*/

import Item1 from './images/item1.jpg'
import Item2 from './images/item2.jpg'
import Item3 from './images/item3.jpg'
import Item4 from './images/item4.jpg'
import Item5 from './images/item5.jpg'
import Item6 from './images/item6.jpg'

// Pull in all of the action types
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, SUB_SHIPPING } from '../actions/motocartActionsTypes';

// Setting inital state for all product detail
const initState = {
  items: [
      {id:1,title:'Batman #497', desc: "VG Condition", price:10, quantity: 1, img:Item1},
      {id:2,title:'Superman #75', desc: "NM Condition", price:21, quantity: 1, img: Item2},
      {id:3,title:'Captain America #25 Vol. 2', desc: "NM Condition",price:43, quantity: 1, img: Item3},
      {id:4,title:'Spider-Man #700', desc: "Mint Condition", price:16, quantity: 1, img:Item4},
      {id:5,title:'Spawn #1', desc: "Fine Condition", price:10, quantity: 1, img: Item5},
      {id:6,title:'The Maxx #2', desc: "VG Condition", price:6, quantity: 1, img: Item6}
  ],
  addedItems:[],
  total: 0

}

// Week 2 Revisions: "Add to Cart", "Remove Item". "Add QTY", "Subtract QTY"
// motocartReducer keeping track of states
const motocartReducer = (state = initState, action) => {
  // INSIDE HOME COMPONENT
  if(action.type === ADD_TO_CART){
    let addedItem = state.items.find(item => item.id === action.id)

    // check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(item => action.id === item.id)

    if(existed_item){
      addedItem.quantity += 1

      return{
        ...state,
        total: state.total + addedItem.price
      }
    }

    else{
      addedItem.quantity = 1

      // calculating the total
      let newTotal = state.total + addedItem.price

      return{
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      }
    }
  }

  // INSIDE motoCART COMPONENT
  // if(action.type === REMOVE_ITEM){
  //   let itemToRemove = state.addedItems.find(item => action.id === item.id)
  //   let new_items = state.addedItems.filter(item => action.id !== item.id)
  //
  //   // calculating the total
  //   let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
  //   console.log(itemToRemove)
  //
  //   return{
  //     ...state,
  //     addedItems: new_items,
  //     total: newTotal
  //   }
  // }

  // This one is useful too
  if(action.type === REMOVE_ITEM){
    let itemToRemove = state.addedItems.find(item => action.id === item.id)
    let new_items = state.addedItems.filter(item => action.id !== item.id)
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)

    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    }
  }

  // INSIDE motoCART COMPONENT
  if(action.type === ADD_QUANTITY){
    let addedItem = state.items.find(item => item.id === action.id)
    addedItem.quantity += 1
    let newTotal = state.total + addedItem.price

    return{
      ...state,
      total: newTotal
    }
  }

  // INSIDE motoCART COMPONENT
  if(action.type === SUB_QUANTITY){
    let addedItem = state.items.find(item => item.id === action.id)

    // if the qt == 0 then it should be removed
    if(addedItem.quantity === 1){
      let new_items = state.addedItems.filter(item => item.id !== action.id)
      let newTotal = state.total - addedItem.price

      return{
        ...state,
        addedItems: new_items,
        total: newTotal
      }
    }

    else{
      addedItem.quantity -= 1
      let newTotal = state.total - addedItem.price

      return{
        ...state,
        total: newTotal
      }
    }
  }

  // INSIDE motoCART COMPONENT (hint for shipping motocartPreCheck)
  if(action.type === ADD_SHIPPING){
    return{
      ...state,
      total: state.total + 6
    }
  }

  if(action.type === SUB_SHIPPING){
    return{
      ...state,
      total: state.total - 6
    }
  }

  else{
    return state
  }
}

export default motocartReducer;
