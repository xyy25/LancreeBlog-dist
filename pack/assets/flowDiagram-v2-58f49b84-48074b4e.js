import { p as parser$1, f as flowDb } from "./flowDb-ff651a22-59f19304.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-1b0c237a-0c376872.js";
import { as as setConfig } from "./mermaid.core-62ee9cf6.js";
import "./layout-7a39b6d2.js";
import "./app-3adb6785.js";
import "./index-f58d48f9-1896d240.js";
import "./edges-0005682e-ec25ec8b.js";
import "./createText-3b1f58a4-74d263c8.js";
import "./svgDraw-70101091-e69c6e90.js";
import "./line-e41304fe.js";
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
