import { p as parser$1, f as flowDb } from "./flowDb-ff651a22-9f6368e9.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-1b0c237a-298d52c1.js";
import { as as setConfig } from "./mermaid.core-81ebfb0c.js";
import "./layout-f0fe76af.js";
import "./app-87b15710.js";
import "./index-f58d48f9-5c847d08.js";
import "./edges-0005682e-9adb55f4.js";
import "./createText-3b1f58a4-b6ad18ae.js";
import "./svgDraw-70101091-7ea5e5fd.js";
import "./line-515d7484.js";
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
