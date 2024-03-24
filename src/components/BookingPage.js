import React, {useState} from "react";


function BookingForm(props) {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
        console.log("reservation successful")
    };

    const handleChange = (e) => {
        setDate(e);

    };

    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    return(
        <div className="form-container">
            <form onSubmit={handleSubmit}>
            <div className="form-header"><h6>Make a Reservation</h6></div>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={(e) => handleChange(e.target.value)} required />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={(e) => {setTime(e.target.value)}} required >
                    <option>Select a Time</option>
                    {availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => {setGuests(e.target.value)}} required />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => {setOccasion(e.target.value)}} required >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button type="submit">Make a Reservation</button>
            </form>
        </div>
    );
}

function BookingPage() {
    return <BookingForm/>;
}

export default BookingPage;