import { Link } from 'react-router-dom';

const Footer = () => {

    return(
        <>
        <div className='bg-dark-gray px-10 font-sans border-black shadow pb-10 text-white'>
            <h1 className='py-10'>UBD HEP Counseling</h1>
            <div className='grid grid-cols-3'>
                <div>
                    <p>Address</p>
                    <br />
                    <p>Student Affairs Section building,</p>
                    <p>Universiti Brunei Darussalam,</p>
                    <p>Jalan Tungku Link, BE 1410,</p>
                    <p>Brunei Darussalam</p>
                </div>
                <div>
                    <p>Navigation</p>
                    <br />
                    <ul className='list-none flex flex-col space-y-2 font-sans'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Info">Info</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <p>Contact</p>
                    <br />
                    <p>Office: +673 246 0922 / 246 0923 ext 1920</p>
                    <p>Email: office.hep@ubd.edu.bn</p>
                    <p>Fax: +673 246 0561</p>
                </div>
            </div>

        </div>
        </>
    )

}

export default Footer;