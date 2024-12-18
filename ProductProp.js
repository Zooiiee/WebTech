CODE: without Prop

App.js

import React from 'react';
import './App.css';
import ProductImg from './ProductImg';


function App() {
    return (
        <div className="container">
            <h1>Chocolate List</h1>
           
            <ProductImg />
        </div>
    );
}


export default App;

ProductImg.js

import React, { Component } from 'react';
import './App.css';
import pimg from './c3.jfif';
import pimg1 from './c2.jfif';


export class ProductImg extends Component {
    render() {
        return (
            <>
                <img src={pimg} alt="Product Image" />
                <br/>
                <img src={pimg1} alt="Product Image 1" />
                <p>This is Product Component</p>
            </>
        );
    }
}


export default ProductImg;




//CODE: with Prop

//App.js

import React from 'react';
import './App.css';
import ProductImg from './ProductImg';
import pimg from './c1.jfif';
import pimg1 from './c3.jfif';
import pimg2 from './c2.jfif';


function App() {
    return (
        <div className="container">
            <h1><i>CHOCOLATE LIST</i></h1>
           
            <ProductImg im={pimg} />
            <ProductImg im={pimg1} />
            <ProductImg im={pimg2} />
        </div>
    );
}


export default App;



//ProductImg.js

import React, { Component } from 'react';


export class ProductImg extends Component {
    render() {
        return (
            <>
       
                <img alt='This' src={this.props.im} />
                <p>This is Product Component</p>
            </>
        );
    }
}


export default ProductImg;



//App.css
img{
  height: 300px;
  width:  800px;
}
