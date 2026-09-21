import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import * as dfd from "https://cdn.jsdelivr.net/npm/danfojs@1.1.2/lib/src/danfojs-browser/src/index.js";

console.log(dfd);

const isLocal = window.location.hostname == "127.0.0.1";

export function summary(container) {
    const { artist_summary, songs_summary, album_summary } = await fetch("https://leezgenasi.pythonanywhere.com/summary");
    const summary = `Your most played artists are ${top_artist}. Your most played songs are ${top_song}.`;
    return summary;
}