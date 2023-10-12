import { p as parser$1, d as db, s as styles } from "./styles-622362e4-a524e0db.js";
import { c as getConfig$1, l as log$1, h as select, i as configureSvgSize } from "./mermaid.core-62ee9cf6.js";
import { G as Graph, l as layout } from "./layout-7a39b6d2.js";
import { s as svgDraw } from "./svgDraw-70101091-e69c6e90.js";
import "./app-3adb6785.js";
import "./line-e41304fe.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
let idCache = {};
const padding = 20;
const getGraphId = function(label) {
  const foundEntry = Object.entries(idCache).find((entry) => entry[1].label === label);
  if (foundEntry) {
    return foundEntry[0];
  }
};
const insertMarkers = function(elem) {
  elem.append("defs").append("marker").attr("id", "extensionStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z");
  elem.append("defs").append("marker").attr("id", "extensionEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
  elem.append("defs").append("marker").attr("id", "compositionStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", "compositionEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", "aggregationStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", "aggregationEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", "dependencyStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
};
const draw = function(text, id, _version, diagObj) {
  const conf = getConfig$1().class;
  idCache = {};
  log$1.info("Rendering diagram " + text);
  const securityLevel = getConfig$1().securityLevel;
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = select("#i" + id);
  }
  const root = securityLevel === "sandbox" ? select(sandboxElement.nodes()[0].contentDocument.body) : select("body");
  const diagram2 = root.select(`[id='${id}']`);
  insertMarkers(diagram2);
  const g = new Graph({
    multigraph: true
  });
  g.setGraph({
    isMultiGraph: true
  });
  g.setDefaultEdgeLabel(function() {
    return {};
  });
  const classes = diagObj.db.getClasses();
  const keys = Object.keys(classes);
  for (const key of keys) {
    const classDef = classes[key];
    const node = svgDraw.drawClass(diagram2, classDef, conf, diagObj);
    idCache[node.id] = node;
    g.setNode(node.id, node);
    log$1.info("Org height: " + node.height);
  }
  const relations = diagObj.db.getRelations();
  relations.forEach(function(relation) {
    log$1.info("tjoho" + getGraphId(relation.id1) + getGraphId(relation.id2) + JSON.stringify(relation));
    g.setEdge(getGraphId(relation.id1), getGraphId(relation.id2), {
      relation
    }, relation.title || "DEFAULT");
  });
  const notes = diagObj.db.getNotes();
  notes.forEach(function(note) {
    log$1.debug(`Adding note: ${JSON.stringify(note)}`);
    const node = svgDraw.drawNote(diagram2, note, conf, diagObj);
    idCache[node.id] = node;
    g.setNode(node.id, node);
    if (note.class && note.class in classes) {
      g.setEdge(note.id, getGraphId(note.class), {
        relation: {
          id1: note.id,
          id2: note.class,
          relation: {
            type1: "none",
            type2: "none",
            lineType: 10
          }
        }
      }, "DEFAULT");
    }
  });
  layout(g);
  g.nodes().forEach(function(v) {
    if (v !== void 0 && g.node(v) !== void 0) {
      log$1.debug("Node " + v + ": " + JSON.stringify(g.node(v)));
      root.select("#" + (diagObj.db.lookUpDomId(v) || v)).attr("transform", "translate(" + (g.node(v).x - g.node(v).width / 2) + "," + (g.node(v).y - g.node(v).height / 2) + " )");
    }
  });
  g.edges().forEach(function(e) {
    if (e !== void 0 && g.edge(e) !== void 0) {
      log$1.debug("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(g.edge(e)));
      svgDraw.drawEdge(diagram2, g.edge(e), g.edge(e).relation, conf, diagObj);
    }
  });
  const svgBounds = diagram2.node().getBBox();
  const width = svgBounds.width + padding * 2;
  const height = svgBounds.height + padding * 2;
  configureSvgSize(diagram2, height, width, conf.useMaxWidth);
  const vBox = `${svgBounds.x - padding} ${svgBounds.y - padding} ${width} ${height}`;
  log$1.debug(`viewBox ${vBox}`);
  diagram2.attr("viewBox", vBox);
};
const renderer = {
  draw
};
const diagram = {
  parser: parser$1,
  db,
  renderer,
  styles,
  init: (cnf) => {
    if (!cnf.class) {
      cnf.class = {};
    }
    cnf.class.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    db.clear();
  }
};
export {
  diagram
};
