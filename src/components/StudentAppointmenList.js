import React from "react";

const StudentAppointmenList = () => {
    const [appointments, setAppointments] = React.useState([]);

    React.useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = () => {
        const mockDBAppointments = [
            {
                "counselor": "Zakwan",
                "active": true,
                "date": "20/20/2020",
            },
            {
                "counselor": "Abizar",
                "active": true,
                "date": "20/20/2020",
            },
            {
                "counselor": "Zakwan",
                "active": true,
                "date": "20/20/2020",
            },
            {
                "counselor": "Zakwan",
                "active": false,
                "date": "20/20/2020",
            },
            {
                "counselor": "Zakwan",
                "active": true,
                "date": "20/20/2020",
            }
        ];

        setAppointments(mockDBAppointments);
    };

    return (
        <div class='grid grid-cols-1 w-2/3 mx-auto bg-white text-center shadow-xl py-10 px-10 rounded uppercase'>
            <h1 class='pb-10 text-xl'>{appointments.length ? "You have the following appointments:" : "You don't have any appointment at the moment."}</h1>
            {appointments.length !== 0 && (
                <ul class="space-y-1 text-left max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
                    {appointments?.map(appointment => (
                        <li>
                            On {appointment.date} with {appointment.counselor} {!appointment.active && "(Pending for Acceptence)"}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default StudentAppointmenList;