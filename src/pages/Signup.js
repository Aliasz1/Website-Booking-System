import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user";
 
const Signup = () => {
 const navigate = useNavigate();
 const location = useLocation();
 
 // As explained in the Login page.
 const { emailPasswordSignup } = useContext(UserContext);
 const [form, setForm] = useState({
   email: "",
   password: ""
 });
 
 // As explained in the Login page.
 const onFormInputChange = (event) => {
   const { name, value } = event.target;
   setForm({ ...form, [name]: value });
 };
 
 
 // As explained in the Login page.
 const redirectNow = () => {
   const redirectTo = location.search.replace("?redirectTo=", "");
   navigate(redirectTo ? redirectTo : "/Dashboard");
 }
 
 // As explained in the Login page.
 const onSubmit = async () => {
   try {
     const user = await emailPasswordSignup(form.email, form.password);
     if (user) {
       redirectNow();
     }
   } catch (error) {
     alert(error);
   }
 };
 
 return (
    <>
        <div className="mx-auto px-128">
            <div className="mx-5 rounded bg-white shadow-xl py-5 px-10">
                <h1 className="my-8 text-center text-2xl">Sign Up</h1>
                <form className="space-y-5">
                    <div><label>email</label></div>
                    <div><input type="text" name="email" placeholder="Your Email" value={form.email} onInput={onFormInputChange} /></div>
                    <div><label>Password</label></div>
                    <div><input type="password" name="password" placeholder="Your Password" value={form.password} onInput={onFormInputChange} /></div>
                    <br />
                    <button onClick={onSubmit}>Sign Up</button>
                </form>

                <p>Have an account already? <Link to="/login">Login</Link></p>
            </div>
        </div>
    </>
)
}
 
export default Signup;