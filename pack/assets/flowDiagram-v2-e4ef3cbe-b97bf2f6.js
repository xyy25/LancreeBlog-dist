import { p as parser$1, f as flowDb } from "./flowDb-01624e90-df4ac4c3.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-4fcf332f-fd3c9b03.js";
import { a8 as setConfig } from "./mermaid.core-38876abe.js";
import "./layout-861f4cdc.js";
import "./app-e3cb9e55.js";
import "./index-892ad7fb-bc6b63e8.js";
import "./edges-c959041a-646b0aef.js";
import "./createText-b670c180-df9d40ff.js";
import "./svgDraw-b48a99d5-29841c1c.js";
import "./line-1ed99571.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
const diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
