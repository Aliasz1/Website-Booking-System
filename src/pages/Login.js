import React from "react";

const Login = () => {
    return(
        <>
            <div className="mx-auto px-128">
                <div className="mx-5 rounded bg-white shadow-xl py-5 px-10">
                    <h1 className="my-8 text-center text-2xl">Login</h1>
                    <form className="space-y-5">
                        <div><label>email</label></div>
                        <div><input type="text" name="email" placeholder="Your Email" /></div>
                        <div><label>Password</label></div>
                        <div><input type="password" name="password" placeholder="Your Password" /></div>
                        <br />

                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;