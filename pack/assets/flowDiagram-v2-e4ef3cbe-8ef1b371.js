import { p as parser$1, f as flowDb } from "./flowDb-01624e90-8e99e78d.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-4fcf332f-c78f05f3.js";
import { a8 as setConfig } from "./mermaid.core-dc5de56f.js";
import "./layout-52b8e106.js";
import "./index-892ad7fb-ac948cba.js";
import "./edges-c959041a-3254f75e.js";
import "./createText-b670c180-57ca268b.js";
import "./svgDraw-b48a99d5-83376ce4.js";
import "./line-80041733.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
import "./app-bb1fc18e.js";
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
