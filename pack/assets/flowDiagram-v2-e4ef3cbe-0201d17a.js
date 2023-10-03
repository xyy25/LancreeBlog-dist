import { p as parser$1, f as flowDb } from "./flowDb-01624e90-ab075adb.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-4fcf332f-f251958c.js";
import { a8 as setConfig } from "./mermaid.core-66f752f9.js";
import "./layout-08b305f6.js";
import "./app-f2728250.js";
import "./index-892ad7fb-30cd5d8d.js";
import "./edges-c959041a-a2b9e7b8.js";
import "./createText-b670c180-96bebce7.js";
import "./svgDraw-b48a99d5-643c8292.js";
import "./line-c7d26dab.js";
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
