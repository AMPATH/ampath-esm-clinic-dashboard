import React, { useState } from 'react';
import styles from './hiv-latest-summary.component.scss';
import { formatDate, determineEligibilityForContraception, zeroVl, loadHivSummary } from '../helper';
import isEmpty from 'lodash-es/isEmpty';
import { HIVSummary, PatientContraceptionEligibility } from '../../types';
import WarningAlt16 from '@carbon/icons-react/es/warning--alt/20';
import HivSummaryLabel from '../hiv-summary-label/hiv-summary-label.component';
import { useTranslation } from 'react-i18next';
import { ErrorState } from '../error/error-state.component';
import { useHIVSummary } from '../../hooks/useHIVSummary';

interface HivLatestSummaryProps {
  patient: fhir.Patient;
}

const HivLatestSummary: React.FC<HivLatestSummaryProps> = ({ patient }) => {
  const { t } = useTranslation();
  const { hivSummary: hivSummaryData, error, isValidating } = useHIVSummary(patient.id);
  const [patientContraception, setContraceptionEligibilityStatus] = useState<PatientContraceptionEligibility>(null);
  const [hivSummary, setHivSummary] = React.useState<HIVSummary>();

  const withContraceptionPeriodStyles = (period: string) => {
    switch (period?.toLocaleLowerCase()) {
      case 'short term':
        return styles.warning;
      case 'long term':
        return '';
      case 'none':
        return styles.danger;
      default:
        return styles.danger;
    }
  };

  React.useEffect(() => {
    if (hivSummaryData?.length) {
      const hivSum = loadHivSummary(hivSummaryData);
      setContraceptionEligibilityStatus(determineEligibilityForContraception(hivSum, patient));
      setHivSummary(hivSum);
    }
  }, [hivSummaryData, patient]);

  return (
    <>
      {error && <ErrorState headerTitle={t('latestHIVSummary', 'Latest HIV Summary')} error={error} />}
      {hivSummary && (
        <div className={styles.hivLatestSummaryWrapper}>
          <section id="ARV">
            <p>{t('arv', 'ARV')}</p>
            <HivSummaryLabel
              title={t('arvInitStartDate', 'ARV Initiation Start Date')}
              value={
                hivSummary?.arv_first_regimen_start_date
                  ? formatDate(hivSummary?.arv_first_regimen_start_date)
                  : t('unKnownOrNotIndicated', 'Unknown or Not indicated')
              }
            />
            <HivSummaryLabel
              title={t('currentARVRegiment', 'Current ARV Regimen')}
              value={hivSummary?.cur_arv_meds ? hivSummary?.cur_arv_meds : `(${t('none', 'None')})`}
            />
            <HivSummaryLabel title={'Current ARV Regimen Start Date'} value={formatDate(hivSummary?.arv_start_date)} />
            <HivSummaryLabel title={'RTC Date'} value={formatDate(hivSummary?.rtc_date)} />
          </section>
          <section id="Last Appointment">
            <p>{t('lastAppointment', 'Last Appointment')}</p>
            <HivSummaryLabel
              title={t('lastApptDate', 'Last Appt Date')}
              value={`${formatDate(hivSummary?.encounter_datetime)} ${
                hivSummary?.encounter_type_name ? `(${hivSummary.encounter_type_name})` : t('none', 'None')
              }`}
            />
          </section>
          <section id="Lab">
            <p>{t('lab', 'Lab')}</p>
            <HivSummaryLabel
              title={t('lastViralLoad', 'Last Viral Load')}
              value={`${zeroVl(hivSummary?.vl_1)} ${`${
                hivSummary?.vl_1_date ? `(${formatDate(hivSummary.vl_1_date)})` : t('none', 'None')
              }`} ${
                hivSummary?.isPendingViralLoad?.status ? (
                  <span
                    className={
                      hivSummary?.isPendingViralLoad.status &&
                      hivSummary?.isPendingViralLoad.days > 30 &&
                      styles.textDanger
                    }>
                    {t('pendingViralLoadOrderedText', 'There is a Pending Viral Load Test Ordered on')}:{' '}
                    {formatDate(hivSummary.vl_order_date)}
                  </span>
                ) : (
                  ''
                )
              }`}
            />
            <HivSummaryLabel
              title={t('lastCD4Count', 'Last CD4 count')}
              value={`${hivSummary?.cd4_1 ? hivSummary.cd4_1 : ''} ${`${
                hivSummary?.cd4_1_date ? `(${formatDate(hivSummary.cd4_1_date)})` : t('none', 'None')
              }`} ${
                hivSummary?.isPendingCD4?.status ? (
                  <span
                    className={
                      hivSummary?.isPendingCD4.status && hivSummary?.isPendingCD4.days > 30 && styles.textDanger
                    }>
                    {t('pendingCD4CountTestOrderedHelp', 'There is a Pending CD4 Count Test Ordered on')}:{' '}
                    {formatDate(hivSummary.vl_order_date)}
                  </span>
                ) : (
                  ''
                )
              }`}
            />
          </section>
          <section id="Other">
            <p>{t('other', 'Other')}</p>
            <HivSummaryLabel
              title={t('contraceptionMethod', 'Contraception Method')}
              value={
                patientContraception?.eligiblePatient ? (
                  <div
                    className={`${styles.contraceptionContainer} ${withContraceptionPeriodStyles(
                      hivSummary.contraceptive_method.period,
                    )}`}>
                    {hivSummary?.contraceptive_method.period !== 'Long term' && <WarningAlt16 />}
                    {hivSummary?.contraceptive_method?.period && hivSummary?.contraceptive_method?.period}
                    {`(${hivSummary?.contraceptive_method?.name.toUpperCase()})`}
                  </div>
                ) : (
                  <div>{patientContraception?.ineligibilityReason}</div>
                )
              }
            />

            <HivSummaryLabel
              title={t('enrollmentDate', 'Enrollment Date')}
              value={formatDate(hivSummary?.enrollment_date)}
            />
            <HivSummaryLabel
              title={t('inhProphylaxisStartDate', 'INH Prophylaxis Start Date')}
              value={formatDate(hivSummary?.ipt_start_date)}
            />
            <HivSummaryLabel
              title={t('inhProphylaxisAndDate', 'INH Prophylaxis End Date')}
              value={`${formatDate(hivSummary?.ipt_completion_date)} ${
                hivSummary?.ipt_start_date && isEmpty(hivSummary.ipt_completion_date)
                  ? t('notCompleted', 'Not Completed')
                  : ''
              }`}
            />
            <HivSummaryLabel title={t('currentWHOStage', 'Current WHO Stage')} value={hivSummary?.cur_who_stage} />
            <HivSummaryLabel
              title={t('tbTreatmentStartDate', 'TB Treatment Start Date')}
              value={formatDate(hivSummary?.tb_tx_start_date)}
            />
            <HivSummaryLabel
              title={t('tbTreatmentEndDate', 'TB Treatment End Date')}
              value={formatDate(hivSummary?.tb_tx_end_date)}
            />
            {hivSummary?.mdt_session_number && hivSummary?.mdt_session_number !== null && (
              <HivSummaryLabel title={t('eacSession', 'EAC Session')} value={hivSummary?.mdt_session_number} />
            )}
          </section>
        </div>
      )}
    </>
  );
};

export default HivLatestSummary;
