import { p as parser$1, f as flowDb } from "./flowDb-01624e90-67b34f9a.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-4fcf332f-bf23182a.js";
import { a8 as setConfig } from "./mermaid.core-22418dbc.js";
import "./layout-1adc1756.js";
import "./index-892ad7fb-aea4d40f.js";
import "./edges-c959041a-a25f5345.js";
import "./createText-b670c180-1828e6e9.js";
import "./svgDraw-b48a99d5-ebdb724e.js";
import "./line-39161a90.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
import "./app-c44168ea.js";
import "./commonjsHelpers-ca272635.js";
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
