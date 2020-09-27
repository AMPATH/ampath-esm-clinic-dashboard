import { FunctionComponent } from "react";
import CrossBorderPatientList from "../reports/cross-border-report/cross-border-patient-list.component";
import CrossBorderReport from "../reports/cross-border-report/cross-border-report.component";
import Dashboard from "../dashboard/dashboard.component";
import OVCPatientList from "../reports/ovc-report/ovc-patient-list.component";
import OVCReport from "../reports/ovc-report/ovc-report.component";

interface Routes {
  name: string;
  path: string;
  component: FunctionComponent | any;
}
export const HIVListsRoutes: Array<Routes> = [
  { name: "home", path: "/home", component: Dashboard },
  { name: "ovc-report", path: "/home/ovc-report", component: OVCReport },
  {
    name: "ovc-patient-list",
    path:
      "/home/ovc-patient-list/:endDate?/:locationUuids?/:indicators?/:indicatorName?/:totalRecords?",
    component: OVCPatientList,
  },
  {
    name: "cross-border-report",
    path: "/home/cross-border-report",
    component: CrossBorderReport,
  },
  {
    name: "cross-border-patient-list",
    path:
      "/home/cross-border-patient-list/:locationUuids?/:month?/:indicators?/:indicatorName?/:totalRecords?",
    component: CrossBorderPatientList,
  },
];
