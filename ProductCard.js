//Product.js     --- inside components

import React, { Component } from 'react';
import './product.css';


const products = [
  { pr: '🍦 IceCream', name: 'ice cream', price: 50 },
  { pr: '🍩 Doughnut', name: 'donuts', price: 190 },
  { pr: '🍉 Watermelon', name: 'watermelon', price: 30 },
  //{ pr: '🍣 Sushi', name: 'sushi', price: 200 }
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
        <div>
          Shopping Cart: {this.state.cart.length} items
        </div>
        <div>Total: {this.getTotal()}</div>
        <div>
          {products.map(product => (
            <div key={product.name}>
              <div className="product">
                <span role="img" aria-label={product.name}>{product.pr}</span>
              </div>
              <button onClick={() => this.add(product)}>Add</button>
              <button onClick={() => this.remove(product)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}


export default Product;


//app.js

import './App.css';
import ProductCard from './Component/ProductCard';
import data from './data/data';

function App() {
  return (
    <div className="wrapper">
      <h1>Products</h1>
      {data.map(product => (
        <ProductCard
          key={product.pname}
          pname={product.pname}
          price={product.price}
          rating={product.rating}
          features={product.features}
          additional={product.additional}
        />
      ))}
    </div>
  );
}

export default App;


//productCard.css

.product-wrapper {
  border: 1px solid #ddd;
  margin: 8px;
  padding: 15px;
  width: 220px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-wrapper:hover {
  transform: translateY(-5px);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
}

.product-wrapper h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
}

.product-wrapper h3 {
  font-size: 16px;
  font-weight: 500;
  color: #007bff;
  margin: 5px 0;
}

.product-wrapper h4 {
  font-size: 14px;
  color: #666;
  margin: 5px 0;
}

.product-wrapper div {
  font-size: 14px;
  color: #555;
  margin: 10px 0;
}

.product-wrapper button {
  font-size: 14px;
  border: 1px solid #007bff;
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.product-wrapper button:hover {
  background-color: #0056b3;
  color: #fff;
}

