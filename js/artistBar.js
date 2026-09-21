import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import * as dfd from "https://cdn.jsdelivr.net/npm/danfojs@1.1.2/lib/src/danfojs-browser/src/index.js";

console.log(dfd);

// const isLocal = window.location.hostname == "127.0.0.1";

export function artistBar(container) {
    // if (isLocal) {
    //     const raw = d3.json("./my_spotify_data/Streaming_History_Audio_2017-2019_0.json")
    //     const data = new dfd.DataFrame(raw);
    // }
    // else {
        const response = fetch("https://github.com/leez-genasi/leez-genasi.github.io/tree/main/my_spotify_data");
        const files = response.json();
        const jsonFiles = files.filter(f => f.name.endsWith(".json"));

        let allData = Promise.all(
            jsonFiles.map(f => d3.json(f.download_url))
        );
        allData = allData.flat();
        const data = new dfd.DataFrame(allData);
    }
    if (data == null) {
        data = await fetch("https://leezgenasi.pythonanywhere.com/top_artists")
    }
    const svg = d3.select(container)
        .append('svg')
        .attr('width', 400)
        .attr('height', 200);
    
    svg.append('g')
        .attr('fill', 'steelblue')
        .selectAll('rect')
        .data(data)
        .join('rect')

/*        
  // Declare the x (horizontal position) scale.
  const x = d3.scaleBand()
      .domain(d3.groupSort(data, ([d]) => -d.frequency, (d) => d.letter)) // descending frequency
      .range([marginLeft, width - marginRight])
      .padding(0.1);
  
  // Declare the y (vertical position) scale.
  const y = d3.scaleLinear()
      .domain([0, d3.max(data, (d) => d.frequency)])
      .range([height - marginBottom, marginTop]);

  // Add a rect for each bar.
  svg.append("g")
      .attr("fill", "steelblue")
    .selectAll()
    .data(data)
    .join("rect")
      .attr("x", (d) => x(d.letter))
      .attr("y", (d) => y(d.frequency))
      .attr("height", (d) => y(0) - y(d.frequency))
      .attr("width", x.bandwidth());

  // Add the x-axis and label.
  svg.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x).tickSizeOuter(0));

  // Add the y-axis and label, and remove the domain line.
  svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).tickFormat((y) => (y * 100).toFixed()))
      .call(g => g.select(".domain").remove())
      .call(g => g.append("text")
          .attr("x", -marginLeft)
          .attr("y", 10)
          .attr("fill", "currentColor")
          .attr("text-anchor", "start")
          .text("↑ Frequency (%)"));
    */
    return svg;
// }