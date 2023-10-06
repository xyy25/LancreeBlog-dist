import { p as parser$1, f as flowDb } from "./flowDb-ff651a22-7480d1e9.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-1b0c237a-c4437057.js";
import { as as setConfig } from "./mermaid.core-e93aec66.js";
import "./layout-b400632b.js";
import "./app-a6a7d460.js";
import "./index-f58d48f9-24159149.js";
import "./edges-0005682e-72997a95.js";
import "./createText-3b1f58a4-5331d6e8.js";
import "./svgDraw-70101091-6db09572.js";
import "./line-5e4b5aa4.js";
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
