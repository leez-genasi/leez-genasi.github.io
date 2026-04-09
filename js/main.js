import * as d3 from "./node_modules/d3/index.js";
import { artistBar } from "./artistBar.js";

const data = await fetch("https://leezgenasi.pythonanywhere.com/data")
    .then(r => r.json());

const artistBarContainer = document.getElementById("artist-bar");
artistBar(artistBarContainer, data);