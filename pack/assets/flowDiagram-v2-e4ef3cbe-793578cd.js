import { p as parser$1, f as flowDb } from "./flowDb-01624e90-cef2b645.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-4fcf332f-9e55a2f0.js";
import { a8 as setConfig } from "./mermaid.core-23e9804a.js";
import "./layout-54197cbe.js";
import "./index-892ad7fb-f2c4db0f.js";
import "./edges-c959041a-618a8c71.js";
import "./createText-b670c180-1a66603d.js";
import "./svgDraw-b48a99d5-cb1292cd.js";
import "./line-5720b384.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
import "./app-6a862fe2.js";
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
