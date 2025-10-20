// api/m3u8.js
export default function handler(req, res) {
    const m3u8FileUrl = 'https://live20.bozztv.com/giatvplayout7/giatv-210631/tracks-v1a1/mono.ts.m3u8';
    res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
    res.redirect(m3u8FileUrl); // Redirect the request to your M3U8 file
}
