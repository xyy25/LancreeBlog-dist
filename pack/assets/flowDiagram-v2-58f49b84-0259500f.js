import { p as parser$1, f as flowDb } from "./flowDb-ff651a22-e839f86f.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-1b0c237a-06af3e6e.js";
import { as as setConfig } from "./mermaid.core-5eb07c44.js";
import "./layout-1ad1a719.js";
import "./app-e8de7fd5.js";
import "./index-f58d48f9-831ea66b.js";
import "./edges-0005682e-a3073e40.js";
import "./createText-3b1f58a4-64bbe977.js";
import "./svgDraw-70101091-281034b9.js";
import "./line-2426f5c8.js";
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
