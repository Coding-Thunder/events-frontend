import axios from "axios";


const CreateRequests = axios.create({
    baseURL: 'https://events-qsn4e9vks-coding-thunder.vercel.app/',
    headers: {
        "Content-Type": "application/json",
    },
    // .. other options
});

export default CreateRequests
