import StudentAppointmenList from "../../components/StudentAppointmenList";
import StudentBookForm from "../../components/StudentBookForm";
import StudentCalendar from "../../components/StudentCalendar";

const counselors = [
    {
        "name": "Zakwan",
        "calendarID": "cmszbWJzcTA0cWpwc2Ntc25lcjlpMHVpcDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
    },
    {
        "name": "Abizar",
        "calendarID": "YWJpemFyLmhhamlsZW1hbkBnbWFpbC5jb20"
    }
];

const StudentBookingContent = () => {
    return (
        <div class="flex flex-col space-y-8">
            <div><StudentCalendar /></div>
            <div><StudentAppointmenList /></div>
            <div><StudentBookForm /></div>
        </div>
    )
}

export default StudentBookingContent;