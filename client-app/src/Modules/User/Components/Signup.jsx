import React, { useState } from "react";

const Signup = () => {
    const [newUser, setNewUser] = useState({
        user_name: "",
        email: "",
        password: "",
        dob: "",
    });
    let changeHandler = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }
    let submitHandler = (e) => {
        e.preventDefault();
        console.log(newUser);
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header">
                               <h3>Sign Up</h3>
            </div>
                            <div className="card-body">
                                <form onSubmit={submitHandler}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Your Name"
                                            name="user_name"
                                            onChange={changeHandler}
                                        />
                                        <input
                                            type="email"
                                            className="form-control mt-1"
                                            placeholder="Enter Your Email id"
                                            name="email"
                                            onChange={changeHandler}
                                        />
                                        <input
                                            type="password"
                                            className="form-control  mt-1"
                                            placeholder="Enter Your Password"
                                            name="password"
                                            onChange={changeHandler}
                                        />
                                        <input
                                            type="date"
                                            className="form-control  mt-1"
                                            placeholder="Enter Your date of birth"
                                            name="dob"
                                            onChange={changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="form-control btn btn-info" value="Sign Up" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};
export default Signup;