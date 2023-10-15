import { p as parser$1, f as flowDb } from "./flowDb-ff651a22-94b111c2.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-1b0c237a-b659f6ca.js";
import { as as setConfig } from "./mermaid.core-2e747119.js";
import "./layout-a71da7de.js";
import "./app-cc66c0c6.js";
import "./index-f58d48f9-29fc0eef.js";
import "./edges-0005682e-6855581b.js";
import "./createText-3b1f58a4-ca69932d.js";
import "./svgDraw-70101091-ae2e470f.js";
import "./line-796addb6.js";
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
