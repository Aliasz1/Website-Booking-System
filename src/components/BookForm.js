const BookForm = () => {
    return(
        <>
        <div class='grid grid-cols-1 mx-auto bg-white text-center shadow-xl py-5 px-10 rounded'>
            <h1 class='pb-10 text-xl'>Booking Form</h1>
            <form class='place-self-center'>
            <div class='grid grid-cols-2 gap-5'>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname" className="rounded"/>
                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname" className="rounded"/>
                <label for="Email">Email:</label>
                <input type="email" id="Email" name="email" className="rounded"/>
                <label for="Bdate">Date:</label>
                <input type="date" id="Bdate" name="Bdate" className="rounded"/>
            </div>
            <br/>
            <input type="submit" value="Submit" class='rounded px-5 py-2 border'/>
            </form>
        </div>
        </>
    )
}

export default BookForm;