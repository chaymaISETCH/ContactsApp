import React from "react"
import Loading from "./Loading"
const withLoading = (Component)=>{
    return props=>{
        if(props.isLoading)
            return <Loading />
        else {
            if(props.isEmpty)
                return <p className="parag">Empty contacts list</p>
            return <Component/>
        }
}}
export default withLoading