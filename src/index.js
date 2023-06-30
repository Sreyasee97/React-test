import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
function Clock(props) {
  return (
    <div className='box'>
      <p className='paragraph'>Digital Clock</p>
      <h1 className='heading'>{props.date.toLocaleTimeString()}</h1>

    </div>
  )
}

function Timer() {
  root.render(<Clock date={new Date()}/>)
}
setInterval(Timer,1000)

