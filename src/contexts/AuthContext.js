import {createContext, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {useLocalStorage} from "../hooks/useLocalStorage";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useLocalStorage("authAuth", {});
    const navigateTo = useNavigate();

    // call this function when you want to authenticate the auth

    const login = (authData) => {
        setAuth(authData);
        navigateTo("/taskcatalog");
    }

// call this function to sign out logged in auth
    const logout = () => {
        setAuth({});
        navigateTo("/");
    }

    return (
        <AuthContext.Provider value={
            {
                user: auth,
                login,
                logout,
                isAuthenticated: !!auth.accessToken
            }
        }>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuthentication = () => {
    return useContext(AuthContext);
}


export const withAuthentication = (Component) => {
    const AuthWrapper = (props) => {
        const context = useContext(AuthContext);
        return <Component {...props} auth={context}/>
    }
    return AuthWrapper;
}