import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { LogInUSer } = useContext(authContext)
    const handleLogin = (e)=>{
        e.preventDefault()
       const email = e.target.email.value;
       const password = e.target.password.value;
        LogInUSer(email,password)
        .then((res)=>{
            alert('log in success');
        })
    }
    return (
        <div className="card bg-base-100 max-w-2xl shrink-0 my-10 mx-auto">
            <form onSubmit={handleLogin} className="card-body">
                <h2 className='text-center text-2xl font-bold text-blue-600'>Login your account</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary bg-[#403F3F] font-bold text-white">Login</button>
                </div>
                <p>Don't have a account? <Link to="/auth/register"><span className='text-red-600 font-bold'>Register</span></Link></p>
            </form>
        </div>
    );
};

export default Login;