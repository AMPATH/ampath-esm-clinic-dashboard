import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { defineConfigSchema } from "@openmrs/esm-module-config";
import openmrsRootDecorator from "@openmrs/react-root-decorator";

const Home: React.FC = () => <div>Hello World!</div>;

const moduleName = "@ampath/esm-clinic-dashboard-hiv-lists-app";

defineConfigSchema(moduleName, {});

const Root: React.FC = () => (
  <BrowserRouter basename={window["getOpenmrsSpaBase"]()}>
    <Route path="/home" component={Home} />
  </BrowserRouter>
);

export default openmrsRootDecorator({
  featureName: "hiv-lists",
  moduleName,
})(Root);
