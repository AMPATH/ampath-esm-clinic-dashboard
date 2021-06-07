import React, { useEffect, useState } from 'react';
import styles from './hiv-latest-summary.component.scss';
import { toDateFormat } from '../helper';
import {
  StructuredListWrapper,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
} from 'carbon-components-react/es/components/StructuredList';
import { isEmpty, isNil, isNull } from 'lodash';
import { HIVSummary, PatientContraceptionEligibilty } from '../../types';
import { loadHivSummary, fetchHivSummary } from '../../hiv-summary.resouce';
import StructuredListSkeleton from 'carbon-components-react/lib/components/StructuredList/StructuredList.Skeleton';
import { createErrorHandler } from '@openmrs/esm-error-handling';
import { getPatientEligibilityForContraception } from './hiv-latest-summay-help';
import WarningAlt20 from '@carbon/icons-react/es/warning--alt/20';

interface HivLastestSummaryProps {
  patientUuid: string;
  patient: fhir.Patient;
}

const HivLastestSummary: React.FC<HivLastestSummaryProps> = ({ patient, patientUuid }) => {
  const [loadingStates, setLoadingState] = useState<'pending' | 'resolved' | 'error'>('pending');
  const [patientContraception, setPatientContraception] = useState<PatientContraceptionEligibilty>(null);
  const [hivSummary, setHivSummary] = useState<HIVSummary>(null);

  useEffect(() => {
    const sub = fetchHivSummary(patientUuid).subscribe(
      (data) => {
        setHivSummary(loadHivSummary(data));
        setPatientContraception(getPatientEligibilityForContraception(hivSummary, patient));
        setLoadingState('resolved');
      },
      (error) => {
        createErrorHandler();
        setLoadingState('error');
      },
    );
    return () => sub.unsubscribe();
  }, [hivSummary, patient, patientUuid]);

  return (
    <>
      {loadingStates === 'pending' && <StructuredListSkeleton />}
      {loadingStates === 'resolved' && (
        <StructuredListWrapper className={styles.hivLatestSummartWrapper} ariaLabel="HIV Latest Summary">
          <StructuredListBody>
            <StructuredListRow tabIndex={0}>
              <StructuredListCell
                className={`${styles.structuredListCell} ${
                  hivSummary?.contraceptive_method.period === 'short term' ? styles.warning : styles.danger
                }`}>
                {hivSummary?.contraceptive_method.period !== 'Long term' && <WarningAlt20 />}
                Contraception Method :
                {hivSummary?.contraceptive_method?.period !== null && hivSummary?.contraceptive_method?.period}
                {`(${hivSummary?.contraceptive_method?.name.toUpperCase()})`}
              </StructuredListCell>
            </StructuredListRow>
            <StructuredListRow tabIndex={0}>
              <StructuredListCell className={styles.structuredListCell}>
                Last Appt Date :
                {`${toDateFormat(hivSummary?.encounter_datetime)} ${
                  hivSummary?.encounter_type_name ? `(${hivSummary.encounter_type_name})` : `None`
                }`}
              </StructuredListCell>
            </StructuredListRow>
            <StructuredListRow tabIndex={0}>
              <StructuredListCell className={styles.structuredListCell}>
                RTC Date : {toDateFormat(hivSummary?.rtc_date)}
              </StructuredListCell>
            </StructuredListRow>
            {hivSummary?.med_pickup_rtc_date && hivSummary?.med_pickup_rtc_date !== null && (
              <StructuredListRow tabIndex={0}>
                <StructuredListCell className={styles.structuredListCell}>
                  Medication Pick Up Date :{toDateFormat(hivSummary?.med_pickup_rtc_date)}
                </StructuredListCell>
              </StructuredListRow>
            )}
            <StructuredListRow tabIndex={0}>
              <StructuredListCell className={styles.structuredListCell}>
                Last Viral Load : {hivSummary?.vl_1 && hivSummary.vl_1}
                {`${hivSummary?.vl_1_date ? `(${toDateFormat(hivSummary.vl_1_date)})` : `None`}`}
                {hivSummary?.isPendingViralLoad?.status && (
                  <span
                    className={
                      hivSummary?.isPendingViralLoad.status &&
                      hivSummary?.isPendingViralLoad.days > 30 &&
                      styles.textDanger
                    }>
                    There is a Pending Viral Load Test Ordered on: {toDateFormat(hivSummary.vl_order_date)}
                  </span>
                )}
              </StructuredListCell>
            </StructuredListRow>
            <StructuredListRow tabIndex={0}>
              <StructuredListCell className={styles.structuredListCell}>
                Last CD4 count : {hivSummary?.cd4_1 && hivSummary.cd4_1}
                {`${hivSummary?.cd4_1_date ? `(${toDateFormat(hivSummary.cd4_1_date)})` : `None`}`}
                {hivSummary?.isPendingCD4?.status && (
                  <span
                    className={
                      hivSummary?.isPendingCD4.status && hivSummary?.isPendingCD4.days > 30 && styles.textDanger
                    }>
                    There is a Pending CD4 Count Test Ordered on:: {toDateFormat(hivSummary.vl_order_date)}
                  </span>
                )}
              </StructuredListCell>
            </StructuredListRow>
            <StructuredListRow tabIndex={0}>
              <StructuredListCell className={styles.structuredListCell}>
                Current ARV Regimen: {hivSummary?.cur_arv_meds ? hivSummary?.cur_arv_meds : '(None)'}
              </StructuredListCell>
            </StructuredListRow>
            <StructuredListRow tabIndex={0}>
              <StructuredListCell className={styles.structuredListCell}>
                Current ARV Regimen Start Date: {toDateFormat(hivSummary?.arv_start_date)}
              </StructuredListCell>
            </StructuredListRow>
            <StructuredListRow tabIndex={0}>
              <StructuredListCell className={styles.structuredListCell}>
                Enrollment Date: {toDateFormat(hivSummary?.enrollment_date)}
              </StructuredListCell>
            </StructuredListRow>
            <StructuredListRow tabIndex={0}>
              <StructuredListCell className={styles.structuredListCell}>
                ARV Initiation Start Date:{' '}
                {hivSummary?.arv_first_regimen_start_date
                  ? toDateFormat(hivSummary?.arv_first_regimen_start_date)
                  : 'Unknown or Not indicated'}
              </StructuredListCell>
            </StructuredListRow>
            <StructuredListRow tabIndex={0}>
              <StructuredListCell className={styles.structuredListCell}>
                INH Prophylaxis Start Date : {toDateFormat(hivSummary?.ipt_start_date)}
              </StructuredListCell>
            </StructuredListRow>
            <StructuredListRow tabIndex={0}>
              <StructuredListCell className={styles.structuredListCell}>
                INH Prophylaxis End Date : {toDateFormat(hivSummary?.ipt_completion_date)}
                {hivSummary?.ipt_start_date && isEmpty(hivSummary.ipt_completion_date) && <span>Not Completed</span>}
              </StructuredListCell>
            </StructuredListRow>
            <StructuredListRow tabIndex={0}>
              <StructuredListCell className={styles.structuredListCell}>
                Current WHO Stage: {hivSummary?.cur_who_stage}
              </StructuredListCell>
            </StructuredListRow>
            <StructuredListRow tabIndex={0}>
              <StructuredListCell className={styles.structuredListCell}>
                TB Treatment Start Date: {toDateFormat(hivSummary?.tb_tx_start_date)}
              </StructuredListCell>
            </StructuredListRow>
            <StructuredListRow tabIndex={0}>
              <StructuredListCell className={styles.structuredListCell}>
                TB Treatment End Date: {toDateFormat(hivSummary?.tb_tx_end_date)}
              </StructuredListCell>
            </StructuredListRow>
            {hivSummary?.mdt_session_number && hivSummary?.mdt_session_number !== null && (
              <StructuredListRow tabIndex={0}>
                <StructuredListCell className={styles.structuredListCell}>
                  EAC Session: {hivSummary?.mdt_session_number}
                </StructuredListCell>
              </StructuredListRow>
            )}
          </StructuredListBody>
        </StructuredListWrapper>
      )}
    </>
  );
};

export default HivLastestSummary;
