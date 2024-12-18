//product.js
import React, { Component } from 'react';
import './product.css';


const products = [
  { pr: '🍦 IceCream', name: 'ice cream', price: 50 },
  { pr: '🍩 Doughnut', name: 'donuts', price: 190 },
  { pr: '🍉 Watermelon', name: 'watermelon', price: 30 },
  { pr: '🍣 Sushi', name: 'sushi', price: 200 }
];




export class Product extends Component {
  state = {
    cart: [],
    total: 0
  };




  currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };


  getTotal = () => {
    return this.state.total.toLocaleString(undefined, this.currencyOptions);
  };


  add = (product) => {
    this.setState(state => ({
      cart: [...state.cart, product.name],
      total: state.total + product.price
    }));
  };


  remove = (product) => {
    this.setState(state => {
      const cart = [...state.cart];
      const productIndex = cart.indexOf(product.name);
      if (productIndex >= 0) {
        cart.splice(productIndex, 1);
        return {
          cart,
          total: state.total - product.price
        };
      }
      return state;
    });
  };


  render() {
    return (
      <div className="wrapper">
        <div className="cart-info">
          Shopping Cart: {this.state.cart.length} items
        </div>
        <div>Total: {this.getTotal()}</div>
        <div>
          {products.map(product => (
            <div key={product.name}>
              <div className="product">
                <span role="img" aria-label={product.name}>{product.pr}</span>
              <button onClick={() => this.add(product)}>Add</button>
              <button onClick={() => this.remove(product)}>Remove</button>
            </div>
            </div>
          ))}
        </div>
      </div>
    );

//product.css

.wrapper {
  flex-direction: column;
  align-self: center;
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

/* Shopping cart details */
.wrapper div {
  margin-bottom: 20px;
  font-size: 18px;
  color: #333;
  text-align: center;  /* Center align text */
}

/* Product list */
.product {
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-bottom: 10px;
  justify-content: center; /* Center the product content */
}

.product span {
  margin-right: 10px;
  padding-right: 20px;
}

/* Buttons */
button {
  margin: 5px;
  padding: 8px 12px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  transform: scale(1.05);
}

button:active {
  transform: scale(0.95);
}

/* Add button */
button:first-child {
  background-color: #28a745;
  color: white;
}

button:first-child:hover {
  background-color: #218838;
}

/* Remove button */
button:last-child {
  background-color: #dc3545;
  color: white;
}

button:last-child:hover {
  background-color: #c82333;
}

/* Total and cart info styling */
.total-info {
  display: flex;
  font-weight: bold;
  font-size: 20px;
  color: #555;
}



  }
}


export default Product;
