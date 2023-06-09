import {useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import {AuthContext} from "../../contexts/AuthContext";
import * as authServ from "../../services/authService"

const Logout = () => {
    const navigate = useNavigate();
    const {user, logout} = useContext(AuthContext);

    useEffect(() => {
        authServ.logout(user.accessToken)
            .then(() => {
                logout();
                navigate('/');
            })
            .catch(() => {
                navigate('/');
            });
    });
    return null;
}

export default Logout;