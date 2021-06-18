import { backendDependencies } from './openmrs-backend-dependencies';
import { defineConfigSchema, getAsyncLifecycle } from '@openmrs/esm-framework';

const importTranslation = require.context('../translations', false, /.json$/, 'lazy');

function setupOpenMRS() {
  const moduleName = '@ampath/esm-hiv-clinic-dashboard-app';

  const options = {
    featureName: 'esm-hiv-clinic-dashboard-app',
    moduleName,
  };

  defineConfigSchema(moduleName, {});

  return {
    pages: [
      {
        load: getAsyncLifecycle(() => import('./root.component'), options),
        route: 'hiv-clinic-dashboard',
      },
    ],
  };
}

export { backendDependencies, importTranslation, setupOpenMRS };
