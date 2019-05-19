import {ADD,DELETE,EDIT,GET_ALL} from "../actions/actions"


const movieReducer = (state={},action)=>{

    switch(action.type){
        case GET_ALL : return {...state,contacts:action.contacts}
        case ADD:return {...state,contacts:state.contacts.concat(action.contact)}
        case DELETE:      
            return {...state,contacts:state.contacts.filter(m=>m._id!==action._id)}
        case EDIT:
            return {...state,contacts:state.contacts.map(m=>{
                if(m._id===action.contact._id)
                    return action.contact
                return m
            })}

        default: return state
    }

}

export default movieReducer