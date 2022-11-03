const Login = () => {
    return(
        <>
            <div className="mx-auto px-128">
                <div className="mx-5 rounded bg-white shadow-xl py-5 px-10">
                    <h1 className="my-8 text-center text-2xl">Login</h1>
                    <form className="space-y-5">
                        <div><label>User ID</label></div>
                        <div><input type="text" name="uid" className="rounded"/></div>
                        <div><label>Password</label></div>
                        <div><input type="password" name="pass" className="rounded"/></div>
                        <br />
                        <input type="submit" value="Submit" className="rounded border py-2 px-5" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;