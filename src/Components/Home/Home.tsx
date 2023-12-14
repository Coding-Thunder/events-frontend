import React, { useCallback, useEffect, useState } from "react"
import "./Home.css"
import CreateEvent from "../CreateEvent/CreateEvent"
import CreateRequests from "../utils/Axios"


const Home: React.FC = () => {
    const [show, setShow] = useState(false)
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])

    const toogleShow = () => {
        setShow(!show)
    }

    const fetchEvents = useCallback(async () => {
        try {
            let response = await CreateRequests.get('/event', { params: { page } })
            if (response.data) {
                let { data } = response.data
                setData(data)
            }

        } catch (error: any) {
            console.log(error.message)
        }
    }, [page])

    useEffect(() => {
        fetchEvents()
        setShow(false)
    }, [fetchEvents, page])
    return (
        <>
            {show ? (
                <CreateEvent event={toogleShow} />
            ) : (
                <div>

                    <div className="Home__Header">
                        <p className="Form__Label">Upcomming Events</p>

                        <div>
                            <p style={{ color: "red" }} className="Form__Label Home__Text">** This Screen Is Not Responsive As Per Not Required By The Assignment</p>
                            <button className="Home__Button" onClick={toogleShow}>Add New</button>
                        </div>
                    </div>

                    <div className="Event__Listing">
                        {data.map((event: Record<string, any>) => (
                            <div className="Event__Card">
                                <p><span className="Form__Label">Name : </span><span>{event.eventName}</span></p>
                                <p><span className="Form__Label">Time : </span><span>{event.time} PM</span></p>
                                <p><span className="Form__Label">Duration : </span><span>{event.duration}</span></p>
                                <p><span className="Form__Label">Guests : </span><span>{event.guests}</span></p>
                                <p><span className="Form__Label">Location : </span><span>{event.location}</span></p>
                                <p><span className="Form__Label">Reminder : </span><span>{event.reminder}</span></p>
                                <p><span className="Form__Label">Notification : </span><span>{event.notification}</span></p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className="SaveEventSection">
                <button onClick={() => {
                    if (page > 1) {
                        setPage(page-1)
                        fetchEvents()
                    }
                }} className="CancelButton" >Prev</button>
                <button onClick={() => {
                    setPage(page + 1)
                    fetchEvents()
                }} className="CreateButton">Next</button>

            </div>
        </>
    )
}

export default Home