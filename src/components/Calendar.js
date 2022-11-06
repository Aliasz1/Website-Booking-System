const Calendar = () => {
    return(
        <>
            <div className="flex justify-center">
                <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FBrunei&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=cmszbWJzcTA0cWpwc2Ntc25lcjlpMHVpcDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23C0CA33" 
                        title="Schedule" 
                        width="800" 
                        height="600" 
                        frameborder="0" 
                        scrolling="no"
                        className="shadow-lg rounded bg-calendar"
                /> 
            </div>
        </>
    )
}

export default Calendar;