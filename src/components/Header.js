function Header() {

    return(
        <>
        <div className='tracking-wide sticky top-0 z-30 px-10 bg-dark-gray py-10 grid grid-cols-2 text-white'>
            <p>UBD HEP Counseling</p>
            <ul className='list-none flex flex-row justify-end space-x-5 font-sans '>
                <li><a className='hover:underline underline-offset-8' href="../pages/Home.page.js">Home</a></li>
                <li><a className='hover:underline underline-offset-8' href="../pages/Info.page.js">Info</a></li>
                <li><a className='hover:underline underline-offset-8' href="../pages/Contact.page.js">Contact</a></li>
                <li>|</li>
                <li><a className='font-bold' href="../pages/Login.page.js">Login</a></li>
            </ul>
        </div>
        </>
    )

}

export default Header;