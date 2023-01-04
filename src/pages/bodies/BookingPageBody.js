import React from "react";
import CounselorBookingContent from "../contents/CounselorBookingContent";
import StudentBookingContent from "../contents/StudentBookingContent";

//The component will render according to the user role.
//Currently the role is hard coded. To implement using token stored in context.

const roleValue = "STUDENT";

const BookingPageBody = () => {
    const [role, setRole] = React.useState(roleValue);

    return (
        <>
            {role === "COUNSELOR" && (
                <CounselorBookingContent />
            )}
            {role === "STUDENT" && (
                <StudentBookingContent />
            )}
        </>
    )
}

export default BookingPageBody;