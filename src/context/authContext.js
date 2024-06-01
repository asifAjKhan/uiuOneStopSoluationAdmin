import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

   // const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = async (inputs, config) => {
        const res = await axios.post("http://localhost:5000/admin/login", inputs, config);
        setCurrentUser(res.data)
    };

    const logout = async (inputs,config) => {
        await axios.get("http://localhost:5000/admin/logout",{ } , { withCredentials: true });
        setCurrentUser(null);

    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    },[currentUser])


    return (
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )




    
}