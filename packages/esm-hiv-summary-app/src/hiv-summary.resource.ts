import { openmrsObservableFetch } from '@openmrs/esm-framework';
import { map } from 'rxjs/operators';
import { HIVSummary } from './types';
import { determineIfCD4IsPending, determineIfVlIsPending, loadHivSummary } from './widgets/helper';

interface HivSummaryFetchResponse {
  result: Array<HIVSummary>;
  size: number;
  sql: string;
  startIndex: number;
  sqlParams: Array<any>;
}

export function fetchHivSummary(
  patientUuid: string,
  startIndex = 0,
  limit: number = 20,
  includeNonClinicalEncounter: boolean = false,
) {
  // TO DO : Hit the actual etl rest server
  const url = `/etl-latest/etl/patient/${patientUuid}/hiv-summary?startIndex=${startIndex}&limit=${limit}&includeNonClinicalEncounter=${includeNonClinicalEncounter}`;
  return openmrsObservableFetch<HivSummaryFetchResponse>(url).pipe(
    map(({ data }) => data.result),
    map((data) =>
      data.map((hivsummary) => {
        hivsummary.isPendingCD4 = determineIfCD4IsPending(hivsummary);
        hivsummary.isPendingViralLoad = determineIfVlIsPending(hivsummary);
        return hivsummary;
      }),
    ),
    map((summaries) => loadHivSummary(summaries)),
  );
}
