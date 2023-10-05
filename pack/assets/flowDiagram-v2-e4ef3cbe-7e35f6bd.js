import { p as parser$1, f as flowDb } from "./flowDb-01624e90-1a28289b.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-4fcf332f-82aa2bdd.js";
import { a8 as setConfig } from "./mermaid.core-897ee383.js";
import "./layout-ca0a1984.js";
import "./app-04e719f4.js";
import "./index-892ad7fb-ae4ebc22.js";
import "./edges-c959041a-20c24c86.js";
import "./createText-b670c180-658af3e2.js";
import "./svgDraw-b48a99d5-2b41e6cf.js";
import "./line-a1a41b74.js";
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
