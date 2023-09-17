import { p as parser$1, f as flowDb } from "./flowDb-01624e90-fde39c24.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-4fcf332f-c5415eb0.js";
import { a8 as setConfig } from "./mermaid.core-67444cd4.js";
import "./layout-92fc02c9.js";
import "./index-892ad7fb-17da1d10.js";
import "./edges-c959041a-9a1d1b6b.js";
import "./createText-b670c180-71b9ed63.js";
import "./svgDraw-b48a99d5-50ffd684.js";
import "./line-51be122f.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
import "./app-ae55ad7a.js";
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
