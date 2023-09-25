import { p as parser$1, f as flowDb } from "./flowDb-01624e90-b372d38a.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-4fcf332f-0252ae73.js";
import { a8 as setConfig } from "./mermaid.core-b54c1cb1.js";
import "./layout-cdae6d9f.js";
import "./index-892ad7fb-2caa6b9b.js";
import "./edges-c959041a-381cd11e.js";
import "./createText-b670c180-1cf20342.js";
import "./svgDraw-b48a99d5-2af25750.js";
import "./line-a137fc32.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
import "./app-998d8359.js";
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
