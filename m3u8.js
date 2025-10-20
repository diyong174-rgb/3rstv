// api/m3u8.js
export default function handler(req, res) {
    const m3u8FileUrl = 'https://live20.bozztv.com/giatvplayout7/giatv-210631/tracks-v1a1/mono.ts.m3u8';

    // Allow cross-origin requests
    res.setHeader('Access-Control-Allow-Origin', '*'); // Or specify your frontend URL instead of '*'
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Set the content type to m3u8
    res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
    
    // If the request is a preflight (OPTIONS request), respond immediately
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Redirect the request to the actual M3U8 file
    res.redirect(m3u8FileUrl); // Redirect the request to your M3U8 file
}
