const BookForm = () => {
    return(
        <>
        <div class='grid grid-cols-1 w-1/3 mx-auto bg-white text-center shadow-xl py-10 px-10 rounded uppercase'>
            <h1 class='pb-10 text-xl'>Booking Form</h1>
            <form class='place-self-center'>
            <div class='grid grid-cols-2 gap-5 text-left'>
                <label for="Bdate">Date:</label>
                <input type="date" id="Bdate" name="Bdate" className="rounded"/>
            </div>
            <br/>
            <input type="submit" value="Submit" className="rounded px-5 py-2 border hover:outline outline-ubd-teal"/>
            </form>
        </div>
        </>
    )
}

export default BookForm;