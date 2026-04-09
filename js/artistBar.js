import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import * as dfd from "https://cdn.jsdelivr.net/npm/danfojs@1.1.2/lib/src/danfojs-browser/src/index.js";

console.log(dfd);

const isLocal = window.location.hostname == "127.0.0.1";

if (isLocal) {
    const raw = d3.json("./my_spotify_data/Streaming_History_Audio_2017-2019_0.json")
    const data = new dfd.DataFrame(raw);
}
else {
    const response = await fetch("https://github.com/leez-genasi/leez-genasi.github.io/tree/main/my_spotify_data");
    const files = await response.json();
    const jsonFiles = files.filter(f => f.name.endsWith(".json"));

    let allData = await Promise.all(
        jsonFiles.map(f => d3.json(f.download_url))
    );
    allData = allData.flat();
    const data = new dfd.DataFrame(allData);
}

export function artistBar(container, data) {
    const svg = d3.select(container)
        .append('svg')
        .attr('width', 400)
        .attr('height', 200);

  svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', (d, i) => i * 50 + 50)
        .attr('cy', 100)
        .attr('r', d => d)
        .attr('fill', 'blue');
}