/* Magnanimous Comic Book Shop
Author/Developer:  Douglas T. Angram
WDD-469 Project & Portfolio - Full Sail University
Source:  motocartReducer.js
"Research is a necessity!"
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addShipping, subtractShipping } from '../actions/motocartActions'

class ShippingTotal extends Component{
  componentWillUnmount(){
    if(this.refs.shipping.checked){
      this.props.subtractShipping()
    }
  }

  handleChecked = (e) => {
    if(e.target.checked){
      this.props.addShipping();
    }

    else{
      this.props.subtractShipping();
    }
  }

  render(){
    return(
      <div className="container">
        <div className="collection">
          <li className="collection-item">
            <label>
              <input type="checkbox" ref="shipping" onChange = {this.handleChecked} />
              <span>Shipping(+$6)</span>
            </label>
          </li>

          <li className="collection-item"><b>Total: ${this.props.total}</b></li>
        </div>

        <div className="checkout">
          <button className="waves-effect waves-light btn">Checkout</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    addedItems: state.addedItems,
    total: state.total
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    addShipping: (id) => {dispatch(addShipping(id))},
    subtractShipping: (id) => {dispatch(subtractShipping(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShippingTotal)
