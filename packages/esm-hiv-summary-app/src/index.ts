import { defineConfigSchema, getAsyncLifecycle, getSyncLifecycle } from '@openmrs/esm-framework';
import { dashboardMeta } from './dashboard.meta';
import { createDashboardLink } from './widgets/createDashboardLink';

const backendDependencies = { 'webservices.rest': '^2.2.0' };

const importTranslation = require.context('../translations', false, /.json$/, 'lazy');

function setupOpenMRS() {
  const moduleName = '@ampath/esm-hiv-summary-app';

  const options = {
    featureName: 'hiv-summary',
    moduleName,
  };

  defineConfigSchema(moduleName, {});

  return {
    extensions: [
      {
        id: 'hiv-summary-widget',
        slot: 'patient-chart-summary-dashboard-slot',
        load: getAsyncLifecycle(() => import('./hiv-summary.component'), options),
        meta: {
          columnSpan: 4,
        },
      },
      {
        id: 'hiv-summary-overview-widget',
        slot: dashboardMeta.slot,
        load: getAsyncLifecycle(() => import('./widgets/hiv-summary-overview/hiv-summary-overview.component'), options),
        meta: {
          columnSpan: 4,
        },
      },
      {
        id: 'hiv-summary-nav-link',
        slot: 'patient-chart-dashboard-slot',
        load: getSyncLifecycle(createDashboardLink(dashboardMeta), options),
        meta: dashboardMeta,
        online: true,
        offline: true,
      },
    ],
  };
}

export { backendDependencies, importTranslation, setupOpenMRS };
