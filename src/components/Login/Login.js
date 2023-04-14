import './Login.css';
import {Form} from "react-bootstrap";
import Button from "../Button/Button";


function Login() {

    return (

            <div
                className="login-page w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Sign in to your account
                    </h1>
                    <Form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email"
                                   className="input-field-label">Email</label>
                            <input type="email" name="email" id="email" placeholder="email@a.com"
                                   className="input-field"                                   required=""/>
                        </div>
                        <div>
                            <label htmlFor="password"
                                   className="input-field-label">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                   className="input-field"                                   required=""/>
                        </div>
                        <Button
                            value={"Sign in"}
                        />
                        <p className="text-sm font-light text-gray-500">
                            Don’t have an account yet? <a href="#"
                                                          className="font-medium text-primary-600 hover:underline ">Register</a>
                        </p>
                    </Form>
                </div>
            </div>

    );
}

export default Login;