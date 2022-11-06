import { Link } from 'react-router-dom';

const Header = () => {

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
                </ul>
            </nav>
        </div>
        </>
    )

}

export default Header;