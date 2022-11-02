const Profile = () => {

    return(
        <>
        <div className='grid grid-cols-3 mx-10 shadow-lg p-5 bg-white rounded'>
            <div className=" border grid grid-cols-1 divide-y">
                <p>Profile</p>
                <p>Details</p>
                <p>Appointments</p>
                <p>Settings</p>
                <p>Log Out</p>
            </div>
            <div className='max-w-max mx-auto col-span-2'>
                <div className='z-10 max-w-xs max-h-xs rounded-full'>
                    <img className='' src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_206976.png&f=1&nofb=1&ipt=bb72918a8f1ed770fb7610bff7e9c6ae9bc782d077ce61febb39cd2d33092f23&ipo=images" alt="profile logo"/>
                </div>
                <div className='z-0'>
                    <p className='text-5xl text-center'>Full Name</p>
                </div>
            </div>
        </div>
        </>
    )

}

export default Profile;