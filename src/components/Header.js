import { Link } from 'react-router-dom';

const Header = () => {

    return(
        <>
        <div className='tracking-wide sticky top-0 z-30 px-10 bg-dark-gray py-10 grid grid-cols-2 text-white font-serif'>
            <Link to="/">UBD COUNSELING</Link>
            <nav>
                <ul className='list-none flex flex-row justify-end space-x-5 font-sans '>
                    <li><Link to="/" className='hover:underline underline-offset-8'>Home</Link></li>
                    <li><Link to="/About" className='hover:underline underline-offset-8'>About</Link></li>
                    <li><Link to="/Contact" className='hover:underline underline-offset-8'>Contact</Link></li>
                    <li>|</li>
                    <li><Link to="/Login" className='hover:underline underline-offset-8 font-bold'>Login</Link></li>
                </ul>
            </nav>
        </div>
        </>
    )

}

export default Header;