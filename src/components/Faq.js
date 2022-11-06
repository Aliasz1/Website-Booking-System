const Faq = () => {
    return(
        <>
        <div className="bg-white grid grid-cols-1 divide-y mx-5 p-5 rounded-lg">
            <div className="pb-5 text-3xl text-center"><h3>Frequently Asked Questions</h3></div>
            <div className="py-5">
                <div className="grid grid-cols-1 space-y-5">
                    <h2 className="text-2xl">How do i register for counseling?</h2>
                    <p>
                        Student who wish to go for counseling may contact the counselors through
                        the Contact Form above. Counselors will check the request and contact you through the email you enter.
                        Once approved, student will be given login details for their profile.
                    </p>
                </div>
            </div>
            <div className="py-5">
                <div className="grid grid-cols-1 space-y-5">
                    <h2 className="text-2xl">Who is eligible for counseling?</h2>
                    <p>All UBD students are allowed. Non-UBD students may contact us for further scanning.</p>
                </div>
            </div>
            <div className="py-5">
                <div className="grid grid-cols-1 space-y-5">
                    <h2 className="text-2xl">How do i book an appointment?</h2>
                    <p>Students can book an appointment with their assigned counselor through the booking form in their account dashboard.</p>
                </div>
            </div>
            <div className="py-5">
                <div className="grid grid-cols-1 space-y-5">
                    <h2 className="text-2xl">Question 4</h2>
                    <p>Answer 4</p>
                </div>
            </div>
            <div className="py-5">
                <div className="grid grid-cols-1 space-y-5">
                    <h2 className="text-2xl">Question 5</h2>
                    <p>Answer 5</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Faq;