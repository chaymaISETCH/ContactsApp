import React from 'react';
import {connect} from "react-redux"
import { deleteContact } from "../../redux/actions/actions";
import {Link} from "react-router-dom"

const ContactsListItem=({contact,deleteContact})=>{
 
  const handleDelete=e=>{
    
    fetch('http://localhost:8888/delete/'+contact._id, {
      method: 'delete',
    }).then((response)=> {
      return response.json();
    }).then((res)=> {
      if(res.ok===1)
      deleteContact(contact._id)
    }).catch(e=>
      console.log("error"+e))
  }


  
  return (
        <div className="contact-container">
          <div className="name-container">
            <p>{contact.name}</p>
            <img alt="avatar" src={contact.img} className="avatar"/>
          </div>
          
          <div className="info-container">
            <p>{contact.email}</p>
            <p>{contact.tel}</p>
          </div>
          
          <Link 
          to={{
            pathname: '/addContact',
            state: {
              edit:true,
              ...contact
            }
          }} >
            <img className="icon" src="/images/edit.png" alt="edit" />
          </Link><img className="icon"  onClick={handleDelete}  src="/images/delete.png" alt="delete" />
        </div>
  );
}

const mapStateToProps=(state=>({contacts:state.contacts}))
const mapDispatchToProps=(dispatch=>({
  deleteContact:contact=>dispatch(deleteContact(contact))}))

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(ContactsListItem);
  
