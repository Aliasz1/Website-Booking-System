import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/user';

const Header = () => {

    const { logOutUser } = useContext(UserContext);
 
    // This function is called when the user clicks the "Logout" button.
    const logOut = async () => {
      try {
        // Calling the logOutUser function from the user context.
        const loggedOut = await logOutUser();
        // Now we will refresh the page, and the user will be logged out and
        // redirected to the login page because of the <PrivateRoute /> component.
        if (loggedOut) {
          window.location.reload(true);
        }
      } catch (error) {
        alert(error)
      }
    }

    return(
        <>
        <div className='sticky top-0 z-30 px-10 bg-white opacity-75 py-10 grid grid-cols-2'>
            <Link to="/">UBD COUNSELING</Link>
            <nav>
                <ul className='list-none flex flex-row justify-end space-x-5'>
                    <li><Link to="/" className='hover:underline underline-offset-8'>Home</Link></li>
                    <li><Link to="/About" className='hover:underline underline-offset-8'>About</Link></li>
                    <li><Link to="/Contact" className='hover:underline underline-offset-8'>Contact</Link></li>
                    <li><Link to="/Dashboard" className='hover:underline underline-offset-8'>Dashboard</Link></li>
                    <li>|</li>
                    <li><Link to="/Login" className='hover:underline underline-offset-8 font-bold'>Login</Link></li>
                    <li><Link to="/Signup" className='hover:underline underline-offset-8 font-bold'>Signup</Link></li>
                </ul>
            </nav>
        </div>
        <button onClick={logOut}>Logout</button>
        </>
    )

}

export default Header;