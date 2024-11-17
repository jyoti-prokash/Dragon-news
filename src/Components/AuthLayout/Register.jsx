import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(authContext)
    const handleRegister = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email,password)
        .then((res)=>{
            console.log(res);
            alert('Register success')
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div className="card bg-base-100 max-w-2xl shrink-0 my-10 mx-auto">
            <form onSubmit={handleRegister} className="card-body">
                <h2 className='text-center text-2xl font- text-blue-600 font-bold'>Register your account</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="URL" name='photo' className="input input-bordered" required />
                </div>
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
                <p>have a account? <Link to="/auth/login"><span className='text-red-600 font-bold'>Login</span></Link></p>
            </form>
        </div>
    );
};

export default Register;