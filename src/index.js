import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




function Count() {
  const [value, setValue] = React.useState(0);

  function add() {
    setValue((previousValue) => previousValue + 1)

  }
  function sub() {
  
    setValue(value - 1)
  }



  return (
    <div className = "count">


      <button className= "btn" onClick={add}>Increase</button>

      <h1 > {value}   </h1>

      <button className="btn1" onClick={sub}>Decrease</button>

    </div>
  );
}

ReactDOM.render(<Count />,
  document.getElementById('root')
);





