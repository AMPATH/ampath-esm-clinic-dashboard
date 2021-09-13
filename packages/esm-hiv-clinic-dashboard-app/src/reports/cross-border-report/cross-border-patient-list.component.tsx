import React from 'react';
import { match, useHistory } from 'react-router-dom';
import PatientList from '../../patient-list/patient-list.component';
import { colDef } from '../../types';
import { fetchCrossBorderPatientList } from './cross-border.resource';
import dayjs from 'dayjs';
import PatientListDownload from '../../ui-components/patient-list-download/patient-list-download.component';

interface CrossBorderPatientListProps {
  month: string;
  indicators: string;
  locationUuids: string;
  indicatorName: string;
  totalRecords?: string;
}

function CrossBorderPatientList(props: { match: match<CrossBorderPatientListProps> }) {
  const [crossBorderPatientList, setCrossBorderPatientList] = React.useState<Array<any>>();
  const { month, indicators, locationUuids, indicatorName, totalRecords } = props.match.params;
  const [limit, setLimit] = React.useState<number>(300);
  let history = useHistory();
  React.useEffect(() => {
    setCrossBorderPatientList(null);
    const ac = new AbortController();
    fetchCrossBorderPatientList(
      locationUuids,
      dayjs(month).startOf('month').format('YYYY-MM-DD'),
      dayjs(month).endOf('month').format('YYYY-MM-DD'),
      indicators,
      ac,
      limit,
    ).then(({ data }) => setCrossBorderPatientList(data.result));
    return () => ac.abort();
  }, [month, locationUuids, limit, indicators]);

  React.useEffect(() => {
    window.frames.parent.scrollTo(0, 0);
  }, []);

  const csvData = crossBorderPatientList?.map((result) => {
    return {
      ...result,
      identifiers: result.identifiers.split(',').join(''),
      cur_arv_meds: result.cur_arv_meds.split(',').join(''),
    };
  });
  return (
    <div>
      <div>
        {crossBorderPatientList && (
          <button
            style={{
              marginLeft: '0.625rem',
              cursor: 'pointer',
              backgroundColor: '#428bca',
            }}
            className="omrs-btn omrs-filled-action"
            onClick={() => history.goBack()}>
            Back
          </button>
        )}
      </div>
      {crossBorderPatientList ? (
        <>
          <PatientList
            columnsDef={columnsDef}
            rowData={crossBorderPatientList}
            indicator={indicators}
            indicatorName={indicatorName}
          />
          <PatientListDownload
            results={csvData}
            loadAllRecords={setLimit}
            totalRecords={Number(totalRecords)}
            indicatorName={indicatorName}
          />
        </>
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
}

export default CrossBorderPatientList;

const columnsDef: Array<colDef> = [
  {
    header: '#',
    key: '#',
    cellRender: (value) => <span>{value.rowNumber}</span>,
  },
  {
    header: 'Identifiers',
    key: 'identifiers',
    cellRender: (value) => (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a href="#" title="providercount">
        {value.value}
      </a>
    ),
  },
  {
    header: 'Name',
    key: 'person_name',
  },
  {
    header: 'Enrollment Date',
    key: 'enrollment_date',
  },
  {
    header: 'Age',
    key: 'age',
  },
  {
    header: 'OVC ID',
    key: 'ovc_identifier',
  },
  {
    header: 'Latest VL',
    key: 'vl_1',
  },
  {
    header: 'Latest vl date',
    key: 'vl_1_date',
  },
  {
    header: 'County',
    key: 'county',
  },
  {
    header: 'Sub County',
    key: 'sub_county',
  },
  {
    header: 'Location',
    key: 'location',
  },
  {
    header: 'Ward',
    key: 'ward',
  },
  {
    header: 'Last Appointment',
    key: 'last_appointment',
  },
  {
    header: 'Latest RTC',
    key: 'latest_rtc_date',
  },
  {
    header: 'Current Regimen',
    key: 'cur_arv_meds',
  },
  {
    header: 'Disclosure',
    key: 'disclosure_status',
  },
  {
    header: 'Due for VL',
    key: 'due_for_vl_this_month',
  },
  {
    header: 'Status',
    key: 'status',
  },
];
