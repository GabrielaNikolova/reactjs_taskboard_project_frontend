import {createContext, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {useLocalStorage} from "../hooks/useLocalStorage";


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useLocalStorage("userAuth", {});
    const navigateTo = useNavigate();

    // call this function when you want to authenticate the user

    const login = (authData) => {
        setUser(authData);
        navigateTo("/dashboard");
    }

// call this function to sign out logged in user
    const logout = () => {
        setUser({});
        navigateTo("/");
    }

    return (
        <AuthContext.Provider value={
            {
                user: user,
                login,
                logout,
                isAuthenticated: !!user.accessToken
            }
        }>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuthentication = () => {
    return useContext(AuthContext);
}


export const withAuthentication = (Component)=>{
    const AuthWrapper = (props) => {
        const context = useContext(AuthContext);
         return <Component {...props} auth = {context} />
    }
    return AuthWrapper;
}