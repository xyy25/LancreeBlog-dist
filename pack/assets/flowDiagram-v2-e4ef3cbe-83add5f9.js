import { p as parser$1, f as flowDb } from "./flowDb-01624e90-62ab298c.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-4fcf332f-6e6ae067.js";
import { a8 as setConfig } from "./mermaid.core-56f41538.js";
import "./layout-0190e32b.js";
import "./index-892ad7fb-5a263dff.js";
import "./edges-c959041a-a7ebc091.js";
import "./createText-b670c180-468aa13d.js";
import "./svgDraw-b48a99d5-f4c0aa2e.js";
import "./line-53dd218c.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
import "./app-5d65d1f1.js";
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
