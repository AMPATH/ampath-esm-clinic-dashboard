const path = require("path");
const baseConfig = require('../../webpack.config');

module.exports = {
  ...baseConfig,
  entry: path.resolve(__dirname, "src/index.ts"),
  output: {
    filename: "ampath-esm-clinic-dashboard-hiv-lists-app.js",
    libraryTarget: "system",
    path: path.resolve(__dirname, "dist"),
    jsonpFunction: "webpackJsonp_ampath_esm_clinic_dashboard_hiv_lists",
  },
};
