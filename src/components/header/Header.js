import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

const Header=()=>{
  return (
  
      <div className="header">
        <Link to="/" className="link">
          <p>Contact list</p>
        </Link>
        <Link 
          to={{
            pathname: '/addContact',
            state: {
              edit: false,
              name:"",
              email:"",
              tel:"",
              img:""
            }
          }} >
          <img alt="add" src="https://cdn.pixabay.com/photo/2017/08/16/00/29/add-person-2646097_960_720.png" />
        </Link>
      </div>
    
  );
}
export default Header