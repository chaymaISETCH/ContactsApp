export const ADD = "ADD"
export const DELETE ="DELETE"
export const EDIT ="EDIT"
export const GET_ALL = "GET_ALL"

export const addContact=(contact)=>{
    return {type : ADD,contact}
}
export const getAll=(contacts)=>{
    return {type : GET_ALL,contacts}
}
export const deleteContact=(_id)=>{
    return {type : DELETE,_id}
}
export const editContact=(contact)=>{
    return {type : EDIT,contact}
}

