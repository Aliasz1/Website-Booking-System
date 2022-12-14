const ContactForm = () => {
    return(
        <>
        <div class='grid grid-cols-1 w-1/3 mx-auto bg-white text-center shadow-xl py-10 px-10 rounded uppercase'>
            <h1 class='pb-10 text-xl'>Contact Form</h1>
            <form class='place-self-center'>
            <div class='grid grid-cols-2 gap-5 text-left'>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname" className="rounded"/>
                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname" className="rounded"/>
                <label for="Email">Email:</label>
                <input type="email" id="Email" name="email" className="rounded"/>
                <label for="infobox">Info:</label>
                <input type="text" id="infobox" name="Info" className="rounded"/>
            </div>
            <br/>
            <input type="submit" value="Submit" class='rounded px-5 py-2 border hover:outline outline-ubd-teal'/>
            </form>
        </div>
        </>
    )
}

export default ContactForm;