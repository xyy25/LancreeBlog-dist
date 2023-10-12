import { p as parser$1, f as flowDb } from "./flowDb-ff651a22-db0510b4.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-1b0c237a-6e260ccd.js";
import { as as setConfig } from "./mermaid.core-637cfb92.js";
import "./layout-acb8b390.js";
import "./app-d0296eec.js";
import "./index-f58d48f9-4bdce2bd.js";
import "./edges-0005682e-9145f043.js";
import "./createText-3b1f58a4-433f8d03.js";
import "./svgDraw-70101091-7b39b26d.js";
import "./line-c4839123.js";
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
    setConfig({
      flowchart: {
        arrowMarkerAbsolute: cnf.arrowMarkerAbsolute
      }
    });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
