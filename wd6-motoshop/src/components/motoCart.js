/* Magnanimous Comic Book Shop
Author/Developer:  Douglas T. Angram
WDD-469 Project & Portfolio - Full Sail University
Source:  motoCart.js
*/

// File empty during Week #1 (no cart functionality)
// Week 2 Revisions: "Add to Cart", "Remove Item", "Add QTY", "Subtract QTY", "Add Shipping"
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, addQuantity, subtractQuantity } from '../actions/motocartActions';
import MotocartPreCheck from './motocartPreCheck';
// import { itemList } from './Home';
// import { motocartReducer } from '../storeReducers/motocartReducer';

class motoCart extends Component{
  // to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  }

  // to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  }

  // to subtract from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  }

  render(){
    let addedItems = this.props.addedItems.length > 0 ? (
      this.props.addedItems.map(item => {
        return(
          <li className="collection-item avatar" key={item.id}>
            <div className="item-img">
              <img src={item.img} alt={item.img} />
            </div>

            <div className="item-desc">
              <span className="title">{item.title}</span>
              <p>{item.desc}</p>

              <p><b>Price: ${item.price}</b></p>

              {
                // <p><b>Price: ${item.price * item.quantity}</b></p>
              }

              <p><b>Quantity: {item.quantity}</b></p>

              <div className="add-remove">
                <Link to="/motoCart"><i className="material-icons" onClick={() => {this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                <Link to="/motoCart"><i className="material-icons" onClick={() => {this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
              </div>

              <button className="waves-effect waves-light btn pink remove" onClick={() => this.handleRemove(item.id)}>Remove</button>

              {
                // <p><b>Price: ${item.price}</b></p>
                //
                // <p><b>Quantity: {item.quantity}</b></p>
                //
                // <div className="add-remove">
                //   <Link to={`/motoCart/${item.id}`}><i className="material-icons" onClick={() => {this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                //   <Link to={`/motoCart/${item.id}`}><i className="material-icons" onClick={() => {this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                // </div>
                //
                // <button className="waves-effect waves-light btn pink remove" onClick={(this.handleRemove.bind(item.id))}>Remove</button>
              }
            </div>
          </li>
        )
      })
    ) : (<p>Sorry, your Comic Book Cart is EMPTY.</p>)

    return(
      <div className="container">
        <div className="motoCart">
          <p>&nbsp;</p><p>&nbsp;</p>

          <h5>Current Order Status:</h5>
          <ul className="collection">
            {addedItems}
          </ul>
          <MotocartPreCheck/>
        </div>
      </div>
    )
  }
}

// Connecting state props
const mapStateToProps = (state) => {
  return{
    // items: state.items
    addedItems: state.addedItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    removeItem: (id) => {dispatch(removeItem(id))},
    addQuantity: (id) => {dispatch(addQuantity(id))},
    subtractQuantity: (id) => {dispatch(subtractQuantity(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(motoCart)
