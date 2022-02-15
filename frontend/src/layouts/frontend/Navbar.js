import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";

const Navbar = () => {

    const history = useHistory();

    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post('api/logout').then(res => {
            if (res.data.status === 200) {

                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: res.data.message,
                    showConfirmButton: false,
                    timer: 1500
                  });
                history.push('/');

            }
        })

    }

    var authButton = "";

    if (!localStorage.getItem('auth_token')) {
        authButton = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
            </ul>
        );
    } else {
        authButton = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <button type='button' className="nav-link btn btn-danger btn-sm text-white" onClick={logoutSubmit}>Logout</button>
                </li>
            </ul>
        );
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
            <div className='container'>
                <Link className="navbar-brand" to="#">Ecommerce</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Collection</Link>
                        </li>
                        {authButton}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;