import { p as parser$1, f as flowDb } from "./flowDb-ff651a22-e5022a08.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-1b0c237a-049882cc.js";
import { as as setConfig } from "./mermaid.core-8cb27913.js";
import "./layout-979b4ab1.js";
import "./app-6f3b7185.js";
import "./index-f58d48f9-dcadabc8.js";
import "./edges-0005682e-829acef3.js";
import "./createText-3b1f58a4-5e35a5f4.js";
import "./svgDraw-70101091-47c5b00f.js";
import "./line-345724e0.js";
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
