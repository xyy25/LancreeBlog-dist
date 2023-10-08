import { p as parser$1, f as flowDb } from "./flowDb-ff651a22-28e4202c.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-1b0c237a-c458e716.js";
import { as as setConfig } from "./mermaid.core-c8a5a29b.js";
import "./layout-10098146.js";
import "./app-ba3a1878.js";
import "./index-f58d48f9-8b214862.js";
import "./edges-0005682e-e861da6c.js";
import "./createText-3b1f58a4-0d67fc22.js";
import "./svgDraw-70101091-28487e79.js";
import "./line-51482eea.js";
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
