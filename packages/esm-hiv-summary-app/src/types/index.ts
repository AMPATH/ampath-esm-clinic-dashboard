export interface HIVSummary {
  arv_first_regimen?: string;
  arv_first_regimen_id?: string;
  arv_first_regimen_location_id?: number;
  arv_first_regimen_start_date?: Date | string;
  arv_first_regimen_start_date_flex?: Date | string;
  arv_start_date?: Date | string;
  arv_start_location_id?: number;
  ca_cx_screen?: string;
  ca_cx_screening_datetime?: Date | string;
  ca_cx_screening_result?: string;
  ca_cx_screening_result_datetime?: Date | string;
  cd4_1?: string | number;
  cd4_1_date?: Date | string;
  cd4_2?: string | number;
  cd4_2_date?: string;
  cd4_order_date?: Date | string;
  cd4_percent_1?: number | null;
  cd4_percent_1_date?: string;
  cd4_percent_2?: string | number;
  cd4_percent_2_date?: string;
  cd4_resulted?: number | null | string;
  cd4_resulted_date?: string;
  condoms_provided_date?: Date | string;
  contraceptive_method?: { concept?: number; name?: string; period?: string };
  country_of_residence?: string;
  cross_border_country_travelled?: string;
  cross_border_service_offered?: string;
  cur_arv_adherence?: string;
  cur_arv_drugs?: string;
  cur_arv_line?: number;
  cur_arv_line_reported?: number;
  cur_arv_line_strict?: number;
  cur_arv_meds?: string;
  cur_arv_meds_id?: string;
  cur_arv_meds_strict?: string;
  cur_who_stage?: number;
  date_created?: Date | string;
  death_date?: Date | string;
  discordant_status?: number;
  edd?: Date | string;
  encounter_datetime?: Date | string;
  encounter_id?: number;
  encounter_type?: number;
  enrollment_date?: Date | string;
  enrollment_location_id?: number;
  expected_vl_date?: Date | string | number;
  height?: number;
  gbv_screening_result: number | null;
  hiv_dna_pcr_1?: string;
  hiv_dna_pcr_1_date?: string;
  hiv_dna_pcr_2?: string;
  hiv_dna_pcr_2_date?: string;
  hiv_dna_pcr_order_date?: string;
  hiv_dna_pcr_resulted?: string;
  hiv_dna_pcr_resulted_date?: string;
  hiv_rapid_test_resulted?: string;
  hiv_rapid_test_resulted_date?: string;
  hiv_start_date?: Date | string;
  hiv_status_disclosed?: string;
  home_outreach?: string;
  ipt_completion_date?: string;
  ipt_start_date?: Date | string;
  ipt_stop_date?: string;
  is_clinical_encounter?: number;
  is_cross_border?: number | null;
  is_cross_border_country?: string | number;
  is_cross_border_county?: string;
  is_mother_breastfeeding?: string;
  is_pregnant?: string | number;
  is_transit?: string | number;
  last_cross_boarder_screening_datetime?: string;
  location_id?: number;
  location_uuid?: string;
  mdt_session_number?: string;
  med_pickup_rtc_date?: string;
  menstruation_status?: number;
  modern_contraceptive_method_start_date?: string;
  next_clinical_datetime_hiv?: string;
  next_clinical_location_id?: string | number;
  next_clinical_rtc_date_hiv?: string;
  next_encounter_datetime_hiv?: string;
  next_encounter_type_hiv?: string | number;
  on_ipt?: number;
  on_tb_tx?: number;
  out_of_care?: string | number;
  outreach_attempts?: string;
  outreach_date_bncd?: string;
  outreach_death_date_bncd?: string;
  outreach_missed_visit_reason?: number;
  outreach_patient_care_status_bncd?: string;
  ovc_exit_date?: string;
  ovc_exit_reason?: string;
  ovc_non_enrollment_date?: string;
  ovc_non_enrollment_reason?: string;
  patient_care_status?: number;
  pcp_prophylaxis_start_date?: Date | string;
  person_id?: number;
  phone_outreach?: string;
  prev_arv_adherence?: string;
  prev_arv_drugs?: string;
  prev_arv_end_date?: Date | string;
  prev_arv_line?: number;
  prev_arv_meds?: string;
  prev_arv_start_date?: Date | string;
  prev_clinical_datetime_hiv?: Date | string;
  prev_clinical_location_id?: string | number;
  prev_clinical_rtc_date_hiv?: Date | string;
  prev_encounter_datetime_hiv?: Date | string;
  prev_encounter_type_hiv?: number;
  prev_encounter_type_name?: string;
  prev_rtc_date?: Date | string;
  rtc_date?: string;
  scheduled_visit?: string | number;
  tb_modality_test?: number | number;
  tb_screen?: number;
  tb_screening_datetime?: Date | string;
  tb_screening_result?: number;
  tb_test_date?: string;
  tb_test_result?: number | null;
  tb_tx_end_date?: string;
  tb_tx_start_date?: Date | string;
  tb_tx_stop_date?: string;
  tb_tx_stop_reason?: string;
  transfer_date_bncd?: string;
  transfer_in?: string | number;
  transfer_in_date?: Date | string;
  transfer_in_location_id?: number;
  transfer_out?: string | number;
  transfer_out_date?: string;
  transfer_out_location_id?: string | number;
  transfer_transfer_out_bncd?: string;
  travelled_outside_last_3_months?: string;
  travelled_outside_last_6_months?: string;
  travelled_outside_last_12_months?: string;
  uuid?: string;
  visit_id?: string | number;
  visit_num?: number;
  visit_type?: string | number;
  vl_1?: number | null;
  vl_1_date?: Date | string;
  vl_2?: number | null;
  vl_2_date?: string;
  vl_order_date?: Date | string;
  vl_resulted?: number | null;
  vl_resulted_date?: string;
  weight?: number;
  encounter_type_name?: string;
  isPendingViralLoad?: { status: boolean; days: number };
  isPendingCD4?: { status: boolean; days: number };
}

export interface PatientContraceptionEligibility {
  ineligibilityReason: string;
  eligiblePatient: boolean;
}

export interface MedicationChangeHistory {
  current_regimen: string;
  encounter_datetime: Date;
  previous_regimen: string;
  previous_vl: string | number;
  previous_vl_date: Date;
}

export interface DashbardGridConfig {
  columns: number;
  type: 'grid';
}

export interface DashboardTabConfig {
  type: 'tabs';
}

export interface DashboardLinkConfig {
  name: string;
  title: string;
}

export interface DashboardConfig extends DashboardLinkConfig {
  slot: string;
  config: DashbardGridConfig | DashboardTabConfig;
}

export interface CervicalCancerScreening {
  person_id: number;
  test_date: string;
  via_or_via_vili: number;
  pap_smear: string | null;
  hpv: string | null;
  uuid: string;
  test: string;
  via_test_result: string;
}
