import axios from "axios";


const CreateRequests = axios.create({
    baseURL: 'https://events-booking-ev7s0eq97-coding-thunder.vercel.app',
    headers: {
        "Content-Type": "application/json",
    },
    // .. other options
});

export default CreateRequests
