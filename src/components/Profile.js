const Profile = () => {

    return(
        <>
        <div className='grid grid-cols-3 mx-10 shadow-lg bg-white divide-x rounded-large'>
            <div className="grid grid-cols-1 divide-y">
                <p className="hover:bg-ubd-blue pt-7 pl-5 rounded-tl-large">Profile</p>
                <p className="hover:bg-ubd-blue pt-7 pl-5">Details</p>
                <p className="hover:bg-ubd-blue pt-7 pl-5">Appointments</p>
                <p className="hover:bg-ubd-blue pt-7 pl-5">Settings</p>
                <p className="hover:bg-ubd-blue pt-7 pl-5 rounded-bl-large">Log Out</p>
            </div>
            <div className='col-span-2 py-5'>
                <div className='z-10 mx-auto max-w-xs max-h-xs rounded-full'>
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