import { age } from '@openmrs/esm-framework';
import { HIVSummary, PatientContraceptionEligibilty } from '../../types';

export const getPatientEligibilityForContraception = (
  hivSummary: HIVSummary,
  patient: fhir.Patient,
): PatientContraceptionEligibilty => {
  const patientAge: number = Number.parseInt(age(patient.birthDate));
  if (patient.gender.toUpperCase() === 'MALE') return { ineligibiltyReason: 'Male Patient', eligiblePatient: false };
  if (patientAge < 14 || patientAge > 49)
    return { ineligibiltyReason: 'Not in reproductive age', eligiblePatient: false };
  if (
    patientAge >= 14 &&
    patientAge <= 49 &&
    patient.gender.toUpperCase() === 'FEMALE' &&
    isPostmenopausal(hivSummary.menstruation_status)
  )
    return { ineligibiltyReason: 'POSTMENOPAUSAL', eligiblePatient: false };
  return { eligiblePatient: true, ineligibiltyReason: 'None' };
};

const isPostmenopausal = (menstruationStatus: number) => {
  //concept 6496 == post-menopausal
  if (menstruationStatus === 6496) return true;
  return false;
};
