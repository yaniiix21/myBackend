import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*const name = "John Smith";
const user = {
  firstName: "Jane",
  lastName: "Smith"
}

function formatName(user){
  return user.firstName + " " + user.lastName
}

const elements = <h1>Hello, {formatName(user)}</h1>

ReactDOM.render(
  elements,
  document.getElementById('root')
  )*/
