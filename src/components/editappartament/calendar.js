import { format, isValid } from "date-fns";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useDispatch } from "react-redux";
import { FormingChange } from "../../store/actions/cooperateAction";

const CalendarEdit = ({ calItem }) => {
    const dispatch = useDispatch()
    const hourse = [
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
    ];
    const [clientData, setClientData] = useState()
    const [active, setActive] = useState(0)
    const [date, setDate] = useState(new Date());

    const [disabledDateRanges, setDisabledDateRanges] = useState([]);



    useEffect(() => {
        setDisabledDateRanges(calItem)
    }, [calItem])

    const minDate = new Date();
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    const handleMinuteChange = (newMinutes) => {
        const [hours, minutes] = newMinutes.split(":");
        const newDate = new Date(date);
        newDate.setHours(hours);
        setDate(newDate);
    };

    const isDateDisabled = (date) => {
        return disabledDateRanges?.some(({ start, end }) => {
            const minHour = start?.getHours()
            const maxHour = end?.getHours()
            return (
                date > start && date < end
                && date >= minDate && date < maxDate &&
                (date?.getHours() <= minHour || date?.getHours() >= maxHour)

            );
        });
    };

    const getTileClassName = ({ date, view }) => {
        if (view === "month" && isDateDisabled(date)) {
            return "disabled";
        }
        return null;
    };

    const renderTileContent = ({ date, view }) => {
        if (isDateDisabled(date)) {
            return (
                <div className="disabled-tile" onClick={() => {
                    setActive(1)
                    for (let i = 0; i < disabledDateRanges?.length; i++) {
                        if (date >= disabledDateRanges?.[i].start && date <= disabledDateRanges?.[i].end) {
                            setClientData(disabledDateRanges?.[i])
                            break
                        }
                    }
                }}>
                    {date.getDate()}
                </div>
            );
        } else {

            return <div onClick={() => {
                setActive(0)
                setClientData()
            }}>{date.getDate()}</div>;
        }
    };

    const handleClientDataChange = (e) => {
        clientData[e.target.name] = e.target.value;
        setClientData({ ...clientData })
    }

    const handleClientSubmit = (e) => {
        e.preventDefault()
        dispatch(FormingChange(clientData))
    }

    return (

        <div style={{ display: "flex", border: "1px solid black" }}>
            <Calendar
                onChange={handleDateChange}
                value={date}
                minDate={minDate}
                maxDate={maxDate}
                tileDisabled={({ date }) => isDateDisabled(date)}
                tileClassName={getTileClassName}
                tileContent={renderTileContent}
            />

            <div className="verticalHours">
                {hourse.map((hour) => {

                    const [hours, minutes] = hour.split(":");
                    const time = new Date(date);
                    time.setHours(hours);
                    const isActive = time.getTime() === date.getTime();
                    const isDisabled = isDateDisabled(time);
                    const className = `hour ${isActive ? "activeHour" : ""} ${isDisabled ? "disabledHour" : ""}`;

                    return (
                        <div key={hour} className={className} onClick={() => handleMinuteChange(hour)}>
                            {hour}
                        </div>
                    );
                })}
            </div>
            <div className="last-calendar">
                {active === 1 ? <form className="last-calendar-form" onSubmit={handleClientSubmit}>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <div className="bothinp">
                            <p style={{ fontWeight: 'bold', margin: 0 }}>Անուն</p>
                            <input value={clientData?.first_name} name="first_name" onChange={handleClientDataChange} />
                        </div>
                        <div className="bothinp">
                            <p style={{ fontWeight: 'bold', margin: 0 }}>Ազագնուն</p>
                            <input value={clientData?.last_name} name="last_name" onChange={handleClientDataChange} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <div className="bothinp">
                            <p style={{ fontWeight: 'bold', margin: 0 }}>էլ․ հասցե</p>
                            <input value={clientData?.email} name="email" onChange={handleClientDataChange} />
                        </div>
                        <div className="bothinp">
                            <p style={{ fontWeight: 'bold', margin: 0 }}>Հեռախոսհամար</p>
                            <input type="number" value={clientData?.phone} name="phone" onChange={handleClientDataChange} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <div className="bothinp">
                            <p style={{ fontWeight: 'bold', margin: 0 }}>Վճարողի էլ․ հասցե</p>
                            <input value={clientData?.payeremail} name="payeremail" onChange={handleClientDataChange} />
                        </div>
                        <div className="bothinp">
                            <p style={{ fontWeight: 'bold', margin: 0 }}>Երկրորդ հեռախոսհամար</p>
                            <input type="number" value={clientData?.second_phone} name="second_phone" onChange={handleClientDataChange} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <div className="bothinp">
                            <p style={{ fontWeight: 'bold', margin: 0 }}>Լրացուցիչ մահճակալ</p>
                            <input value={clientData?.bed} name="bed" onChange={handleClientDataChange} />
                        </div>
                        <div className="bothinp">
                            <p style={{ fontWeight: 'bold', margin: 0 }}>Անձանց քանակ</p>
                            <input type="number" value={clientData?.people} name="people" onChange={handleClientDataChange} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <div className="bothinp">
                            <p style={{ fontWeight: 'bold', margin: 0 }}>Գին</p>
                            <input value={clientData?.price} name="price" onChange={handleClientDataChange} />
                        </div>

                        <button style={{ alignSelf: 'flex-start', marginTop: 20 }}>Հաստատել</button>
                    </div>


                </form> : <>
                    <h4 style={{ margin: '5px 0', textAlign: 'center' }}>ԴԱՏԱՐԿ</h4>
                </>
                }
            </div>
        </div>

    );
}

export default CalendarEdit;