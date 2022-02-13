import Navbar from "../../../layouts/frontend/Navbar";

const Login = () => {
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
                                <form>
                                    <div className="form-group mb-3">
                                        <label>Email</label>
                                        <input type="email" name="email" className="form-control" value="" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="password" name="password" className="form-control" value="" />
                                    </div>
                                    <div className="form-group d-flex  justify-content-end mb-3">
                                        <button type="submit" className="btn btn-primary" value="">Login</button>
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