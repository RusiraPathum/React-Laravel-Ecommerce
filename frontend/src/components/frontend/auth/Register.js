import { useState } from "react";
import axios from 'axios';
import Navbar from "../../../layouts/frontend/Navbar";

const Register = () => {

    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleInput = (e) => {
        e.presist();
        setRegister({...registerInput, [e.target.name]: e.target.value});
    }

    const registerSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        }

        axios.post('/api/register', data).then(res => {

        });

    }

    return ( 
        <div>
            <Navbar/>
            
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card border border-dark rounded">
                            <div className="card-header">
                                <h3>Register</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={registerSubmit}>
                                    <div className="form-group mb-3">
                                        <label>Full Name</label>
                                        <input type="text" name="name" className="form-control" onChange={handleInput} value={registerInput.name} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Email</label>
                                        <input type="email" name="email" className="form-control" onChange={handleInput} value={registerInput.email} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="password" name="password" className="form-control" onChange={handleInput} value={registerInput.password} />
                                    </div>
                                    <div className="form-group d-flex  justify-content-end mb-3">
                                        <button type="submit" className="btn btn-primary" value="">Register</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Register;