import { p as parser$1, f as flowDb } from "./flowDb-ff651a22-8c321d49.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-1b0c237a-25e3b2ab.js";
import { as as setConfig } from "./mermaid.core-52070432.js";
import "./layout-e0ceafd1.js";
import "./app-66d4b327.js";
import "./index-f58d48f9-9260b12a.js";
import "./edges-0005682e-e3ef4f55.js";
import "./createText-3b1f58a4-bc8242e1.js";
import "./svgDraw-70101091-9da7a13f.js";
import "./line-ecfccfd6.js";
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
