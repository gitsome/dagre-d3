/* global window */

var dagre;

if (require) {
  try {
    dagre = require("dagre-neural-net");
  } catch (e) {}
}

if (!dagre) {
  dagre = window.dagre;
}

module.exports = dagre;
