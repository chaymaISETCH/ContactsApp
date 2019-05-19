import React from 'react';
import "./ContactsList.css"
import Item from "./ContactsListItem";
import {connect} from "react-redux"

const ContactsList=({contacts})=>{
  return (
    <div className="container">
      {contacts.map(e=><Item key={e._id} contact={e} />)}
    </div>
  );
}

const mapStateToProps=(state=>({contacts:state.contacts}))
export default connect(
  mapStateToProps
  )(ContactsList);
  
