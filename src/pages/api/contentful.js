// pages/api/contentful.js
import { createClient } from 'contentful';

const client = createClient({
    space: 'yspsvdm3fjjk',
    accessToken: 'pRIbrhF7rxyBkLTPnvVFGoRtBr5zDrsLPTKWTZQq-7I',
});

export default async function handler(req, res) {
    try {
        const entry = await client.getEntry('sXPFpyUfeBIW6vLOJl40f'); // Ganti dengan ID entri yang sesuai
        res.status(200).json(entry);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
