import './Register.css';
import {Form} from "react-bootstrap";
import Button from "../Button/Button";
import {Link} from "react-router-dom";


function Register() {

    return (
            <div
                className="register-page w-full bg-white rounded-lg shadow">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Create an account
                    </h1>
                    <Form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="fullName"
                                   className="input-field-label">Full
                                Name</label>
                            <input type="name" name="fullName" id="fullName"
                                   className="input-field"                                   placeholder="John Doe" required=""/>
                        </div>
                        <div>
                            <label htmlFor="email"
                                   className="input-field-label">Email</label>
                            <input type="email" name="email" id="email"
                                   placeholder="email@a.com"
                                   className="input-field"                                   required=""/>
                        </div>
                        <div>
                            <label htmlFor="password"
                                   className="input-field-label">Password</label>
                            <input type="password" name="password" id="password"
                                   placeholder="**********"
                                   className="input-field"
                                   required=""/>
                        </div>
                            <Button
                                value={"Sign up"}
                            />
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/login"
                                                            className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login
                                here</Link>
                            </p>
                    </Form>
                </div>
            </div>

    );

}

export default Register;