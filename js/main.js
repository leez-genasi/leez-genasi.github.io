import * as d3 from "./node_modules/d3/index.js";
import { artistBar } from "./artistBar.js";
import { summary } from "./summary.js";

const summaryContainer = document.getElementById("summary");
summary(summaryContainer);
const artistBarContainer = document.getElementById("artist-bar");
artistBar(artistBarContainer);