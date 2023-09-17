import { p as parser$1, f as flowDb } from "./flowDb-01624e90-2266d2d8.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-4fcf332f-a870742a.js";
import { a8 as setConfig } from "./mermaid.core-13877c6d.js";
import "./layout-67507473.js";
import "./index-892ad7fb-4dacce4d.js";
import "./edges-c959041a-eb2410d1.js";
import "./createText-b670c180-0ef81acc.js";
import "./svgDraw-b48a99d5-c7aa8953.js";
import "./line-fdc44928.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
import "./app-117e4cd6.js";
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
