import axios from "axios";
import { useState } from "react";
import Swal from 'sweetalert2'

import Navbar from "../../../layouts/frontend/Navbar";
import { useHistory } from "react-router-dom";

const Login = () => {

    const history = useHistory();

    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],
    })

    const handleInput = (e) => {
        e.persist();
        setLogin({ ...loginInput, [e.target.name]: e.target.value });
    }

    const loginSubmit = (e) => {
        e.preventDefault();

        const data = {
            email : loginInput.email,
            password : loginInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            
            axios.post('api/login', data).then(res => {

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
    
                }else if (res.data.status === 401) {
                    
                    Swal.fire({
                        position: 'top-end',
                        icon: 'warning',
                        title: res.data.message,
                        showConfirmButton: false,
                        timer: 1500
                      });

                } else {
                    
                    setLogin({...loginInput, error_list: res.data.validation_error});
    
                }
    
            });

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
                                <h3>Login</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={loginSubmit}>
                                    <div className="form-group mb-3">
                                        <label>Email</label>
                                        <input type="email" name="email" className="form-control" onChange={handleInput} value={loginInput.email} />
                                        <span className="text-danger">{loginInput.error_list.email}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="password" name="password" className="form-control" onChange={handleInput} value={loginInput.password} />
                                        <span className="text-danger">{loginInput.error_list.password}</span>
                                    </div>
                                    <div className="form-group d-flex  justify-content-end mb-3">
                                        <button type="submit" className="btn btn-primary" >Login</button>
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
 
export default Login;