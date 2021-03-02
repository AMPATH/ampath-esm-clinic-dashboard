import "./set-public-path";
import { backendDependencies } from "./openmrs-backend-dependencies";
import { defineConfigSchema, getAsyncLifecycle } from "@openmrs/esm-framework";

const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

function setupOpenMRS() {
  const moduleName = "@ampath/esm-clinic-dashboard-hiv-lists-app";

  const options = {
    featureName: "esm-clinic-dashboard-hiv-list",
    moduleName,
  };

  defineConfigSchema(moduleName, {});

  return {
    lifecycle: getAsyncLifecycle(() => import("./root.component"), options),
    activate: "home",
  };
}

export { backendDependencies, importTranslation, setupOpenMRS };
