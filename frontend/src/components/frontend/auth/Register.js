import { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2'

import Navbar from "../../../layouts/frontend/Navbar";
import { useHistory } from "react-router-dom";

const Register = () => {

    const history = useHistory();

    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({ ...registerInput, [e.target.name]: e.target.value });
    }

    const registerSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {

            axios.post('/api/register', data).then(res => {
                
                if(res.data.status === 200){

                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: res.data.message,
                        showConfirmButton: false,
                        timer: 1500
                      });
                    history.push('/');

                }else{

                    setRegister({...registerInput, error_list: res.data.validation_error});

                }

            });

        });

    }

    return (
        <div>
            <Navbar />

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
                                        <span className="text-danger">{registerInput.error_list.name}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Email</label>
                                        <input type="email" name="email" className="form-control" onChange={handleInput} value={registerInput.email} />
                                        <span className="text-danger">{registerInput.error_list.email}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="password" name="password" className="form-control" onChange={handleInput} value={registerInput.password} />
                                        <span className="text-danger">{registerInput.error_list.password}</span>
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