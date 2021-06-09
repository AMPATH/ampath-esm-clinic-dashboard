import React, { useEffect, useState } from 'react';
import styles from './hiv-latest-summary.component.scss';
import {
  determineIfCD4IsPending,
  determineIfVlIsPending,
  formatDate,
  getPatientEligibilityForContraception,
  loadHivSummary,
  zeroVl,
} from '../helper';
import { isEmpty } from 'lodash';
import { HIVSummary, PatientContraceptionEligibility } from '../../types';
import { fetchHivSummary } from '../../hiv-summary.resource';
import StructuredListSkeleton from 'carbon-components-react/lib/components/StructuredList/StructuredList.Skeleton';
import { createErrorHandler } from '@openmrs/esm-error-handling';
import WarningAlt16 from '@carbon/icons-react/es/warning--alt/20';
import HivSummaryLabel from '../hiv-summary-label/hiv-summary-label.component';

interface HivLatestSummaryProps {
  patientUuid: string;
  patient: fhir.Patient;
}

const HivLatestSummary: React.FC<HivLatestSummaryProps> = ({ patient, patientUuid }) => {
  const [status, setStatus] = useState<'pending' | 'resolved' | 'error'>('pending');
  const [patientContraception, setPatientContraception] = useState<PatientContraceptionEligibility>(null);
  const [hivSummary, setHivSummary] = useState<HIVSummary>(null);

  useEffect(() => {
    const sub = fetchHivSummary(patientUuid).subscribe(
      (data) => {
        const summaries = data.map((hivsummary) => {
          hivsummary.isPendingCD4 = determineIfCD4IsPending(hivsummary);
          hivsummary.isPendingViralLoad = determineIfVlIsPending(hivsummary);
          return hivsummary;
        });
        setHivSummary(loadHivSummary(summaries));
        setPatientContraception(getPatientEligibilityForContraception(hivSummary, patient));
        setStatus('resolved');
      },
      (error) => {
        createErrorHandler();
        setStatus('error');
      },
    );
    return () => sub.unsubscribe();
  }, [hivSummary, patient, patientUuid]);

  return (
    <>
      {status === 'pending' && <StructuredListSkeleton />}
      {status === 'resolved' && (
        <div className={styles.hivLatestSummaryWrapper}>
          <section id="ARV">
            <p>ARV</p>
            <HivSummaryLabel
              title={'ARV Initiation Start Date'}
              label={
                hivSummary?.arv_first_regimen_start_date
                  ? formatDate(hivSummary?.arv_first_regimen_start_date)
                  : 'Unknown or Not indicated'
              }
            />
            <HivSummaryLabel
              title={'Current ARV Regimen'}
              label={hivSummary?.cur_arv_meds ? hivSummary?.cur_arv_meds : '(None)'}
            />
            <HivSummaryLabel title={'Current ARV Regimen Start Date'} label={formatDate(hivSummary?.arv_start_date)} />
            <HivSummaryLabel title={'RTC Date'} label={formatDate(hivSummary?.rtc_date)} />
          </section>
          <section id="Last Appointment">
            <p>Last Appointment</p>
            <HivSummaryLabel
              title={'Last Appt Date'}
              label={`${formatDate(hivSummary?.encounter_datetime)} ${
                hivSummary?.encounter_type_name ? `(${hivSummary.encounter_type_name})` : `None`
              }`}
            />
          </section>
          <section id="Lab">
            <p>Lab</p>
            <HivSummaryLabel
              title={'Last Viral Load'}
              label={`${zeroVl(hivSummary?.vl_1)} ${`${
                hivSummary?.vl_1_date ? `(${formatDate(hivSummary.vl_1_date)})` : `None`
              }`} ${
                hivSummary?.isPendingViralLoad?.status ? (
                  <span
                    className={
                      hivSummary?.isPendingViralLoad.status &&
                      hivSummary?.isPendingViralLoad.days > 30 &&
                      styles.textDanger
                    }>
                    There is a Pending Viral Load Test Ordered on: {formatDate(hivSummary.vl_order_date)}
                  </span>
                ) : (
                  ''
                )
              }`}
            />
            <HivSummaryLabel
              title={'Last CD4 count'}
              label={`${hivSummary?.cd4_1 ? hivSummary.cd4_1 : ''} ${`${
                hivSummary?.cd4_1_date ? `(${formatDate(hivSummary.cd4_1_date)})` : `None`
              }`} ${
                hivSummary?.isPendingCD4?.status ? (
                  <span
                    className={
                      hivSummary?.isPendingCD4.status && hivSummary?.isPendingCD4.days > 30 && styles.textDanger
                    }>
                    There is a Pending CD4 Count Test Ordered on: {formatDate(hivSummary.vl_order_date)}
                  </span>
                ) : (
                  ''
                )
              }`}
            />
          </section>
          <section id="Other">
            <p>Other</p>
            <HivSummaryLabel
              title={'Contraception Method'}
              label={
                patientContraception.eligiblePatient ? (
                  <div
                    className={`${styles.contraceptionContainer} ${
                      hivSummary?.contraceptive_method.period === 'short term' ? styles.warning : styles.danger
                    }`}>
                    {hivSummary?.contraceptive_method.period !== 'Long term' && <WarningAlt16 />}
                    {hivSummary?.contraceptive_method?.period && hivSummary?.contraceptive_method?.period}
                    {`(${hivSummary?.contraceptive_method?.name.toUpperCase()})`}
                  </div>
                ) : (
                  <div>{patientContraception.ineligibilityReason}</div>
                )
              }
            />

            <HivSummaryLabel title={'Enrollment Date'} label={formatDate(hivSummary?.enrollment_date)} />
            <HivSummaryLabel title={'INH Prophylaxis Start Date'} label={formatDate(hivSummary?.ipt_start_date)} />
            <HivSummaryLabel
              title={'INH Prophylaxis End Date'}
              label={`${formatDate(hivSummary?.ipt_completion_date)} ${
                hivSummary?.ipt_start_date && isEmpty(hivSummary.ipt_completion_date) ? 'Not Completed' : ''
              }`}
            />
            <HivSummaryLabel title={'Current WHO Stage'} label={hivSummary?.cur_who_stage} />
            <HivSummaryLabel title={'TB Treatment Start Date'} label={formatDate(hivSummary?.tb_tx_start_date)} />
            <HivSummaryLabel title={'TB Treatment End Date'} label={formatDate(hivSummary?.tb_tx_end_date)} />
            {hivSummary?.mdt_session_number && hivSummary?.mdt_session_number !== null && (
              <HivSummaryLabel title={'EAC Session'} label={hivSummary?.mdt_session_number} />
            )}
          </section>
        </div>
      )}
    </>
  );
};

export default HivLatestSummary;
