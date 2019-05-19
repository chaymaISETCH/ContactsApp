import React,{Component} from 'react';
import './App.css';
import Header from "./components/header/Header"
import {getAll} from "./redux/actions/actions"
import {connect} from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddContact from "./components/addContact/AddContact";
import ContactsList from "./components/contactsList/ContactsList.js";
import withLoading from "./components/HOCs/withLoading";

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      isLoading:true,
      isEmpty:false
    }
  }
  getAllContacts=()=>{
    
      fetch('http://localhost:8888/contacts', {
        method: 'get',
      }).then((response)=> {
        return response.json();
      }).then((contacts)=> {
        console.log(contacts)
        this.props.getAll(contacts)
        contacts.length===0?this.setState({isEmpty:true,isLoading:false}):this.setState({isEmpty:false,isLoading:false})
      }).catch(e=>
        console.log("error"+e))
    }
  
  componentDidMount(){
    this.getAllContacts()
  }
render(){
  const Wrapped = withLoading(ContactsList)
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={()=><Wrapped isLoading={this.state.isLoading}   isEmpty={this.state.isEmpty}/>} />
        <Route exact path="/addContact" component={AddContact} />
      </div>
    </Router>
  );
}}

const mapDispatchToProps=dispatch=>({
  getAll:contacts=>dispatch(getAll(contacts))
})
  export default connect(
  null,
  mapDispatchToProps
  )(App);
  
