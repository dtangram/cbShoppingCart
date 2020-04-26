/* Magnanimous Comic Book Shop
Author/Developer:  Douglas T. Angram
WDD-469 Project & Portfolio - Full Sail University
Source:  Home.js
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Week 2 Revisions: "Add to Cart", "Remove Item", "Add QTY", "Subtract QTY"
// Pull in Future Cart Actions called 'motocartActions'
import { addToCart } from '../actions/motocartActions';

// Our 2nd component "Home" which displays all of our products
class Home extends Component{
  // Week 2 Revisions: "Add to Cart", "Remove Item", "Add QTY", "Subtract QTY"
  // Add "handleClick" below & Add to Cart Actions; See Line #29: onClick=()=>{this.handleClick}
  handleClick = (e, id) => {
    e.preventDefault();
    this.props.addToCart(id);
  };

  handleClickNavigate = () => {
    this.props.history.push("/motoCart")
  }

  render(){
    let itemList = this.props.items.map(item=>{
      return(
        <article className="card" key={item.id}>
          <section className="card-image">
            <figure><img src={item.img} alt={item.title}/></figure>
            <Link to="/motoCart"><span className="btn-floating halfway-fab waves-effect waves-light blue" onClick={(e)=>{this.handleClick(e, item.id); this.handleClickNavigate();}}><i className="material-icons">add</i></span></Link>
          </section>

          <section className="card-content">
            <span className="card-title">{item.title}</span>
            <p>{item.desc}</p>
            <p><b>Price: ${item.price}</b></p>
          </section>
        </article>
      )
    })

    return(
      <article className="container">
        <h2 className="center">On Sale - Limited Time Offer!</h2>
        <section className="box">
            {itemList}
        </section>
      </article>
    )
  }
}

// Week 2 Revisions: "Add to Cart", "Remove Item", "Add QTY", "Subtract QTY"
// Using mapStateToProps function; 'connect' the state of items added to cart
const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addToCart: (id) => {dispatch(addToCart(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
