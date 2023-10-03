import { p as parser$1, f as flowDb } from "./flowDb-01624e90-1d2c7839.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-4fcf332f-165bf155.js";
import { a8 as setConfig } from "./mermaid.core-5eb2a712.js";
import "./layout-420be5c2.js";
import "./app-8fc06cdd.js";
import "./index-892ad7fb-04884756.js";
import "./edges-c959041a-9f2cc18c.js";
import "./createText-b670c180-ad9a2933.js";
import "./svgDraw-b48a99d5-8f7fac26.js";
import "./line-b24cd3a0.js";
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
