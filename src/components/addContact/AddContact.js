import React from 'react';
import "./AddContact.css";
import { connect } from "react-redux";
import { editContact, addContact } from "../../redux/actions/actions"

class AddContact extends React.Component{
constructor(props){
  super(props)
  let contact = this.props.location.state
    this.state={
    name:contact.name||"",
    img:contact.img||"",
    email:contact.email||"",
    tel:contact.tel||""
  }
}
componentDidUpdate(prevProps, prevState) {
  let contact = this.props.location.state
  if (contact !== prevProps.location.state) {
      this.setState({name:contact.name||"",
      img:contact.img||"",
      email:contact.email||"",
      tel:contact.tel||""})
  }
}



add=()=>{
  let {name,img,email,tel} = this.state
  let {edit, _id} =this.props.location.state
  if(name!=="" && img !=="" && email !=="" && tel+"".length>=8)
    {let url = edit?'http://localhost:8888/modify/'+_id:'http://localhost:8888/add'
    fetch(url, {
      method: edit?'put':'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...this.state})
    }).then((response)=> {
      return response.json();
    }).then((contact)=> {
      edit?this.props.editContact({_id:_id,...this.state}):this.props.addContact({...this.state,_id:contact._id})
      //redirect
      this.props.history.push("/")
    }).catch(e=>
      console.log("error"+e)
    )

  }
  else alert("invalid or incomplete information")
}
handleChange = (e)=>{
  this.setState({
    [e.target.name] : e.target.value
  })
}
render(){
  return (
    <div className="add-container">
      <p className="add-title">{this.props.location.state.edit?"Edit":"Add"} Contact</p>  
      <input type="text" onChange={this.handleChange} placeholder="Name" name="name" value={this.state.name} />
      <input type="text" onChange={this.handleChange} placeholder="Image" name="img" value={this.state.img} />
      <input type="email" onChange={this.handleChange} placeholder="Email" name="email" value={this.state.email} />
      <input type="number" onChange={this.handleChange} placeholder="Tel" name="tel" value={this.state.tel} />
      <button className="btn" onClick={this.add}>{this.props.location.state.edit?"EDIT":"ADD"}</button>
    </div>
          
  );
}}

const mapDispatchToProps=dispatch=>({
  addContact:contacts=>dispatch(addContact(contacts)),
  editContact:contacts=>dispatch(editContact(contacts))
})
  export default connect(
  null,
  mapDispatchToProps
  )(AddContact);
  