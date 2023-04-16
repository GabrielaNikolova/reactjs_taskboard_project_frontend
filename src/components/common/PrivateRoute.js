import {useAuthentication} from "../../contexts/AuthContext";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {isAuthenticated} = useAuthentication();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace/>
    }

    return children ? children : <Outlet/>
};

export default PrivateRoute;