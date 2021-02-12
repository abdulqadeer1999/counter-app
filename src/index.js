import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';




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


      {/* <button className= "btn" onClick={add}>Increase</button> */}
      {/* <button type="button" class="btn btn-success" onClick = {add}>Increase</button> */}
      <Button variant="outline-success" onClick = {add} >Increase</Button>{' '} 
      <h1 > {value}   </h1>

      {/* <button className="btn1" onClick={sub}>Decrease</button> */}
      {/* <button type="button" class="btn btn-danger" onClick = {sub}>Decrease</button> */}

      <Button variant="outline-danger" onClick = {sub}>Decrease</Button>{' '}

    </div>
  );
}

ReactDOM.render(<Count />,
  document.getElementById('root')
);





