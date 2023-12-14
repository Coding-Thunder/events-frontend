// import { useState } from "react";
import Header from "../Header/Header"
import "./CreateEvent.css"
//@ts-ignore
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { TimePicker } from 'antd';
import { useState } from "react";
import ButtonInput from "../ButtonInput/ButtonInput";
import Avatar from "../Avatar/Avatar";
import one from "../../assets/one.jpg"
import two from "../../assets/two.jpg"
import three from "../../assets/three.jpg"
import four from "../../assets/eight.webp"
import { Select } from 'antd';
import File from "../File/File";
import CreateRequests from "../utils/Axios";







interface props {
    event: Function
}

const CreateEvent = ({ event }: props) => {
    const format = 'HH:mm';


    const [eventName, setEventName] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState(dayjs('2:00', format))
    const [duration, setDuration] = useState(dayjs('3:45', format))
    const [location, setLocation] = useState("")
    const [guests, setGuests] = useState("")
    const [notification, setNotification] = useState("slack")
    const [reminder, setReminder] = useState("1hr")




    const images = [one, two, three, four]

    const saveEvent = async () => {
        try {
        let response = await CreateRequests.post("/event",{eventName,date,time,duration,location,guests:guests.split(","),notification,reminder})
        if(response) {
            if(response.status === 200 || response.status === 201) {
                event()
            }
        }


            
        } catch (error) {
            
        }
    }


    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        setDate(dateString)
    };

    const handleChange = (value: string) => {
        setReminder(value)
    };

    return (
        <div className="CreateEvent">
            <Header title="Create Event" event={event} />
            {/* input 1  */}
            <ButtonInput value={eventName} handleChange={setEventName} className="Responsive__Input--1" placeholder="Enter event name" buttonText="Add description" width="79%" title="Event name" />

            {/* input 1 */}

            {/* input 2 */}
            <div className="Date__Time_Duration">
                <div>
                    <p className="Form__Label">Date</p>
                    <DatePicker className="Datepicker__Comp" onChange={onChange} />
                </div>
                <div>
                    <p className="Form__Label">Time</p>
                    <TimePicker onChange={(e: any) => setTime(e ? e.toISOString() : "")} className="Datepicker__Comp" defaultValue={dayjs('02:00', format)} format={format} />
                </div>
                <div>
                    <p className="Form__Label">Duration</p>
                    <TimePicker onChange={(e: any) => setDuration(e ? e.toISOString() : "")} className="Datepicker__Comp" defaultValue={dayjs('3:45', format)} format={format} />
                </div>
            </div>
            {/* input 2  */}
            <p className="Descrption">This event will take place on the May 15, 2023 from 02:00 untill 5:45 PM</p>
            <ButtonInput value={location} handleChange={setLocation} className="Responsive__Input--2" placeholder="Choose Location" buttonText="Set meeting room" width="77%" title="Location" />
            <ButtonInput value={guests} handleChange={setGuests} className="Responsive__Input--3" placeholder="contact@example.com" buttonText="Add" width="88%" title="Add guests" />

            <div className="Avatar__Group">
                {images.map((image) => (
                    <Avatar image={image} />
                ))}
                <div className="Plus__Three">
                    +3
                </div>
            </div>

            <div className="Below__Avatar">
                <div>
                    <p className="Form__Label" >Notification</p>
                    <div className="Notification">
                        <button onClick={() => {
                            setNotification("email")
                        }} 
                        style={{ backgroundColor: notification !== "email" ? "whitesmoke" : "white", boxShadow: notification !== "email" ? "none" : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>Email</button>
                        <button onClick={() => setNotification("slack")} style={{ backgroundColor: notification == "slack" ? "white" : "whitesmoke", boxShadow: notification == "slack" ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" : "none" }} >Slack</button>

                    </div>

                </div>
                <div>
                    <p className="Form__Label" >Set reminder</p>
                    <div className="Set__Reminder">
                        <Select

                            defaultValue="1hr"
                            style={{ width: 120 }}
                            onChange={handleChange}
                            options={[
                                { value: '1hr', label: '1hr' },
                                { value: '.45hr', label: '.45hr' },
                                { value: '.5hr', label: '.5hr' },
                                { value: '.25hr', label: '.25hr', disabled: true },
                            ]}
                        />

                    </div>

                </div>

            </div>
            <div>
                <p className="Form__Label">Upload attachments</p>
                <div className="File__Section" >
                    <div className="File__Area">
                        <button className="Select__File">Select Files</button>
                    </div>
                    <div className="Uploaded__File">
                        <File name="Presentation.ppt" size="1.2mb" />
                    </div>
                </div>
            </div>
            <div className="SaveEventSection">
                <button onClick={() => event()} className="CancelButton" >Cancel</button>
                <button onClick={saveEvent} className="CreateButton">Create Event</button>

            </div>
        </div>

    )
}

export default CreateEvent