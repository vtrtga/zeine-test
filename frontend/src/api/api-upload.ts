import axios from "axios";

const BASE_API = process.env.NEXT_PUBLIC_BASE_UPLOAD_API || '';
const API_KEY = process.env.NEXT_PUBLIC_UPLOAD_API_KEY || '';
const uploadFile = async (file: File): Promise<string> => {
    try {
        const formData = new FormData();
        formData.append('key', API_KEY);
        formData.append('image', file);
        const res = await axios.post(BASE_API, formData);

        return res.data.data.url as string;
    } catch (err) {
        console.log(err, 'Falha no upload de arquivo');
        throw err;
    }
}

export default uploadFile;