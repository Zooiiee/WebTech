//1) Make use of Emojis on Buttons and add event to each Button

//app2.js


import React from 'react';
import './App.css';


function App() {
  return (
    <div className="container">
      <body bgcolor="beige">
      <h1><i>Welcome to Web Technology Lab</i></h1>
      <p><i>Lets Code!!!!🤩🤩🤩</i></p>
      <ul>
        <li>
            <button onClick={event => alert(event.target.id)}>
                <span role ="img" aria-label='Grinning Face' id="Grinning Face">😁</span>
            </button>
        </li>
        <hr></hr>
        <li>
            <button onClick={event => alert(event.target.id)}>
                <span role ="img" aria-label='Party Pooper' id="Party Pooper">💩</span>
            </button>
        </li>
        <hr></hr>
        <li>
            <button onClick={event => alert(event.target.id)}>
                <span role ="img" aria-label='Dancing Woman' id="Dancing Woman">💃</span>
            </button>
        </li>
        <hr></hr>
        <li>
            <button onClick={event => alert(event.target.id)}>
                <span role ="img" aria-label='Money, Money, Money' id="Money, Money, Money">🤑</span>
            </button>
        </li>
      </ul>
   </body>
</div>
  );
}

export default App;




//App.css
//Styling the Button

button{
  font-size: 2em;
  border: 1;
  padding: 1;
  background-color:darkred;
  cursor: pointer;
  border-radius: 1cm;
  border-color:lightpink;
}





//2) Reduce the code by making use of emoji array and Map Function

//app3.js

import React from 'react';
import './App.css';


const displayEmoji = event => alert(event.target.id);
const emojis = [
  {
    emoji: '😁',
    name: 'Grinning Face'
  },
  {
    emoji: '💩',
    name: 'Party Pooper'
  },
  {
    emoji: '💃',
    name: 'Dancing Woman'
  },
  {
    emoji: '🤑',
    name: 'Money, Money, Money'
  }
];


function App() {
  return (
    <div className="container">
      <body bgcolor="lightpink">
        <h1><i>Map Function</i></h1>
        <ul>
          {
            emojis.map(emoji => (
              <li key={emoji.name}>
                <button onClick={displayEmoji} id={emoji.name}>
                  <span role="img" aria-label={emoji.name}> {emoji.emoji} {emoji.name} </span>
                </button>
                <hr></hr>
              </li>
            )
)
}
        </ul>
      </body>
</div>
  );
}


export default App;















