import './Register.css';
import Button from "../common/Button/Button";
import {Link, useNavigate} from "react-router-dom";
import * as authenticationService from "../../services/authService";
import {withAuthentication} from "../../contexts/AuthContext";


const Register = ({auth}) => {
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');

        authenticationService.register(email, password)
            .then(authData => {
                auth.login(authData);
                navigate('/tasks');
            })
    }

    return (
        <div
            className="register-page w-full bg-white rounded-lg shadow">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Create an account
                </h1>
                <form onSubmit={onSubmit} id="register" className="space-y-4 md:space-y-6">
                    <div>
                        <label htmlFor="username"
                               className="input-field-label">Username</label>
                        <input type="username" name="username" id="username"
                               className="input-field"                                   placeholder="John Doe" required=""/>
                    </div>
                        <div>
                            <label htmlFor="email"
                                   className="input-field-label">Email</label>
                            <input type="email" name="email" id="email"
                                   placeholder="email@gmail.com"
                                   className="input-field"/>
                        </div>
                        <div>
                            <label htmlFor="password"
                                   className="input-field-label">Password</label>
                            <input type="password" name="password" id="register-password"
                                   placeholder="**********"
                                   className="input-field"
                            />
                        </div>
                        <Button className="custom-btn" type="submit" value="Register"/>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <Link to="/login"
                                                           className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login
                            here</Link>
                        </p>
                </form>
            </div>
        </div>

    )
        ;

}

const RegisterWithAuth = withAuthentication(Register);

export default RegisterWithAuth;