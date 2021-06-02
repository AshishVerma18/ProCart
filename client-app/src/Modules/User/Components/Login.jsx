import React, { useState } from 'react'

export const Login = () => {
    const [user,setUser]=useState({
        email:"",
        password:""
    })
    let changeHandler=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value,
        })
    }
    let submitHandler=(e)=>{
        e.preventDefault();
        console.log(user);
    }
    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-5">
                    <div className="card">
                        <div className="card-header">
                            <h3>Login</h3>
                        </div>
                            <div className="card-body">
                                <form onSubmit={submitHandler}>
                                    <div className="form-group">
                                        <input type="email" className="form-control " placeholder="Enter Your Email " name="email" onChange={changeHandler}/>
                                        <input type="password" className="form-control mt-2" placeholder="Enter Your Password" name="password" onChange={changeHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className=" btn btn-success form-control" value="Login"/>
                                    </div>
                                </form>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}
export default Login;
