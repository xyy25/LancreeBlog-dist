import { p as parser$1, f as flowDb } from "./flowDb-01624e90-5866f3e4.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-4fcf332f-3eda7d79.js";
import { a8 as setConfig } from "./mermaid.core-cb042af7.js";
import "./layout-89e13fe2.js";
import "./app-2296c29b.js";
import "./index-892ad7fb-e33fcc59.js";
import "./edges-c959041a-07ffa800.js";
import "./createText-b670c180-230efea6.js";
import "./svgDraw-b48a99d5-ae0a08e9.js";
import "./line-57783f11.js";
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
