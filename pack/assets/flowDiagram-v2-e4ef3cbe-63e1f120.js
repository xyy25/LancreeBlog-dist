import { p as parser$1, f as flowDb } from "./flowDb-01624e90-23cf83e1.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-4fcf332f-ea37d5ff.js";
import { a8 as setConfig } from "./mermaid.core-7ad64dc7.js";
import "./layout-d8134538.js";
import "./index-892ad7fb-aa9b9f18.js";
import "./edges-c959041a-adbe67da.js";
import "./createText-b670c180-18e9be92.js";
import "./svgDraw-b48a99d5-29f46abe.js";
import "./line-cd781d89.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
import "./app-cf46052e.js";
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
