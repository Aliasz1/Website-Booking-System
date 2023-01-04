import React from "react";

const StudentCalendar = () => {
    const [counselors, setCounselours] = React.useState([]);
    const [activeCounselorForCalendar, setActiveCounselorForCalendar] = React.useState("");

    React.useEffect(() => {
        fetchCounselors();
    }, []);

    React.useEffect(() => {
        setActiveCounselorForCalendar(counselors[0]?.calendarID);
    }, [counselors]);

    const fetchCounselors = () => {
        const mockDBCounselors = [
            {
                "name": "Zakwan",
                "calendarID": "cmszbWJzcTA0cWpwc2Ntc25lcjlpMHVpcDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
            },
            {
                "name": "Abizar",
                "calendarID": "YWJpemFyLmhhamlsZW1hbkBnbWFpbC5jb20"
            }
        ];

        setCounselours(mockDBCounselors);
    };

    return (
        <div class='grid grid-cols-1 w-2/3 mx-auto bg-white text-center shadow-xl py-10 px-10 rounded uppercase'>
            <div className="flex justify-center">
                <iframe src={`https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FBrunei&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=${activeCounselorForCalendar}&color=%23C0CA33`}
                    title="Schedule"
                    width="800"
                    height="600"
                    frameborder="0"
                    scrolling="no"
                    className="shadow-lg rounded bg-calendar"
                />
            </div>
            <label class='my-10' for="counselor">Counselor: </label>

            <select onChange={(event) => setActiveCounselorForCalendar(event.target.value)} name="counselor">
                {counselors.map(counselor => (
                    <option value={counselor.calendarID}>{counselor.name}</option>
                ))}
            </select>

        </div>
    )
}

export default StudentCalendar;