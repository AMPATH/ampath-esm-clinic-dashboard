import { defineConfigSchema, getAsyncLifecycle } from '@openmrs/esm-framework';

const backendDependencies = { 'webservices.rest': '^2.2.0' };

const importTranslations = require.context('../translations', false, /.json$/, 'lazy');

function setupOpenMRS() {
  const moduleName = '@ampath/esm-patient-alerts-app';

  const options = {
    featureName: 'patient-alerts',
    moduleName,
  };

  defineConfigSchema(moduleName, {});

  return {
    extensions: [
      {
        id: 'notifications-nav-menu-panel',
        slot: 'notifications-nav-menu-slot',
        load: getAsyncLifecycle(() => import('./patient-alerts.component'), options),
      },
      {
        id: 'notifications-menu-button',
        slot: 'notifications-menu-button-slot',
        load: getAsyncLifecycle(() => import('./notifications-menu-button.component'), options),
      },
    ],
  };
}

export { backendDependencies, importTranslations, setupOpenMRS };
