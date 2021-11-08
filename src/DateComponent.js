function DateComponent(props) {

    let monthsString = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let daysOFWeekString = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let date = new Date();

    const day = date.getDate();
    const month = monthsString[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOFWeekString[date.getDay()];

    return (
        <div className="title">
            <div className="title__date">
                <div className="date-day">{day}</div>
                <div className="date">
                    <div className="date-month">{month}</div>
                    <div className="date-year">{year}</div>
                </div>
            </div>
            <div className="title__day-of-week">
                {dayOfWeek}
            </div>
        </div>
    )
}

export default DateComponent;