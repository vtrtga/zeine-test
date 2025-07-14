import axios from "axios";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_API,
    headers: {
        'Cache-Control': 'no-cache',
    }
});

export default api;