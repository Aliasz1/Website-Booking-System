import { Link } from 'react-router-dom';

const Footer = () => {

    return(
        <>
        <div className='bg-ubd-dark-blue px-10 border-black shadow pb-10 text-white'>
            <h3 className='py-10 text-xl'>UBD COUNSELING</h3>
            <div className='grid grid-cols-3'>
                <div>
                    <h1 className='font-bold'>Address</h1>
                    <br />
                    <p>Student Affairs Section building,</p>
                    <p>Universiti Brunei Darussalam,</p>
                    <p>Jalan Tungku Link, BE 1410,</p>
                    <p>Brunei Darussalam</p>
                </div>
                <div>
                    <h1 className='font-bold'>Navigation</h1>
                    <br />
                    <ul className='list-none flex flex-col space-y-2'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold'>Contact</h1>
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