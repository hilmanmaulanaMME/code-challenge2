// pages/api/contentful.js
import { createClient } from 'contentful';

const client = createClient({
    space: 'xi86bd2fi1m0',
    accessToken: 'PTutdaYJbmTQLUlZHvXNJIFDTlp551nAMz9lh6AyGL0',
});

export default async function handler(req, res) {
    try {
        const entry = await client.getEntries({
            content_type: 'services'
        });
        res.status(200).json(entry);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
