import React from "react";
import { UserContext } from "../../UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const {login} = React.useContext(UserContext)

    switch(login){
        case null:
            return null
        case true:
            return children
        case false:
            return <Navigate to='/login' />
    }
}

export default ProtectedRoute