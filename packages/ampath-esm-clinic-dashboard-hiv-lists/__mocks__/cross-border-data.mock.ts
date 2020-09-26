export const mockCrossBorderReportData = {
  queriesAndSchemas: [
    {
      report: {
        reportName: "mainDatasetAggregate",
        params: {
          endDate: "2020-09-30",
          startDate: "2020-09-01",
          reportName: "MOH-731-report-2017",
          locationUuids: ["08fec60a-1352-11df-a1f1-0026b9348838"],
          isAggregated: false,
          locations: [19],
          referenceDate: "2020-09-14",
          startAge: 0,
          endAge: 150,
          gender: ["M", "F"],
          genders: ["M", "F"],
          hivMonthlyDatasetSource: "etl.hiv_monthly_report_dataset_cbb",
        },
        reportSchemas: {
          main: {
            name: "mainDatasetAggregate",
            version: "1.0",
            tag: "",
            description: "",
            uses: [
              {
                name: "mainDataSetBase",
                version: "1.0",
                type: "dataset_def",
              },
            ],
            sources: [
              {
                dataSet: "mainDataSetBase",
                alias: "hmsd",
              },
            ],
            columns: [
              {
                type: "derived_column",
                alias: "join_location",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "1",
                },
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "hmsd.location_uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "hmsd.location",
              },
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "age_range",
                column: "hmsd.age_range",
              },
              {
                type: "derived_column",
                alias: "current_on_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.current_on_art)",
                },
              },
              {
                type: "derived_column",
                alias: "enrolled_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.enrolled_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "pre_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.pre_art)",
                },
              },
              {
                type: "derived_column",
                alias: "current_in_care",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.current_in_care)",
                },
              },
              {
                type: "derived_column",
                alias: "active_on_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.active_on_art)",
                },
              },
              {
                type: "derived_column",
                alias: "on_ctx_prophylaxis",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.on_ctx_prophylaxis)",
                },
              },
              {
                type: "derived_column",
                alias: "screened_for_tb",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.screened_for_tb)",
                },
              },
              {
                type: "derived_column",
                alias: "tb_screened_this_visit_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.tb_screened_this_visit_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "tb_screened_positive",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.tb_screened_positive)",
                },
              },
              {
                type: "derived_column",
                alias: "started_ipt",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.started_ipt)",
                },
              },
              {
                type: "derived_column",
                alias: "completed_ipt_past_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.completed_ipt_past_12_months)",
                },
              },
              {
                type: "derived_column",
                alias: "condoms_provided",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.condoms_provided)",
                },
              },
              {
                type: "derived_column",
                alias: "started_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.condoms_provided)",
                },
              },
              {
                type: "derived_column",
                alias: "on_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.on_modern_contraception)",
                },
              },
              {
                type: "derived_column",
                alias: "art_revisit_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.art_revisit_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "f_gte_18_visits",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.f_gte_18_visits)",
                },
              },
            ],
            groupBy: {
              groupParam: "groupByParam",
              columns: ["gender", "age_range", "location_id"],
              excludeParam: "excludeParam",
            },
            transFormDirectives: {
              joinColumn: "location_id",
              skipColumns: ["location_uuid", "join_location"],
              disaggregationColumns: ["gender", "age_range"],
            },
            dynamicJsonQueryGenerationDirectives: {
              patientListGenerator: {
                useTemplate: "patient-list-frozen-template",
                useTemplateVersion: "1.0",
                generatingDirectives: {
                  joinDirectives: {
                    joinType: "INNER",
                    joinCondition: "<<base_column>> = <<template_column>>",
                    baseColumn: "person_id",
                    templateColumn: "person_id",
                  },
                },
              },
            },
            default: {
              name: "mainDatasetAggregate",
              version: "1.0",
              tag: "",
              description: "",
              uses: [
                {
                  name: "mainDataSetBase",
                  version: "1.0",
                  type: "dataset_def",
                },
              ],
              sources: [
                {
                  dataSet: "mainDataSetBase",
                  alias: "hmsd",
                },
              ],
              columns: [
                {
                  type: "derived_column",
                  alias: "join_location",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "1",
                  },
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "hmsd.location_uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "hmsd.location",
                },
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "age_range",
                  column: "hmsd.age_range",
                },
                {
                  type: "derived_column",
                  alias: "current_on_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.current_on_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "enrolled_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.enrolled_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "pre_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.pre_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "current_in_care",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.current_in_care)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "active_on_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.active_on_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_ctx_prophylaxis",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.on_ctx_prophylaxis)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "screened_for_tb",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.screened_for_tb)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "tb_screened_this_visit_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.tb_screened_this_visit_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "tb_screened_positive",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.tb_screened_positive)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_ipt",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.started_ipt)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "completed_ipt_past_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.completed_ipt_past_12_months)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "condoms_provided",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.condoms_provided)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.condoms_provided)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.on_modern_contraception)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "art_revisit_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.art_revisit_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "f_gte_18_visits",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.f_gte_18_visits)",
                  },
                },
              ],
              groupBy: {
                groupParam: "groupByParam",
                columns: ["gender", "age_range", "location_id"],
                excludeParam: "excludeParam",
              },
              transFormDirectives: {
                joinColumn: "location_id",
                skipColumns: ["location_uuid", "join_location"],
                disaggregationColumns: ["gender", "age_range"],
              },
              dynamicJsonQueryGenerationDirectives: {
                patientListGenerator: {
                  useTemplate: "patient-list-frozen-template",
                  useTemplateVersion: "1.0",
                  generatingDirectives: {
                    joinDirectives: {
                      joinType: "INNER",
                      joinCondition: "<<base_column>> = <<template_column>>",
                      baseColumn: "person_id",
                      templateColumn: "person_id",
                    },
                  },
                },
              },
            },
          },
          mainDataSetBase: {
            name: "mainDataSetBase",
            version: "1.0",
            tag: "",
            description: "",
            uses: [],
            sources: [
              {
                table: "etl.hiv_monthly_report_dataset_cbb",
                alias: "hmsd",
              },
              {
                table: "amrs.location",
                alias: "l",
                join: {
                  type: "INNER",
                  joinCondition: "l.location_id = hmsd.location_id",
                },
              },
            ],
            columns: [
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "birthdate",
                column: "hmsd.birthdate",
              },
              {
                type: "simple_column",
                alias: "age",
                column: "hmsd.age",
              },
              {
                type: "simple_column",
                alias: "person_id",
                column: "hmsd.person_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "l.uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "l.name",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "cur_arv_meds",
                column: "hmsd.cur_arv_meds",
              },
              {
                type: "derived_column",
                alias: "enrollment_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "arv_first_regimen_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "cur_regimen_arv_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "simple_column",
                alias: "cur_arv_line",
                column: "hmsd.cur_arv_line",
              },
              {
                type: "simple_column",
                alias: "vl_1",
                column: "hmsd.vl_1",
              },
              {
                type: "derived_column",
                alias: "vl_1_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "age_range",
                expressionType: "case_statement",
                expressionOptions: {
                  caseOptions: [
                    {
                      condition: "hmsd.age < 1",
                      value: "0_to_1",
                    },
                    {
                      condition: "hmsd.age between 1 and 9",
                      value: "1_to_9",
                    },
                    {
                      condition: "hmsd.age between 10 and 14",
                      value: "10_to_14",
                    },
                    {
                      condition: "hmsd.age between 15 and 19",
                      value: "15_to_19",
                    },
                    {
                      condition: "hmsd.age between 20 and 24",
                      value: "20_to_24",
                    },
                    {
                      condition: "else",
                      value: "older_than_24",
                    },
                  ],
                },
              },
              {
                type: "simple_column",
                alias: "enrolled_this_month",
                column: "hmsd.enrolled_this_month",
              },
              {
                type: "simple_column",
                alias: "art_revisit_this_month",
                column: "hmsd.art_revisit_this_month",
              },
              {
                type: "simple_column",
                alias: "current_in_care",
                column: "hmsd.active_in_care_this_month",
              },
              {
                type: "simple_column",
                alias: "pre_art",
                column: "hmsd.is_pre_art_this_month",
              },
              {
                type: "simple_column",
                alias: "started_art_pregnant",
                column: "hmsd.is_pregnant_and_started_art_this_month",
              },
              {
                type: "simple_column",
                alias: "started_art_and_has_tb",
                column: "hmsd.on_tb_tx_and_started_art_this_month",
              },
              {
                type: "simple_column",
                alias: "active_on_art",
                column: "hmsd.on_art_this_month",
              },
              {
                type: "simple_column",
                alias: "on_ctx_prophylaxis",
                column: "hmsd.on_pcp_prophylaxis_this_month",
              },
              {
                type: "simple_column",
                alias: "current_on_art",
                column: "hmsd.on_art_this_month",
              },
              {
                type: "simple_column",
                alias: "screened_for_tb",
                column: "hmsd.tb_screened_active_this_month",
              },
              {
                type: "simple_column",
                alias: "tb_screened_this_visit_this_month",
                column: "hmsd.tb_screened_this_visit_this_month",
              },
              {
                type: "simple_column",
                alias: "tb_screened_positive",
                column: "hmsd.presumed_tb_positive_this_month",
              },
              {
                type: "derived_column",
                alias: "screened_for_cervical_ca",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "0",
                },
              },
              {
                type: "simple_column",
                alias: "started_ipt",
                column: "hmsd.started_ipt_this_month",
              },
              {
                type: "derived_column",
                alias: "completed_ipt_past_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "completed_ipt_past_12_months",
                },
              },
              {
                type: "derived_column",
                alias: "condoms_provided",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "condoms_provided_this_month",
                },
              },
              {
                type: "derived_column",
                alias: "started_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "started_modern_contraception_this_month",
                },
              },
              {
                type: "simple_column",
                alias: "on_modern_contraception",
                column: "hmsd.on_modern_contraception_this_month",
              },
              {
                type: "simple_column",
                alias: "scheduled_visits",
                column: "hmsd.scheduled_this_month",
              },
              {
                type: "simple_column",
                alias: "unscheduled_visits",
                column: "hmsd.unscheduled_this_month",
              },
              {
                type: "simple_column",
                alias: "total_visits",
                column: "hmsd.visit_this_month",
              },
              {
                type: "simple_column",
                alias: "f_gte_18_visits",
                column: "hmsd.f_18_and_older_this_month",
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_art_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.art_revisit_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_vl_suppressed_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_suppressed_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias:
                  "is_cross_border_active_on_art_12_month_cohort_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.active_on_art_12_month_cohort_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_presumed_tb_positive_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.presumed_tb_positive_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_started_tb_tx_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.started_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_completed_tb_tx",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_end_date is not null , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_stopped_tb_tx",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_stop_date is not null , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_transferred_out",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'transfer_out' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_ltfu",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and ( status = 'defaulter' or status = 'ltfu'), 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_dead",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'dead', 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_modern_contraception_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_modern_contraception_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_county_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_county_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_3_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.travelled_outside_last_3_months = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_6_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.travelled_outside_last_6_months = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.travelled_outside_last_12_months = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_kenya",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11197, 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_uganda",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11118, 1 , 0)",
                },
              },
            ],
            filters: {
              conditionJoinOperator: "and",
              conditions: [
                {
                  filterType: "tableColumns",
                  conditionExpression: "endDate = ?",
                  parameterName: "endDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression: "hmsd.location_id in ?",
                  parameterName: "locations",
                },
              ],
            },
            default: {
              name: "mainDataSetBase",
              version: "1.0",
              tag: "",
              description: "",
              uses: [],
              sources: [
                {
                  table: "<<hivMonthlyDatasetSource>>",
                  alias: "hmsd",
                },
                {
                  table: "amrs.location",
                  alias: "l",
                  join: {
                    type: "INNER",
                    joinCondition: "l.location_id = hmsd.location_id",
                  },
                },
              ],
              columns: [
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "birthdate",
                  column: "hmsd.birthdate",
                },
                {
                  type: "simple_column",
                  alias: "age",
                  column: "hmsd.age",
                },
                {
                  type: "simple_column",
                  alias: "person_id",
                  column: "hmsd.person_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "l.uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "l.name",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_meds",
                  column: "hmsd.cur_arv_meds",
                },
                {
                  type: "derived_column",
                  alias: "enrollment_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "arv_first_regimen_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "cur_regimen_arv_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_line",
                  column: "hmsd.cur_arv_line",
                },
                {
                  type: "simple_column",
                  alias: "vl_1",
                  column: "hmsd.vl_1",
                },
                {
                  type: "derived_column",
                  alias: "vl_1_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "age_range",
                  expressionType: "case_statement",
                  expressionOptions: {
                    caseOptions: [
                      {
                        condition: "hmsd.age < 1",
                        value: "0_to_1",
                      },
                      {
                        condition: "hmsd.age between 1 and 9",
                        value: "1_to_9",
                      },
                      {
                        condition: "hmsd.age between 10 and 14",
                        value: "10_to_14",
                      },
                      {
                        condition: "hmsd.age between 15 and 19",
                        value: "15_to_19",
                      },
                      {
                        condition: "hmsd.age between 20 and 24",
                        value: "20_to_24",
                      },
                      {
                        condition: "else",
                        value: "older_than_24",
                      },
                    ],
                  },
                },
                {
                  type: "simple_column",
                  alias: "enrolled_this_month",
                  column: "hmsd.enrolled_this_month",
                },
                {
                  type: "simple_column",
                  alias: "art_revisit_this_month",
                  column: "hmsd.art_revisit_this_month",
                },
                {
                  type: "simple_column",
                  alias: "current_in_care",
                  column: "hmsd.active_in_care_this_month",
                },
                {
                  type: "simple_column",
                  alias: "pre_art",
                  column: "hmsd.is_pre_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "started_art_pregnant",
                  column: "hmsd.is_pregnant_and_started_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "started_art_and_has_tb",
                  column: "hmsd.on_tb_tx_and_started_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "active_on_art",
                  column: "hmsd.on_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "on_ctx_prophylaxis",
                  column: "hmsd.on_pcp_prophylaxis_this_month",
                },
                {
                  type: "simple_column",
                  alias: "current_on_art",
                  column: "hmsd.on_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "screened_for_tb",
                  column: "hmsd.tb_screened_active_this_month",
                },
                {
                  type: "simple_column",
                  alias: "tb_screened_this_visit_this_month",
                  column: "hmsd.tb_screened_this_visit_this_month",
                },
                {
                  type: "simple_column",
                  alias: "tb_screened_positive",
                  column: "hmsd.presumed_tb_positive_this_month",
                },
                {
                  type: "derived_column",
                  alias: "screened_for_cervical_ca",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "0",
                  },
                },
                {
                  type: "simple_column",
                  alias: "started_ipt",
                  column: "hmsd.started_ipt_this_month",
                },
                {
                  type: "derived_column",
                  alias: "completed_ipt_past_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "completed_ipt_past_12_months",
                  },
                },
                {
                  type: "derived_column",
                  alias: "condoms_provided",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "condoms_provided_this_month",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "started_modern_contraception_this_month",
                  },
                },
                {
                  type: "simple_column",
                  alias: "on_modern_contraception",
                  column: "hmsd.on_modern_contraception_this_month",
                },
                {
                  type: "simple_column",
                  alias: "scheduled_visits",
                  column: "hmsd.scheduled_this_month",
                },
                {
                  type: "simple_column",
                  alias: "unscheduled_visits",
                  column: "hmsd.unscheduled_this_month",
                },
                {
                  type: "simple_column",
                  alias: "total_visits",
                  column: "hmsd.visit_this_month",
                },
                {
                  type: "simple_column",
                  alias: "f_gte_18_visits",
                  column: "hmsd.f_18_and_older_this_month",
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_art_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.art_revisit_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_vl_suppressed_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_suppressed_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias:
                    "is_cross_border_active_on_art_12_month_cohort_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.active_on_art_12_month_cohort_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_presumed_tb_positive_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.presumed_tb_positive_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_started_tb_tx_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.started_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_completed_tb_tx",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_end_date is not null , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_stopped_tb_tx",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_stop_date is not null , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_transferred_out",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'transfer_out' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_ltfu",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and ( status = 'defaulter' or status = 'ltfu'), 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_dead",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'dead', 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_modern_contraception_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_modern_contraception_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_county_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_county_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_3_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.travelled_outside_last_3_months = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_6_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.travelled_outside_last_6_months = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.travelled_outside_last_12_months = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_kenya",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11197, 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_uganda",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11118, 1 , 0)",
                  },
                },
              ],
              filters: {
                conditionJoinOperator: "and",
                conditions: [
                  {
                    filterType: "tableColumns",
                    conditionExpression: "endDate = ?",
                    parameterName: "endDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression: "hmsd.location_id in ?",
                    parameterName: "locations",
                  },
                ],
              },
            },
          },
        },
        reportQuery:
          "SELECT 1 AS `join_location`, hmsd.location_uuid AS `location_uuid`, hmsd.location AS `location`, hmsd.gender AS `gender`, hmsd.location_id AS `location_id`, hmsd.age_range AS `age_range`, sum(hmsd.current_on_art) AS `current_on_art`, sum(hmsd.enrolled_this_month) AS `enrolled_this_month`, sum(hmsd.pre_art) AS `pre_art`, sum(hmsd.current_in_care) AS `current_in_care`, sum(hmsd.active_on_art) AS `active_on_art`, sum(hmsd.on_ctx_prophylaxis) AS `on_ctx_prophylaxis`, sum(hmsd.screened_for_tb) AS `screened_for_tb`, sum(hmsd.tb_screened_this_visit_this_month) AS `tb_screened_this_visit_this_month`, sum(hmsd.tb_screened_positive) AS `tb_screened_positive`, sum(hmsd.started_ipt) AS `started_ipt`, sum(hmsd.completed_ipt_past_12_months) AS `completed_ipt_past_12_months`, sum(hmsd.condoms_provided) AS `condoms_provided`, sum(hmsd.condoms_provided) AS `started_modern_contraception`, sum(hmsd.on_modern_contraception) AS `on_modern_contraception`, sum(hmsd.art_revisit_this_month) AS `art_revisit_this_month`, sum(hmsd.f_gte_18_visits) AS `f_gte_18_visits` FROM (SELECT hmsd.gender AS `gender`, hmsd.birthdate AS `birthdate`, hmsd.age AS `age`, hmsd.person_id AS `person_id`, l.uuid AS `location_uuid`, l.name AS `location`, hmsd.location_id AS `location_id`, hmsd.cur_arv_meds AS `cur_arv_meds`, date_format(hmsd.enrollment_date,'%d-%m-%Y') AS `enrollment_date`, date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y') AS `arv_first_regimen_start_date`, date_format(hmsd.arv_start_date,'%d-%m-%Y') AS `cur_regimen_arv_start_date`, hmsd.cur_arv_line AS `cur_arv_line`, hmsd.vl_1 AS `vl_1`, date_format(hmsd.vl_1_date,'%d-%m-%Y') AS `vl_1_date`, CASE WHEN (hmsd.age between 20 and 24) THEN '20_to_24' WHEN (hmsd.age between 15 and 19) THEN '15_to_19' WHEN (hmsd.age between 10 and 14) THEN '10_to_14' WHEN (hmsd.age between 1 and 9) THEN '1_to_9' WHEN (hmsd.age < 1) THEN '0_to_1' ELSE 'older_than_24' END AS `age_range`, hmsd.enrolled_this_month AS `enrolled_this_month`, hmsd.art_revisit_this_month AS `art_revisit_this_month`, hmsd.active_in_care_this_month AS `current_in_care`, hmsd.is_pre_art_this_month AS `pre_art`, hmsd.is_pregnant_and_started_art_this_month AS `started_art_pregnant`, hmsd.on_tb_tx_and_started_art_this_month AS `started_art_and_has_tb`, hmsd.on_art_this_month AS `active_on_art`, hmsd.on_pcp_prophylaxis_this_month AS `on_ctx_prophylaxis`, hmsd.on_art_this_month AS `current_on_art`, hmsd.tb_screened_active_this_month AS `screened_for_tb`, hmsd.tb_screened_this_visit_this_month AS `tb_screened_this_visit_this_month`, hmsd.presumed_tb_positive_this_month AS `tb_screened_positive`, 0 AS `screened_for_cervical_ca`, hmsd.started_ipt_this_month AS `started_ipt`, completed_ipt_past_12_months AS `completed_ipt_past_12_months`, condoms_provided_this_month AS `condoms_provided`, started_modern_contraception_this_month AS `started_modern_contraception`, hmsd.on_modern_contraception_this_month AS `on_modern_contraception`, hmsd.scheduled_this_month AS `scheduled_visits`, hmsd.unscheduled_this_month AS `unscheduled_visits`, hmsd.visit_this_month AS `total_visits`, hmsd.f_18_and_older_this_month AS `f_gte_18_visits`, IF(hmsd.art_revisit_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_on_art_this_month`, IF(hmsd.is_suppressed_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_vl_suppressed_this_month`, IF(hmsd.active_on_art_12_month_cohort_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_active_on_art_12_month_cohort_this_month`, IF(hmsd.presumed_tb_positive_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_presumed_tb_positive_this_month`, IF(hmsd.started_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_started_tb_tx_this_month`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'active' , 1 , 0) AS `is_cross_border_on_tb_tx_this_month`, IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_end_date is not null , 1 , 0) AS `is_cross_border_completed_tb_tx`, IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_stop_date is not null , 1 , 0) AS `is_cross_border_stopped_tb_tx`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'transfer_out' , 1 , 0) AS `is_cross_border_on_tb_tx_transferred_out`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and ( status = 'defaulter' or status = 'ltfu'), 1 , 0) AS `is_cross_border_on_tb_tx_ltfu`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'dead', 1 , 0) AS `is_cross_border_on_tb_tx_dead`, IF(hmsd.on_modern_contraception_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_on_modern_contraception_this_month`, IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' , 1 , 0) AS `is_cross_border_country_this_month`, IF(hmsd.is_cross_border_county_this_month = 1 and hmsd.status = 'active' , 1 , 0) AS `is_cross_border_county_this_month`, IF(hmsd.travelled_outside_last_3_months = 1 and hmsd.status = 'active' , 1 , 0) AS `travelled_outside_last_3_months`, IF(hmsd.travelled_outside_last_6_months = 1 and hmsd.status = 'active' , 1 , 0) AS `travelled_outside_last_6_months`, IF(hmsd.travelled_outside_last_12_months = 1 and hmsd.status = 'active' , 1 , 0) AS `travelled_outside_last_12_months`, IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11197, 1 , 0) AS `is_cross_border_country_kenya`, IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11118, 1 , 0) AS `is_cross_border_country_uganda` FROM etl.hiv_monthly_report_dataset_cbb `hmsd` INNER JOIN amrs.location `l` ON (l.location_id = hmsd.location_id) WHERE (endDate = '2020-09-30') AND (hmsd.location_id in (19))) `hmsd` GROUP BY gender, age_range, location_id",
        queryResults: {
          results: [
            {
              join_location: 1,
              location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
              location: "Busia",
              location_id: 19,
              dc__gender__F__age_range__10_to_14__current_on_art: 76,
              dc__gender__F__age_range__10_to_14__enrolled_this_month: 0,
              dc__gender__F__age_range__10_to_14__pre_art: 0,
              dc__gender__F__age_range__10_to_14__current_in_care: 76,
              dc__gender__F__age_range__10_to_14__active_on_art: 76,
              dc__gender__F__age_range__10_to_14__on_ctx_prophylaxis: 46,
              dc__gender__F__age_range__10_to_14__screened_for_tb: 75,
              dc__gender__F__age_range__10_to_14__tb_screened_this_visit_this_month: 22,
              dc__gender__F__age_range__10_to_14__tb_screened_positive: 1,
              dc__gender__F__age_range__10_to_14__started_ipt: 1,
              dc__gender__F__age_range__10_to_14__completed_ipt_past_12_months: 37,
              dc__gender__F__age_range__10_to_14__condoms_provided: 0,
              dc__gender__F__age_range__10_to_14__started_modern_contraception: 0,
              dc__gender__F__age_range__10_to_14__on_modern_contraception: 0,
              dc__gender__F__age_range__10_to_14__art_revisit_this_month: 76,
              dc__gender__F__age_range__10_to_14__f_gte_18_visits: 0,
              dc__gender__F__age_range__15_to_19__current_on_art: 81,
              dc__gender__F__age_range__15_to_19__enrolled_this_month: 1,
              dc__gender__F__age_range__15_to_19__pre_art: 0,
              dc__gender__F__age_range__15_to_19__current_in_care: 81,
              dc__gender__F__age_range__15_to_19__active_on_art: 81,
              dc__gender__F__age_range__15_to_19__on_ctx_prophylaxis: 58,
              dc__gender__F__age_range__15_to_19__screened_for_tb: 76,
              dc__gender__F__age_range__15_to_19__tb_screened_this_visit_this_month: 25,
              dc__gender__F__age_range__15_to_19__tb_screened_positive: 0,
              dc__gender__F__age_range__15_to_19__started_ipt: 0,
              dc__gender__F__age_range__15_to_19__completed_ipt_past_12_months: 26,
              dc__gender__F__age_range__15_to_19__condoms_provided: 0,
              dc__gender__F__age_range__15_to_19__started_modern_contraception: 0,
              dc__gender__F__age_range__15_to_19__on_modern_contraception: 1,
              dc__gender__F__age_range__15_to_19__art_revisit_this_month: 80,
              dc__gender__F__age_range__15_to_19__f_gte_18_visits: 7,
              dc__gender__F__age_range__1_to_9__current_on_art: 55,
              dc__gender__F__age_range__1_to_9__enrolled_this_month: 0,
              dc__gender__F__age_range__1_to_9__pre_art: 0,
              dc__gender__F__age_range__1_to_9__current_in_care: 55,
              dc__gender__F__age_range__1_to_9__active_on_art: 55,
              dc__gender__F__age_range__1_to_9__on_ctx_prophylaxis: 37,
              dc__gender__F__age_range__1_to_9__screened_for_tb: 54,
              dc__gender__F__age_range__1_to_9__tb_screened_this_visit_this_month: 11,
              dc__gender__F__age_range__1_to_9__tb_screened_positive: 0,
              dc__gender__F__age_range__1_to_9__started_ipt: 1,
              dc__gender__F__age_range__1_to_9__completed_ipt_past_12_months: 26,
              dc__gender__F__age_range__1_to_9__condoms_provided: 0,
              dc__gender__F__age_range__1_to_9__started_modern_contraception: 0,
              dc__gender__F__age_range__1_to_9__on_modern_contraception: 0,
              dc__gender__F__age_range__1_to_9__art_revisit_this_month: 55,
              dc__gender__F__age_range__1_to_9__f_gte_18_visits: 0,
              dc__gender__F__age_range__20_to_24__current_on_art: 93,
              dc__gender__F__age_range__20_to_24__enrolled_this_month: 0,
              dc__gender__F__age_range__20_to_24__pre_art: 0,
              dc__gender__F__age_range__20_to_24__current_in_care: 93,
              dc__gender__F__age_range__20_to_24__active_on_art: 93,
              dc__gender__F__age_range__20_to_24__on_ctx_prophylaxis: 78,
              dc__gender__F__age_range__20_to_24__screened_for_tb: 84,
              dc__gender__F__age_range__20_to_24__tb_screened_this_visit_this_month: 14,
              dc__gender__F__age_range__20_to_24__tb_screened_positive: 0,
              dc__gender__F__age_range__20_to_24__started_ipt: 0,
              dc__gender__F__age_range__20_to_24__completed_ipt_past_12_months: 32,
              dc__gender__F__age_range__20_to_24__condoms_provided: 6,
              dc__gender__F__age_range__20_to_24__started_modern_contraception: 6,
              dc__gender__F__age_range__20_to_24__on_modern_contraception: 21,
              dc__gender__F__age_range__20_to_24__art_revisit_this_month: 93,
              dc__gender__F__age_range__20_to_24__f_gte_18_visits: 14,
              dc__gender__F__age_range__older_than_24__current_on_art: 3326,
              dc__gender__F__age_range__older_than_24__enrolled_this_month: 9,
              dc__gender__F__age_range__older_than_24__pre_art: 0,
              dc__gender__F__age_range__older_than_24__current_in_care: 3328,
              dc__gender__F__age_range__older_than_24__active_on_art: 3326,
              dc__gender__F__age_range__older_than_24__on_ctx_prophylaxis: 2897,
              dc__gender__F__age_range__older_than_24__screened_for_tb: 3033,
              dc__gender__F__age_range__older_than_24__tb_screened_this_visit_this_month: 377,
              dc__gender__F__age_range__older_than_24__tb_screened_positive: 0,
              dc__gender__F__age_range__older_than_24__started_ipt: 8,
              dc__gender__F__age_range__older_than_24__completed_ipt_past_12_months: 857,
              dc__gender__F__age_range__older_than_24__condoms_provided: 189,
              dc__gender__F__age_range__older_than_24__started_modern_contraception: 189,
              dc__gender__F__age_range__older_than_24__on_modern_contraception: 1377,
              dc__gender__F__age_range__older_than_24__art_revisit_this_month: 3317,
              dc__gender__F__age_range__older_than_24__f_gte_18_visits: 468,
              dc__gender__M__age_range__10_to_14__current_on_art: 68,
              dc__gender__M__age_range__10_to_14__enrolled_this_month: 0,
              dc__gender__M__age_range__10_to_14__pre_art: 0,
              dc__gender__M__age_range__10_to_14__current_in_care: 68,
              dc__gender__M__age_range__10_to_14__active_on_art: 68,
              dc__gender__M__age_range__10_to_14__on_ctx_prophylaxis: 40,
              dc__gender__M__age_range__10_to_14__screened_for_tb: 66,
              dc__gender__M__age_range__10_to_14__tb_screened_this_visit_this_month: 26,
              dc__gender__M__age_range__10_to_14__tb_screened_positive: 0,
              dc__gender__M__age_range__10_to_14__started_ipt: 0,
              dc__gender__M__age_range__10_to_14__completed_ipt_past_12_months: 32,
              dc__gender__M__age_range__10_to_14__condoms_provided: 0,
              dc__gender__M__age_range__10_to_14__started_modern_contraception: 0,
              dc__gender__M__age_range__10_to_14__on_modern_contraception: 0,
              dc__gender__M__age_range__10_to_14__art_revisit_this_month: 68,
              dc__gender__M__age_range__10_to_14__f_gte_18_visits: 0,
              dc__gender__M__age_range__15_to_19__current_on_art: 96,
              dc__gender__M__age_range__15_to_19__enrolled_this_month: 0,
              dc__gender__M__age_range__15_to_19__pre_art: 0,
              dc__gender__M__age_range__15_to_19__current_in_care: 97,
              dc__gender__M__age_range__15_to_19__active_on_art: 96,
              dc__gender__M__age_range__15_to_19__on_ctx_prophylaxis: 60,
              dc__gender__M__age_range__15_to_19__screened_for_tb: 91,
              dc__gender__M__age_range__15_to_19__tb_screened_this_visit_this_month: 31,
              dc__gender__M__age_range__15_to_19__tb_screened_positive: 0,
              dc__gender__M__age_range__15_to_19__started_ipt: 0,
              dc__gender__M__age_range__15_to_19__completed_ipt_past_12_months: 45,
              dc__gender__M__age_range__15_to_19__condoms_provided: 0,
              dc__gender__M__age_range__15_to_19__started_modern_contraception: 0,
              dc__gender__M__age_range__15_to_19__on_modern_contraception: 0,
              dc__gender__M__age_range__15_to_19__art_revisit_this_month: 96,
              dc__gender__M__age_range__15_to_19__f_gte_18_visits: 0,
              dc__gender__M__age_range__1_to_9__current_on_art: 37,
              dc__gender__M__age_range__1_to_9__enrolled_this_month: 0,
              dc__gender__M__age_range__1_to_9__pre_art: 0,
              dc__gender__M__age_range__1_to_9__current_in_care: 37,
              dc__gender__M__age_range__1_to_9__active_on_art: 37,
              dc__gender__M__age_range__1_to_9__on_ctx_prophylaxis: 24,
              dc__gender__M__age_range__1_to_9__screened_for_tb: 35,
              dc__gender__M__age_range__1_to_9__tb_screened_this_visit_this_month: 10,
              dc__gender__M__age_range__1_to_9__tb_screened_positive: 0,
              dc__gender__M__age_range__1_to_9__started_ipt: 0,
              dc__gender__M__age_range__1_to_9__completed_ipt_past_12_months: 16,
              dc__gender__M__age_range__1_to_9__condoms_provided: 0,
              dc__gender__M__age_range__1_to_9__started_modern_contraception: 0,
              dc__gender__M__age_range__1_to_9__on_modern_contraception: 0,
              dc__gender__M__age_range__1_to_9__art_revisit_this_month: 37,
              dc__gender__M__age_range__1_to_9__f_gte_18_visits: 0,
              dc__gender__M__age_range__20_to_24__current_on_art: 57,
              dc__gender__M__age_range__20_to_24__enrolled_this_month: 0,
              dc__gender__M__age_range__20_to_24__pre_art: 0,
              dc__gender__M__age_range__20_to_24__current_in_care: 57,
              dc__gender__M__age_range__20_to_24__active_on_art: 57,
              dc__gender__M__age_range__20_to_24__on_ctx_prophylaxis: 46,
              dc__gender__M__age_range__20_to_24__screened_for_tb: 52,
              dc__gender__M__age_range__20_to_24__tb_screened_this_visit_this_month: 14,
              dc__gender__M__age_range__20_to_24__tb_screened_positive: 0,
              dc__gender__M__age_range__20_to_24__started_ipt: 0,
              dc__gender__M__age_range__20_to_24__completed_ipt_past_12_months: 21,
              dc__gender__M__age_range__20_to_24__condoms_provided: 5,
              dc__gender__M__age_range__20_to_24__started_modern_contraception: 5,
              dc__gender__M__age_range__20_to_24__on_modern_contraception: 0,
              dc__gender__M__age_range__20_to_24__art_revisit_this_month: 57,
              dc__gender__M__age_range__20_to_24__f_gte_18_visits: 0,
              dc__gender__M__age_range__older_than_24__current_on_art: 1674,
              dc__gender__M__age_range__older_than_24__enrolled_this_month: 8,
              dc__gender__M__age_range__older_than_24__pre_art: 0,
              dc__gender__M__age_range__older_than_24__current_in_care: 1674,
              dc__gender__M__age_range__older_than_24__active_on_art: 1674,
              dc__gender__M__age_range__older_than_24__on_ctx_prophylaxis: 1441,
              dc__gender__M__age_range__older_than_24__screened_for_tb: 1526,
              dc__gender__M__age_range__older_than_24__tb_screened_this_visit_this_month: 208,
              dc__gender__M__age_range__older_than_24__tb_screened_positive: 0,
              dc__gender__M__age_range__older_than_24__started_ipt: 2,
              dc__gender__M__age_range__older_than_24__completed_ipt_past_12_months: 474,
              dc__gender__M__age_range__older_than_24__condoms_provided: 124,
              dc__gender__M__age_range__older_than_24__started_modern_contraception: 124,
              dc__gender__M__age_range__older_than_24__on_modern_contraception: 0,
              dc__gender__M__age_range__older_than_24__art_revisit_this_month: 1666,
              dc__gender__M__age_range__older_than_24__f_gte_18_visits: 0,
            },
          ],
        },
      },
      results: {
        schemas: {
          main: {
            name: "mainDatasetAggregate",
            version: "1.0",
            tag: "",
            description: "",
            uses: [
              {
                name: "mainDataSetBase",
                version: "1.0",
                type: "dataset_def",
              },
            ],
            sources: [
              {
                dataSet: "mainDataSetBase",
                alias: "hmsd",
              },
            ],
            columns: [
              {
                type: "derived_column",
                alias: "join_location",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "1",
                },
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "hmsd.location_uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "hmsd.location",
              },
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "age_range",
                column: "hmsd.age_range",
              },
              {
                type: "derived_column",
                alias: "current_on_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.current_on_art)",
                },
              },
              {
                type: "derived_column",
                alias: "enrolled_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.enrolled_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "pre_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.pre_art)",
                },
              },
              {
                type: "derived_column",
                alias: "current_in_care",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.current_in_care)",
                },
              },
              {
                type: "derived_column",
                alias: "active_on_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.active_on_art)",
                },
              },
              {
                type: "derived_column",
                alias: "on_ctx_prophylaxis",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.on_ctx_prophylaxis)",
                },
              },
              {
                type: "derived_column",
                alias: "screened_for_tb",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.screened_for_tb)",
                },
              },
              {
                type: "derived_column",
                alias: "tb_screened_this_visit_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.tb_screened_this_visit_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "tb_screened_positive",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.tb_screened_positive)",
                },
              },
              {
                type: "derived_column",
                alias: "started_ipt",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.started_ipt)",
                },
              },
              {
                type: "derived_column",
                alias: "completed_ipt_past_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.completed_ipt_past_12_months)",
                },
              },
              {
                type: "derived_column",
                alias: "condoms_provided",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.condoms_provided)",
                },
              },
              {
                type: "derived_column",
                alias: "started_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.condoms_provided)",
                },
              },
              {
                type: "derived_column",
                alias: "on_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.on_modern_contraception)",
                },
              },
              {
                type: "derived_column",
                alias: "art_revisit_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.art_revisit_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "f_gte_18_visits",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.f_gte_18_visits)",
                },
              },
            ],
            groupBy: {
              groupParam: "groupByParam",
              columns: ["gender", "age_range", "location_id"],
              excludeParam: "excludeParam",
            },
            transFormDirectives: {
              joinColumn: "location_id",
              skipColumns: ["location_uuid", "join_location"],
              disaggregationColumns: ["gender", "age_range"],
            },
            dynamicJsonQueryGenerationDirectives: {
              patientListGenerator: {
                useTemplate: "patient-list-frozen-template",
                useTemplateVersion: "1.0",
                generatingDirectives: {
                  joinDirectives: {
                    joinType: "INNER",
                    joinCondition: "<<base_column>> = <<template_column>>",
                    baseColumn: "person_id",
                    templateColumn: "person_id",
                  },
                },
              },
            },
            default: {
              name: "mainDatasetAggregate",
              version: "1.0",
              tag: "",
              description: "",
              uses: [
                {
                  name: "mainDataSetBase",
                  version: "1.0",
                  type: "dataset_def",
                },
              ],
              sources: [
                {
                  dataSet: "mainDataSetBase",
                  alias: "hmsd",
                },
              ],
              columns: [
                {
                  type: "derived_column",
                  alias: "join_location",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "1",
                  },
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "hmsd.location_uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "hmsd.location",
                },
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "age_range",
                  column: "hmsd.age_range",
                },
                {
                  type: "derived_column",
                  alias: "current_on_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.current_on_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "enrolled_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.enrolled_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "pre_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.pre_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "current_in_care",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.current_in_care)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "active_on_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.active_on_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_ctx_prophylaxis",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.on_ctx_prophylaxis)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "screened_for_tb",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.screened_for_tb)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "tb_screened_this_visit_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.tb_screened_this_visit_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "tb_screened_positive",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.tb_screened_positive)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_ipt",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.started_ipt)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "completed_ipt_past_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.completed_ipt_past_12_months)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "condoms_provided",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.condoms_provided)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.condoms_provided)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.on_modern_contraception)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "art_revisit_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.art_revisit_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "f_gte_18_visits",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.f_gte_18_visits)",
                  },
                },
              ],
              groupBy: {
                groupParam: "groupByParam",
                columns: ["gender", "age_range", "location_id"],
                excludeParam: "excludeParam",
              },
              transFormDirectives: {
                joinColumn: "location_id",
                skipColumns: ["location_uuid", "join_location"],
                disaggregationColumns: ["gender", "age_range"],
              },
              dynamicJsonQueryGenerationDirectives: {
                patientListGenerator: {
                  useTemplate: "patient-list-frozen-template",
                  useTemplateVersion: "1.0",
                  generatingDirectives: {
                    joinDirectives: {
                      joinType: "INNER",
                      joinCondition: "<<base_column>> = <<template_column>>",
                      baseColumn: "person_id",
                      templateColumn: "person_id",
                    },
                  },
                },
              },
            },
          },
          mainDataSetBase: {
            name: "mainDataSetBase",
            version: "1.0",
            tag: "",
            description: "",
            uses: [],
            sources: [
              {
                table: "etl.hiv_monthly_report_dataset_cbb",
                alias: "hmsd",
              },
              {
                table: "amrs.location",
                alias: "l",
                join: {
                  type: "INNER",
                  joinCondition: "l.location_id = hmsd.location_id",
                },
              },
            ],
            columns: [
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "birthdate",
                column: "hmsd.birthdate",
              },
              {
                type: "simple_column",
                alias: "age",
                column: "hmsd.age",
              },
              {
                type: "simple_column",
                alias: "person_id",
                column: "hmsd.person_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "l.uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "l.name",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "cur_arv_meds",
                column: "hmsd.cur_arv_meds",
              },
              {
                type: "derived_column",
                alias: "enrollment_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "arv_first_regimen_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "cur_regimen_arv_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "simple_column",
                alias: "cur_arv_line",
                column: "hmsd.cur_arv_line",
              },
              {
                type: "simple_column",
                alias: "vl_1",
                column: "hmsd.vl_1",
              },
              {
                type: "derived_column",
                alias: "vl_1_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "age_range",
                expressionType: "case_statement",
                expressionOptions: {
                  caseOptions: [
                    {
                      condition: "hmsd.age < 1",
                      value: "0_to_1",
                    },
                    {
                      condition: "hmsd.age between 1 and 9",
                      value: "1_to_9",
                    },
                    {
                      condition: "hmsd.age between 10 and 14",
                      value: "10_to_14",
                    },
                    {
                      condition: "hmsd.age between 15 and 19",
                      value: "15_to_19",
                    },
                    {
                      condition: "hmsd.age between 20 and 24",
                      value: "20_to_24",
                    },
                    {
                      condition: "else",
                      value: "older_than_24",
                    },
                  ],
                },
              },
              {
                type: "simple_column",
                alias: "enrolled_this_month",
                column: "hmsd.enrolled_this_month",
              },
              {
                type: "simple_column",
                alias: "art_revisit_this_month",
                column: "hmsd.art_revisit_this_month",
              },
              {
                type: "simple_column",
                alias: "current_in_care",
                column: "hmsd.active_in_care_this_month",
              },
              {
                type: "simple_column",
                alias: "pre_art",
                column: "hmsd.is_pre_art_this_month",
              },
              {
                type: "simple_column",
                alias: "started_art_pregnant",
                column: "hmsd.is_pregnant_and_started_art_this_month",
              },
              {
                type: "simple_column",
                alias: "started_art_and_has_tb",
                column: "hmsd.on_tb_tx_and_started_art_this_month",
              },
              {
                type: "simple_column",
                alias: "active_on_art",
                column: "hmsd.on_art_this_month",
              },
              {
                type: "simple_column",
                alias: "on_ctx_prophylaxis",
                column: "hmsd.on_pcp_prophylaxis_this_month",
              },
              {
                type: "simple_column",
                alias: "current_on_art",
                column: "hmsd.on_art_this_month",
              },
              {
                type: "simple_column",
                alias: "screened_for_tb",
                column: "hmsd.tb_screened_active_this_month",
              },
              {
                type: "simple_column",
                alias: "tb_screened_this_visit_this_month",
                column: "hmsd.tb_screened_this_visit_this_month",
              },
              {
                type: "simple_column",
                alias: "tb_screened_positive",
                column: "hmsd.presumed_tb_positive_this_month",
              },
              {
                type: "derived_column",
                alias: "screened_for_cervical_ca",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "0",
                },
              },
              {
                type: "simple_column",
                alias: "started_ipt",
                column: "hmsd.started_ipt_this_month",
              },
              {
                type: "derived_column",
                alias: "completed_ipt_past_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "completed_ipt_past_12_months",
                },
              },
              {
                type: "derived_column",
                alias: "condoms_provided",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "condoms_provided_this_month",
                },
              },
              {
                type: "derived_column",
                alias: "started_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "started_modern_contraception_this_month",
                },
              },
              {
                type: "simple_column",
                alias: "on_modern_contraception",
                column: "hmsd.on_modern_contraception_this_month",
              },
              {
                type: "simple_column",
                alias: "scheduled_visits",
                column: "hmsd.scheduled_this_month",
              },
              {
                type: "simple_column",
                alias: "unscheduled_visits",
                column: "hmsd.unscheduled_this_month",
              },
              {
                type: "simple_column",
                alias: "total_visits",
                column: "hmsd.visit_this_month",
              },
              {
                type: "simple_column",
                alias: "f_gte_18_visits",
                column: "hmsd.f_18_and_older_this_month",
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_art_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.art_revisit_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_vl_suppressed_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_suppressed_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias:
                  "is_cross_border_active_on_art_12_month_cohort_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.active_on_art_12_month_cohort_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_presumed_tb_positive_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.presumed_tb_positive_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_started_tb_tx_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.started_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_completed_tb_tx",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_end_date is not null , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_stopped_tb_tx",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_stop_date is not null , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_transferred_out",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'transfer_out' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_ltfu",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and ( status = 'defaulter' or status = 'ltfu'), 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_dead",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'dead', 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_modern_contraception_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_modern_contraception_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_county_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_county_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_3_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.travelled_outside_last_3_months = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_6_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.travelled_outside_last_6_months = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.travelled_outside_last_12_months = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_kenya",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11197, 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_uganda",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11118, 1 , 0)",
                },
              },
            ],
            filters: {
              conditionJoinOperator: "and",
              conditions: [
                {
                  filterType: "tableColumns",
                  conditionExpression: "endDate = ?",
                  parameterName: "endDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression: "hmsd.location_id in ?",
                  parameterName: "locations",
                },
              ],
            },
            default: {
              name: "mainDataSetBase",
              version: "1.0",
              tag: "",
              description: "",
              uses: [],
              sources: [
                {
                  table: "<<hivMonthlyDatasetSource>>",
                  alias: "hmsd",
                },
                {
                  table: "amrs.location",
                  alias: "l",
                  join: {
                    type: "INNER",
                    joinCondition: "l.location_id = hmsd.location_id",
                  },
                },
              ],
              columns: [
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "birthdate",
                  column: "hmsd.birthdate",
                },
                {
                  type: "simple_column",
                  alias: "age",
                  column: "hmsd.age",
                },
                {
                  type: "simple_column",
                  alias: "person_id",
                  column: "hmsd.person_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "l.uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "l.name",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_meds",
                  column: "hmsd.cur_arv_meds",
                },
                {
                  type: "derived_column",
                  alias: "enrollment_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "arv_first_regimen_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "cur_regimen_arv_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_line",
                  column: "hmsd.cur_arv_line",
                },
                {
                  type: "simple_column",
                  alias: "vl_1",
                  column: "hmsd.vl_1",
                },
                {
                  type: "derived_column",
                  alias: "vl_1_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "age_range",
                  expressionType: "case_statement",
                  expressionOptions: {
                    caseOptions: [
                      {
                        condition: "hmsd.age < 1",
                        value: "0_to_1",
                      },
                      {
                        condition: "hmsd.age between 1 and 9",
                        value: "1_to_9",
                      },
                      {
                        condition: "hmsd.age between 10 and 14",
                        value: "10_to_14",
                      },
                      {
                        condition: "hmsd.age between 15 and 19",
                        value: "15_to_19",
                      },
                      {
                        condition: "hmsd.age between 20 and 24",
                        value: "20_to_24",
                      },
                      {
                        condition: "else",
                        value: "older_than_24",
                      },
                    ],
                  },
                },
                {
                  type: "simple_column",
                  alias: "enrolled_this_month",
                  column: "hmsd.enrolled_this_month",
                },
                {
                  type: "simple_column",
                  alias: "art_revisit_this_month",
                  column: "hmsd.art_revisit_this_month",
                },
                {
                  type: "simple_column",
                  alias: "current_in_care",
                  column: "hmsd.active_in_care_this_month",
                },
                {
                  type: "simple_column",
                  alias: "pre_art",
                  column: "hmsd.is_pre_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "started_art_pregnant",
                  column: "hmsd.is_pregnant_and_started_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "started_art_and_has_tb",
                  column: "hmsd.on_tb_tx_and_started_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "active_on_art",
                  column: "hmsd.on_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "on_ctx_prophylaxis",
                  column: "hmsd.on_pcp_prophylaxis_this_month",
                },
                {
                  type: "simple_column",
                  alias: "current_on_art",
                  column: "hmsd.on_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "screened_for_tb",
                  column: "hmsd.tb_screened_active_this_month",
                },
                {
                  type: "simple_column",
                  alias: "tb_screened_this_visit_this_month",
                  column: "hmsd.tb_screened_this_visit_this_month",
                },
                {
                  type: "simple_column",
                  alias: "tb_screened_positive",
                  column: "hmsd.presumed_tb_positive_this_month",
                },
                {
                  type: "derived_column",
                  alias: "screened_for_cervical_ca",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "0",
                  },
                },
                {
                  type: "simple_column",
                  alias: "started_ipt",
                  column: "hmsd.started_ipt_this_month",
                },
                {
                  type: "derived_column",
                  alias: "completed_ipt_past_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "completed_ipt_past_12_months",
                  },
                },
                {
                  type: "derived_column",
                  alias: "condoms_provided",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "condoms_provided_this_month",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "started_modern_contraception_this_month",
                  },
                },
                {
                  type: "simple_column",
                  alias: "on_modern_contraception",
                  column: "hmsd.on_modern_contraception_this_month",
                },
                {
                  type: "simple_column",
                  alias: "scheduled_visits",
                  column: "hmsd.scheduled_this_month",
                },
                {
                  type: "simple_column",
                  alias: "unscheduled_visits",
                  column: "hmsd.unscheduled_this_month",
                },
                {
                  type: "simple_column",
                  alias: "total_visits",
                  column: "hmsd.visit_this_month",
                },
                {
                  type: "simple_column",
                  alias: "f_gte_18_visits",
                  column: "hmsd.f_18_and_older_this_month",
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_art_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.art_revisit_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_vl_suppressed_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_suppressed_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias:
                    "is_cross_border_active_on_art_12_month_cohort_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.active_on_art_12_month_cohort_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_presumed_tb_positive_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.presumed_tb_positive_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_started_tb_tx_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.started_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_completed_tb_tx",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_end_date is not null , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_stopped_tb_tx",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_stop_date is not null , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_transferred_out",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'transfer_out' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_ltfu",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and ( status = 'defaulter' or status = 'ltfu'), 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_dead",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'dead', 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_modern_contraception_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_modern_contraception_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_county_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_county_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_3_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.travelled_outside_last_3_months = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_6_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.travelled_outside_last_6_months = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.travelled_outside_last_12_months = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_kenya",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11197, 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_uganda",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11118, 1 , 0)",
                  },
                },
              ],
              filters: {
                conditionJoinOperator: "and",
                conditions: [
                  {
                    filterType: "tableColumns",
                    conditionExpression: "endDate = ?",
                    parameterName: "endDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression: "hmsd.location_id in ?",
                    parameterName: "locations",
                  },
                ],
              },
            },
          },
        },
        sqlQuery:
          "SELECT 1 AS `join_location`, hmsd.location_uuid AS `location_uuid`, hmsd.location AS `location`, hmsd.gender AS `gender`, hmsd.location_id AS `location_id`, hmsd.age_range AS `age_range`, sum(hmsd.current_on_art) AS `current_on_art`, sum(hmsd.enrolled_this_month) AS `enrolled_this_month`, sum(hmsd.pre_art) AS `pre_art`, sum(hmsd.current_in_care) AS `current_in_care`, sum(hmsd.active_on_art) AS `active_on_art`, sum(hmsd.on_ctx_prophylaxis) AS `on_ctx_prophylaxis`, sum(hmsd.screened_for_tb) AS `screened_for_tb`, sum(hmsd.tb_screened_this_visit_this_month) AS `tb_screened_this_visit_this_month`, sum(hmsd.tb_screened_positive) AS `tb_screened_positive`, sum(hmsd.started_ipt) AS `started_ipt`, sum(hmsd.completed_ipt_past_12_months) AS `completed_ipt_past_12_months`, sum(hmsd.condoms_provided) AS `condoms_provided`, sum(hmsd.condoms_provided) AS `started_modern_contraception`, sum(hmsd.on_modern_contraception) AS `on_modern_contraception`, sum(hmsd.art_revisit_this_month) AS `art_revisit_this_month`, sum(hmsd.f_gte_18_visits) AS `f_gte_18_visits` FROM (SELECT hmsd.gender AS `gender`, hmsd.birthdate AS `birthdate`, hmsd.age AS `age`, hmsd.person_id AS `person_id`, l.uuid AS `location_uuid`, l.name AS `location`, hmsd.location_id AS `location_id`, hmsd.cur_arv_meds AS `cur_arv_meds`, date_format(hmsd.enrollment_date,'%d-%m-%Y') AS `enrollment_date`, date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y') AS `arv_first_regimen_start_date`, date_format(hmsd.arv_start_date,'%d-%m-%Y') AS `cur_regimen_arv_start_date`, hmsd.cur_arv_line AS `cur_arv_line`, hmsd.vl_1 AS `vl_1`, date_format(hmsd.vl_1_date,'%d-%m-%Y') AS `vl_1_date`, CASE WHEN (hmsd.age between 20 and 24) THEN '20_to_24' WHEN (hmsd.age between 15 and 19) THEN '15_to_19' WHEN (hmsd.age between 10 and 14) THEN '10_to_14' WHEN (hmsd.age between 1 and 9) THEN '1_to_9' WHEN (hmsd.age < 1) THEN '0_to_1' ELSE 'older_than_24' END AS `age_range`, hmsd.enrolled_this_month AS `enrolled_this_month`, hmsd.art_revisit_this_month AS `art_revisit_this_month`, hmsd.active_in_care_this_month AS `current_in_care`, hmsd.is_pre_art_this_month AS `pre_art`, hmsd.is_pregnant_and_started_art_this_month AS `started_art_pregnant`, hmsd.on_tb_tx_and_started_art_this_month AS `started_art_and_has_tb`, hmsd.on_art_this_month AS `active_on_art`, hmsd.on_pcp_prophylaxis_this_month AS `on_ctx_prophylaxis`, hmsd.on_art_this_month AS `current_on_art`, hmsd.tb_screened_active_this_month AS `screened_for_tb`, hmsd.tb_screened_this_visit_this_month AS `tb_screened_this_visit_this_month`, hmsd.presumed_tb_positive_this_month AS `tb_screened_positive`, 0 AS `screened_for_cervical_ca`, hmsd.started_ipt_this_month AS `started_ipt`, completed_ipt_past_12_months AS `completed_ipt_past_12_months`, condoms_provided_this_month AS `condoms_provided`, started_modern_contraception_this_month AS `started_modern_contraception`, hmsd.on_modern_contraception_this_month AS `on_modern_contraception`, hmsd.scheduled_this_month AS `scheduled_visits`, hmsd.unscheduled_this_month AS `unscheduled_visits`, hmsd.visit_this_month AS `total_visits`, hmsd.f_18_and_older_this_month AS `f_gte_18_visits`, IF(hmsd.art_revisit_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_on_art_this_month`, IF(hmsd.is_suppressed_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_vl_suppressed_this_month`, IF(hmsd.active_on_art_12_month_cohort_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_active_on_art_12_month_cohort_this_month`, IF(hmsd.presumed_tb_positive_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_presumed_tb_positive_this_month`, IF(hmsd.started_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_started_tb_tx_this_month`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'active' , 1 , 0) AS `is_cross_border_on_tb_tx_this_month`, IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_end_date is not null , 1 , 0) AS `is_cross_border_completed_tb_tx`, IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_stop_date is not null , 1 , 0) AS `is_cross_border_stopped_tb_tx`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'transfer_out' , 1 , 0) AS `is_cross_border_on_tb_tx_transferred_out`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and ( status = 'defaulter' or status = 'ltfu'), 1 , 0) AS `is_cross_border_on_tb_tx_ltfu`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'dead', 1 , 0) AS `is_cross_border_on_tb_tx_dead`, IF(hmsd.on_modern_contraception_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_on_modern_contraception_this_month`, IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' , 1 , 0) AS `is_cross_border_country_this_month`, IF(hmsd.is_cross_border_county_this_month = 1 and hmsd.status = 'active' , 1 , 0) AS `is_cross_border_county_this_month`, IF(hmsd.travelled_outside_last_3_months = 1 and hmsd.status = 'active' , 1 , 0) AS `travelled_outside_last_3_months`, IF(hmsd.travelled_outside_last_6_months = 1 and hmsd.status = 'active' , 1 , 0) AS `travelled_outside_last_6_months`, IF(hmsd.travelled_outside_last_12_months = 1 and hmsd.status = 'active' , 1 , 0) AS `travelled_outside_last_12_months`, IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11197, 1 , 0) AS `is_cross_border_country_kenya`, IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11118, 1 , 0) AS `is_cross_border_country_uganda` FROM etl.hiv_monthly_report_dataset_cbb `hmsd` INNER JOIN amrs.location `l` ON (l.location_id = hmsd.location_id) WHERE (endDate = '2020-09-30') AND (hmsd.location_id in (19))) `hmsd` GROUP BY gender, age_range, location_id",
        results: {
          results: [
            {
              join_location: 1,
              location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
              location: "Busia",
              location_id: 19,
              dc__gender__F__age_range__10_to_14__current_on_art: 76,
              dc__gender__F__age_range__10_to_14__enrolled_this_month: 0,
              dc__gender__F__age_range__10_to_14__pre_art: 0,
              dc__gender__F__age_range__10_to_14__current_in_care: 76,
              dc__gender__F__age_range__10_to_14__active_on_art: 76,
              dc__gender__F__age_range__10_to_14__on_ctx_prophylaxis: 46,
              dc__gender__F__age_range__10_to_14__screened_for_tb: 75,
              dc__gender__F__age_range__10_to_14__tb_screened_this_visit_this_month: 22,
              dc__gender__F__age_range__10_to_14__tb_screened_positive: 1,
              dc__gender__F__age_range__10_to_14__started_ipt: 1,
              dc__gender__F__age_range__10_to_14__completed_ipt_past_12_months: 37,
              dc__gender__F__age_range__10_to_14__condoms_provided: 0,
              dc__gender__F__age_range__10_to_14__started_modern_contraception: 0,
              dc__gender__F__age_range__10_to_14__on_modern_contraception: 0,
              dc__gender__F__age_range__10_to_14__art_revisit_this_month: 76,
              dc__gender__F__age_range__10_to_14__f_gte_18_visits: 0,
              dc__gender__F__age_range__15_to_19__current_on_art: 81,
              dc__gender__F__age_range__15_to_19__enrolled_this_month: 1,
              dc__gender__F__age_range__15_to_19__pre_art: 0,
              dc__gender__F__age_range__15_to_19__current_in_care: 81,
              dc__gender__F__age_range__15_to_19__active_on_art: 81,
              dc__gender__F__age_range__15_to_19__on_ctx_prophylaxis: 58,
              dc__gender__F__age_range__15_to_19__screened_for_tb: 76,
              dc__gender__F__age_range__15_to_19__tb_screened_this_visit_this_month: 25,
              dc__gender__F__age_range__15_to_19__tb_screened_positive: 0,
              dc__gender__F__age_range__15_to_19__started_ipt: 0,
              dc__gender__F__age_range__15_to_19__completed_ipt_past_12_months: 26,
              dc__gender__F__age_range__15_to_19__condoms_provided: 0,
              dc__gender__F__age_range__15_to_19__started_modern_contraception: 0,
              dc__gender__F__age_range__15_to_19__on_modern_contraception: 1,
              dc__gender__F__age_range__15_to_19__art_revisit_this_month: 80,
              dc__gender__F__age_range__15_to_19__f_gte_18_visits: 7,
              dc__gender__F__age_range__1_to_9__current_on_art: 55,
              dc__gender__F__age_range__1_to_9__enrolled_this_month: 0,
              dc__gender__F__age_range__1_to_9__pre_art: 0,
              dc__gender__F__age_range__1_to_9__current_in_care: 55,
              dc__gender__F__age_range__1_to_9__active_on_art: 55,
              dc__gender__F__age_range__1_to_9__on_ctx_prophylaxis: 37,
              dc__gender__F__age_range__1_to_9__screened_for_tb: 54,
              dc__gender__F__age_range__1_to_9__tb_screened_this_visit_this_month: 11,
              dc__gender__F__age_range__1_to_9__tb_screened_positive: 0,
              dc__gender__F__age_range__1_to_9__started_ipt: 1,
              dc__gender__F__age_range__1_to_9__completed_ipt_past_12_months: 26,
              dc__gender__F__age_range__1_to_9__condoms_provided: 0,
              dc__gender__F__age_range__1_to_9__started_modern_contraception: 0,
              dc__gender__F__age_range__1_to_9__on_modern_contraception: 0,
              dc__gender__F__age_range__1_to_9__art_revisit_this_month: 55,
              dc__gender__F__age_range__1_to_9__f_gte_18_visits: 0,
              dc__gender__F__age_range__20_to_24__current_on_art: 93,
              dc__gender__F__age_range__20_to_24__enrolled_this_month: 0,
              dc__gender__F__age_range__20_to_24__pre_art: 0,
              dc__gender__F__age_range__20_to_24__current_in_care: 93,
              dc__gender__F__age_range__20_to_24__active_on_art: 93,
              dc__gender__F__age_range__20_to_24__on_ctx_prophylaxis: 78,
              dc__gender__F__age_range__20_to_24__screened_for_tb: 84,
              dc__gender__F__age_range__20_to_24__tb_screened_this_visit_this_month: 14,
              dc__gender__F__age_range__20_to_24__tb_screened_positive: 0,
              dc__gender__F__age_range__20_to_24__started_ipt: 0,
              dc__gender__F__age_range__20_to_24__completed_ipt_past_12_months: 32,
              dc__gender__F__age_range__20_to_24__condoms_provided: 6,
              dc__gender__F__age_range__20_to_24__started_modern_contraception: 6,
              dc__gender__F__age_range__20_to_24__on_modern_contraception: 21,
              dc__gender__F__age_range__20_to_24__art_revisit_this_month: 93,
              dc__gender__F__age_range__20_to_24__f_gte_18_visits: 14,
              dc__gender__F__age_range__older_than_24__current_on_art: 3326,
              dc__gender__F__age_range__older_than_24__enrolled_this_month: 9,
              dc__gender__F__age_range__older_than_24__pre_art: 0,
              dc__gender__F__age_range__older_than_24__current_in_care: 3328,
              dc__gender__F__age_range__older_than_24__active_on_art: 3326,
              dc__gender__F__age_range__older_than_24__on_ctx_prophylaxis: 2897,
              dc__gender__F__age_range__older_than_24__screened_for_tb: 3033,
              dc__gender__F__age_range__older_than_24__tb_screened_this_visit_this_month: 377,
              dc__gender__F__age_range__older_than_24__tb_screened_positive: 0,
              dc__gender__F__age_range__older_than_24__started_ipt: 8,
              dc__gender__F__age_range__older_than_24__completed_ipt_past_12_months: 857,
              dc__gender__F__age_range__older_than_24__condoms_provided: 189,
              dc__gender__F__age_range__older_than_24__started_modern_contraception: 189,
              dc__gender__F__age_range__older_than_24__on_modern_contraception: 1377,
              dc__gender__F__age_range__older_than_24__art_revisit_this_month: 3317,
              dc__gender__F__age_range__older_than_24__f_gte_18_visits: 468,
              dc__gender__M__age_range__10_to_14__current_on_art: 68,
              dc__gender__M__age_range__10_to_14__enrolled_this_month: 0,
              dc__gender__M__age_range__10_to_14__pre_art: 0,
              dc__gender__M__age_range__10_to_14__current_in_care: 68,
              dc__gender__M__age_range__10_to_14__active_on_art: 68,
              dc__gender__M__age_range__10_to_14__on_ctx_prophylaxis: 40,
              dc__gender__M__age_range__10_to_14__screened_for_tb: 66,
              dc__gender__M__age_range__10_to_14__tb_screened_this_visit_this_month: 26,
              dc__gender__M__age_range__10_to_14__tb_screened_positive: 0,
              dc__gender__M__age_range__10_to_14__started_ipt: 0,
              dc__gender__M__age_range__10_to_14__completed_ipt_past_12_months: 32,
              dc__gender__M__age_range__10_to_14__condoms_provided: 0,
              dc__gender__M__age_range__10_to_14__started_modern_contraception: 0,
              dc__gender__M__age_range__10_to_14__on_modern_contraception: 0,
              dc__gender__M__age_range__10_to_14__art_revisit_this_month: 68,
              dc__gender__M__age_range__10_to_14__f_gte_18_visits: 0,
              dc__gender__M__age_range__15_to_19__current_on_art: 96,
              dc__gender__M__age_range__15_to_19__enrolled_this_month: 0,
              dc__gender__M__age_range__15_to_19__pre_art: 0,
              dc__gender__M__age_range__15_to_19__current_in_care: 97,
              dc__gender__M__age_range__15_to_19__active_on_art: 96,
              dc__gender__M__age_range__15_to_19__on_ctx_prophylaxis: 60,
              dc__gender__M__age_range__15_to_19__screened_for_tb: 91,
              dc__gender__M__age_range__15_to_19__tb_screened_this_visit_this_month: 31,
              dc__gender__M__age_range__15_to_19__tb_screened_positive: 0,
              dc__gender__M__age_range__15_to_19__started_ipt: 0,
              dc__gender__M__age_range__15_to_19__completed_ipt_past_12_months: 45,
              dc__gender__M__age_range__15_to_19__condoms_provided: 0,
              dc__gender__M__age_range__15_to_19__started_modern_contraception: 0,
              dc__gender__M__age_range__15_to_19__on_modern_contraception: 0,
              dc__gender__M__age_range__15_to_19__art_revisit_this_month: 96,
              dc__gender__M__age_range__15_to_19__f_gte_18_visits: 0,
              dc__gender__M__age_range__1_to_9__current_on_art: 37,
              dc__gender__M__age_range__1_to_9__enrolled_this_month: 0,
              dc__gender__M__age_range__1_to_9__pre_art: 0,
              dc__gender__M__age_range__1_to_9__current_in_care: 37,
              dc__gender__M__age_range__1_to_9__active_on_art: 37,
              dc__gender__M__age_range__1_to_9__on_ctx_prophylaxis: 24,
              dc__gender__M__age_range__1_to_9__screened_for_tb: 35,
              dc__gender__M__age_range__1_to_9__tb_screened_this_visit_this_month: 10,
              dc__gender__M__age_range__1_to_9__tb_screened_positive: 0,
              dc__gender__M__age_range__1_to_9__started_ipt: 0,
              dc__gender__M__age_range__1_to_9__completed_ipt_past_12_months: 16,
              dc__gender__M__age_range__1_to_9__condoms_provided: 0,
              dc__gender__M__age_range__1_to_9__started_modern_contraception: 0,
              dc__gender__M__age_range__1_to_9__on_modern_contraception: 0,
              dc__gender__M__age_range__1_to_9__art_revisit_this_month: 37,
              dc__gender__M__age_range__1_to_9__f_gte_18_visits: 0,
              dc__gender__M__age_range__20_to_24__current_on_art: 57,
              dc__gender__M__age_range__20_to_24__enrolled_this_month: 0,
              dc__gender__M__age_range__20_to_24__pre_art: 0,
              dc__gender__M__age_range__20_to_24__current_in_care: 57,
              dc__gender__M__age_range__20_to_24__active_on_art: 57,
              dc__gender__M__age_range__20_to_24__on_ctx_prophylaxis: 46,
              dc__gender__M__age_range__20_to_24__screened_for_tb: 52,
              dc__gender__M__age_range__20_to_24__tb_screened_this_visit_this_month: 14,
              dc__gender__M__age_range__20_to_24__tb_screened_positive: 0,
              dc__gender__M__age_range__20_to_24__started_ipt: 0,
              dc__gender__M__age_range__20_to_24__completed_ipt_past_12_months: 21,
              dc__gender__M__age_range__20_to_24__condoms_provided: 5,
              dc__gender__M__age_range__20_to_24__started_modern_contraception: 5,
              dc__gender__M__age_range__20_to_24__on_modern_contraception: 0,
              dc__gender__M__age_range__20_to_24__art_revisit_this_month: 57,
              dc__gender__M__age_range__20_to_24__f_gte_18_visits: 0,
              dc__gender__M__age_range__older_than_24__current_on_art: 1674,
              dc__gender__M__age_range__older_than_24__enrolled_this_month: 8,
              dc__gender__M__age_range__older_than_24__pre_art: 0,
              dc__gender__M__age_range__older_than_24__current_in_care: 1674,
              dc__gender__M__age_range__older_than_24__active_on_art: 1674,
              dc__gender__M__age_range__older_than_24__on_ctx_prophylaxis: 1441,
              dc__gender__M__age_range__older_than_24__screened_for_tb: 1526,
              dc__gender__M__age_range__older_than_24__tb_screened_this_visit_this_month: 208,
              dc__gender__M__age_range__older_than_24__tb_screened_positive: 0,
              dc__gender__M__age_range__older_than_24__started_ipt: 2,
              dc__gender__M__age_range__older_than_24__completed_ipt_past_12_months: 474,
              dc__gender__M__age_range__older_than_24__condoms_provided: 124,
              dc__gender__M__age_range__older_than_24__started_modern_contraception: 124,
              dc__gender__M__age_range__older_than_24__on_modern_contraception: 0,
              dc__gender__M__age_range__older_than_24__art_revisit_this_month: 1666,
              dc__gender__M__age_range__older_than_24__f_gte_18_visits: 0,
            },
          ],
        },
      },
    },
    {
      report: {
        reportName: "regimenDataSetAggregate",
        params: {
          endDate: "2020-09-30",
          startDate: "2020-09-01",
          reportName: "MOH-731-report-2017",
          locationUuids: ["08fec60a-1352-11df-a1f1-0026b9348838"],
          isAggregated: false,
          locations: [19],
          referenceDate: "2020-09-14",
          startAge: 0,
          endAge: 150,
          gender: ["M", "F"],
          genders: ["M", "F"],
          hivMonthlyDatasetSource: "etl.hiv_monthly_report_dataset_cbb",
        },
        reportSchemas: {
          main: {
            name: "regimenDataSetAggregate",
            version: "1.0",
            tag: "",
            description: "",
            uses: [
              {
                name: "regimenDataSetbase",
                version: "1.0",
                type: "dataset_def",
              },
            ],
            sources: [
              {
                dataSet: "regimenDataSetbase",
                alias: "hmsd",
              },
            ],
            columns: [
              {
                type: "derived_column",
                alias: "join_location",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "1",
                },
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "hmsd.location_uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "hmsd.location",
              },
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "arv_first_regimen_location_id",
                column: "hmsd.arv_first_regimen_location_id",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "age_range",
                disAggregation: "true",
                column: "hmsd.age_range",
              },
              {
                type: "derived_column",
                alias: "arv_first_regimen",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(*)",
                },
              },
            ],
            groupBy: {
              groupParam: "groupByParam",
              columns: [
                "arv_first_regimen_location_id",
                "age_range",
                "hmsd.gender",
              ],
              excludeParam: "excludeParam",
            },
            transFormDirectives: {
              joinColumn: "location_id",
              joinColumnParam: "joinColumnParam",
              disaggregationColumns: ["gender", "age_range"],
              skipColumns: [
                "arv_first_regimen_location_id",
                "join_location",
                "location_uuid",
              ],
            },
            dynamicJsonQueryGenerationDirectives: {
              patientListGenerator: {
                useTemplate: "patient-list-frozen-template",
                useTemplateVersion: "1.0",
                generatingDirectives: {
                  joinDirectives: {
                    joinType: "INNER",
                    joinCondition: "<<base_column>> = <<template_column>>",
                    baseColumn: "person_id",
                    templateColumn: "person_id",
                  },
                },
              },
            },
            default: {
              name: "regimenDataSetAggregate",
              version: "1.0",
              tag: "",
              description: "",
              uses: [
                {
                  name: "regimenDataSetbase",
                  version: "1.0",
                  type: "dataset_def",
                },
              ],
              sources: [
                {
                  dataSet: "regimenDataSetbase",
                  alias: "hmsd",
                },
              ],
              columns: [
                {
                  type: "derived_column",
                  alias: "join_location",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "1",
                  },
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "hmsd.location_uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "hmsd.location",
                },
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "arv_first_regimen_location_id",
                  column: "hmsd.arv_first_regimen_location_id",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "age_range",
                  disAggregation: "true",
                  column: "hmsd.age_range",
                },
                {
                  type: "derived_column",
                  alias: "arv_first_regimen",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(*)",
                  },
                },
              ],
              groupBy: {
                groupParam: "groupByParam",
                columns: [
                  "arv_first_regimen_location_id",
                  "age_range",
                  "hmsd.gender",
                ],
                excludeParam: "excludeParam",
              },
              transFormDirectives: {
                joinColumn: "location_id",
                joinColumnParam: "joinColumnParam",
                disaggregationColumns: ["gender", "age_range"],
                skipColumns: [
                  "arv_first_regimen_location_id",
                  "join_location",
                  "location_uuid",
                ],
              },
              dynamicJsonQueryGenerationDirectives: {
                patientListGenerator: {
                  useTemplate: "patient-list-frozen-template",
                  useTemplateVersion: "1.0",
                  generatingDirectives: {
                    joinDirectives: {
                      joinType: "INNER",
                      joinCondition: "<<base_column>> = <<template_column>>",
                      baseColumn: "person_id",
                      templateColumn: "person_id",
                    },
                  },
                },
              },
            },
          },
          regimenDataSetbase: {
            name: "regimenDataSetbase",
            version: "1.0",
            tag: "",
            description: "",
            uses: [],
            sources: [
              {
                table: "etl.hiv_monthly_report_dataset_cbb",
                alias: "hmsd",
              },
              {
                table: "amrs.location",
                alias: "l",
                join: {
                  type: "INNER",
                  joinCondition: "l.location_id = hmsd.location_id",
                },
              },
            ],
            columns: [
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "birthdate",
                column: "hmsd.birthdate",
              },
              {
                type: "simple_column",
                alias: "age",
                column: "hmsd.age",
              },
              {
                type: "simple_column",
                alias: "person_id",
                column: "hmsd.person_id",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "l.uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "l.name",
              },
              {
                type: "simple_column",
                alias: "cur_arv_meds",
                column: "hmsd.cur_arv_meds",
              },
              {
                type: "simple_column",
                alias: "arv_first_regimen_location_id",
                column: "hmsd.arv_first_regimen_location_id",
              },
              {
                type: "derived_column",
                alias: "enrollment_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "arv_first_regimen_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "cur_regimen_arv_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "simple_column",
                alias: "cur_arv_line",
                column: "hmsd.cur_arv_line",
              },
              {
                type: "simple_column",
                alias: "vl_1",
                column: "hmsd.vl_1",
              },
              {
                type: "derived_column",
                alias: "vl_1_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "age_range",
                expressionType: "case_statement",
                expressionOptions: {
                  caseOptions: [
                    {
                      condition: "hmsd.age < 15",
                      value: "lt_15",
                    },
                    {
                      condition: "hmsd.age >= 15",
                      value: "gte_15",
                    },
                  ],
                },
              },
            ],
            filters: {
              conditionJoinOperator: "and",
              conditions: [
                {
                  filterType: "tableColumns",
                  conditionExpression: "endDate = ?",
                  parameterName: "endDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression: "hmsd.location_id in ?",
                  parameterName: "locations",
                },
              ],
            },
            default: {
              name: "regimenDataSetbase",
              version: "1.0",
              tag: "",
              description: "",
              uses: [],
              sources: [
                {
                  table: "<<hivMonthlyDatasetSource>>",
                  alias: "hmsd",
                },
                {
                  table: "amrs.location",
                  alias: "l",
                  join: {
                    type: "INNER",
                    joinCondition: "l.location_id = hmsd.location_id",
                  },
                },
              ],
              columns: [
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "birthdate",
                  column: "hmsd.birthdate",
                },
                {
                  type: "simple_column",
                  alias: "age",
                  column: "hmsd.age",
                },
                {
                  type: "simple_column",
                  alias: "person_id",
                  column: "hmsd.person_id",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "l.uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "l.name",
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_meds",
                  column: "hmsd.cur_arv_meds",
                },
                {
                  type: "simple_column",
                  alias: "arv_first_regimen_location_id",
                  column: "hmsd.arv_first_regimen_location_id",
                },
                {
                  type: "derived_column",
                  alias: "enrollment_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "arv_first_regimen_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "cur_regimen_arv_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_line",
                  column: "hmsd.cur_arv_line",
                },
                {
                  type: "simple_column",
                  alias: "vl_1",
                  column: "hmsd.vl_1",
                },
                {
                  type: "derived_column",
                  alias: "vl_1_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "age_range",
                  expressionType: "case_statement",
                  expressionOptions: {
                    caseOptions: [
                      {
                        condition: "hmsd.age < 15",
                        value: "lt_15",
                      },
                      {
                        condition: "hmsd.age >= 15",
                        value: "gte_15",
                      },
                    ],
                  },
                },
              ],
              filters: {
                conditionJoinOperator: "and",
                conditions: [
                  {
                    filterType: "tableColumns",
                    conditionExpression: "endDate = ?",
                    parameterName: "endDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression: "hmsd.location_id in ?",
                    parameterName: "locations",
                  },
                ],
              },
            },
          },
        },
        reportQuery:
          "SELECT 1 AS `join_location`, hmsd.location_uuid AS `location_uuid`, hmsd.location AS `location`, hmsd.gender AS `gender`, hmsd.arv_first_regimen_location_id AS `arv_first_regimen_location_id`, hmsd.location_id AS `location_id`, hmsd.age_range AS `age_range`, count(*) AS `arv_first_regimen` FROM (SELECT hmsd.gender AS `gender`, hmsd.birthdate AS `birthdate`, hmsd.age AS `age`, hmsd.person_id AS `person_id`, hmsd.location_id AS `location_id`, l.uuid AS `location_uuid`, l.name AS `location`, hmsd.cur_arv_meds AS `cur_arv_meds`, hmsd.arv_first_regimen_location_id AS `arv_first_regimen_location_id`, date_format(hmsd.enrollment_date,'%d-%m-%Y') AS `enrollment_date`, date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y') AS `arv_first_regimen_start_date`, date_format(hmsd.arv_start_date,'%d-%m-%Y') AS `cur_regimen_arv_start_date`, hmsd.cur_arv_line AS `cur_arv_line`, hmsd.vl_1 AS `vl_1`, date_format(hmsd.vl_1_date,'%d-%m-%Y') AS `vl_1_date`, CASE WHEN (hmsd.age >= 15) THEN 'gte_15' WHEN (hmsd.age < 15) THEN 'lt_15' ELSE NULL END AS `age_range` FROM etl.hiv_monthly_report_dataset_cbb `hmsd` INNER JOIN amrs.location `l` ON (l.location_id = hmsd.location_id) WHERE (endDate = '2020-09-30') AND (hmsd.location_id in (19))) `hmsd` GROUP BY arv_first_regimen_location_id, age_range, hmsd.gender",
        queryResults: {
          results: [
            {
              join_location: 1,
              location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
              location: "Busia",
              arv_first_regimen_location_id: 9999,
              location_id: 19,
              dc__gender__F__age_range__gte_15__arv_first_regimen: 1724,
              dc__gender__M__age_range__gte_15__arv_first_regimen: 790,
              dc__gender__F__age_range__lt_15__arv_first_regimen: 81,
              dc__gender__M__age_range__lt_15__arv_first_regimen: 82,
            },
          ],
        },
      },
      results: {
        schemas: {
          main: {
            name: "regimenDataSetAggregate",
            version: "1.0",
            tag: "",
            description: "",
            uses: [
              {
                name: "regimenDataSetbase",
                version: "1.0",
                type: "dataset_def",
              },
            ],
            sources: [
              {
                dataSet: "regimenDataSetbase",
                alias: "hmsd",
              },
            ],
            columns: [
              {
                type: "derived_column",
                alias: "join_location",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "1",
                },
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "hmsd.location_uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "hmsd.location",
              },
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "arv_first_regimen_location_id",
                column: "hmsd.arv_first_regimen_location_id",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "age_range",
                disAggregation: "true",
                column: "hmsd.age_range",
              },
              {
                type: "derived_column",
                alias: "arv_first_regimen",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(*)",
                },
              },
            ],
            groupBy: {
              groupParam: "groupByParam",
              columns: [
                "arv_first_regimen_location_id",
                "age_range",
                "hmsd.gender",
              ],
              excludeParam: "excludeParam",
            },
            transFormDirectives: {
              joinColumn: "location_id",
              joinColumnParam: "joinColumnParam",
              disaggregationColumns: ["gender", "age_range"],
              skipColumns: [
                "arv_first_regimen_location_id",
                "join_location",
                "location_uuid",
              ],
            },
            dynamicJsonQueryGenerationDirectives: {
              patientListGenerator: {
                useTemplate: "patient-list-frozen-template",
                useTemplateVersion: "1.0",
                generatingDirectives: {
                  joinDirectives: {
                    joinType: "INNER",
                    joinCondition: "<<base_column>> = <<template_column>>",
                    baseColumn: "person_id",
                    templateColumn: "person_id",
                  },
                },
              },
            },
            default: {
              name: "regimenDataSetAggregate",
              version: "1.0",
              tag: "",
              description: "",
              uses: [
                {
                  name: "regimenDataSetbase",
                  version: "1.0",
                  type: "dataset_def",
                },
              ],
              sources: [
                {
                  dataSet: "regimenDataSetbase",
                  alias: "hmsd",
                },
              ],
              columns: [
                {
                  type: "derived_column",
                  alias: "join_location",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "1",
                  },
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "hmsd.location_uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "hmsd.location",
                },
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "arv_first_regimen_location_id",
                  column: "hmsd.arv_first_regimen_location_id",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "age_range",
                  disAggregation: "true",
                  column: "hmsd.age_range",
                },
                {
                  type: "derived_column",
                  alias: "arv_first_regimen",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(*)",
                  },
                },
              ],
              groupBy: {
                groupParam: "groupByParam",
                columns: [
                  "arv_first_regimen_location_id",
                  "age_range",
                  "hmsd.gender",
                ],
                excludeParam: "excludeParam",
              },
              transFormDirectives: {
                joinColumn: "location_id",
                joinColumnParam: "joinColumnParam",
                disaggregationColumns: ["gender", "age_range"],
                skipColumns: [
                  "arv_first_regimen_location_id",
                  "join_location",
                  "location_uuid",
                ],
              },
              dynamicJsonQueryGenerationDirectives: {
                patientListGenerator: {
                  useTemplate: "patient-list-frozen-template",
                  useTemplateVersion: "1.0",
                  generatingDirectives: {
                    joinDirectives: {
                      joinType: "INNER",
                      joinCondition: "<<base_column>> = <<template_column>>",
                      baseColumn: "person_id",
                      templateColumn: "person_id",
                    },
                  },
                },
              },
            },
          },
          regimenDataSetbase: {
            name: "regimenDataSetbase",
            version: "1.0",
            tag: "",
            description: "",
            uses: [],
            sources: [
              {
                table: "etl.hiv_monthly_report_dataset_cbb",
                alias: "hmsd",
              },
              {
                table: "amrs.location",
                alias: "l",
                join: {
                  type: "INNER",
                  joinCondition: "l.location_id = hmsd.location_id",
                },
              },
            ],
            columns: [
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "birthdate",
                column: "hmsd.birthdate",
              },
              {
                type: "simple_column",
                alias: "age",
                column: "hmsd.age",
              },
              {
                type: "simple_column",
                alias: "person_id",
                column: "hmsd.person_id",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "l.uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "l.name",
              },
              {
                type: "simple_column",
                alias: "cur_arv_meds",
                column: "hmsd.cur_arv_meds",
              },
              {
                type: "simple_column",
                alias: "arv_first_regimen_location_id",
                column: "hmsd.arv_first_regimen_location_id",
              },
              {
                type: "derived_column",
                alias: "enrollment_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "arv_first_regimen_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "cur_regimen_arv_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "simple_column",
                alias: "cur_arv_line",
                column: "hmsd.cur_arv_line",
              },
              {
                type: "simple_column",
                alias: "vl_1",
                column: "hmsd.vl_1",
              },
              {
                type: "derived_column",
                alias: "vl_1_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "age_range",
                expressionType: "case_statement",
                expressionOptions: {
                  caseOptions: [
                    {
                      condition: "hmsd.age < 15",
                      value: "lt_15",
                    },
                    {
                      condition: "hmsd.age >= 15",
                      value: "gte_15",
                    },
                  ],
                },
              },
            ],
            filters: {
              conditionJoinOperator: "and",
              conditions: [
                {
                  filterType: "tableColumns",
                  conditionExpression: "endDate = ?",
                  parameterName: "endDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression: "hmsd.location_id in ?",
                  parameterName: "locations",
                },
              ],
            },
            default: {
              name: "regimenDataSetbase",
              version: "1.0",
              tag: "",
              description: "",
              uses: [],
              sources: [
                {
                  table: "<<hivMonthlyDatasetSource>>",
                  alias: "hmsd",
                },
                {
                  table: "amrs.location",
                  alias: "l",
                  join: {
                    type: "INNER",
                    joinCondition: "l.location_id = hmsd.location_id",
                  },
                },
              ],
              columns: [
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "birthdate",
                  column: "hmsd.birthdate",
                },
                {
                  type: "simple_column",
                  alias: "age",
                  column: "hmsd.age",
                },
                {
                  type: "simple_column",
                  alias: "person_id",
                  column: "hmsd.person_id",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "l.uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "l.name",
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_meds",
                  column: "hmsd.cur_arv_meds",
                },
                {
                  type: "simple_column",
                  alias: "arv_first_regimen_location_id",
                  column: "hmsd.arv_first_regimen_location_id",
                },
                {
                  type: "derived_column",
                  alias: "enrollment_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "arv_first_regimen_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "cur_regimen_arv_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_line",
                  column: "hmsd.cur_arv_line",
                },
                {
                  type: "simple_column",
                  alias: "vl_1",
                  column: "hmsd.vl_1",
                },
                {
                  type: "derived_column",
                  alias: "vl_1_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "age_range",
                  expressionType: "case_statement",
                  expressionOptions: {
                    caseOptions: [
                      {
                        condition: "hmsd.age < 15",
                        value: "lt_15",
                      },
                      {
                        condition: "hmsd.age >= 15",
                        value: "gte_15",
                      },
                    ],
                  },
                },
              ],
              filters: {
                conditionJoinOperator: "and",
                conditions: [
                  {
                    filterType: "tableColumns",
                    conditionExpression: "endDate = ?",
                    parameterName: "endDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression: "hmsd.location_id in ?",
                    parameterName: "locations",
                  },
                ],
              },
            },
          },
        },
        sqlQuery:
          "SELECT 1 AS `join_location`, hmsd.location_uuid AS `location_uuid`, hmsd.location AS `location`, hmsd.gender AS `gender`, hmsd.arv_first_regimen_location_id AS `arv_first_regimen_location_id`, hmsd.location_id AS `location_id`, hmsd.age_range AS `age_range`, count(*) AS `arv_first_regimen` FROM (SELECT hmsd.gender AS `gender`, hmsd.birthdate AS `birthdate`, hmsd.age AS `age`, hmsd.person_id AS `person_id`, hmsd.location_id AS `location_id`, l.uuid AS `location_uuid`, l.name AS `location`, hmsd.cur_arv_meds AS `cur_arv_meds`, hmsd.arv_first_regimen_location_id AS `arv_first_regimen_location_id`, date_format(hmsd.enrollment_date,'%d-%m-%Y') AS `enrollment_date`, date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y') AS `arv_first_regimen_start_date`, date_format(hmsd.arv_start_date,'%d-%m-%Y') AS `cur_regimen_arv_start_date`, hmsd.cur_arv_line AS `cur_arv_line`, hmsd.vl_1 AS `vl_1`, date_format(hmsd.vl_1_date,'%d-%m-%Y') AS `vl_1_date`, CASE WHEN (hmsd.age >= 15) THEN 'gte_15' WHEN (hmsd.age < 15) THEN 'lt_15' ELSE NULL END AS `age_range` FROM etl.hiv_monthly_report_dataset_cbb `hmsd` INNER JOIN amrs.location `l` ON (l.location_id = hmsd.location_id) WHERE (endDate = '2020-09-30') AND (hmsd.location_id in (19))) `hmsd` GROUP BY arv_first_regimen_location_id, age_range, hmsd.gender",
        results: {
          results: [
            {
              join_location: 1,
              location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
              location: "Busia",
              arv_first_regimen_location_id: 9999,
              location_id: 19,
              dc__gender__F__age_range__gte_15__arv_first_regimen: 1724,
              dc__gender__M__age_range__gte_15__arv_first_regimen: 790,
              dc__gender__F__age_range__lt_15__arv_first_regimen: 81,
              dc__gender__M__age_range__lt_15__arv_first_regimen: 82,
            },
          ],
        },
      },
    },
    {
      report: {
        reportName: "retentionDataSetAggregate",
        params: {
          endDate: "2020-09-30",
          startDate: "2020-09-01",
          reportName: "MOH-731-report-2017",
          locationUuids: ["08fec60a-1352-11df-a1f1-0026b9348838"],
          isAggregated: false,
          locations: [19],
          referenceDate: "2020-09-14",
          startAge: 0,
          endAge: 150,
          gender: ["M", "F"],
          genders: ["M", "F"],
          hivMonthlyDatasetSource: "etl.hiv_monthly_report_dataset_cbb",
        },
        reportSchemas: {
          main: {
            name: "retentionDataSetAggregate",
            version: "1.0",
            tag: "",
            description: "",
            uses: [
              {
                name: "retentionDataSetbase",
                version: "1.0",
                type: "dataset_def",
              },
            ],
            sources: [
              {
                dataSet: "retentionDataSetbase",
                alias: "hmsd",
              },
            ],
            columns: [
              {
                type: "derived_column",
                alias: "join_location",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "1",
                },
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "hmsd.location_uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "hmsd.location",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "derived_column",
                alias: "net_cohort",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(*)",
                },
              },
              {
                type: "derived_column",
                alias: "active",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(active)",
                },
              },
              {
                type: "derived_column",
                alias: "ltfu",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(ltfu)",
                },
              },
              {
                type: "derived_column",
                alias: "perc_ltfu",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(ltfu)/count(*)",
                },
              },
              {
                type: "derived_column",
                alias: "dead",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(dead)",
                },
              },
              {
                type: "derived_column",
                alias: "on_tx",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(on_tx)",
                },
              },
              {
                type: "derived_column",
                alias: "suppressed",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(suppressed)",
                },
              },
              {
                type: "derived_column",
                alias: "total_with_vl",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(total_with_vl)",
                },
              },
              {
                type: "derived_column",
                alias: "on_second_line",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(on_second_line)",
                },
              },
              {
                type: "derived_column",
                alias: "on_original_first_line",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(on_original_first_line)",
                },
              },
              {
                type: "derived_column",
                alias: "on_alternative_first_line",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(on_alternative_first_line)",
                },
              },
            ],
            groupBy: {
              groupParam: "groupByParam",
              columns: ["location_id"],
              excludeParam: "excludeParam",
            },
            transFormDirectives: {
              joinColumn: "location_id",
              joinColumnParam: "joinColumnParam",
              skipColumns: ["arv_first_regimen_location_id", "join_location"],
            },
            dynamicJsonQueryGenerationDirectives: {
              patientListGenerator: {
                useTemplate: "patient-list-frozen-template",
                useTemplateVersion: "1.0",
                generatingDirectives: {
                  joinDirectives: {
                    joinType: "INNER",
                    joinCondition: "<<base_column>> = <<template_column>>",
                    baseColumn: "person_id",
                    templateColumn: "person_id",
                  },
                },
              },
            },
            default: {
              name: "retentionDataSetAggregate",
              version: "1.0",
              tag: "",
              description: "",
              uses: [
                {
                  name: "retentionDataSetbase",
                  version: "1.0",
                  type: "dataset_def",
                },
              ],
              sources: [
                {
                  dataSet: "retentionDataSetbase",
                  alias: "hmsd",
                },
              ],
              columns: [
                {
                  type: "derived_column",
                  alias: "join_location",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "1",
                  },
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "hmsd.location_uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "hmsd.location",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "derived_column",
                  alias: "net_cohort",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(*)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "active",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(active)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "ltfu",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(ltfu)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "perc_ltfu",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(ltfu)/count(*)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "dead",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(dead)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_tx",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(on_tx)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "suppressed",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(suppressed)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "total_with_vl",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(total_with_vl)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_second_line",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(on_second_line)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_original_first_line",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(on_original_first_line)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_alternative_first_line",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(on_alternative_first_line)",
                  },
                },
              ],
              groupBy: {
                groupParam: "groupByParam",
                columns: ["location_id"],
                excludeParam: "excludeParam",
              },
              transFormDirectives: {
                joinColumn: "location_id",
                joinColumnParam: "joinColumnParam",
                skipColumns: ["arv_first_regimen_location_id", "join_location"],
              },
              dynamicJsonQueryGenerationDirectives: {
                patientListGenerator: {
                  useTemplate: "patient-list-frozen-template",
                  useTemplateVersion: "1.0",
                  generatingDirectives: {
                    joinDirectives: {
                      joinType: "INNER",
                      joinCondition: "<<base_column>> = <<template_column>>",
                      baseColumn: "person_id",
                      templateColumn: "person_id",
                    },
                  },
                },
              },
            },
          },
          retentionDataSetbase: {
            name: "retentionDataSetbase",
            version: "1.0",
            tag: "",
            description: "",
            uses: [],
            sources: [
              {
                table: "etl.hiv_monthly_report_dataset_cbb",
                alias: "hmsd",
              },
              {
                table: "amrs.location",
                alias: "l",
                join: {
                  type: "INNER",
                  joinCondition: "l.location_id = hmsd.location_id",
                },
              },
            ],
            columns: [
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "l.uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "l.name",
              },
              {
                type: "simple_column",
                alias: "person_id",
                column: "hmsd.person_id",
              },
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "birthdate",
                column: "hmsd.birthdate",
              },
              {
                type: "simple_column",
                alias: "age",
                column: "hmsd.age",
              },
              {
                type: "simple_column",
                alias: "cur_arv_meds",
                column: "hmsd.cur_arv_meds",
              },
              {
                type: "derived_column",
                alias: "enrollment_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "arv_first_regimen_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "cur_regimen_arv_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "simple_column",
                alias: "cur_arv_line",
                column: "hmsd.cur_arv_line",
              },
              {
                type: "simple_column",
                alias: "vl_1",
                column: "hmsd.vl_1",
              },
              {
                type: "derived_column",
                alias: "vl_1_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                },
              },
              {
                alias: "net_cohort",
                expressionOptions: {
                  expression: "1",
                },
                type: "derived_column",
                expressionType: "simple_expression",
              },
              {
                alias: "active",
                expressionOptions: {
                  expression: "if(status='active',1,null)",
                },
                type: "derived_column",
                expressionType: "simple_expression",
              },
              {
                alias: "ltfu",
                expressionOptions: {
                  expression: "if(status='ltfu',1,null)",
                },
                type: "derived_column",
                expressionType: "simple_expression",
              },
              {
                alias: "dead",
                expressionOptions: {
                  expression: "if(status='dead',1,null)",
                },
                type: "derived_column",
                expressionType: "simple_expression",
              },
              {
                alias: "on_tx",
                expressionOptions: {
                  expression: "if(on_art_this_month=1,1,null)",
                },
                type: "derived_column",
                expressionType: "simple_expression",
              },
              {
                alias: "suppressed",
                expressionOptions: {
                  expression: "if(hmsd.vl_1<1000 and vl_in_past_year=1,1,null)",
                },
                type: "derived_column",
                expressionType: "simple_expression",
              },
              {
                alias: "total_with_vl",
                expressionOptions: {
                  expression: "if(vl_in_past_year=1,1,null)",
                },
                type: "derived_column",
                expressionType: "simple_expression",
              },
              {
                type: "derived_column",
                alias: "on_original_first_line",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(status = 'active' AND hmsd.cur_arv_line = 1 AND hmsd.arv_first_regimen = hmsd.cur_arv_meds,1, NULL)",
                },
              },
              {
                type: "derived_column",
                alias: "on_alternative_first_line",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(status = 'active' AND hmsd.cur_arv_line = 1 AND hmsd.arv_first_regimen <> hmsd.cur_arv_meds,1, NULL)",
                },
              },
              {
                type: "derived_column",
                alias: "on_second_line",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(status = 'active' AND hmsd.cur_arv_line >= 2,1,NULL)",
                },
              },
            ],
            filters: {
              conditionJoinOperator: "and",
              conditions: [
                {
                  filterType: "tableColumns",
                  conditionExpression: "endDate = ?",
                  parameterName: "endDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression: "status in ('active','ltfu','dead')",
                  parameterName: "",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression:
                    "hmsd.arv_first_regimen_start_date between date_format(date_sub(endDate,interval 1 year),'%Y-%m-01') and date_sub(endDate,interval 1 year)",
                  parameterName: "",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression: "hmsd.location_id in ?",
                  parameterName: "locations",
                },
              ],
            },
            default: {
              name: "retentionDataSetbase",
              version: "1.0",
              tag: "",
              description: "",
              uses: [],
              sources: [
                {
                  table: "<<hivMonthlyDatasetSource>>",
                  alias: "hmsd",
                },
                {
                  table: "amrs.location",
                  alias: "l",
                  join: {
                    type: "INNER",
                    joinCondition: "l.location_id = hmsd.location_id",
                  },
                },
              ],
              columns: [
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "l.uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "l.name",
                },
                {
                  type: "simple_column",
                  alias: "person_id",
                  column: "hmsd.person_id",
                },
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "birthdate",
                  column: "hmsd.birthdate",
                },
                {
                  type: "simple_column",
                  alias: "age",
                  column: "hmsd.age",
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_meds",
                  column: "hmsd.cur_arv_meds",
                },
                {
                  type: "derived_column",
                  alias: "enrollment_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "arv_first_regimen_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "cur_regimen_arv_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_line",
                  column: "hmsd.cur_arv_line",
                },
                {
                  type: "simple_column",
                  alias: "vl_1",
                  column: "hmsd.vl_1",
                },
                {
                  type: "derived_column",
                  alias: "vl_1_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                  },
                },
                {
                  alias: "net_cohort",
                  expressionOptions: {
                    expression: "1",
                  },
                  type: "derived_column",
                  expressionType: "simple_expression",
                },
                {
                  alias: "active",
                  expressionOptions: {
                    expression: "if(status='active',1,null)",
                  },
                  type: "derived_column",
                  expressionType: "simple_expression",
                },
                {
                  alias: "ltfu",
                  expressionOptions: {
                    expression: "if(status='ltfu',1,null)",
                  },
                  type: "derived_column",
                  expressionType: "simple_expression",
                },
                {
                  alias: "dead",
                  expressionOptions: {
                    expression: "if(status='dead',1,null)",
                  },
                  type: "derived_column",
                  expressionType: "simple_expression",
                },
                {
                  alias: "on_tx",
                  expressionOptions: {
                    expression: "if(on_art_this_month=1,1,null)",
                  },
                  type: "derived_column",
                  expressionType: "simple_expression",
                },
                {
                  alias: "suppressed",
                  expressionOptions: {
                    expression:
                      "if(hmsd.vl_1<1000 and vl_in_past_year=1,1,null)",
                  },
                  type: "derived_column",
                  expressionType: "simple_expression",
                },
                {
                  alias: "total_with_vl",
                  expressionOptions: {
                    expression: "if(vl_in_past_year=1,1,null)",
                  },
                  type: "derived_column",
                  expressionType: "simple_expression",
                },
                {
                  type: "derived_column",
                  alias: "on_original_first_line",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(status = 'active' AND hmsd.cur_arv_line = 1 AND hmsd.arv_first_regimen = hmsd.cur_arv_meds,1, NULL)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_alternative_first_line",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(status = 'active' AND hmsd.cur_arv_line = 1 AND hmsd.arv_first_regimen <> hmsd.cur_arv_meds,1, NULL)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_second_line",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(status = 'active' AND hmsd.cur_arv_line >= 2,1,NULL)",
                  },
                },
              ],
              filters: {
                conditionJoinOperator: "and",
                conditions: [
                  {
                    filterType: "tableColumns",
                    conditionExpression: "endDate = ?",
                    parameterName: "endDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression: "status in ('active','ltfu','dead')",
                    parameterName: "",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression:
                      "hmsd.arv_first_regimen_start_date between date_format(date_sub(endDate,interval 1 year),'%Y-%m-01') and date_sub(endDate,interval 1 year)",
                    parameterName: "",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression: "hmsd.location_id in ?",
                    parameterName: "locations",
                  },
                ],
              },
            },
          },
        },
        reportQuery:
          "SELECT 1 AS `join_location`, hmsd.location_uuid AS `location_uuid`, hmsd.location AS `location`, hmsd.location_id AS `location_id`, count(*) AS `net_cohort`, count(active) AS `active`, count(ltfu) AS `ltfu`, count(ltfu)/count(*) AS `perc_ltfu`, count(dead) AS `dead`, count(on_tx) AS `on_tx`, count(suppressed) AS `suppressed`, count(total_with_vl) AS `total_with_vl`, count(on_second_line) AS `on_second_line`, count(on_original_first_line) AS `on_original_first_line`, count(on_alternative_first_line) AS `on_alternative_first_line` FROM (SELECT hmsd.location_id AS `location_id`, l.uuid AS `location_uuid`, l.name AS `location`, hmsd.person_id AS `person_id`, hmsd.gender AS `gender`, hmsd.birthdate AS `birthdate`, hmsd.age AS `age`, hmsd.cur_arv_meds AS `cur_arv_meds`, date_format(hmsd.enrollment_date,'%d-%m-%Y') AS `enrollment_date`, date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y') AS `arv_first_regimen_start_date`, date_format(hmsd.arv_start_date,'%d-%m-%Y') AS `cur_regimen_arv_start_date`, hmsd.cur_arv_line AS `cur_arv_line`, hmsd.vl_1 AS `vl_1`, date_format(hmsd.vl_1_date,'%d-%m-%Y') AS `vl_1_date`, 1 AS `net_cohort`, if(status='active',1,null) AS `active`, if(status='ltfu',1,null) AS `ltfu`, if(status='dead',1,null) AS `dead`, if(on_art_this_month=1,1,null) AS `on_tx`, if(hmsd.vl_1<1000 and vl_in_past_year=1,1,null) AS `suppressed`, if(vl_in_past_year=1,1,null) AS `total_with_vl`, IF(status = 'active' AND hmsd.cur_arv_line = 1 AND hmsd.arv_first_regimen = hmsd.cur_arv_meds,1, NULL) AS `on_original_first_line`, IF(status = 'active' AND hmsd.cur_arv_line = 1 AND hmsd.arv_first_regimen <> hmsd.cur_arv_meds,1, NULL) AS `on_alternative_first_line`, IF(status = 'active' AND hmsd.cur_arv_line >= 2,1,NULL) AS `on_second_line` FROM etl.hiv_monthly_report_dataset_cbb `hmsd` INNER JOIN amrs.location `l` ON (l.location_id = hmsd.location_id) WHERE (endDate = '2020-09-30') AND (status in ('active','ltfu','dead')) AND (hmsd.arv_first_regimen_start_date between date_format(date_sub(endDate,interval 1 year),'%Y-%m-01') and date_sub(endDate,interval 1 year)) AND (hmsd.location_id in (19))) `hmsd` GROUP BY location_id",
        queryResults: {
          results: [
            {
              join_location: 1,
              location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
              location: "Busia",
              location_id: 19,
              net_cohort: 47,
              active: 30,
              ltfu: 14,
              perc_ltfu: 0.2979,
              dead: 3,
              on_tx: 30,
              suppressed: 22,
              total_with_vl: 24,
              on_second_line: 1,
              on_original_first_line: 4,
              on_alternative_first_line: 7,
            },
          ],
        },
      },
      results: {
        schemas: {
          main: {
            name: "retentionDataSetAggregate",
            version: "1.0",
            tag: "",
            description: "",
            uses: [
              {
                name: "retentionDataSetbase",
                version: "1.0",
                type: "dataset_def",
              },
            ],
            sources: [
              {
                dataSet: "retentionDataSetbase",
                alias: "hmsd",
              },
            ],
            columns: [
              {
                type: "derived_column",
                alias: "join_location",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "1",
                },
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "hmsd.location_uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "hmsd.location",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "derived_column",
                alias: "net_cohort",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(*)",
                },
              },
              {
                type: "derived_column",
                alias: "active",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(active)",
                },
              },
              {
                type: "derived_column",
                alias: "ltfu",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(ltfu)",
                },
              },
              {
                type: "derived_column",
                alias: "perc_ltfu",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(ltfu)/count(*)",
                },
              },
              {
                type: "derived_column",
                alias: "dead",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(dead)",
                },
              },
              {
                type: "derived_column",
                alias: "on_tx",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(on_tx)",
                },
              },
              {
                type: "derived_column",
                alias: "suppressed",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(suppressed)",
                },
              },
              {
                type: "derived_column",
                alias: "total_with_vl",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(total_with_vl)",
                },
              },
              {
                type: "derived_column",
                alias: "on_second_line",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(on_second_line)",
                },
              },
              {
                type: "derived_column",
                alias: "on_original_first_line",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(on_original_first_line)",
                },
              },
              {
                type: "derived_column",
                alias: "on_alternative_first_line",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "count(on_alternative_first_line)",
                },
              },
            ],
            groupBy: {
              groupParam: "groupByParam",
              columns: ["location_id"],
              excludeParam: "excludeParam",
            },
            transFormDirectives: {
              joinColumn: "location_id",
              joinColumnParam: "joinColumnParam",
              skipColumns: ["arv_first_regimen_location_id", "join_location"],
            },
            dynamicJsonQueryGenerationDirectives: {
              patientListGenerator: {
                useTemplate: "patient-list-frozen-template",
                useTemplateVersion: "1.0",
                generatingDirectives: {
                  joinDirectives: {
                    joinType: "INNER",
                    joinCondition: "<<base_column>> = <<template_column>>",
                    baseColumn: "person_id",
                    templateColumn: "person_id",
                  },
                },
              },
            },
            default: {
              name: "retentionDataSetAggregate",
              version: "1.0",
              tag: "",
              description: "",
              uses: [
                {
                  name: "retentionDataSetbase",
                  version: "1.0",
                  type: "dataset_def",
                },
              ],
              sources: [
                {
                  dataSet: "retentionDataSetbase",
                  alias: "hmsd",
                },
              ],
              columns: [
                {
                  type: "derived_column",
                  alias: "join_location",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "1",
                  },
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "hmsd.location_uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "hmsd.location",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "derived_column",
                  alias: "net_cohort",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(*)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "active",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(active)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "ltfu",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(ltfu)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "perc_ltfu",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(ltfu)/count(*)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "dead",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(dead)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_tx",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(on_tx)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "suppressed",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(suppressed)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "total_with_vl",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(total_with_vl)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_second_line",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(on_second_line)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_original_first_line",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(on_original_first_line)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_alternative_first_line",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "count(on_alternative_first_line)",
                  },
                },
              ],
              groupBy: {
                groupParam: "groupByParam",
                columns: ["location_id"],
                excludeParam: "excludeParam",
              },
              transFormDirectives: {
                joinColumn: "location_id",
                joinColumnParam: "joinColumnParam",
                skipColumns: ["arv_first_regimen_location_id", "join_location"],
              },
              dynamicJsonQueryGenerationDirectives: {
                patientListGenerator: {
                  useTemplate: "patient-list-frozen-template",
                  useTemplateVersion: "1.0",
                  generatingDirectives: {
                    joinDirectives: {
                      joinType: "INNER",
                      joinCondition: "<<base_column>> = <<template_column>>",
                      baseColumn: "person_id",
                      templateColumn: "person_id",
                    },
                  },
                },
              },
            },
          },
          retentionDataSetbase: {
            name: "retentionDataSetbase",
            version: "1.0",
            tag: "",
            description: "",
            uses: [],
            sources: [
              {
                table: "etl.hiv_monthly_report_dataset_cbb",
                alias: "hmsd",
              },
              {
                table: "amrs.location",
                alias: "l",
                join: {
                  type: "INNER",
                  joinCondition: "l.location_id = hmsd.location_id",
                },
              },
            ],
            columns: [
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "l.uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "l.name",
              },
              {
                type: "simple_column",
                alias: "person_id",
                column: "hmsd.person_id",
              },
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "birthdate",
                column: "hmsd.birthdate",
              },
              {
                type: "simple_column",
                alias: "age",
                column: "hmsd.age",
              },
              {
                type: "simple_column",
                alias: "cur_arv_meds",
                column: "hmsd.cur_arv_meds",
              },
              {
                type: "derived_column",
                alias: "enrollment_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "arv_first_regimen_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "cur_regimen_arv_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "simple_column",
                alias: "cur_arv_line",
                column: "hmsd.cur_arv_line",
              },
              {
                type: "simple_column",
                alias: "vl_1",
                column: "hmsd.vl_1",
              },
              {
                type: "derived_column",
                alias: "vl_1_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                },
              },
              {
                alias: "net_cohort",
                expressionOptions: {
                  expression: "1",
                },
                type: "derived_column",
                expressionType: "simple_expression",
              },
              {
                alias: "active",
                expressionOptions: {
                  expression: "if(status='active',1,null)",
                },
                type: "derived_column",
                expressionType: "simple_expression",
              },
              {
                alias: "ltfu",
                expressionOptions: {
                  expression: "if(status='ltfu',1,null)",
                },
                type: "derived_column",
                expressionType: "simple_expression",
              },
              {
                alias: "dead",
                expressionOptions: {
                  expression: "if(status='dead',1,null)",
                },
                type: "derived_column",
                expressionType: "simple_expression",
              },
              {
                alias: "on_tx",
                expressionOptions: {
                  expression: "if(on_art_this_month=1,1,null)",
                },
                type: "derived_column",
                expressionType: "simple_expression",
              },
              {
                alias: "suppressed",
                expressionOptions: {
                  expression: "if(hmsd.vl_1<1000 and vl_in_past_year=1,1,null)",
                },
                type: "derived_column",
                expressionType: "simple_expression",
              },
              {
                alias: "total_with_vl",
                expressionOptions: {
                  expression: "if(vl_in_past_year=1,1,null)",
                },
                type: "derived_column",
                expressionType: "simple_expression",
              },
              {
                type: "derived_column",
                alias: "on_original_first_line",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(status = 'active' AND hmsd.cur_arv_line = 1 AND hmsd.arv_first_regimen = hmsd.cur_arv_meds,1, NULL)",
                },
              },
              {
                type: "derived_column",
                alias: "on_alternative_first_line",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(status = 'active' AND hmsd.cur_arv_line = 1 AND hmsd.arv_first_regimen <> hmsd.cur_arv_meds,1, NULL)",
                },
              },
              {
                type: "derived_column",
                alias: "on_second_line",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(status = 'active' AND hmsd.cur_arv_line >= 2,1,NULL)",
                },
              },
            ],
            filters: {
              conditionJoinOperator: "and",
              conditions: [
                {
                  filterType: "tableColumns",
                  conditionExpression: "endDate = ?",
                  parameterName: "endDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression: "status in ('active','ltfu','dead')",
                  parameterName: "",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression:
                    "hmsd.arv_first_regimen_start_date between date_format(date_sub(endDate,interval 1 year),'%Y-%m-01') and date_sub(endDate,interval 1 year)",
                  parameterName: "",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression: "hmsd.location_id in ?",
                  parameterName: "locations",
                },
              ],
            },
            default: {
              name: "retentionDataSetbase",
              version: "1.0",
              tag: "",
              description: "",
              uses: [],
              sources: [
                {
                  table: "<<hivMonthlyDatasetSource>>",
                  alias: "hmsd",
                },
                {
                  table: "amrs.location",
                  alias: "l",
                  join: {
                    type: "INNER",
                    joinCondition: "l.location_id = hmsd.location_id",
                  },
                },
              ],
              columns: [
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "l.uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "l.name",
                },
                {
                  type: "simple_column",
                  alias: "person_id",
                  column: "hmsd.person_id",
                },
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "birthdate",
                  column: "hmsd.birthdate",
                },
                {
                  type: "simple_column",
                  alias: "age",
                  column: "hmsd.age",
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_meds",
                  column: "hmsd.cur_arv_meds",
                },
                {
                  type: "derived_column",
                  alias: "enrollment_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "arv_first_regimen_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "cur_regimen_arv_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_line",
                  column: "hmsd.cur_arv_line",
                },
                {
                  type: "simple_column",
                  alias: "vl_1",
                  column: "hmsd.vl_1",
                },
                {
                  type: "derived_column",
                  alias: "vl_1_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                  },
                },
                {
                  alias: "net_cohort",
                  expressionOptions: {
                    expression: "1",
                  },
                  type: "derived_column",
                  expressionType: "simple_expression",
                },
                {
                  alias: "active",
                  expressionOptions: {
                    expression: "if(status='active',1,null)",
                  },
                  type: "derived_column",
                  expressionType: "simple_expression",
                },
                {
                  alias: "ltfu",
                  expressionOptions: {
                    expression: "if(status='ltfu',1,null)",
                  },
                  type: "derived_column",
                  expressionType: "simple_expression",
                },
                {
                  alias: "dead",
                  expressionOptions: {
                    expression: "if(status='dead',1,null)",
                  },
                  type: "derived_column",
                  expressionType: "simple_expression",
                },
                {
                  alias: "on_tx",
                  expressionOptions: {
                    expression: "if(on_art_this_month=1,1,null)",
                  },
                  type: "derived_column",
                  expressionType: "simple_expression",
                },
                {
                  alias: "suppressed",
                  expressionOptions: {
                    expression:
                      "if(hmsd.vl_1<1000 and vl_in_past_year=1,1,null)",
                  },
                  type: "derived_column",
                  expressionType: "simple_expression",
                },
                {
                  alias: "total_with_vl",
                  expressionOptions: {
                    expression: "if(vl_in_past_year=1,1,null)",
                  },
                  type: "derived_column",
                  expressionType: "simple_expression",
                },
                {
                  type: "derived_column",
                  alias: "on_original_first_line",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(status = 'active' AND hmsd.cur_arv_line = 1 AND hmsd.arv_first_regimen = hmsd.cur_arv_meds,1, NULL)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_alternative_first_line",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(status = 'active' AND hmsd.cur_arv_line = 1 AND hmsd.arv_first_regimen <> hmsd.cur_arv_meds,1, NULL)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_second_line",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(status = 'active' AND hmsd.cur_arv_line >= 2,1,NULL)",
                  },
                },
              ],
              filters: {
                conditionJoinOperator: "and",
                conditions: [
                  {
                    filterType: "tableColumns",
                    conditionExpression: "endDate = ?",
                    parameterName: "endDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression: "status in ('active','ltfu','dead')",
                    parameterName: "",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression:
                      "hmsd.arv_first_regimen_start_date between date_format(date_sub(endDate,interval 1 year),'%Y-%m-01') and date_sub(endDate,interval 1 year)",
                    parameterName: "",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression: "hmsd.location_id in ?",
                    parameterName: "locations",
                  },
                ],
              },
            },
          },
        },
        sqlQuery:
          "SELECT 1 AS `join_location`, hmsd.location_uuid AS `location_uuid`, hmsd.location AS `location`, hmsd.location_id AS `location_id`, count(*) AS `net_cohort`, count(active) AS `active`, count(ltfu) AS `ltfu`, count(ltfu)/count(*) AS `perc_ltfu`, count(dead) AS `dead`, count(on_tx) AS `on_tx`, count(suppressed) AS `suppressed`, count(total_with_vl) AS `total_with_vl`, count(on_second_line) AS `on_second_line`, count(on_original_first_line) AS `on_original_first_line`, count(on_alternative_first_line) AS `on_alternative_first_line` FROM (SELECT hmsd.location_id AS `location_id`, l.uuid AS `location_uuid`, l.name AS `location`, hmsd.person_id AS `person_id`, hmsd.gender AS `gender`, hmsd.birthdate AS `birthdate`, hmsd.age AS `age`, hmsd.cur_arv_meds AS `cur_arv_meds`, date_format(hmsd.enrollment_date,'%d-%m-%Y') AS `enrollment_date`, date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y') AS `arv_first_regimen_start_date`, date_format(hmsd.arv_start_date,'%d-%m-%Y') AS `cur_regimen_arv_start_date`, hmsd.cur_arv_line AS `cur_arv_line`, hmsd.vl_1 AS `vl_1`, date_format(hmsd.vl_1_date,'%d-%m-%Y') AS `vl_1_date`, 1 AS `net_cohort`, if(status='active',1,null) AS `active`, if(status='ltfu',1,null) AS `ltfu`, if(status='dead',1,null) AS `dead`, if(on_art_this_month=1,1,null) AS `on_tx`, if(hmsd.vl_1<1000 and vl_in_past_year=1,1,null) AS `suppressed`, if(vl_in_past_year=1,1,null) AS `total_with_vl`, IF(status = 'active' AND hmsd.cur_arv_line = 1 AND hmsd.arv_first_regimen = hmsd.cur_arv_meds,1, NULL) AS `on_original_first_line`, IF(status = 'active' AND hmsd.cur_arv_line = 1 AND hmsd.arv_first_regimen <> hmsd.cur_arv_meds,1, NULL) AS `on_alternative_first_line`, IF(status = 'active' AND hmsd.cur_arv_line >= 2,1,NULL) AS `on_second_line` FROM etl.hiv_monthly_report_dataset_cbb `hmsd` INNER JOIN amrs.location `l` ON (l.location_id = hmsd.location_id) WHERE (endDate = '2020-09-30') AND (status in ('active','ltfu','dead')) AND (hmsd.arv_first_regimen_start_date between date_format(date_sub(endDate,interval 1 year),'%Y-%m-01') and date_sub(endDate,interval 1 year)) AND (hmsd.location_id in (19))) `hmsd` GROUP BY location_id",
        results: {
          results: [
            {
              join_location: 1,
              location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
              location: "Busia",
              location_id: 19,
              net_cohort: 47,
              active: 30,
              ltfu: 14,
              perc_ltfu: 0.2979,
              dead: 3,
              on_tx: 30,
              suppressed: 22,
              total_with_vl: 24,
              on_second_line: 1,
              on_original_first_line: 4,
              on_alternative_first_line: 7,
            },
          ],
        },
      },
    },
    {
      report: {
        reportName: "mainDatasetAggregateNoDisaggregation",
        params: {
          endDate: "2020-09-30",
          startDate: "2020-09-01",
          reportName: "MOH-731-report-2017",
          locationUuids: ["08fec60a-1352-11df-a1f1-0026b9348838"],
          isAggregated: false,
          locations: [19],
          referenceDate: "2020-09-14",
          startAge: 0,
          endAge: 150,
          gender: ["M", "F"],
          genders: ["M", "F"],
          hivMonthlyDatasetSource: "etl.hiv_monthly_report_dataset_cbb",
        },
        reportSchemas: {
          main: {
            name: "mainDatasetAggregateNoDisaggregation",
            version: "1.0",
            tag: "",
            description: "",
            uses: [
              {
                name: "mainDataSetBase",
                version: "1.0",
                type: "dataset_def",
              },
            ],
            sources: [
              {
                dataSet: "mainDataSetBase",
                alias: "hmsd",
              },
            ],
            columns: [
              {
                type: "derived_column",
                alias: "join_location",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "1",
                },
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "hmsd.location_uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "hmsd.location",
              },
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "age_range",
                column: "hmsd.age_range",
              },
              {
                type: "derived_column",
                alias: "enrolled_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.enrolled_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "pre_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.pre_art)",
                },
              },
              {
                type: "derived_column",
                alias: "started_art_pregnant",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.started_art_pregnant)",
                },
              },
              {
                type: "derived_column",
                alias: "art_revisit_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.art_revisit_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "started_art_and_has_tb",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.started_art_and_has_tb)",
                },
              },
              {
                type: "derived_column",
                alias: "current_in_care",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.current_in_care)",
                },
              },
              {
                type: "derived_column",
                alias: "active_on_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.active_on_art)",
                },
              },
              {
                type: "derived_column",
                alias: "on_ctx_prophylaxis",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.on_ctx_prophylaxis)",
                },
              },
              {
                type: "derived_column",
                alias: "screened_for_tb",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.screened_for_tb)",
                },
              },
              {
                type: "derived_column",
                alias: "tb_screened_this_visit_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.tb_screened_this_visit_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "current_on_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.current_on_art)",
                },
              },
              {
                type: "derived_column",
                alias: "tb_screened_positive",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.tb_screened_positive)",
                },
              },
              {
                type: "derived_column",
                alias: "started_ipt",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.started_ipt)",
                },
              },
              {
                type: "derived_column",
                alias: "completed_ipt_past_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.completed_ipt_past_12_months)",
                },
              },
              {
                type: "derived_column",
                alias: "condoms_provided",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.condoms_provided)",
                },
              },
              {
                type: "derived_column",
                alias: "started_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.condoms_provided)",
                },
              },
              {
                type: "derived_column",
                alias: "on_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.on_modern_contraception)",
                },
              },
              {
                type: "derived_column",
                alias: "f_gte_18_visits",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.f_gte_18_visits)",
                },
              },
              {
                type: "derived_column",
                alias: "scheduled_visits",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.scheduled_visits)",
                },
              },
              {
                type: "derived_column",
                alias: "unscheduled_visits",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.unscheduled_visits)",
                },
              },
              {
                type: "derived_column",
                alias: "total_visits",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.total_visits)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_art_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.is_cross_border_on_art_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_vl_suppressed_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "sum(hmsd.is_cross_border_vl_suppressed_this_month)",
                },
              },
              {
                type: "derived_column",
                alias:
                  "is_cross_border_active_on_art_12_month_cohort_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "sum(hmsd.is_cross_border_active_on_art_12_month_cohort_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_presumed_tb_positive_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "sum(hmsd.is_cross_border_presumed_tb_positive_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_started_tb_tx_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "sum(hmsd.is_cross_border_started_tb_tx_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.is_cross_border_on_tb_tx_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_completed_tb_tx",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.is_cross_border_completed_tb_tx)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_stopped_tb_tx",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.is_cross_border_stopped_tb_tx)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_transferred_out",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "sum(hmsd.is_cross_border_on_tb_tx_transferred_out)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_ltfu",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.is_cross_border_on_tb_tx_ltfu)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_dead",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.is_cross_border_on_tb_tx_dead)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_modern_contraception_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "sum(hmsd.is_cross_border_on_modern_contraception_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.is_cross_border_country_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_county_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.is_cross_border_county_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_3_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.travelled_outside_last_3_months)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_6_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.travelled_outside_last_6_months)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.travelled_outside_last_12_months)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_kenya",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.is_cross_border_country_kenya)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_uganda",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.is_cross_border_country_uganda)",
                },
              },
            ],
            groupBy: {
              groupParam: "groupByParam",
              columns: ["location_id"],
              excludeParam: "excludeParam",
            },
            transFormDirectives: {
              joinColumn: "location_id",
              joinColumnParam: "joinColumnParam",
              skipColumns: [
                "location_uuid",
                "gender",
                "age_range",
                "join_location",
              ],
              disaggregationColumns: [],
            },
            dynamicJsonQueryGenerationDirectives: {
              patientListGenerator: {
                useTemplate: "patient-list-frozen-template",
                useTemplateVersion: "1.0",
                generatingDirectives: {
                  joinDirectives: {
                    joinType: "INNER",
                    joinCondition: "<<base_column>> = <<template_column>>",
                    baseColumn: "person_id",
                    templateColumn: "person_id",
                  },
                },
              },
            },
            default: {
              name: "mainDatasetAggregateNoDisaggregation",
              version: "1.0",
              tag: "",
              description: "",
              uses: [
                {
                  name: "mainDataSetBase",
                  version: "1.0",
                  type: "dataset_def",
                },
              ],
              sources: [
                {
                  dataSet: "mainDataSetBase",
                  alias: "hmsd",
                },
              ],
              columns: [
                {
                  type: "derived_column",
                  alias: "join_location",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "1",
                  },
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "hmsd.location_uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "hmsd.location",
                },
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "age_range",
                  column: "hmsd.age_range",
                },
                {
                  type: "derived_column",
                  alias: "enrolled_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.enrolled_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "pre_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.pre_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_art_pregnant",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.started_art_pregnant)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "art_revisit_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.art_revisit_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_art_and_has_tb",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.started_art_and_has_tb)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "current_in_care",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.current_in_care)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "active_on_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.active_on_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_ctx_prophylaxis",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.on_ctx_prophylaxis)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "screened_for_tb",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.screened_for_tb)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "tb_screened_this_visit_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.tb_screened_this_visit_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "current_on_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.current_on_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "tb_screened_positive",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.tb_screened_positive)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_ipt",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.started_ipt)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "completed_ipt_past_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.completed_ipt_past_12_months)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "condoms_provided",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.condoms_provided)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.condoms_provided)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.on_modern_contraception)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "f_gte_18_visits",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.f_gte_18_visits)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "scheduled_visits",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.scheduled_visits)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "unscheduled_visits",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.unscheduled_visits)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "total_visits",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.total_visits)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_art_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.is_cross_border_on_art_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_vl_suppressed_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "sum(hmsd.is_cross_border_vl_suppressed_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias:
                    "is_cross_border_active_on_art_12_month_cohort_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "sum(hmsd.is_cross_border_active_on_art_12_month_cohort_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_presumed_tb_positive_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "sum(hmsd.is_cross_border_presumed_tb_positive_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_started_tb_tx_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "sum(hmsd.is_cross_border_started_tb_tx_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.is_cross_border_on_tb_tx_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_completed_tb_tx",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.is_cross_border_completed_tb_tx)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_stopped_tb_tx",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.is_cross_border_stopped_tb_tx)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_transferred_out",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "sum(hmsd.is_cross_border_on_tb_tx_transferred_out)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_ltfu",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.is_cross_border_on_tb_tx_ltfu)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_dead",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.is_cross_border_on_tb_tx_dead)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_modern_contraception_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "sum(hmsd.is_cross_border_on_modern_contraception_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.is_cross_border_country_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_county_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.is_cross_border_county_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_3_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.travelled_outside_last_3_months)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_6_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.travelled_outside_last_6_months)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.travelled_outside_last_12_months)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_kenya",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.is_cross_border_country_kenya)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_uganda",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.is_cross_border_country_uganda)",
                  },
                },
              ],
              groupBy: {
                groupParam: "groupByParam",
                columns: ["location_id"],
                excludeParam: "excludeParam",
              },
              transFormDirectives: {
                joinColumn: "location_id",
                joinColumnParam: "joinColumnParam",
                skipColumns: [
                  "location_uuid",
                  "gender",
                  "age_range",
                  "join_location",
                ],
                disaggregationColumns: [],
              },
              dynamicJsonQueryGenerationDirectives: {
                patientListGenerator: {
                  useTemplate: "patient-list-frozen-template",
                  useTemplateVersion: "1.0",
                  generatingDirectives: {
                    joinDirectives: {
                      joinType: "INNER",
                      joinCondition: "<<base_column>> = <<template_column>>",
                      baseColumn: "person_id",
                      templateColumn: "person_id",
                    },
                  },
                },
              },
            },
          },
          mainDataSetBase: {
            name: "mainDataSetBase",
            version: "1.0",
            tag: "",
            description: "",
            uses: [],
            sources: [
              {
                table: "etl.hiv_monthly_report_dataset_cbb",
                alias: "hmsd",
              },
              {
                table: "amrs.location",
                alias: "l",
                join: {
                  type: "INNER",
                  joinCondition: "l.location_id = hmsd.location_id",
                },
              },
            ],
            columns: [
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "birthdate",
                column: "hmsd.birthdate",
              },
              {
                type: "simple_column",
                alias: "age",
                column: "hmsd.age",
              },
              {
                type: "simple_column",
                alias: "person_id",
                column: "hmsd.person_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "l.uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "l.name",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "cur_arv_meds",
                column: "hmsd.cur_arv_meds",
              },
              {
                type: "derived_column",
                alias: "enrollment_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "arv_first_regimen_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "cur_regimen_arv_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "simple_column",
                alias: "cur_arv_line",
                column: "hmsd.cur_arv_line",
              },
              {
                type: "simple_column",
                alias: "vl_1",
                column: "hmsd.vl_1",
              },
              {
                type: "derived_column",
                alias: "vl_1_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "age_range",
                expressionType: "case_statement",
                expressionOptions: {
                  caseOptions: [
                    {
                      condition: "hmsd.age < 1",
                      value: "0_to_1",
                    },
                    {
                      condition: "hmsd.age between 1 and 9",
                      value: "1_to_9",
                    },
                    {
                      condition: "hmsd.age between 10 and 14",
                      value: "10_to_14",
                    },
                    {
                      condition: "hmsd.age between 15 and 19",
                      value: "15_to_19",
                    },
                    {
                      condition: "hmsd.age between 20 and 24",
                      value: "20_to_24",
                    },
                    {
                      condition: "else",
                      value: "older_than_24",
                    },
                  ],
                },
              },
              {
                type: "simple_column",
                alias: "enrolled_this_month",
                column: "hmsd.enrolled_this_month",
              },
              {
                type: "simple_column",
                alias: "art_revisit_this_month",
                column: "hmsd.art_revisit_this_month",
              },
              {
                type: "simple_column",
                alias: "current_in_care",
                column: "hmsd.active_in_care_this_month",
              },
              {
                type: "simple_column",
                alias: "pre_art",
                column: "hmsd.is_pre_art_this_month",
              },
              {
                type: "simple_column",
                alias: "started_art_pregnant",
                column: "hmsd.is_pregnant_and_started_art_this_month",
              },
              {
                type: "simple_column",
                alias: "started_art_and_has_tb",
                column: "hmsd.on_tb_tx_and_started_art_this_month",
              },
              {
                type: "simple_column",
                alias: "active_on_art",
                column: "hmsd.on_art_this_month",
              },
              {
                type: "simple_column",
                alias: "on_ctx_prophylaxis",
                column: "hmsd.on_pcp_prophylaxis_this_month",
              },
              {
                type: "simple_column",
                alias: "current_on_art",
                column: "hmsd.on_art_this_month",
              },
              {
                type: "simple_column",
                alias: "screened_for_tb",
                column: "hmsd.tb_screened_active_this_month",
              },
              {
                type: "simple_column",
                alias: "tb_screened_this_visit_this_month",
                column: "hmsd.tb_screened_this_visit_this_month",
              },
              {
                type: "simple_column",
                alias: "tb_screened_positive",
                column: "hmsd.presumed_tb_positive_this_month",
              },
              {
                type: "derived_column",
                alias: "screened_for_cervical_ca",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "0",
                },
              },
              {
                type: "simple_column",
                alias: "started_ipt",
                column: "hmsd.started_ipt_this_month",
              },
              {
                type: "derived_column",
                alias: "completed_ipt_past_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "completed_ipt_past_12_months",
                },
              },
              {
                type: "derived_column",
                alias: "condoms_provided",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "condoms_provided_this_month",
                },
              },
              {
                type: "derived_column",
                alias: "started_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "started_modern_contraception_this_month",
                },
              },
              {
                type: "simple_column",
                alias: "on_modern_contraception",
                column: "hmsd.on_modern_contraception_this_month",
              },
              {
                type: "simple_column",
                alias: "scheduled_visits",
                column: "hmsd.scheduled_this_month",
              },
              {
                type: "simple_column",
                alias: "unscheduled_visits",
                column: "hmsd.unscheduled_this_month",
              },
              {
                type: "simple_column",
                alias: "total_visits",
                column: "hmsd.visit_this_month",
              },
              {
                type: "simple_column",
                alias: "f_gte_18_visits",
                column: "hmsd.f_18_and_older_this_month",
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_art_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.art_revisit_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_vl_suppressed_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_suppressed_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias:
                  "is_cross_border_active_on_art_12_month_cohort_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.active_on_art_12_month_cohort_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_presumed_tb_positive_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.presumed_tb_positive_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_started_tb_tx_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.started_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_completed_tb_tx",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_end_date is not null , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_stopped_tb_tx",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_stop_date is not null , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_transferred_out",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'transfer_out' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_ltfu",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and ( status = 'defaulter' or status = 'ltfu'), 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_dead",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'dead', 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_modern_contraception_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_modern_contraception_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_county_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_county_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_3_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.travelled_outside_last_3_months = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_6_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.travelled_outside_last_6_months = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.travelled_outside_last_12_months = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_kenya",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11197, 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_uganda",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11118, 1 , 0)",
                },
              },
            ],
            filters: {
              conditionJoinOperator: "and",
              conditions: [
                {
                  filterType: "tableColumns",
                  conditionExpression: "endDate = ?",
                  parameterName: "endDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression: "hmsd.location_id in ?",
                  parameterName: "locations",
                },
              ],
            },
            default: {
              name: "mainDataSetBase",
              version: "1.0",
              tag: "",
              description: "",
              uses: [],
              sources: [
                {
                  table: "<<hivMonthlyDatasetSource>>",
                  alias: "hmsd",
                },
                {
                  table: "amrs.location",
                  alias: "l",
                  join: {
                    type: "INNER",
                    joinCondition: "l.location_id = hmsd.location_id",
                  },
                },
              ],
              columns: [
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "birthdate",
                  column: "hmsd.birthdate",
                },
                {
                  type: "simple_column",
                  alias: "age",
                  column: "hmsd.age",
                },
                {
                  type: "simple_column",
                  alias: "person_id",
                  column: "hmsd.person_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "l.uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "l.name",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_meds",
                  column: "hmsd.cur_arv_meds",
                },
                {
                  type: "derived_column",
                  alias: "enrollment_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "arv_first_regimen_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "cur_regimen_arv_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_line",
                  column: "hmsd.cur_arv_line",
                },
                {
                  type: "simple_column",
                  alias: "vl_1",
                  column: "hmsd.vl_1",
                },
                {
                  type: "derived_column",
                  alias: "vl_1_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "age_range",
                  expressionType: "case_statement",
                  expressionOptions: {
                    caseOptions: [
                      {
                        condition: "hmsd.age < 1",
                        value: "0_to_1",
                      },
                      {
                        condition: "hmsd.age between 1 and 9",
                        value: "1_to_9",
                      },
                      {
                        condition: "hmsd.age between 10 and 14",
                        value: "10_to_14",
                      },
                      {
                        condition: "hmsd.age between 15 and 19",
                        value: "15_to_19",
                      },
                      {
                        condition: "hmsd.age between 20 and 24",
                        value: "20_to_24",
                      },
                      {
                        condition: "else",
                        value: "older_than_24",
                      },
                    ],
                  },
                },
                {
                  type: "simple_column",
                  alias: "enrolled_this_month",
                  column: "hmsd.enrolled_this_month",
                },
                {
                  type: "simple_column",
                  alias: "art_revisit_this_month",
                  column: "hmsd.art_revisit_this_month",
                },
                {
                  type: "simple_column",
                  alias: "current_in_care",
                  column: "hmsd.active_in_care_this_month",
                },
                {
                  type: "simple_column",
                  alias: "pre_art",
                  column: "hmsd.is_pre_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "started_art_pregnant",
                  column: "hmsd.is_pregnant_and_started_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "started_art_and_has_tb",
                  column: "hmsd.on_tb_tx_and_started_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "active_on_art",
                  column: "hmsd.on_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "on_ctx_prophylaxis",
                  column: "hmsd.on_pcp_prophylaxis_this_month",
                },
                {
                  type: "simple_column",
                  alias: "current_on_art",
                  column: "hmsd.on_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "screened_for_tb",
                  column: "hmsd.tb_screened_active_this_month",
                },
                {
                  type: "simple_column",
                  alias: "tb_screened_this_visit_this_month",
                  column: "hmsd.tb_screened_this_visit_this_month",
                },
                {
                  type: "simple_column",
                  alias: "tb_screened_positive",
                  column: "hmsd.presumed_tb_positive_this_month",
                },
                {
                  type: "derived_column",
                  alias: "screened_for_cervical_ca",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "0",
                  },
                },
                {
                  type: "simple_column",
                  alias: "started_ipt",
                  column: "hmsd.started_ipt_this_month",
                },
                {
                  type: "derived_column",
                  alias: "completed_ipt_past_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "completed_ipt_past_12_months",
                  },
                },
                {
                  type: "derived_column",
                  alias: "condoms_provided",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "condoms_provided_this_month",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "started_modern_contraception_this_month",
                  },
                },
                {
                  type: "simple_column",
                  alias: "on_modern_contraception",
                  column: "hmsd.on_modern_contraception_this_month",
                },
                {
                  type: "simple_column",
                  alias: "scheduled_visits",
                  column: "hmsd.scheduled_this_month",
                },
                {
                  type: "simple_column",
                  alias: "unscheduled_visits",
                  column: "hmsd.unscheduled_this_month",
                },
                {
                  type: "simple_column",
                  alias: "total_visits",
                  column: "hmsd.visit_this_month",
                },
                {
                  type: "simple_column",
                  alias: "f_gte_18_visits",
                  column: "hmsd.f_18_and_older_this_month",
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_art_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.art_revisit_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_vl_suppressed_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_suppressed_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias:
                    "is_cross_border_active_on_art_12_month_cohort_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.active_on_art_12_month_cohort_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_presumed_tb_positive_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.presumed_tb_positive_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_started_tb_tx_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.started_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_completed_tb_tx",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_end_date is not null , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_stopped_tb_tx",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_stop_date is not null , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_transferred_out",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'transfer_out' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_ltfu",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and ( status = 'defaulter' or status = 'ltfu'), 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_dead",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'dead', 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_modern_contraception_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_modern_contraception_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_county_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_county_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_3_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.travelled_outside_last_3_months = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_6_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.travelled_outside_last_6_months = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.travelled_outside_last_12_months = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_kenya",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11197, 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_uganda",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11118, 1 , 0)",
                  },
                },
              ],
              filters: {
                conditionJoinOperator: "and",
                conditions: [
                  {
                    filterType: "tableColumns",
                    conditionExpression: "endDate = ?",
                    parameterName: "endDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression: "hmsd.location_id in ?",
                    parameterName: "locations",
                  },
                ],
              },
            },
          },
        },
        reportQuery:
          "SELECT 1 AS `join_location`, hmsd.location_uuid AS `location_uuid`, hmsd.location AS `location`, hmsd.gender AS `gender`, hmsd.location_id AS `location_id`, hmsd.age_range AS `age_range`, sum(hmsd.enrolled_this_month) AS `enrolled_this_month`, sum(hmsd.pre_art) AS `pre_art`, sum(hmsd.started_art_pregnant) AS `started_art_pregnant`, sum(hmsd.art_revisit_this_month) AS `art_revisit_this_month`, sum(hmsd.started_art_and_has_tb) AS `started_art_and_has_tb`, sum(hmsd.current_in_care) AS `current_in_care`, sum(hmsd.active_on_art) AS `active_on_art`, sum(hmsd.on_ctx_prophylaxis) AS `on_ctx_prophylaxis`, sum(hmsd.screened_for_tb) AS `screened_for_tb`, sum(hmsd.tb_screened_this_visit_this_month) AS `tb_screened_this_visit_this_month`, sum(hmsd.current_on_art) AS `current_on_art`, sum(hmsd.tb_screened_positive) AS `tb_screened_positive`, sum(hmsd.started_ipt) AS `started_ipt`, sum(hmsd.completed_ipt_past_12_months) AS `completed_ipt_past_12_months`, sum(hmsd.condoms_provided) AS `condoms_provided`, sum(hmsd.condoms_provided) AS `started_modern_contraception`, sum(hmsd.on_modern_contraception) AS `on_modern_contraception`, sum(hmsd.f_gte_18_visits) AS `f_gte_18_visits`, sum(hmsd.scheduled_visits) AS `scheduled_visits`, sum(hmsd.unscheduled_visits) AS `unscheduled_visits`, sum(hmsd.total_visits) AS `total_visits`, sum(hmsd.is_cross_border_on_art_this_month) AS `is_cross_border_on_art_this_month`, sum(hmsd.is_cross_border_vl_suppressed_this_month) AS `is_cross_border_vl_suppressed_this_month`, sum(hmsd.is_cross_border_active_on_art_12_month_cohort_this_month) AS `is_cross_border_active_on_art_12_month_cohort_this_month`, sum(hmsd.is_cross_border_presumed_tb_positive_this_month) AS `is_cross_border_presumed_tb_positive_this_month`, sum(hmsd.is_cross_border_started_tb_tx_this_month) AS `is_cross_border_started_tb_tx_this_month`, sum(hmsd.is_cross_border_on_tb_tx_this_month) AS `is_cross_border_on_tb_tx_this_month`, sum(hmsd.is_cross_border_completed_tb_tx) AS `is_cross_border_completed_tb_tx`, sum(hmsd.is_cross_border_stopped_tb_tx) AS `is_cross_border_stopped_tb_tx`, sum(hmsd.is_cross_border_on_tb_tx_transferred_out) AS `is_cross_border_on_tb_tx_transferred_out`, sum(hmsd.is_cross_border_on_tb_tx_ltfu) AS `is_cross_border_on_tb_tx_ltfu`, sum(hmsd.is_cross_border_on_tb_tx_dead) AS `is_cross_border_on_tb_tx_dead`, sum(hmsd.is_cross_border_on_modern_contraception_this_month) AS `is_cross_border_on_modern_contraception_this_month`, sum(hmsd.is_cross_border_country_this_month) AS `is_cross_border_country_this_month`, sum(hmsd.is_cross_border_county_this_month) AS `is_cross_border_county_this_month`, sum(hmsd.travelled_outside_last_3_months) AS `travelled_outside_last_3_months`, sum(hmsd.travelled_outside_last_6_months) AS `travelled_outside_last_6_months`, sum(hmsd.travelled_outside_last_12_months) AS `travelled_outside_last_12_months`, sum(hmsd.is_cross_border_country_kenya) AS `is_cross_border_country_kenya`, sum(hmsd.is_cross_border_country_uganda) AS `is_cross_border_country_uganda` FROM (SELECT hmsd.gender AS `gender`, hmsd.birthdate AS `birthdate`, hmsd.age AS `age`, hmsd.person_id AS `person_id`, l.uuid AS `location_uuid`, l.name AS `location`, hmsd.location_id AS `location_id`, hmsd.cur_arv_meds AS `cur_arv_meds`, date_format(hmsd.enrollment_date,'%d-%m-%Y') AS `enrollment_date`, date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y') AS `arv_first_regimen_start_date`, date_format(hmsd.arv_start_date,'%d-%m-%Y') AS `cur_regimen_arv_start_date`, hmsd.cur_arv_line AS `cur_arv_line`, hmsd.vl_1 AS `vl_1`, date_format(hmsd.vl_1_date,'%d-%m-%Y') AS `vl_1_date`, CASE WHEN (hmsd.age between 20 and 24) THEN '20_to_24' WHEN (hmsd.age between 15 and 19) THEN '15_to_19' WHEN (hmsd.age between 10 and 14) THEN '10_to_14' WHEN (hmsd.age between 1 and 9) THEN '1_to_9' WHEN (hmsd.age < 1) THEN '0_to_1' ELSE 'older_than_24' END AS `age_range`, hmsd.enrolled_this_month AS `enrolled_this_month`, hmsd.art_revisit_this_month AS `art_revisit_this_month`, hmsd.active_in_care_this_month AS `current_in_care`, hmsd.is_pre_art_this_month AS `pre_art`, hmsd.is_pregnant_and_started_art_this_month AS `started_art_pregnant`, hmsd.on_tb_tx_and_started_art_this_month AS `started_art_and_has_tb`, hmsd.on_art_this_month AS `active_on_art`, hmsd.on_pcp_prophylaxis_this_month AS `on_ctx_prophylaxis`, hmsd.on_art_this_month AS `current_on_art`, hmsd.tb_screened_active_this_month AS `screened_for_tb`, hmsd.tb_screened_this_visit_this_month AS `tb_screened_this_visit_this_month`, hmsd.presumed_tb_positive_this_month AS `tb_screened_positive`, 0 AS `screened_for_cervical_ca`, hmsd.started_ipt_this_month AS `started_ipt`, completed_ipt_past_12_months AS `completed_ipt_past_12_months`, condoms_provided_this_month AS `condoms_provided`, started_modern_contraception_this_month AS `started_modern_contraception`, hmsd.on_modern_contraception_this_month AS `on_modern_contraception`, hmsd.scheduled_this_month AS `scheduled_visits`, hmsd.unscheduled_this_month AS `unscheduled_visits`, hmsd.visit_this_month AS `total_visits`, hmsd.f_18_and_older_this_month AS `f_gte_18_visits`, IF(hmsd.art_revisit_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_on_art_this_month`, IF(hmsd.is_suppressed_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_vl_suppressed_this_month`, IF(hmsd.active_on_art_12_month_cohort_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_active_on_art_12_month_cohort_this_month`, IF(hmsd.presumed_tb_positive_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_presumed_tb_positive_this_month`, IF(hmsd.started_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_started_tb_tx_this_month`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'active' , 1 , 0) AS `is_cross_border_on_tb_tx_this_month`, IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_end_date is not null , 1 , 0) AS `is_cross_border_completed_tb_tx`, IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_stop_date is not null , 1 , 0) AS `is_cross_border_stopped_tb_tx`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'transfer_out' , 1 , 0) AS `is_cross_border_on_tb_tx_transferred_out`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and ( status = 'defaulter' or status = 'ltfu'), 1 , 0) AS `is_cross_border_on_tb_tx_ltfu`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'dead', 1 , 0) AS `is_cross_border_on_tb_tx_dead`, IF(hmsd.on_modern_contraception_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_on_modern_contraception_this_month`, IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' , 1 , 0) AS `is_cross_border_country_this_month`, IF(hmsd.is_cross_border_county_this_month = 1 and hmsd.status = 'active' , 1 , 0) AS `is_cross_border_county_this_month`, IF(hmsd.travelled_outside_last_3_months = 1 and hmsd.status = 'active' , 1 , 0) AS `travelled_outside_last_3_months`, IF(hmsd.travelled_outside_last_6_months = 1 and hmsd.status = 'active' , 1 , 0) AS `travelled_outside_last_6_months`, IF(hmsd.travelled_outside_last_12_months = 1 and hmsd.status = 'active' , 1 , 0) AS `travelled_outside_last_12_months`, IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11197, 1 , 0) AS `is_cross_border_country_kenya`, IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11118, 1 , 0) AS `is_cross_border_country_uganda` FROM etl.hiv_monthly_report_dataset_cbb `hmsd` INNER JOIN amrs.location `l` ON (l.location_id = hmsd.location_id) WHERE (endDate = '2020-09-30') AND (hmsd.location_id in (19))) `hmsd` GROUP BY location_id",
        queryResults: {
          results: [
            {
              join_location: 1,
              location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
              location: "Busia",
              gender: "F",
              location_id: 19,
              age_range: "10_to_14",
              enrolled_this_month: 18,
              pre_art: 0,
              started_art_pregnant: 0,
              art_revisit_this_month: 5545,
              started_art_and_has_tb: 0,
              current_in_care: 5566,
              active_on_art: 5563,
              on_ctx_prophylaxis: 4727,
              screened_for_tb: 5092,
              tb_screened_this_visit_this_month: 738,
              current_on_art: 5563,
              tb_screened_positive: 1,
              started_ipt: 12,
              completed_ipt_past_12_months: 1566,
              condoms_provided: 324,
              started_modern_contraception: 324,
              on_modern_contraception: 1399,
              f_gte_18_visits: 489,
              scheduled_visits: 421,
              unscheduled_visits: 447,
              total_visits: 891,
              is_cross_border_on_art_this_month: 2,
              is_cross_border_vl_suppressed_this_month: 0,
              is_cross_border_active_on_art_12_month_cohort_this_month: 0,
              is_cross_border_presumed_tb_positive_this_month: 1,
              is_cross_border_started_tb_tx_this_month: 2,
              is_cross_border_on_tb_tx_this_month: 2,
              is_cross_border_completed_tb_tx: 1,
              is_cross_border_stopped_tb_tx: 0,
              is_cross_border_on_tb_tx_transferred_out: 0,
              is_cross_border_on_tb_tx_ltfu: 0,
              is_cross_border_on_tb_tx_dead: 0,
              is_cross_border_on_modern_contraception_this_month: 1,
              is_cross_border_country_this_month: 3,
              is_cross_border_county_this_month: 0,
              travelled_outside_last_3_months: 3,
              travelled_outside_last_6_months: 3,
              travelled_outside_last_12_months: 3,
              is_cross_border_country_kenya: 1,
              is_cross_border_country_uganda: 2,
            },
          ],
        },
      },
      results: {
        schemas: {
          main: {
            name: "mainDatasetAggregateNoDisaggregation",
            version: "1.0",
            tag: "",
            description: "",
            uses: [
              {
                name: "mainDataSetBase",
                version: "1.0",
                type: "dataset_def",
              },
            ],
            sources: [
              {
                dataSet: "mainDataSetBase",
                alias: "hmsd",
              },
            ],
            columns: [
              {
                type: "derived_column",
                alias: "join_location",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "1",
                },
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "hmsd.location_uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "hmsd.location",
              },
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "age_range",
                column: "hmsd.age_range",
              },
              {
                type: "derived_column",
                alias: "enrolled_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.enrolled_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "pre_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.pre_art)",
                },
              },
              {
                type: "derived_column",
                alias: "started_art_pregnant",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.started_art_pregnant)",
                },
              },
              {
                type: "derived_column",
                alias: "art_revisit_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.art_revisit_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "started_art_and_has_tb",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.started_art_and_has_tb)",
                },
              },
              {
                type: "derived_column",
                alias: "current_in_care",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.current_in_care)",
                },
              },
              {
                type: "derived_column",
                alias: "active_on_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.active_on_art)",
                },
              },
              {
                type: "derived_column",
                alias: "on_ctx_prophylaxis",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.on_ctx_prophylaxis)",
                },
              },
              {
                type: "derived_column",
                alias: "screened_for_tb",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.screened_for_tb)",
                },
              },
              {
                type: "derived_column",
                alias: "tb_screened_this_visit_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.tb_screened_this_visit_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "current_on_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.current_on_art)",
                },
              },
              {
                type: "derived_column",
                alias: "tb_screened_positive",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.tb_screened_positive)",
                },
              },
              {
                type: "derived_column",
                alias: "started_ipt",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.started_ipt)",
                },
              },
              {
                type: "derived_column",
                alias: "completed_ipt_past_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.completed_ipt_past_12_months)",
                },
              },
              {
                type: "derived_column",
                alias: "condoms_provided",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.condoms_provided)",
                },
              },
              {
                type: "derived_column",
                alias: "started_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.condoms_provided)",
                },
              },
              {
                type: "derived_column",
                alias: "on_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.on_modern_contraception)",
                },
              },
              {
                type: "derived_column",
                alias: "f_gte_18_visits",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.f_gte_18_visits)",
                },
              },
              {
                type: "derived_column",
                alias: "scheduled_visits",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.scheduled_visits)",
                },
              },
              {
                type: "derived_column",
                alias: "unscheduled_visits",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.unscheduled_visits)",
                },
              },
              {
                type: "derived_column",
                alias: "total_visits",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.total_visits)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_art_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.is_cross_border_on_art_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_vl_suppressed_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "sum(hmsd.is_cross_border_vl_suppressed_this_month)",
                },
              },
              {
                type: "derived_column",
                alias:
                  "is_cross_border_active_on_art_12_month_cohort_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "sum(hmsd.is_cross_border_active_on_art_12_month_cohort_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_presumed_tb_positive_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "sum(hmsd.is_cross_border_presumed_tb_positive_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_started_tb_tx_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "sum(hmsd.is_cross_border_started_tb_tx_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.is_cross_border_on_tb_tx_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_completed_tb_tx",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.is_cross_border_completed_tb_tx)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_stopped_tb_tx",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.is_cross_border_stopped_tb_tx)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_transferred_out",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "sum(hmsd.is_cross_border_on_tb_tx_transferred_out)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_ltfu",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.is_cross_border_on_tb_tx_ltfu)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_dead",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.is_cross_border_on_tb_tx_dead)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_modern_contraception_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "sum(hmsd.is_cross_border_on_modern_contraception_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.is_cross_border_country_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_county_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.is_cross_border_county_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_3_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.travelled_outside_last_3_months)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_6_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.travelled_outside_last_6_months)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.travelled_outside_last_12_months)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_kenya",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.is_cross_border_country_kenya)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_uganda",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.is_cross_border_country_uganda)",
                },
              },
            ],
            groupBy: {
              groupParam: "groupByParam",
              columns: ["location_id"],
              excludeParam: "excludeParam",
            },
            transFormDirectives: {
              joinColumn: "location_id",
              joinColumnParam: "joinColumnParam",
              skipColumns: [
                "location_uuid",
                "gender",
                "age_range",
                "join_location",
              ],
              disaggregationColumns: [],
            },
            dynamicJsonQueryGenerationDirectives: {
              patientListGenerator: {
                useTemplate: "patient-list-frozen-template",
                useTemplateVersion: "1.0",
                generatingDirectives: {
                  joinDirectives: {
                    joinType: "INNER",
                    joinCondition: "<<base_column>> = <<template_column>>",
                    baseColumn: "person_id",
                    templateColumn: "person_id",
                  },
                },
              },
            },
            default: {
              name: "mainDatasetAggregateNoDisaggregation",
              version: "1.0",
              tag: "",
              description: "",
              uses: [
                {
                  name: "mainDataSetBase",
                  version: "1.0",
                  type: "dataset_def",
                },
              ],
              sources: [
                {
                  dataSet: "mainDataSetBase",
                  alias: "hmsd",
                },
              ],
              columns: [
                {
                  type: "derived_column",
                  alias: "join_location",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "1",
                  },
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "hmsd.location_uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "hmsd.location",
                },
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "age_range",
                  column: "hmsd.age_range",
                },
                {
                  type: "derived_column",
                  alias: "enrolled_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.enrolled_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "pre_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.pre_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_art_pregnant",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.started_art_pregnant)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "art_revisit_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.art_revisit_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_art_and_has_tb",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.started_art_and_has_tb)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "current_in_care",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.current_in_care)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "active_on_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.active_on_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_ctx_prophylaxis",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.on_ctx_prophylaxis)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "screened_for_tb",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.screened_for_tb)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "tb_screened_this_visit_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.tb_screened_this_visit_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "current_on_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.current_on_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "tb_screened_positive",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.tb_screened_positive)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_ipt",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.started_ipt)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "completed_ipt_past_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.completed_ipt_past_12_months)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "condoms_provided",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.condoms_provided)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.condoms_provided)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.on_modern_contraception)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "f_gte_18_visits",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.f_gte_18_visits)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "scheduled_visits",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.scheduled_visits)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "unscheduled_visits",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.unscheduled_visits)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "total_visits",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.total_visits)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_art_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.is_cross_border_on_art_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_vl_suppressed_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "sum(hmsd.is_cross_border_vl_suppressed_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias:
                    "is_cross_border_active_on_art_12_month_cohort_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "sum(hmsd.is_cross_border_active_on_art_12_month_cohort_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_presumed_tb_positive_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "sum(hmsd.is_cross_border_presumed_tb_positive_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_started_tb_tx_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "sum(hmsd.is_cross_border_started_tb_tx_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.is_cross_border_on_tb_tx_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_completed_tb_tx",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.is_cross_border_completed_tb_tx)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_stopped_tb_tx",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.is_cross_border_stopped_tb_tx)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_transferred_out",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "sum(hmsd.is_cross_border_on_tb_tx_transferred_out)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_ltfu",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.is_cross_border_on_tb_tx_ltfu)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_dead",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.is_cross_border_on_tb_tx_dead)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_modern_contraception_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "sum(hmsd.is_cross_border_on_modern_contraception_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.is_cross_border_country_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_county_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.is_cross_border_county_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_3_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.travelled_outside_last_3_months)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_6_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.travelled_outside_last_6_months)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.travelled_outside_last_12_months)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_kenya",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.is_cross_border_country_kenya)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_uganda",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.is_cross_border_country_uganda)",
                  },
                },
              ],
              groupBy: {
                groupParam: "groupByParam",
                columns: ["location_id"],
                excludeParam: "excludeParam",
              },
              transFormDirectives: {
                joinColumn: "location_id",
                joinColumnParam: "joinColumnParam",
                skipColumns: [
                  "location_uuid",
                  "gender",
                  "age_range",
                  "join_location",
                ],
                disaggregationColumns: [],
              },
              dynamicJsonQueryGenerationDirectives: {
                patientListGenerator: {
                  useTemplate: "patient-list-frozen-template",
                  useTemplateVersion: "1.0",
                  generatingDirectives: {
                    joinDirectives: {
                      joinType: "INNER",
                      joinCondition: "<<base_column>> = <<template_column>>",
                      baseColumn: "person_id",
                      templateColumn: "person_id",
                    },
                  },
                },
              },
            },
          },
          mainDataSetBase: {
            name: "mainDataSetBase",
            version: "1.0",
            tag: "",
            description: "",
            uses: [],
            sources: [
              {
                table: "etl.hiv_monthly_report_dataset_cbb",
                alias: "hmsd",
              },
              {
                table: "amrs.location",
                alias: "l",
                join: {
                  type: "INNER",
                  joinCondition: "l.location_id = hmsd.location_id",
                },
              },
            ],
            columns: [
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "birthdate",
                column: "hmsd.birthdate",
              },
              {
                type: "simple_column",
                alias: "age",
                column: "hmsd.age",
              },
              {
                type: "simple_column",
                alias: "person_id",
                column: "hmsd.person_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "l.uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "l.name",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "cur_arv_meds",
                column: "hmsd.cur_arv_meds",
              },
              {
                type: "derived_column",
                alias: "enrollment_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "arv_first_regimen_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "cur_regimen_arv_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "simple_column",
                alias: "cur_arv_line",
                column: "hmsd.cur_arv_line",
              },
              {
                type: "simple_column",
                alias: "vl_1",
                column: "hmsd.vl_1",
              },
              {
                type: "derived_column",
                alias: "vl_1_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "age_range",
                expressionType: "case_statement",
                expressionOptions: {
                  caseOptions: [
                    {
                      condition: "hmsd.age < 1",
                      value: "0_to_1",
                    },
                    {
                      condition: "hmsd.age between 1 and 9",
                      value: "1_to_9",
                    },
                    {
                      condition: "hmsd.age between 10 and 14",
                      value: "10_to_14",
                    },
                    {
                      condition: "hmsd.age between 15 and 19",
                      value: "15_to_19",
                    },
                    {
                      condition: "hmsd.age between 20 and 24",
                      value: "20_to_24",
                    },
                    {
                      condition: "else",
                      value: "older_than_24",
                    },
                  ],
                },
              },
              {
                type: "simple_column",
                alias: "enrolled_this_month",
                column: "hmsd.enrolled_this_month",
              },
              {
                type: "simple_column",
                alias: "art_revisit_this_month",
                column: "hmsd.art_revisit_this_month",
              },
              {
                type: "simple_column",
                alias: "current_in_care",
                column: "hmsd.active_in_care_this_month",
              },
              {
                type: "simple_column",
                alias: "pre_art",
                column: "hmsd.is_pre_art_this_month",
              },
              {
                type: "simple_column",
                alias: "started_art_pregnant",
                column: "hmsd.is_pregnant_and_started_art_this_month",
              },
              {
                type: "simple_column",
                alias: "started_art_and_has_tb",
                column: "hmsd.on_tb_tx_and_started_art_this_month",
              },
              {
                type: "simple_column",
                alias: "active_on_art",
                column: "hmsd.on_art_this_month",
              },
              {
                type: "simple_column",
                alias: "on_ctx_prophylaxis",
                column: "hmsd.on_pcp_prophylaxis_this_month",
              },
              {
                type: "simple_column",
                alias: "current_on_art",
                column: "hmsd.on_art_this_month",
              },
              {
                type: "simple_column",
                alias: "screened_for_tb",
                column: "hmsd.tb_screened_active_this_month",
              },
              {
                type: "simple_column",
                alias: "tb_screened_this_visit_this_month",
                column: "hmsd.tb_screened_this_visit_this_month",
              },
              {
                type: "simple_column",
                alias: "tb_screened_positive",
                column: "hmsd.presumed_tb_positive_this_month",
              },
              {
                type: "derived_column",
                alias: "screened_for_cervical_ca",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "0",
                },
              },
              {
                type: "simple_column",
                alias: "started_ipt",
                column: "hmsd.started_ipt_this_month",
              },
              {
                type: "derived_column",
                alias: "completed_ipt_past_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "completed_ipt_past_12_months",
                },
              },
              {
                type: "derived_column",
                alias: "condoms_provided",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "condoms_provided_this_month",
                },
              },
              {
                type: "derived_column",
                alias: "started_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "started_modern_contraception_this_month",
                },
              },
              {
                type: "simple_column",
                alias: "on_modern_contraception",
                column: "hmsd.on_modern_contraception_this_month",
              },
              {
                type: "simple_column",
                alias: "scheduled_visits",
                column: "hmsd.scheduled_this_month",
              },
              {
                type: "simple_column",
                alias: "unscheduled_visits",
                column: "hmsd.unscheduled_this_month",
              },
              {
                type: "simple_column",
                alias: "total_visits",
                column: "hmsd.visit_this_month",
              },
              {
                type: "simple_column",
                alias: "f_gte_18_visits",
                column: "hmsd.f_18_and_older_this_month",
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_art_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.art_revisit_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_vl_suppressed_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_suppressed_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias:
                  "is_cross_border_active_on_art_12_month_cohort_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.active_on_art_12_month_cohort_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_presumed_tb_positive_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.presumed_tb_positive_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_started_tb_tx_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.started_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_completed_tb_tx",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_end_date is not null , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_stopped_tb_tx",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_stop_date is not null , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_transferred_out",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'transfer_out' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_ltfu",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and ( status = 'defaulter' or status = 'ltfu'), 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_dead",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'dead', 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_modern_contraception_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_modern_contraception_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_county_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_county_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_3_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.travelled_outside_last_3_months = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_6_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.travelled_outside_last_6_months = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.travelled_outside_last_12_months = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_kenya",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11197, 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_uganda",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11118, 1 , 0)",
                },
              },
            ],
            filters: {
              conditionJoinOperator: "and",
              conditions: [
                {
                  filterType: "tableColumns",
                  conditionExpression: "endDate = ?",
                  parameterName: "endDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression: "hmsd.location_id in ?",
                  parameterName: "locations",
                },
              ],
            },
            default: {
              name: "mainDataSetBase",
              version: "1.0",
              tag: "",
              description: "",
              uses: [],
              sources: [
                {
                  table: "<<hivMonthlyDatasetSource>>",
                  alias: "hmsd",
                },
                {
                  table: "amrs.location",
                  alias: "l",
                  join: {
                    type: "INNER",
                    joinCondition: "l.location_id = hmsd.location_id",
                  },
                },
              ],
              columns: [
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "birthdate",
                  column: "hmsd.birthdate",
                },
                {
                  type: "simple_column",
                  alias: "age",
                  column: "hmsd.age",
                },
                {
                  type: "simple_column",
                  alias: "person_id",
                  column: "hmsd.person_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "l.uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "l.name",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_meds",
                  column: "hmsd.cur_arv_meds",
                },
                {
                  type: "derived_column",
                  alias: "enrollment_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "arv_first_regimen_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "cur_regimen_arv_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_line",
                  column: "hmsd.cur_arv_line",
                },
                {
                  type: "simple_column",
                  alias: "vl_1",
                  column: "hmsd.vl_1",
                },
                {
                  type: "derived_column",
                  alias: "vl_1_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "age_range",
                  expressionType: "case_statement",
                  expressionOptions: {
                    caseOptions: [
                      {
                        condition: "hmsd.age < 1",
                        value: "0_to_1",
                      },
                      {
                        condition: "hmsd.age between 1 and 9",
                        value: "1_to_9",
                      },
                      {
                        condition: "hmsd.age between 10 and 14",
                        value: "10_to_14",
                      },
                      {
                        condition: "hmsd.age between 15 and 19",
                        value: "15_to_19",
                      },
                      {
                        condition: "hmsd.age between 20 and 24",
                        value: "20_to_24",
                      },
                      {
                        condition: "else",
                        value: "older_than_24",
                      },
                    ],
                  },
                },
                {
                  type: "simple_column",
                  alias: "enrolled_this_month",
                  column: "hmsd.enrolled_this_month",
                },
                {
                  type: "simple_column",
                  alias: "art_revisit_this_month",
                  column: "hmsd.art_revisit_this_month",
                },
                {
                  type: "simple_column",
                  alias: "current_in_care",
                  column: "hmsd.active_in_care_this_month",
                },
                {
                  type: "simple_column",
                  alias: "pre_art",
                  column: "hmsd.is_pre_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "started_art_pregnant",
                  column: "hmsd.is_pregnant_and_started_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "started_art_and_has_tb",
                  column: "hmsd.on_tb_tx_and_started_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "active_on_art",
                  column: "hmsd.on_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "on_ctx_prophylaxis",
                  column: "hmsd.on_pcp_prophylaxis_this_month",
                },
                {
                  type: "simple_column",
                  alias: "current_on_art",
                  column: "hmsd.on_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "screened_for_tb",
                  column: "hmsd.tb_screened_active_this_month",
                },
                {
                  type: "simple_column",
                  alias: "tb_screened_this_visit_this_month",
                  column: "hmsd.tb_screened_this_visit_this_month",
                },
                {
                  type: "simple_column",
                  alias: "tb_screened_positive",
                  column: "hmsd.presumed_tb_positive_this_month",
                },
                {
                  type: "derived_column",
                  alias: "screened_for_cervical_ca",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "0",
                  },
                },
                {
                  type: "simple_column",
                  alias: "started_ipt",
                  column: "hmsd.started_ipt_this_month",
                },
                {
                  type: "derived_column",
                  alias: "completed_ipt_past_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "completed_ipt_past_12_months",
                  },
                },
                {
                  type: "derived_column",
                  alias: "condoms_provided",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "condoms_provided_this_month",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "started_modern_contraception_this_month",
                  },
                },
                {
                  type: "simple_column",
                  alias: "on_modern_contraception",
                  column: "hmsd.on_modern_contraception_this_month",
                },
                {
                  type: "simple_column",
                  alias: "scheduled_visits",
                  column: "hmsd.scheduled_this_month",
                },
                {
                  type: "simple_column",
                  alias: "unscheduled_visits",
                  column: "hmsd.unscheduled_this_month",
                },
                {
                  type: "simple_column",
                  alias: "total_visits",
                  column: "hmsd.visit_this_month",
                },
                {
                  type: "simple_column",
                  alias: "f_gte_18_visits",
                  column: "hmsd.f_18_and_older_this_month",
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_art_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.art_revisit_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_vl_suppressed_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_suppressed_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias:
                    "is_cross_border_active_on_art_12_month_cohort_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.active_on_art_12_month_cohort_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_presumed_tb_positive_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.presumed_tb_positive_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_started_tb_tx_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.started_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_completed_tb_tx",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_end_date is not null , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_stopped_tb_tx",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_stop_date is not null , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_transferred_out",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'transfer_out' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_ltfu",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and ( status = 'defaulter' or status = 'ltfu'), 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_dead",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'dead', 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_modern_contraception_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_modern_contraception_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_county_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_county_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_3_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.travelled_outside_last_3_months = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_6_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.travelled_outside_last_6_months = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.travelled_outside_last_12_months = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_kenya",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11197, 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_uganda",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11118, 1 , 0)",
                  },
                },
              ],
              filters: {
                conditionJoinOperator: "and",
                conditions: [
                  {
                    filterType: "tableColumns",
                    conditionExpression: "endDate = ?",
                    parameterName: "endDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression: "hmsd.location_id in ?",
                    parameterName: "locations",
                  },
                ],
              },
            },
          },
        },
        sqlQuery:
          "SELECT 1 AS `join_location`, hmsd.location_uuid AS `location_uuid`, hmsd.location AS `location`, hmsd.gender AS `gender`, hmsd.location_id AS `location_id`, hmsd.age_range AS `age_range`, sum(hmsd.enrolled_this_month) AS `enrolled_this_month`, sum(hmsd.pre_art) AS `pre_art`, sum(hmsd.started_art_pregnant) AS `started_art_pregnant`, sum(hmsd.art_revisit_this_month) AS `art_revisit_this_month`, sum(hmsd.started_art_and_has_tb) AS `started_art_and_has_tb`, sum(hmsd.current_in_care) AS `current_in_care`, sum(hmsd.active_on_art) AS `active_on_art`, sum(hmsd.on_ctx_prophylaxis) AS `on_ctx_prophylaxis`, sum(hmsd.screened_for_tb) AS `screened_for_tb`, sum(hmsd.tb_screened_this_visit_this_month) AS `tb_screened_this_visit_this_month`, sum(hmsd.current_on_art) AS `current_on_art`, sum(hmsd.tb_screened_positive) AS `tb_screened_positive`, sum(hmsd.started_ipt) AS `started_ipt`, sum(hmsd.completed_ipt_past_12_months) AS `completed_ipt_past_12_months`, sum(hmsd.condoms_provided) AS `condoms_provided`, sum(hmsd.condoms_provided) AS `started_modern_contraception`, sum(hmsd.on_modern_contraception) AS `on_modern_contraception`, sum(hmsd.f_gte_18_visits) AS `f_gte_18_visits`, sum(hmsd.scheduled_visits) AS `scheduled_visits`, sum(hmsd.unscheduled_visits) AS `unscheduled_visits`, sum(hmsd.total_visits) AS `total_visits`, sum(hmsd.is_cross_border_on_art_this_month) AS `is_cross_border_on_art_this_month`, sum(hmsd.is_cross_border_vl_suppressed_this_month) AS `is_cross_border_vl_suppressed_this_month`, sum(hmsd.is_cross_border_active_on_art_12_month_cohort_this_month) AS `is_cross_border_active_on_art_12_month_cohort_this_month`, sum(hmsd.is_cross_border_presumed_tb_positive_this_month) AS `is_cross_border_presumed_tb_positive_this_month`, sum(hmsd.is_cross_border_started_tb_tx_this_month) AS `is_cross_border_started_tb_tx_this_month`, sum(hmsd.is_cross_border_on_tb_tx_this_month) AS `is_cross_border_on_tb_tx_this_month`, sum(hmsd.is_cross_border_completed_tb_tx) AS `is_cross_border_completed_tb_tx`, sum(hmsd.is_cross_border_stopped_tb_tx) AS `is_cross_border_stopped_tb_tx`, sum(hmsd.is_cross_border_on_tb_tx_transferred_out) AS `is_cross_border_on_tb_tx_transferred_out`, sum(hmsd.is_cross_border_on_tb_tx_ltfu) AS `is_cross_border_on_tb_tx_ltfu`, sum(hmsd.is_cross_border_on_tb_tx_dead) AS `is_cross_border_on_tb_tx_dead`, sum(hmsd.is_cross_border_on_modern_contraception_this_month) AS `is_cross_border_on_modern_contraception_this_month`, sum(hmsd.is_cross_border_country_this_month) AS `is_cross_border_country_this_month`, sum(hmsd.is_cross_border_county_this_month) AS `is_cross_border_county_this_month`, sum(hmsd.travelled_outside_last_3_months) AS `travelled_outside_last_3_months`, sum(hmsd.travelled_outside_last_6_months) AS `travelled_outside_last_6_months`, sum(hmsd.travelled_outside_last_12_months) AS `travelled_outside_last_12_months`, sum(hmsd.is_cross_border_country_kenya) AS `is_cross_border_country_kenya`, sum(hmsd.is_cross_border_country_uganda) AS `is_cross_border_country_uganda` FROM (SELECT hmsd.gender AS `gender`, hmsd.birthdate AS `birthdate`, hmsd.age AS `age`, hmsd.person_id AS `person_id`, l.uuid AS `location_uuid`, l.name AS `location`, hmsd.location_id AS `location_id`, hmsd.cur_arv_meds AS `cur_arv_meds`, date_format(hmsd.enrollment_date,'%d-%m-%Y') AS `enrollment_date`, date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y') AS `arv_first_regimen_start_date`, date_format(hmsd.arv_start_date,'%d-%m-%Y') AS `cur_regimen_arv_start_date`, hmsd.cur_arv_line AS `cur_arv_line`, hmsd.vl_1 AS `vl_1`, date_format(hmsd.vl_1_date,'%d-%m-%Y') AS `vl_1_date`, CASE WHEN (hmsd.age between 20 and 24) THEN '20_to_24' WHEN (hmsd.age between 15 and 19) THEN '15_to_19' WHEN (hmsd.age between 10 and 14) THEN '10_to_14' WHEN (hmsd.age between 1 and 9) THEN '1_to_9' WHEN (hmsd.age < 1) THEN '0_to_1' ELSE 'older_than_24' END AS `age_range`, hmsd.enrolled_this_month AS `enrolled_this_month`, hmsd.art_revisit_this_month AS `art_revisit_this_month`, hmsd.active_in_care_this_month AS `current_in_care`, hmsd.is_pre_art_this_month AS `pre_art`, hmsd.is_pregnant_and_started_art_this_month AS `started_art_pregnant`, hmsd.on_tb_tx_and_started_art_this_month AS `started_art_and_has_tb`, hmsd.on_art_this_month AS `active_on_art`, hmsd.on_pcp_prophylaxis_this_month AS `on_ctx_prophylaxis`, hmsd.on_art_this_month AS `current_on_art`, hmsd.tb_screened_active_this_month AS `screened_for_tb`, hmsd.tb_screened_this_visit_this_month AS `tb_screened_this_visit_this_month`, hmsd.presumed_tb_positive_this_month AS `tb_screened_positive`, 0 AS `screened_for_cervical_ca`, hmsd.started_ipt_this_month AS `started_ipt`, completed_ipt_past_12_months AS `completed_ipt_past_12_months`, condoms_provided_this_month AS `condoms_provided`, started_modern_contraception_this_month AS `started_modern_contraception`, hmsd.on_modern_contraception_this_month AS `on_modern_contraception`, hmsd.scheduled_this_month AS `scheduled_visits`, hmsd.unscheduled_this_month AS `unscheduled_visits`, hmsd.visit_this_month AS `total_visits`, hmsd.f_18_and_older_this_month AS `f_gte_18_visits`, IF(hmsd.art_revisit_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_on_art_this_month`, IF(hmsd.is_suppressed_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_vl_suppressed_this_month`, IF(hmsd.active_on_art_12_month_cohort_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_active_on_art_12_month_cohort_this_month`, IF(hmsd.presumed_tb_positive_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_presumed_tb_positive_this_month`, IF(hmsd.started_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_started_tb_tx_this_month`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'active' , 1 , 0) AS `is_cross_border_on_tb_tx_this_month`, IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_end_date is not null , 1 , 0) AS `is_cross_border_completed_tb_tx`, IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_stop_date is not null , 1 , 0) AS `is_cross_border_stopped_tb_tx`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'transfer_out' , 1 , 0) AS `is_cross_border_on_tb_tx_transferred_out`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and ( status = 'defaulter' or status = 'ltfu'), 1 , 0) AS `is_cross_border_on_tb_tx_ltfu`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'dead', 1 , 0) AS `is_cross_border_on_tb_tx_dead`, IF(hmsd.on_modern_contraception_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_on_modern_contraception_this_month`, IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' , 1 , 0) AS `is_cross_border_country_this_month`, IF(hmsd.is_cross_border_county_this_month = 1 and hmsd.status = 'active' , 1 , 0) AS `is_cross_border_county_this_month`, IF(hmsd.travelled_outside_last_3_months = 1 and hmsd.status = 'active' , 1 , 0) AS `travelled_outside_last_3_months`, IF(hmsd.travelled_outside_last_6_months = 1 and hmsd.status = 'active' , 1 , 0) AS `travelled_outside_last_6_months`, IF(hmsd.travelled_outside_last_12_months = 1 and hmsd.status = 'active' , 1 , 0) AS `travelled_outside_last_12_months`, IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11197, 1 , 0) AS `is_cross_border_country_kenya`, IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11118, 1 , 0) AS `is_cross_border_country_uganda` FROM etl.hiv_monthly_report_dataset_cbb `hmsd` INNER JOIN amrs.location `l` ON (l.location_id = hmsd.location_id) WHERE (endDate = '2020-09-30') AND (hmsd.location_id in (19))) `hmsd` GROUP BY location_id",
        results: {
          results: [
            {
              join_location: 1,
              location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
              location: "Busia",
              gender: "F",
              location_id: 19,
              age_range: "10_to_14",
              enrolled_this_month: 18,
              pre_art: 0,
              started_art_pregnant: 0,
              art_revisit_this_month: 5545,
              started_art_and_has_tb: 0,
              current_in_care: 5566,
              active_on_art: 5563,
              on_ctx_prophylaxis: 4727,
              screened_for_tb: 5092,
              tb_screened_this_visit_this_month: 738,
              current_on_art: 5563,
              tb_screened_positive: 1,
              started_ipt: 12,
              completed_ipt_past_12_months: 1566,
              condoms_provided: 324,
              started_modern_contraception: 324,
              on_modern_contraception: 1399,
              f_gte_18_visits: 489,
              scheduled_visits: 421,
              unscheduled_visits: 447,
              total_visits: 891,
              is_cross_border_on_art_this_month: 2,
              is_cross_border_vl_suppressed_this_month: 0,
              is_cross_border_active_on_art_12_month_cohort_this_month: 0,
              is_cross_border_presumed_tb_positive_this_month: 1,
              is_cross_border_started_tb_tx_this_month: 2,
              is_cross_border_on_tb_tx_this_month: 2,
              is_cross_border_completed_tb_tx: 1,
              is_cross_border_stopped_tb_tx: 0,
              is_cross_border_on_tb_tx_transferred_out: 0,
              is_cross_border_on_tb_tx_ltfu: 0,
              is_cross_border_on_tb_tx_dead: 0,
              is_cross_border_on_modern_contraception_this_month: 1,
              is_cross_border_country_this_month: 3,
              is_cross_border_county_this_month: 0,
              travelled_outside_last_3_months: 3,
              travelled_outside_last_6_months: 3,
              travelled_outside_last_12_months: 3,
              is_cross_border_country_kenya: 1,
              is_cross_border_country_uganda: 2,
            },
          ],
        },
      },
    },
    {
      report: {
        reportName: "mainDatasetAggregateAgeDisaggregation",
        params: {
          endDate: "2020-09-30",
          startDate: "2020-09-01",
          reportName: "MOH-731-report-2017",
          locationUuids: ["08fec60a-1352-11df-a1f1-0026b9348838"],
          isAggregated: false,
          locations: [19],
          referenceDate: "2020-09-14",
          startAge: 0,
          endAge: 150,
          gender: ["M", "F"],
          genders: ["M", "F"],
          hivMonthlyDatasetSource: "etl.hiv_monthly_report_dataset_cbb",
        },
        reportSchemas: {
          main: {
            name: "mainDatasetAggregateAgeDisaggregation",
            version: "1.0",
            tag: "",
            description: "",
            uses: [
              {
                name: "mainDataSetBase",
                version: "1.0",
                type: "dataset_def",
              },
            ],
            sources: [
              {
                dataSet: "mainDataSetBase",
                alias: "hmsd",
              },
            ],
            columns: [
              {
                type: "derived_column",
                alias: "current_on_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.current_on_art)",
                },
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "hmsd.location_uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "hmsd.location",
              },
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "age_range",
                column: "hmsd.age_range",
              },
              {
                type: "derived_column",
                alias: "enrolled_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.enrolled_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "join_location",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "1",
                },
              },
              {
                type: "derived_column",
                alias: "pre_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.pre_art)",
                },
              },
              {
                type: "derived_column",
                alias: "current_in_care",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.current_in_care)",
                },
              },
              {
                type: "derived_column",
                alias: "active_on_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.active_on_art)",
                },
              },
              {
                type: "derived_column",
                alias: "on_ctx_prophylaxis",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.on_ctx_prophylaxis)",
                },
              },
              {
                type: "derived_column",
                alias: "screened_for_tb",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.screened_for_tb)",
                },
              },
              {
                type: "derived_column",
                alias: "tb_screened_this_visit_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.tb_screened_this_visit_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "tb_screened_positive",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.tb_screened_positive)",
                },
              },
              {
                type: "derived_column",
                alias: "tb_screened_positive",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.tb_screened_positive)",
                },
              },
              {
                type: "derived_column",
                alias: "started_ipt",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.started_ipt)",
                },
              },
              {
                type: "derived_column",
                alias: "completed_ipt_past_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.completed_ipt_past_12_months)",
                },
              },
              {
                type: "derived_column",
                alias: "condoms_provided",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.condoms_provided)",
                },
              },
              {
                type: "derived_column",
                alias: "started_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.condoms_provided)",
                },
              },
              {
                type: "derived_column",
                alias: "on_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.on_modern_contraception)",
                },
              },
              {
                type: "derived_column",
                alias: "f_gte_18_visits",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.f_gte_18_visits)",
                },
              },
            ],
            groupBy: {
              groupParam: "groupByParam",
              columns: ["age_range", "location_id"],
              excludeParam: "excludeParam",
            },
            transFormDirectives: {
              joinColumn: "location_id",
              skipColumns: ["location_uuid", "gender", "join_location"],
              joinColumnParam: "joinColumnParam",
              disaggregationColumns: ["age_range"],
            },
            dynamicJsonQueryGenerationDirectives: {
              patientListGenerator: {
                useTemplate: "patient-list-frozen-template",
                useTemplateVersion: "1.0",
                generatingDirectives: {
                  joinDirectives: {
                    joinType: "INNER",
                    joinCondition: "<<base_column>> = <<template_column>>",
                    baseColumn: "person_id",
                    templateColumn: "person_id",
                  },
                },
              },
            },
            default: {
              name: "mainDatasetAggregateAgeDisaggregation",
              version: "1.0",
              tag: "",
              description: "",
              uses: [
                {
                  name: "mainDataSetBase",
                  version: "1.0",
                  type: "dataset_def",
                },
              ],
              sources: [
                {
                  dataSet: "mainDataSetBase",
                  alias: "hmsd",
                },
              ],
              columns: [
                {
                  type: "derived_column",
                  alias: "current_on_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.current_on_art)",
                  },
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "hmsd.location_uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "hmsd.location",
                },
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "age_range",
                  column: "hmsd.age_range",
                },
                {
                  type: "derived_column",
                  alias: "enrolled_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.enrolled_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "join_location",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "1",
                  },
                },
                {
                  type: "derived_column",
                  alias: "pre_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.pre_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "current_in_care",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.current_in_care)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "active_on_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.active_on_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_ctx_prophylaxis",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.on_ctx_prophylaxis)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "screened_for_tb",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.screened_for_tb)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "tb_screened_this_visit_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.tb_screened_this_visit_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "tb_screened_positive",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.tb_screened_positive)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "tb_screened_positive",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.tb_screened_positive)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_ipt",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.started_ipt)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "completed_ipt_past_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.completed_ipt_past_12_months)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "condoms_provided",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.condoms_provided)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.condoms_provided)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.on_modern_contraception)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "f_gte_18_visits",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.f_gte_18_visits)",
                  },
                },
              ],
              groupBy: {
                groupParam: "groupByParam",
                columns: ["age_range", "location_id"],
                excludeParam: "excludeParam",
              },
              transFormDirectives: {
                joinColumn: "location_id",
                skipColumns: ["location_uuid", "gender", "join_location"],
                joinColumnParam: "joinColumnParam",
                disaggregationColumns: ["age_range"],
              },
              dynamicJsonQueryGenerationDirectives: {
                patientListGenerator: {
                  useTemplate: "patient-list-frozen-template",
                  useTemplateVersion: "1.0",
                  generatingDirectives: {
                    joinDirectives: {
                      joinType: "INNER",
                      joinCondition: "<<base_column>> = <<template_column>>",
                      baseColumn: "person_id",
                      templateColumn: "person_id",
                    },
                  },
                },
              },
            },
          },
          mainDataSetBase: {
            name: "mainDataSetBase",
            version: "1.0",
            tag: "",
            description: "",
            uses: [],
            sources: [
              {
                table: "etl.hiv_monthly_report_dataset_cbb",
                alias: "hmsd",
              },
              {
                table: "amrs.location",
                alias: "l",
                join: {
                  type: "INNER",
                  joinCondition: "l.location_id = hmsd.location_id",
                },
              },
            ],
            columns: [
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "birthdate",
                column: "hmsd.birthdate",
              },
              {
                type: "simple_column",
                alias: "age",
                column: "hmsd.age",
              },
              {
                type: "simple_column",
                alias: "person_id",
                column: "hmsd.person_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "l.uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "l.name",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "cur_arv_meds",
                column: "hmsd.cur_arv_meds",
              },
              {
                type: "derived_column",
                alias: "enrollment_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "arv_first_regimen_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "cur_regimen_arv_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "simple_column",
                alias: "cur_arv_line",
                column: "hmsd.cur_arv_line",
              },
              {
                type: "simple_column",
                alias: "vl_1",
                column: "hmsd.vl_1",
              },
              {
                type: "derived_column",
                alias: "vl_1_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "age_range",
                expressionType: "case_statement",
                expressionOptions: {
                  caseOptions: [
                    {
                      condition: "hmsd.age < 1",
                      value: "0_to_1",
                    },
                    {
                      condition: "hmsd.age between 1 and 9",
                      value: "1_to_9",
                    },
                    {
                      condition: "hmsd.age between 10 and 14",
                      value: "10_to_14",
                    },
                    {
                      condition: "hmsd.age between 15 and 19",
                      value: "15_to_19",
                    },
                    {
                      condition: "hmsd.age between 20 and 24",
                      value: "20_to_24",
                    },
                    {
                      condition: "else",
                      value: "older_than_24",
                    },
                  ],
                },
              },
              {
                type: "simple_column",
                alias: "enrolled_this_month",
                column: "hmsd.enrolled_this_month",
              },
              {
                type: "simple_column",
                alias: "art_revisit_this_month",
                column: "hmsd.art_revisit_this_month",
              },
              {
                type: "simple_column",
                alias: "current_in_care",
                column: "hmsd.active_in_care_this_month",
              },
              {
                type: "simple_column",
                alias: "pre_art",
                column: "hmsd.is_pre_art_this_month",
              },
              {
                type: "simple_column",
                alias: "started_art_pregnant",
                column: "hmsd.is_pregnant_and_started_art_this_month",
              },
              {
                type: "simple_column",
                alias: "started_art_and_has_tb",
                column: "hmsd.on_tb_tx_and_started_art_this_month",
              },
              {
                type: "simple_column",
                alias: "active_on_art",
                column: "hmsd.on_art_this_month",
              },
              {
                type: "simple_column",
                alias: "on_ctx_prophylaxis",
                column: "hmsd.on_pcp_prophylaxis_this_month",
              },
              {
                type: "simple_column",
                alias: "current_on_art",
                column: "hmsd.on_art_this_month",
              },
              {
                type: "simple_column",
                alias: "screened_for_tb",
                column: "hmsd.tb_screened_active_this_month",
              },
              {
                type: "simple_column",
                alias: "tb_screened_this_visit_this_month",
                column: "hmsd.tb_screened_this_visit_this_month",
              },
              {
                type: "simple_column",
                alias: "tb_screened_positive",
                column: "hmsd.presumed_tb_positive_this_month",
              },
              {
                type: "derived_column",
                alias: "screened_for_cervical_ca",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "0",
                },
              },
              {
                type: "simple_column",
                alias: "started_ipt",
                column: "hmsd.started_ipt_this_month",
              },
              {
                type: "derived_column",
                alias: "completed_ipt_past_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "completed_ipt_past_12_months",
                },
              },
              {
                type: "derived_column",
                alias: "condoms_provided",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "condoms_provided_this_month",
                },
              },
              {
                type: "derived_column",
                alias: "started_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "started_modern_contraception_this_month",
                },
              },
              {
                type: "simple_column",
                alias: "on_modern_contraception",
                column: "hmsd.on_modern_contraception_this_month",
              },
              {
                type: "simple_column",
                alias: "scheduled_visits",
                column: "hmsd.scheduled_this_month",
              },
              {
                type: "simple_column",
                alias: "unscheduled_visits",
                column: "hmsd.unscheduled_this_month",
              },
              {
                type: "simple_column",
                alias: "total_visits",
                column: "hmsd.visit_this_month",
              },
              {
                type: "simple_column",
                alias: "f_gte_18_visits",
                column: "hmsd.f_18_and_older_this_month",
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_art_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.art_revisit_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_vl_suppressed_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_suppressed_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias:
                  "is_cross_border_active_on_art_12_month_cohort_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.active_on_art_12_month_cohort_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_presumed_tb_positive_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.presumed_tb_positive_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_started_tb_tx_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.started_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_completed_tb_tx",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_end_date is not null , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_stopped_tb_tx",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_stop_date is not null , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_transferred_out",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'transfer_out' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_ltfu",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and ( status = 'defaulter' or status = 'ltfu'), 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_dead",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'dead', 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_modern_contraception_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_modern_contraception_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_county_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_county_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_3_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.travelled_outside_last_3_months = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_6_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.travelled_outside_last_6_months = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.travelled_outside_last_12_months = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_kenya",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11197, 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_uganda",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11118, 1 , 0)",
                },
              },
            ],
            filters: {
              conditionJoinOperator: "and",
              conditions: [
                {
                  filterType: "tableColumns",
                  conditionExpression: "endDate = ?",
                  parameterName: "endDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression: "hmsd.location_id in ?",
                  parameterName: "locations",
                },
              ],
            },
            default: {
              name: "mainDataSetBase",
              version: "1.0",
              tag: "",
              description: "",
              uses: [],
              sources: [
                {
                  table: "<<hivMonthlyDatasetSource>>",
                  alias: "hmsd",
                },
                {
                  table: "amrs.location",
                  alias: "l",
                  join: {
                    type: "INNER",
                    joinCondition: "l.location_id = hmsd.location_id",
                  },
                },
              ],
              columns: [
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "birthdate",
                  column: "hmsd.birthdate",
                },
                {
                  type: "simple_column",
                  alias: "age",
                  column: "hmsd.age",
                },
                {
                  type: "simple_column",
                  alias: "person_id",
                  column: "hmsd.person_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "l.uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "l.name",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_meds",
                  column: "hmsd.cur_arv_meds",
                },
                {
                  type: "derived_column",
                  alias: "enrollment_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "arv_first_regimen_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "cur_regimen_arv_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_line",
                  column: "hmsd.cur_arv_line",
                },
                {
                  type: "simple_column",
                  alias: "vl_1",
                  column: "hmsd.vl_1",
                },
                {
                  type: "derived_column",
                  alias: "vl_1_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "age_range",
                  expressionType: "case_statement",
                  expressionOptions: {
                    caseOptions: [
                      {
                        condition: "hmsd.age < 1",
                        value: "0_to_1",
                      },
                      {
                        condition: "hmsd.age between 1 and 9",
                        value: "1_to_9",
                      },
                      {
                        condition: "hmsd.age between 10 and 14",
                        value: "10_to_14",
                      },
                      {
                        condition: "hmsd.age between 15 and 19",
                        value: "15_to_19",
                      },
                      {
                        condition: "hmsd.age between 20 and 24",
                        value: "20_to_24",
                      },
                      {
                        condition: "else",
                        value: "older_than_24",
                      },
                    ],
                  },
                },
                {
                  type: "simple_column",
                  alias: "enrolled_this_month",
                  column: "hmsd.enrolled_this_month",
                },
                {
                  type: "simple_column",
                  alias: "art_revisit_this_month",
                  column: "hmsd.art_revisit_this_month",
                },
                {
                  type: "simple_column",
                  alias: "current_in_care",
                  column: "hmsd.active_in_care_this_month",
                },
                {
                  type: "simple_column",
                  alias: "pre_art",
                  column: "hmsd.is_pre_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "started_art_pregnant",
                  column: "hmsd.is_pregnant_and_started_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "started_art_and_has_tb",
                  column: "hmsd.on_tb_tx_and_started_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "active_on_art",
                  column: "hmsd.on_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "on_ctx_prophylaxis",
                  column: "hmsd.on_pcp_prophylaxis_this_month",
                },
                {
                  type: "simple_column",
                  alias: "current_on_art",
                  column: "hmsd.on_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "screened_for_tb",
                  column: "hmsd.tb_screened_active_this_month",
                },
                {
                  type: "simple_column",
                  alias: "tb_screened_this_visit_this_month",
                  column: "hmsd.tb_screened_this_visit_this_month",
                },
                {
                  type: "simple_column",
                  alias: "tb_screened_positive",
                  column: "hmsd.presumed_tb_positive_this_month",
                },
                {
                  type: "derived_column",
                  alias: "screened_for_cervical_ca",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "0",
                  },
                },
                {
                  type: "simple_column",
                  alias: "started_ipt",
                  column: "hmsd.started_ipt_this_month",
                },
                {
                  type: "derived_column",
                  alias: "completed_ipt_past_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "completed_ipt_past_12_months",
                  },
                },
                {
                  type: "derived_column",
                  alias: "condoms_provided",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "condoms_provided_this_month",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "started_modern_contraception_this_month",
                  },
                },
                {
                  type: "simple_column",
                  alias: "on_modern_contraception",
                  column: "hmsd.on_modern_contraception_this_month",
                },
                {
                  type: "simple_column",
                  alias: "scheduled_visits",
                  column: "hmsd.scheduled_this_month",
                },
                {
                  type: "simple_column",
                  alias: "unscheduled_visits",
                  column: "hmsd.unscheduled_this_month",
                },
                {
                  type: "simple_column",
                  alias: "total_visits",
                  column: "hmsd.visit_this_month",
                },
                {
                  type: "simple_column",
                  alias: "f_gte_18_visits",
                  column: "hmsd.f_18_and_older_this_month",
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_art_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.art_revisit_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_vl_suppressed_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_suppressed_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias:
                    "is_cross_border_active_on_art_12_month_cohort_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.active_on_art_12_month_cohort_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_presumed_tb_positive_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.presumed_tb_positive_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_started_tb_tx_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.started_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_completed_tb_tx",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_end_date is not null , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_stopped_tb_tx",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_stop_date is not null , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_transferred_out",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'transfer_out' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_ltfu",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and ( status = 'defaulter' or status = 'ltfu'), 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_dead",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'dead', 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_modern_contraception_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_modern_contraception_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_county_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_county_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_3_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.travelled_outside_last_3_months = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_6_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.travelled_outside_last_6_months = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.travelled_outside_last_12_months = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_kenya",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11197, 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_uganda",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11118, 1 , 0)",
                  },
                },
              ],
              filters: {
                conditionJoinOperator: "and",
                conditions: [
                  {
                    filterType: "tableColumns",
                    conditionExpression: "endDate = ?",
                    parameterName: "endDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression: "hmsd.location_id in ?",
                    parameterName: "locations",
                  },
                ],
              },
            },
          },
        },
        reportQuery:
          "SELECT sum(hmsd.current_on_art) AS `current_on_art`, hmsd.location_uuid AS `location_uuid`, hmsd.location AS `location`, hmsd.gender AS `gender`, hmsd.location_id AS `location_id`, hmsd.age_range AS `age_range`, sum(hmsd.enrolled_this_month) AS `enrolled_this_month`, 1 AS `join_location`, sum(hmsd.pre_art) AS `pre_art`, sum(hmsd.current_in_care) AS `current_in_care`, sum(hmsd.active_on_art) AS `active_on_art`, sum(hmsd.on_ctx_prophylaxis) AS `on_ctx_prophylaxis`, sum(hmsd.screened_for_tb) AS `screened_for_tb`, sum(hmsd.tb_screened_this_visit_this_month) AS `tb_screened_this_visit_this_month`, sum(hmsd.tb_screened_positive) AS `tb_screened_positive`, sum(hmsd.started_ipt) AS `started_ipt`, sum(hmsd.completed_ipt_past_12_months) AS `completed_ipt_past_12_months`, sum(hmsd.condoms_provided) AS `condoms_provided`, sum(hmsd.condoms_provided) AS `started_modern_contraception`, sum(hmsd.on_modern_contraception) AS `on_modern_contraception`, sum(hmsd.f_gte_18_visits) AS `f_gte_18_visits` FROM (SELECT hmsd.gender AS `gender`, hmsd.birthdate AS `birthdate`, hmsd.age AS `age`, hmsd.person_id AS `person_id`, l.uuid AS `location_uuid`, l.name AS `location`, hmsd.location_id AS `location_id`, hmsd.cur_arv_meds AS `cur_arv_meds`, date_format(hmsd.enrollment_date,'%d-%m-%Y') AS `enrollment_date`, date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y') AS `arv_first_regimen_start_date`, date_format(hmsd.arv_start_date,'%d-%m-%Y') AS `cur_regimen_arv_start_date`, hmsd.cur_arv_line AS `cur_arv_line`, hmsd.vl_1 AS `vl_1`, date_format(hmsd.vl_1_date,'%d-%m-%Y') AS `vl_1_date`, CASE WHEN (hmsd.age between 20 and 24) THEN '20_to_24' WHEN (hmsd.age between 15 and 19) THEN '15_to_19' WHEN (hmsd.age between 10 and 14) THEN '10_to_14' WHEN (hmsd.age between 1 and 9) THEN '1_to_9' WHEN (hmsd.age < 1) THEN '0_to_1' ELSE 'older_than_24' END AS `age_range`, hmsd.enrolled_this_month AS `enrolled_this_month`, hmsd.art_revisit_this_month AS `art_revisit_this_month`, hmsd.active_in_care_this_month AS `current_in_care`, hmsd.is_pre_art_this_month AS `pre_art`, hmsd.is_pregnant_and_started_art_this_month AS `started_art_pregnant`, hmsd.on_tb_tx_and_started_art_this_month AS `started_art_and_has_tb`, hmsd.on_art_this_month AS `active_on_art`, hmsd.on_pcp_prophylaxis_this_month AS `on_ctx_prophylaxis`, hmsd.on_art_this_month AS `current_on_art`, hmsd.tb_screened_active_this_month AS `screened_for_tb`, hmsd.tb_screened_this_visit_this_month AS `tb_screened_this_visit_this_month`, hmsd.presumed_tb_positive_this_month AS `tb_screened_positive`, 0 AS `screened_for_cervical_ca`, hmsd.started_ipt_this_month AS `started_ipt`, completed_ipt_past_12_months AS `completed_ipt_past_12_months`, condoms_provided_this_month AS `condoms_provided`, started_modern_contraception_this_month AS `started_modern_contraception`, hmsd.on_modern_contraception_this_month AS `on_modern_contraception`, hmsd.scheduled_this_month AS `scheduled_visits`, hmsd.unscheduled_this_month AS `unscheduled_visits`, hmsd.visit_this_month AS `total_visits`, hmsd.f_18_and_older_this_month AS `f_gte_18_visits`, IF(hmsd.art_revisit_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_on_art_this_month`, IF(hmsd.is_suppressed_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_vl_suppressed_this_month`, IF(hmsd.active_on_art_12_month_cohort_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_active_on_art_12_month_cohort_this_month`, IF(hmsd.presumed_tb_positive_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_presumed_tb_positive_this_month`, IF(hmsd.started_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_started_tb_tx_this_month`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'active' , 1 , 0) AS `is_cross_border_on_tb_tx_this_month`, IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_end_date is not null , 1 , 0) AS `is_cross_border_completed_tb_tx`, IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_stop_date is not null , 1 , 0) AS `is_cross_border_stopped_tb_tx`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'transfer_out' , 1 , 0) AS `is_cross_border_on_tb_tx_transferred_out`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and ( status = 'defaulter' or status = 'ltfu'), 1 , 0) AS `is_cross_border_on_tb_tx_ltfu`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'dead', 1 , 0) AS `is_cross_border_on_tb_tx_dead`, IF(hmsd.on_modern_contraception_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_on_modern_contraception_this_month`, IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' , 1 , 0) AS `is_cross_border_country_this_month`, IF(hmsd.is_cross_border_county_this_month = 1 and hmsd.status = 'active' , 1 , 0) AS `is_cross_border_county_this_month`, IF(hmsd.travelled_outside_last_3_months = 1 and hmsd.status = 'active' , 1 , 0) AS `travelled_outside_last_3_months`, IF(hmsd.travelled_outside_last_6_months = 1 and hmsd.status = 'active' , 1 , 0) AS `travelled_outside_last_6_months`, IF(hmsd.travelled_outside_last_12_months = 1 and hmsd.status = 'active' , 1 , 0) AS `travelled_outside_last_12_months`, IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11197, 1 , 0) AS `is_cross_border_country_kenya`, IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11118, 1 , 0) AS `is_cross_border_country_uganda` FROM etl.hiv_monthly_report_dataset_cbb `hmsd` INNER JOIN amrs.location `l` ON (l.location_id = hmsd.location_id) WHERE (endDate = '2020-09-30') AND (hmsd.location_id in (19))) `hmsd` GROUP BY age_range, location_id",
        queryResults: {
          results: [
            {
              dc__age_range__10_to_14__current_on_art: 144,
              location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
              location: "Busia",
              gender: "F",
              location_id: 19,
              dc__age_range__10_to_14__enrolled_this_month: 0,
              join_location: 1,
              dc__age_range__10_to_14__pre_art: 0,
              dc__age_range__10_to_14__current_in_care: 144,
              dc__age_range__10_to_14__active_on_art: 144,
              dc__age_range__10_to_14__on_ctx_prophylaxis: 86,
              dc__age_range__10_to_14__screened_for_tb: 141,
              dc__age_range__10_to_14__tb_screened_this_visit_this_month: 48,
              dc__age_range__10_to_14__tb_screened_positive: 1,
              dc__age_range__10_to_14__started_ipt: 1,
              dc__age_range__10_to_14__completed_ipt_past_12_months: 69,
              dc__age_range__10_to_14__condoms_provided: 0,
              dc__age_range__10_to_14__started_modern_contraception: 0,
              dc__age_range__10_to_14__on_modern_contraception: 0,
              dc__age_range__10_to_14__f_gte_18_visits: 0,
              dc__age_range__15_to_19__current_on_art: 177,
              dc__age_range__15_to_19__enrolled_this_month: 1,
              dc__age_range__15_to_19__pre_art: 0,
              dc__age_range__15_to_19__current_in_care: 178,
              dc__age_range__15_to_19__active_on_art: 177,
              dc__age_range__15_to_19__on_ctx_prophylaxis: 118,
              dc__age_range__15_to_19__screened_for_tb: 167,
              dc__age_range__15_to_19__tb_screened_this_visit_this_month: 56,
              dc__age_range__15_to_19__tb_screened_positive: 0,
              dc__age_range__15_to_19__started_ipt: 0,
              dc__age_range__15_to_19__completed_ipt_past_12_months: 71,
              dc__age_range__15_to_19__condoms_provided: 0,
              dc__age_range__15_to_19__started_modern_contraception: 0,
              dc__age_range__15_to_19__on_modern_contraception: 1,
              dc__age_range__15_to_19__f_gte_18_visits: 7,
              dc__age_range__1_to_9__current_on_art: 92,
              dc__age_range__1_to_9__enrolled_this_month: 0,
              dc__age_range__1_to_9__pre_art: 0,
              dc__age_range__1_to_9__current_in_care: 92,
              dc__age_range__1_to_9__active_on_art: 92,
              dc__age_range__1_to_9__on_ctx_prophylaxis: 61,
              dc__age_range__1_to_9__screened_for_tb: 89,
              dc__age_range__1_to_9__tb_screened_this_visit_this_month: 21,
              dc__age_range__1_to_9__tb_screened_positive: 0,
              dc__age_range__1_to_9__started_ipt: 1,
              dc__age_range__1_to_9__completed_ipt_past_12_months: 42,
              dc__age_range__1_to_9__condoms_provided: 0,
              dc__age_range__1_to_9__started_modern_contraception: 0,
              dc__age_range__1_to_9__on_modern_contraception: 0,
              dc__age_range__1_to_9__f_gte_18_visits: 0,
              dc__age_range__20_to_24__current_on_art: 150,
              dc__age_range__20_to_24__enrolled_this_month: 0,
              dc__age_range__20_to_24__pre_art: 0,
              dc__age_range__20_to_24__current_in_care: 150,
              dc__age_range__20_to_24__active_on_art: 150,
              dc__age_range__20_to_24__on_ctx_prophylaxis: 124,
              dc__age_range__20_to_24__screened_for_tb: 136,
              dc__age_range__20_to_24__tb_screened_this_visit_this_month: 28,
              dc__age_range__20_to_24__tb_screened_positive: 0,
              dc__age_range__20_to_24__started_ipt: 0,
              dc__age_range__20_to_24__completed_ipt_past_12_months: 53,
              dc__age_range__20_to_24__condoms_provided: 11,
              dc__age_range__20_to_24__started_modern_contraception: 11,
              dc__age_range__20_to_24__on_modern_contraception: 21,
              dc__age_range__20_to_24__f_gte_18_visits: 14,
              dc__age_range__older_than_24__current_on_art: 5000,
              dc__age_range__older_than_24__enrolled_this_month: 17,
              dc__age_range__older_than_24__pre_art: 0,
              dc__age_range__older_than_24__current_in_care: 5002,
              dc__age_range__older_than_24__active_on_art: 5000,
              dc__age_range__older_than_24__on_ctx_prophylaxis: 4338,
              dc__age_range__older_than_24__screened_for_tb: 4559,
              dc__age_range__older_than_24__tb_screened_this_visit_this_month: 585,
              dc__age_range__older_than_24__tb_screened_positive: 0,
              dc__age_range__older_than_24__started_ipt: 10,
              dc__age_range__older_than_24__completed_ipt_past_12_months: 1331,
              dc__age_range__older_than_24__condoms_provided: 313,
              dc__age_range__older_than_24__started_modern_contraception: 313,
              dc__age_range__older_than_24__on_modern_contraception: 1377,
              dc__age_range__older_than_24__f_gte_18_visits: 468,
            },
          ],
        },
      },
      results: {
        schemas: {
          main: {
            name: "mainDatasetAggregateAgeDisaggregation",
            version: "1.0",
            tag: "",
            description: "",
            uses: [
              {
                name: "mainDataSetBase",
                version: "1.0",
                type: "dataset_def",
              },
            ],
            sources: [
              {
                dataSet: "mainDataSetBase",
                alias: "hmsd",
              },
            ],
            columns: [
              {
                type: "derived_column",
                alias: "current_on_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.current_on_art)",
                },
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "hmsd.location_uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "hmsd.location",
              },
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "age_range",
                column: "hmsd.age_range",
              },
              {
                type: "derived_column",
                alias: "enrolled_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.enrolled_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "join_location",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "1",
                },
              },
              {
                type: "derived_column",
                alias: "pre_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.pre_art)",
                },
              },
              {
                type: "derived_column",
                alias: "current_in_care",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.current_in_care)",
                },
              },
              {
                type: "derived_column",
                alias: "active_on_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.active_on_art)",
                },
              },
              {
                type: "derived_column",
                alias: "on_ctx_prophylaxis",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.on_ctx_prophylaxis)",
                },
              },
              {
                type: "derived_column",
                alias: "screened_for_tb",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.screened_for_tb)",
                },
              },
              {
                type: "derived_column",
                alias: "tb_screened_this_visit_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.tb_screened_this_visit_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "tb_screened_positive",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.tb_screened_positive)",
                },
              },
              {
                type: "derived_column",
                alias: "tb_screened_positive",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.tb_screened_positive)",
                },
              },
              {
                type: "derived_column",
                alias: "started_ipt",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.started_ipt)",
                },
              },
              {
                type: "derived_column",
                alias: "completed_ipt_past_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.completed_ipt_past_12_months)",
                },
              },
              {
                type: "derived_column",
                alias: "condoms_provided",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.condoms_provided)",
                },
              },
              {
                type: "derived_column",
                alias: "started_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.condoms_provided)",
                },
              },
              {
                type: "derived_column",
                alias: "on_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.on_modern_contraception)",
                },
              },
              {
                type: "derived_column",
                alias: "f_gte_18_visits",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.f_gte_18_visits)",
                },
              },
            ],
            groupBy: {
              groupParam: "groupByParam",
              columns: ["age_range", "location_id"],
              excludeParam: "excludeParam",
            },
            transFormDirectives: {
              joinColumn: "location_id",
              skipColumns: ["location_uuid", "gender", "join_location"],
              joinColumnParam: "joinColumnParam",
              disaggregationColumns: ["age_range"],
            },
            dynamicJsonQueryGenerationDirectives: {
              patientListGenerator: {
                useTemplate: "patient-list-frozen-template",
                useTemplateVersion: "1.0",
                generatingDirectives: {
                  joinDirectives: {
                    joinType: "INNER",
                    joinCondition: "<<base_column>> = <<template_column>>",
                    baseColumn: "person_id",
                    templateColumn: "person_id",
                  },
                },
              },
            },
            default: {
              name: "mainDatasetAggregateAgeDisaggregation",
              version: "1.0",
              tag: "",
              description: "",
              uses: [
                {
                  name: "mainDataSetBase",
                  version: "1.0",
                  type: "dataset_def",
                },
              ],
              sources: [
                {
                  dataSet: "mainDataSetBase",
                  alias: "hmsd",
                },
              ],
              columns: [
                {
                  type: "derived_column",
                  alias: "current_on_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.current_on_art)",
                  },
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "hmsd.location_uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "hmsd.location",
                },
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "age_range",
                  column: "hmsd.age_range",
                },
                {
                  type: "derived_column",
                  alias: "enrolled_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.enrolled_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "join_location",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "1",
                  },
                },
                {
                  type: "derived_column",
                  alias: "pre_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.pre_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "current_in_care",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.current_in_care)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "active_on_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.active_on_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_ctx_prophylaxis",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.on_ctx_prophylaxis)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "screened_for_tb",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.screened_for_tb)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "tb_screened_this_visit_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.tb_screened_this_visit_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "tb_screened_positive",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.tb_screened_positive)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "tb_screened_positive",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.tb_screened_positive)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_ipt",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.started_ipt)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "completed_ipt_past_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.completed_ipt_past_12_months)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "condoms_provided",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.condoms_provided)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.condoms_provided)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.on_modern_contraception)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "f_gte_18_visits",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.f_gte_18_visits)",
                  },
                },
              ],
              groupBy: {
                groupParam: "groupByParam",
                columns: ["age_range", "location_id"],
                excludeParam: "excludeParam",
              },
              transFormDirectives: {
                joinColumn: "location_id",
                skipColumns: ["location_uuid", "gender", "join_location"],
                joinColumnParam: "joinColumnParam",
                disaggregationColumns: ["age_range"],
              },
              dynamicJsonQueryGenerationDirectives: {
                patientListGenerator: {
                  useTemplate: "patient-list-frozen-template",
                  useTemplateVersion: "1.0",
                  generatingDirectives: {
                    joinDirectives: {
                      joinType: "INNER",
                      joinCondition: "<<base_column>> = <<template_column>>",
                      baseColumn: "person_id",
                      templateColumn: "person_id",
                    },
                  },
                },
              },
            },
          },
          mainDataSetBase: {
            name: "mainDataSetBase",
            version: "1.0",
            tag: "",
            description: "",
            uses: [],
            sources: [
              {
                table: "etl.hiv_monthly_report_dataset_cbb",
                alias: "hmsd",
              },
              {
                table: "amrs.location",
                alias: "l",
                join: {
                  type: "INNER",
                  joinCondition: "l.location_id = hmsd.location_id",
                },
              },
            ],
            columns: [
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "birthdate",
                column: "hmsd.birthdate",
              },
              {
                type: "simple_column",
                alias: "age",
                column: "hmsd.age",
              },
              {
                type: "simple_column",
                alias: "person_id",
                column: "hmsd.person_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "l.uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "l.name",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "cur_arv_meds",
                column: "hmsd.cur_arv_meds",
              },
              {
                type: "derived_column",
                alias: "enrollment_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "arv_first_regimen_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "cur_regimen_arv_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "simple_column",
                alias: "cur_arv_line",
                column: "hmsd.cur_arv_line",
              },
              {
                type: "simple_column",
                alias: "vl_1",
                column: "hmsd.vl_1",
              },
              {
                type: "derived_column",
                alias: "vl_1_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "age_range",
                expressionType: "case_statement",
                expressionOptions: {
                  caseOptions: [
                    {
                      condition: "hmsd.age < 1",
                      value: "0_to_1",
                    },
                    {
                      condition: "hmsd.age between 1 and 9",
                      value: "1_to_9",
                    },
                    {
                      condition: "hmsd.age between 10 and 14",
                      value: "10_to_14",
                    },
                    {
                      condition: "hmsd.age between 15 and 19",
                      value: "15_to_19",
                    },
                    {
                      condition: "hmsd.age between 20 and 24",
                      value: "20_to_24",
                    },
                    {
                      condition: "else",
                      value: "older_than_24",
                    },
                  ],
                },
              },
              {
                type: "simple_column",
                alias: "enrolled_this_month",
                column: "hmsd.enrolled_this_month",
              },
              {
                type: "simple_column",
                alias: "art_revisit_this_month",
                column: "hmsd.art_revisit_this_month",
              },
              {
                type: "simple_column",
                alias: "current_in_care",
                column: "hmsd.active_in_care_this_month",
              },
              {
                type: "simple_column",
                alias: "pre_art",
                column: "hmsd.is_pre_art_this_month",
              },
              {
                type: "simple_column",
                alias: "started_art_pregnant",
                column: "hmsd.is_pregnant_and_started_art_this_month",
              },
              {
                type: "simple_column",
                alias: "started_art_and_has_tb",
                column: "hmsd.on_tb_tx_and_started_art_this_month",
              },
              {
                type: "simple_column",
                alias: "active_on_art",
                column: "hmsd.on_art_this_month",
              },
              {
                type: "simple_column",
                alias: "on_ctx_prophylaxis",
                column: "hmsd.on_pcp_prophylaxis_this_month",
              },
              {
                type: "simple_column",
                alias: "current_on_art",
                column: "hmsd.on_art_this_month",
              },
              {
                type: "simple_column",
                alias: "screened_for_tb",
                column: "hmsd.tb_screened_active_this_month",
              },
              {
                type: "simple_column",
                alias: "tb_screened_this_visit_this_month",
                column: "hmsd.tb_screened_this_visit_this_month",
              },
              {
                type: "simple_column",
                alias: "tb_screened_positive",
                column: "hmsd.presumed_tb_positive_this_month",
              },
              {
                type: "derived_column",
                alias: "screened_for_cervical_ca",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "0",
                },
              },
              {
                type: "simple_column",
                alias: "started_ipt",
                column: "hmsd.started_ipt_this_month",
              },
              {
                type: "derived_column",
                alias: "completed_ipt_past_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "completed_ipt_past_12_months",
                },
              },
              {
                type: "derived_column",
                alias: "condoms_provided",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "condoms_provided_this_month",
                },
              },
              {
                type: "derived_column",
                alias: "started_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "started_modern_contraception_this_month",
                },
              },
              {
                type: "simple_column",
                alias: "on_modern_contraception",
                column: "hmsd.on_modern_contraception_this_month",
              },
              {
                type: "simple_column",
                alias: "scheduled_visits",
                column: "hmsd.scheduled_this_month",
              },
              {
                type: "simple_column",
                alias: "unscheduled_visits",
                column: "hmsd.unscheduled_this_month",
              },
              {
                type: "simple_column",
                alias: "total_visits",
                column: "hmsd.visit_this_month",
              },
              {
                type: "simple_column",
                alias: "f_gte_18_visits",
                column: "hmsd.f_18_and_older_this_month",
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_art_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.art_revisit_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_vl_suppressed_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_suppressed_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias:
                  "is_cross_border_active_on_art_12_month_cohort_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.active_on_art_12_month_cohort_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_presumed_tb_positive_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.presumed_tb_positive_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_started_tb_tx_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.started_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_completed_tb_tx",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_end_date is not null , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_stopped_tb_tx",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_stop_date is not null , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_transferred_out",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'transfer_out' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_ltfu",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and ( status = 'defaulter' or status = 'ltfu'), 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_tb_tx_dead",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'dead', 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_on_modern_contraception_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.on_modern_contraception_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_county_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_county_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_3_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.travelled_outside_last_3_months = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_6_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.travelled_outside_last_6_months = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "travelled_outside_last_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.travelled_outside_last_12_months = 1 and hmsd.status = 'active' , 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_kenya",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11197, 1 , 0)",
                },
              },
              {
                type: "derived_column",
                alias: "is_cross_border_country_uganda",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11118, 1 , 0)",
                },
              },
            ],
            filters: {
              conditionJoinOperator: "and",
              conditions: [
                {
                  filterType: "tableColumns",
                  conditionExpression: "endDate = ?",
                  parameterName: "endDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression: "hmsd.location_id in ?",
                  parameterName: "locations",
                },
              ],
            },
            default: {
              name: "mainDataSetBase",
              version: "1.0",
              tag: "",
              description: "",
              uses: [],
              sources: [
                {
                  table: "<<hivMonthlyDatasetSource>>",
                  alias: "hmsd",
                },
                {
                  table: "amrs.location",
                  alias: "l",
                  join: {
                    type: "INNER",
                    joinCondition: "l.location_id = hmsd.location_id",
                  },
                },
              ],
              columns: [
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "birthdate",
                  column: "hmsd.birthdate",
                },
                {
                  type: "simple_column",
                  alias: "age",
                  column: "hmsd.age",
                },
                {
                  type: "simple_column",
                  alias: "person_id",
                  column: "hmsd.person_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "l.uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "l.name",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_meds",
                  column: "hmsd.cur_arv_meds",
                },
                {
                  type: "derived_column",
                  alias: "enrollment_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "arv_first_regimen_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "cur_regimen_arv_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_line",
                  column: "hmsd.cur_arv_line",
                },
                {
                  type: "simple_column",
                  alias: "vl_1",
                  column: "hmsd.vl_1",
                },
                {
                  type: "derived_column",
                  alias: "vl_1_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "age_range",
                  expressionType: "case_statement",
                  expressionOptions: {
                    caseOptions: [
                      {
                        condition: "hmsd.age < 1",
                        value: "0_to_1",
                      },
                      {
                        condition: "hmsd.age between 1 and 9",
                        value: "1_to_9",
                      },
                      {
                        condition: "hmsd.age between 10 and 14",
                        value: "10_to_14",
                      },
                      {
                        condition: "hmsd.age between 15 and 19",
                        value: "15_to_19",
                      },
                      {
                        condition: "hmsd.age between 20 and 24",
                        value: "20_to_24",
                      },
                      {
                        condition: "else",
                        value: "older_than_24",
                      },
                    ],
                  },
                },
                {
                  type: "simple_column",
                  alias: "enrolled_this_month",
                  column: "hmsd.enrolled_this_month",
                },
                {
                  type: "simple_column",
                  alias: "art_revisit_this_month",
                  column: "hmsd.art_revisit_this_month",
                },
                {
                  type: "simple_column",
                  alias: "current_in_care",
                  column: "hmsd.active_in_care_this_month",
                },
                {
                  type: "simple_column",
                  alias: "pre_art",
                  column: "hmsd.is_pre_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "started_art_pregnant",
                  column: "hmsd.is_pregnant_and_started_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "started_art_and_has_tb",
                  column: "hmsd.on_tb_tx_and_started_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "active_on_art",
                  column: "hmsd.on_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "on_ctx_prophylaxis",
                  column: "hmsd.on_pcp_prophylaxis_this_month",
                },
                {
                  type: "simple_column",
                  alias: "current_on_art",
                  column: "hmsd.on_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "screened_for_tb",
                  column: "hmsd.tb_screened_active_this_month",
                },
                {
                  type: "simple_column",
                  alias: "tb_screened_this_visit_this_month",
                  column: "hmsd.tb_screened_this_visit_this_month",
                },
                {
                  type: "simple_column",
                  alias: "tb_screened_positive",
                  column: "hmsd.presumed_tb_positive_this_month",
                },
                {
                  type: "derived_column",
                  alias: "screened_for_cervical_ca",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "0",
                  },
                },
                {
                  type: "simple_column",
                  alias: "started_ipt",
                  column: "hmsd.started_ipt_this_month",
                },
                {
                  type: "derived_column",
                  alias: "completed_ipt_past_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "completed_ipt_past_12_months",
                  },
                },
                {
                  type: "derived_column",
                  alias: "condoms_provided",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "condoms_provided_this_month",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "started_modern_contraception_this_month",
                  },
                },
                {
                  type: "simple_column",
                  alias: "on_modern_contraception",
                  column: "hmsd.on_modern_contraception_this_month",
                },
                {
                  type: "simple_column",
                  alias: "scheduled_visits",
                  column: "hmsd.scheduled_this_month",
                },
                {
                  type: "simple_column",
                  alias: "unscheduled_visits",
                  column: "hmsd.unscheduled_this_month",
                },
                {
                  type: "simple_column",
                  alias: "total_visits",
                  column: "hmsd.visit_this_month",
                },
                {
                  type: "simple_column",
                  alias: "f_gte_18_visits",
                  column: "hmsd.f_18_and_older_this_month",
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_art_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.art_revisit_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_vl_suppressed_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_suppressed_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias:
                    "is_cross_border_active_on_art_12_month_cohort_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.active_on_art_12_month_cohort_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_presumed_tb_positive_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.presumed_tb_positive_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_started_tb_tx_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.started_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_completed_tb_tx",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_end_date is not null , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_stopped_tb_tx",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_stop_date is not null , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_transferred_out",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'transfer_out' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_ltfu",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and ( status = 'defaulter' or status = 'ltfu'), 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_tb_tx_dead",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'dead', 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_on_modern_contraception_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.on_modern_contraception_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_county_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_county_this_month = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_3_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.travelled_outside_last_3_months = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_6_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.travelled_outside_last_6_months = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "travelled_outside_last_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.travelled_outside_last_12_months = 1 and hmsd.status = 'active' , 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_kenya",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11197, 1 , 0)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "is_cross_border_country_uganda",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11118, 1 , 0)",
                  },
                },
              ],
              filters: {
                conditionJoinOperator: "and",
                conditions: [
                  {
                    filterType: "tableColumns",
                    conditionExpression: "endDate = ?",
                    parameterName: "endDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression: "hmsd.location_id in ?",
                    parameterName: "locations",
                  },
                ],
              },
            },
          },
        },
        sqlQuery:
          "SELECT sum(hmsd.current_on_art) AS `current_on_art`, hmsd.location_uuid AS `location_uuid`, hmsd.location AS `location`, hmsd.gender AS `gender`, hmsd.location_id AS `location_id`, hmsd.age_range AS `age_range`, sum(hmsd.enrolled_this_month) AS `enrolled_this_month`, 1 AS `join_location`, sum(hmsd.pre_art) AS `pre_art`, sum(hmsd.current_in_care) AS `current_in_care`, sum(hmsd.active_on_art) AS `active_on_art`, sum(hmsd.on_ctx_prophylaxis) AS `on_ctx_prophylaxis`, sum(hmsd.screened_for_tb) AS `screened_for_tb`, sum(hmsd.tb_screened_this_visit_this_month) AS `tb_screened_this_visit_this_month`, sum(hmsd.tb_screened_positive) AS `tb_screened_positive`, sum(hmsd.started_ipt) AS `started_ipt`, sum(hmsd.completed_ipt_past_12_months) AS `completed_ipt_past_12_months`, sum(hmsd.condoms_provided) AS `condoms_provided`, sum(hmsd.condoms_provided) AS `started_modern_contraception`, sum(hmsd.on_modern_contraception) AS `on_modern_contraception`, sum(hmsd.f_gte_18_visits) AS `f_gte_18_visits` FROM (SELECT hmsd.gender AS `gender`, hmsd.birthdate AS `birthdate`, hmsd.age AS `age`, hmsd.person_id AS `person_id`, l.uuid AS `location_uuid`, l.name AS `location`, hmsd.location_id AS `location_id`, hmsd.cur_arv_meds AS `cur_arv_meds`, date_format(hmsd.enrollment_date,'%d-%m-%Y') AS `enrollment_date`, date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y') AS `arv_first_regimen_start_date`, date_format(hmsd.arv_start_date,'%d-%m-%Y') AS `cur_regimen_arv_start_date`, hmsd.cur_arv_line AS `cur_arv_line`, hmsd.vl_1 AS `vl_1`, date_format(hmsd.vl_1_date,'%d-%m-%Y') AS `vl_1_date`, CASE WHEN (hmsd.age between 20 and 24) THEN '20_to_24' WHEN (hmsd.age between 15 and 19) THEN '15_to_19' WHEN (hmsd.age between 10 and 14) THEN '10_to_14' WHEN (hmsd.age between 1 and 9) THEN '1_to_9' WHEN (hmsd.age < 1) THEN '0_to_1' ELSE 'older_than_24' END AS `age_range`, hmsd.enrolled_this_month AS `enrolled_this_month`, hmsd.art_revisit_this_month AS `art_revisit_this_month`, hmsd.active_in_care_this_month AS `current_in_care`, hmsd.is_pre_art_this_month AS `pre_art`, hmsd.is_pregnant_and_started_art_this_month AS `started_art_pregnant`, hmsd.on_tb_tx_and_started_art_this_month AS `started_art_and_has_tb`, hmsd.on_art_this_month AS `active_on_art`, hmsd.on_pcp_prophylaxis_this_month AS `on_ctx_prophylaxis`, hmsd.on_art_this_month AS `current_on_art`, hmsd.tb_screened_active_this_month AS `screened_for_tb`, hmsd.tb_screened_this_visit_this_month AS `tb_screened_this_visit_this_month`, hmsd.presumed_tb_positive_this_month AS `tb_screened_positive`, 0 AS `screened_for_cervical_ca`, hmsd.started_ipt_this_month AS `started_ipt`, completed_ipt_past_12_months AS `completed_ipt_past_12_months`, condoms_provided_this_month AS `condoms_provided`, started_modern_contraception_this_month AS `started_modern_contraception`, hmsd.on_modern_contraception_this_month AS `on_modern_contraception`, hmsd.scheduled_this_month AS `scheduled_visits`, hmsd.unscheduled_this_month AS `unscheduled_visits`, hmsd.visit_this_month AS `total_visits`, hmsd.f_18_and_older_this_month AS `f_gte_18_visits`, IF(hmsd.art_revisit_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_on_art_this_month`, IF(hmsd.is_suppressed_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_vl_suppressed_this_month`, IF(hmsd.active_on_art_12_month_cohort_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_active_on_art_12_month_cohort_this_month`, IF(hmsd.presumed_tb_positive_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_presumed_tb_positive_this_month`, IF(hmsd.started_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_started_tb_tx_this_month`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'active' , 1 , 0) AS `is_cross_border_on_tb_tx_this_month`, IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_end_date is not null , 1 , 0) AS `is_cross_border_completed_tb_tx`, IF(hmsd.is_cross_border_this_month = 1 and hmsd.tb_tx_stop_date is not null , 1 , 0) AS `is_cross_border_stopped_tb_tx`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'transfer_out' , 1 , 0) AS `is_cross_border_on_tb_tx_transferred_out`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and ( status = 'defaulter' or status = 'ltfu'), 1 , 0) AS `is_cross_border_on_tb_tx_ltfu`, IF(hmsd.on_tb_tx_this_month = 1 and hmsd.is_cross_border_this_month = 1 and status = 'dead', 1 , 0) AS `is_cross_border_on_tb_tx_dead`, IF(hmsd.on_modern_contraception_this_month = 1 and hmsd.is_cross_border_this_month = 1 , 1 , 0) AS `is_cross_border_on_modern_contraception_this_month`, IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' , 1 , 0) AS `is_cross_border_country_this_month`, IF(hmsd.is_cross_border_county_this_month = 1 and hmsd.status = 'active' , 1 , 0) AS `is_cross_border_county_this_month`, IF(hmsd.travelled_outside_last_3_months = 1 and hmsd.status = 'active' , 1 , 0) AS `travelled_outside_last_3_months`, IF(hmsd.travelled_outside_last_6_months = 1 and hmsd.status = 'active' , 1 , 0) AS `travelled_outside_last_6_months`, IF(hmsd.travelled_outside_last_12_months = 1 and hmsd.status = 'active' , 1 , 0) AS `travelled_outside_last_12_months`, IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11197, 1 , 0) AS `is_cross_border_country_kenya`, IF(hmsd.is_cross_border_country_this_month = 1 and hmsd.status = 'active' and hmsd.country_of_residence = 11118, 1 , 0) AS `is_cross_border_country_uganda` FROM etl.hiv_monthly_report_dataset_cbb `hmsd` INNER JOIN amrs.location `l` ON (l.location_id = hmsd.location_id) WHERE (endDate = '2020-09-30') AND (hmsd.location_id in (19))) `hmsd` GROUP BY age_range, location_id",
        results: {
          results: [
            {
              dc__age_range__10_to_14__current_on_art: 144,
              location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
              location: "Busia",
              gender: "F",
              location_id: 19,
              dc__age_range__10_to_14__enrolled_this_month: 0,
              join_location: 1,
              dc__age_range__10_to_14__pre_art: 0,
              dc__age_range__10_to_14__current_in_care: 144,
              dc__age_range__10_to_14__active_on_art: 144,
              dc__age_range__10_to_14__on_ctx_prophylaxis: 86,
              dc__age_range__10_to_14__screened_for_tb: 141,
              dc__age_range__10_to_14__tb_screened_this_visit_this_month: 48,
              dc__age_range__10_to_14__tb_screened_positive: 1,
              dc__age_range__10_to_14__started_ipt: 1,
              dc__age_range__10_to_14__completed_ipt_past_12_months: 69,
              dc__age_range__10_to_14__condoms_provided: 0,
              dc__age_range__10_to_14__started_modern_contraception: 0,
              dc__age_range__10_to_14__on_modern_contraception: 0,
              dc__age_range__10_to_14__f_gte_18_visits: 0,
              dc__age_range__15_to_19__current_on_art: 177,
              dc__age_range__15_to_19__enrolled_this_month: 1,
              dc__age_range__15_to_19__pre_art: 0,
              dc__age_range__15_to_19__current_in_care: 178,
              dc__age_range__15_to_19__active_on_art: 177,
              dc__age_range__15_to_19__on_ctx_prophylaxis: 118,
              dc__age_range__15_to_19__screened_for_tb: 167,
              dc__age_range__15_to_19__tb_screened_this_visit_this_month: 56,
              dc__age_range__15_to_19__tb_screened_positive: 0,
              dc__age_range__15_to_19__started_ipt: 0,
              dc__age_range__15_to_19__completed_ipt_past_12_months: 71,
              dc__age_range__15_to_19__condoms_provided: 0,
              dc__age_range__15_to_19__started_modern_contraception: 0,
              dc__age_range__15_to_19__on_modern_contraception: 1,
              dc__age_range__15_to_19__f_gte_18_visits: 7,
              dc__age_range__1_to_9__current_on_art: 92,
              dc__age_range__1_to_9__enrolled_this_month: 0,
              dc__age_range__1_to_9__pre_art: 0,
              dc__age_range__1_to_9__current_in_care: 92,
              dc__age_range__1_to_9__active_on_art: 92,
              dc__age_range__1_to_9__on_ctx_prophylaxis: 61,
              dc__age_range__1_to_9__screened_for_tb: 89,
              dc__age_range__1_to_9__tb_screened_this_visit_this_month: 21,
              dc__age_range__1_to_9__tb_screened_positive: 0,
              dc__age_range__1_to_9__started_ipt: 1,
              dc__age_range__1_to_9__completed_ipt_past_12_months: 42,
              dc__age_range__1_to_9__condoms_provided: 0,
              dc__age_range__1_to_9__started_modern_contraception: 0,
              dc__age_range__1_to_9__on_modern_contraception: 0,
              dc__age_range__1_to_9__f_gte_18_visits: 0,
              dc__age_range__20_to_24__current_on_art: 150,
              dc__age_range__20_to_24__enrolled_this_month: 0,
              dc__age_range__20_to_24__pre_art: 0,
              dc__age_range__20_to_24__current_in_care: 150,
              dc__age_range__20_to_24__active_on_art: 150,
              dc__age_range__20_to_24__on_ctx_prophylaxis: 124,
              dc__age_range__20_to_24__screened_for_tb: 136,
              dc__age_range__20_to_24__tb_screened_this_visit_this_month: 28,
              dc__age_range__20_to_24__tb_screened_positive: 0,
              dc__age_range__20_to_24__started_ipt: 0,
              dc__age_range__20_to_24__completed_ipt_past_12_months: 53,
              dc__age_range__20_to_24__condoms_provided: 11,
              dc__age_range__20_to_24__started_modern_contraception: 11,
              dc__age_range__20_to_24__on_modern_contraception: 21,
              dc__age_range__20_to_24__f_gte_18_visits: 14,
              dc__age_range__older_than_24__current_on_art: 5000,
              dc__age_range__older_than_24__enrolled_this_month: 17,
              dc__age_range__older_than_24__pre_art: 0,
              dc__age_range__older_than_24__current_in_care: 5002,
              dc__age_range__older_than_24__active_on_art: 5000,
              dc__age_range__older_than_24__on_ctx_prophylaxis: 4338,
              dc__age_range__older_than_24__screened_for_tb: 4559,
              dc__age_range__older_than_24__tb_screened_this_visit_this_month: 585,
              dc__age_range__older_than_24__tb_screened_positive: 0,
              dc__age_range__older_than_24__started_ipt: 10,
              dc__age_range__older_than_24__completed_ipt_past_12_months: 1331,
              dc__age_range__older_than_24__condoms_provided: 313,
              dc__age_range__older_than_24__started_modern_contraception: 313,
              dc__age_range__older_than_24__on_modern_contraception: 1377,
              dc__age_range__older_than_24__f_gte_18_visits: 468,
            },
          ],
        },
      },
    },
    {
      report: {
        reportName: "mainDatasetAggregateAge15Disaggregation",
        params: {
          endDate: "2020-09-30",
          startDate: "2020-09-01",
          reportName: "MOH-731-report-2017",
          locationUuids: ["08fec60a-1352-11df-a1f1-0026b9348838"],
          isAggregated: false,
          locations: [19],
          referenceDate: "2020-09-14",
          startAge: 0,
          endAge: 150,
          gender: ["M", "F"],
          genders: ["M", "F"],
          hivMonthlyDatasetSource: "etl.hiv_monthly_report_dataset_cbb",
        },
        reportSchemas: {
          main: {
            name: "mainDatasetAggregateAge15Disaggregation",
            version: "1.0",
            tag: "",
            description: "",
            uses: [
              {
                name: "mainDataSetBaseAge15",
                version: "1.0",
                type: "dataset_def",
              },
            ],
            sources: [
              {
                dataSet: "mainDataSetBaseAge15",
                alias: "hmsd",
              },
            ],
            columns: [
              {
                type: "derived_column",
                alias: "join_location",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "1",
                },
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "hmsd.location_uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "hmsd.location",
              },
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "age_range",
                column: "hmsd.age_range",
              },
              {
                type: "derived_column",
                alias: "enrolled_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.enrolled_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "pre_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.pre_art)",
                },
              },
              {
                type: "derived_column",
                alias: "current_in_care",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.current_in_care)",
                },
              },
              {
                type: "derived_column",
                alias: "active_on_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.active_on_art)",
                },
              },
              {
                type: "derived_column",
                alias: "on_ctx_prophylaxis",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.on_ctx_prophylaxis)",
                },
              },
              {
                type: "derived_column",
                alias: "screened_for_tb",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.screened_for_tb)",
                },
              },
              {
                type: "derived_column",
                alias: "tb_screened_this_visit_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.tb_screened_this_visit_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "tb_screened_positive",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.tb_screened_positive)",
                },
              },
              {
                type: "derived_column",
                alias: "started_ipt",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.started_ipt)",
                },
              },
              {
                type: "derived_column",
                alias: "completed_ipt_past_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.completed_ipt_past_12_months)",
                },
              },
              {
                type: "derived_column",
                alias: "condoms_provided",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.condoms_provided)",
                },
              },
              {
                type: "derived_column",
                alias: "started_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.condoms_provided)",
                },
              },
              {
                type: "derived_column",
                alias: "on_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.on_modern_contraception)",
                },
              },
              {
                type: "derived_column",
                alias: "f_gte_18_visits",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.f_gte_18_visits)",
                },
              },
            ],
            groupBy: {
              groupParam: "groupByParam",
              columns: ["age_range", "location_id"],
              excludeParam: "excludeParam",
            },
            transFormDirectives: {
              joinColumn: "location_id",
              joinColumnParam: "joinColumnParam",
              skipColumns: ["location_uuid", "gender", "join_location"],
              disaggregationColumns: ["age_range"],
            },
            dynamicJsonQueryGenerationDirectives: {
              patientListGenerator: {
                useTemplate: "patient-list-frozen-template",
                useTemplateVersion: "1.0",
                generatingDirectives: {
                  joinDirectives: {
                    joinType: "INNER",
                    joinCondition: "<<base_column>> = <<template_column>>",
                    baseColumn: "person_id",
                    templateColumn: "person_id",
                  },
                },
              },
            },
            default: {
              name: "mainDatasetAggregateAge15Disaggregation",
              version: "1.0",
              tag: "",
              description: "",
              uses: [
                {
                  name: "mainDataSetBaseAge15",
                  version: "1.0",
                  type: "dataset_def",
                },
              ],
              sources: [
                {
                  dataSet: "mainDataSetBaseAge15",
                  alias: "hmsd",
                },
              ],
              columns: [
                {
                  type: "derived_column",
                  alias: "join_location",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "1",
                  },
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "hmsd.location_uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "hmsd.location",
                },
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "age_range",
                  column: "hmsd.age_range",
                },
                {
                  type: "derived_column",
                  alias: "enrolled_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.enrolled_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "pre_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.pre_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "current_in_care",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.current_in_care)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "active_on_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.active_on_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_ctx_prophylaxis",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.on_ctx_prophylaxis)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "screened_for_tb",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.screened_for_tb)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "tb_screened_this_visit_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.tb_screened_this_visit_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "tb_screened_positive",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.tb_screened_positive)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_ipt",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.started_ipt)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "completed_ipt_past_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.completed_ipt_past_12_months)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "condoms_provided",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.condoms_provided)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.condoms_provided)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.on_modern_contraception)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "f_gte_18_visits",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.f_gte_18_visits)",
                  },
                },
              ],
              groupBy: {
                groupParam: "groupByParam",
                columns: ["age_range", "location_id"],
                excludeParam: "excludeParam",
              },
              transFormDirectives: {
                joinColumn: "location_id",
                joinColumnParam: "joinColumnParam",
                skipColumns: ["location_uuid", "gender", "join_location"],
                disaggregationColumns: ["age_range"],
              },
              dynamicJsonQueryGenerationDirectives: {
                patientListGenerator: {
                  useTemplate: "patient-list-frozen-template",
                  useTemplateVersion: "1.0",
                  generatingDirectives: {
                    joinDirectives: {
                      joinType: "INNER",
                      joinCondition: "<<base_column>> = <<template_column>>",
                      baseColumn: "person_id",
                      templateColumn: "person_id",
                    },
                  },
                },
              },
            },
          },
          mainDataSetBaseAge15: {
            name: "mainDataSetBaseAge15",
            version: "1.0",
            tag: "",
            description: "",
            uses: [],
            sources: [
              {
                table: "etl.hiv_monthly_report_dataset_cbb",
                alias: "hmsd",
              },
              {
                table: "amrs.location",
                alias: "l",
                join: {
                  type: "INNER",
                  joinCondition: "l.location_id = hmsd.location_id",
                },
              },
            ],
            columns: [
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "birthdate",
                column: "hmsd.birthdate",
              },
              {
                type: "simple_column",
                alias: "age",
                column: "hmsd.age",
              },
              {
                type: "simple_column",
                alias: "person_id",
                column: "hmsd.person_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "l.uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "l.name",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "cur_arv_meds",
                column: "hmsd.cur_arv_meds",
              },
              {
                type: "derived_column",
                alias: "enrollment_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "arv_first_regimen_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "cur_regimen_arv_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "simple_column",
                alias: "cur_arv_line",
                column: "hmsd.cur_arv_line",
              },
              {
                type: "simple_column",
                alias: "vl_1",
                column: "hmsd.vl_1",
              },
              {
                type: "derived_column",
                alias: "vl_1_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "age_range",
                expressionType: "case_statement",
                expressionOptions: {
                  caseOptions: [
                    {
                      condition: "hmsd.age >= 15",
                      value: "older_than_15",
                    },
                    {
                      condition: "else",
                      value: "below_15_years",
                    },
                  ],
                },
              },
              {
                type: "simple_column",
                alias: "enrolled_this_month",
                column: "hmsd.enrolled_this_month",
              },
              {
                type: "simple_column",
                alias: "current_in_care",
                column: "hmsd.active_in_care_this_month",
              },
              {
                type: "simple_column",
                alias: "pre_art",
                column: "hmsd.is_pre_art_this_month",
              },
              {
                type: "simple_column",
                alias: "active_on_art",
                column: "hmsd.on_art_this_month",
              },
              {
                type: "simple_column",
                alias: "on_ctx_prophylaxis",
                column: "hmsd.on_pcp_prophylaxis_this_month",
              },
              {
                type: "simple_column",
                alias: "screened_for_tb",
                column: "hmsd.tb_screened_active_this_month",
              },
              {
                type: "simple_column",
                alias: "tb_screened_this_visit_this_month",
                column: "hmsd.tb_screened_this_visit_this_month",
              },
              {
                type: "simple_column",
                alias: "tb_screened_positive",
                column: "hmsd.presumed_tb_positive_this_month",
              },
              {
                type: "derived_column",
                alias: "screened_for_cervical_ca",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "0",
                },
              },
              {
                type: "simple_column",
                alias: "started_ipt",
                column: "hmsd.started_ipt_this_month",
              },
              {
                type: "derived_column",
                alias: "completed_ipt_past_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "completed_ipt_past_12_months",
                },
              },
              {
                type: "derived_column",
                alias: "condoms_provided",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "condoms_provided_this_month",
                },
              },
              {
                type: "derived_column",
                alias: "started_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "started_modern_contraception_this_month",
                },
              },
              {
                type: "simple_column",
                alias: "on_modern_contraception",
                column: "hmsd.on_modern_contraception_this_month",
              },
              {
                type: "simple_column",
                alias: "f_gte_18_visits",
                column: "hmsd.f_18_and_older_this_month",
              },
            ],
            filters: {
              conditionJoinOperator: "and",
              conditions: [
                {
                  filterType: "tableColumns",
                  conditionExpression: "endDate = ?",
                  parameterName: "endDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression: "hmsd.location_id in ?",
                  parameterName: "locations",
                },
              ],
            },
            default: {
              name: "mainDataSetBaseAge15",
              version: "1.0",
              tag: "",
              description: "",
              uses: [],
              sources: [
                {
                  table: "<<hivMonthlyDatasetSource>>",
                  alias: "hmsd",
                },
                {
                  table: "amrs.location",
                  alias: "l",
                  join: {
                    type: "INNER",
                    joinCondition: "l.location_id = hmsd.location_id",
                  },
                },
              ],
              columns: [
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "birthdate",
                  column: "hmsd.birthdate",
                },
                {
                  type: "simple_column",
                  alias: "age",
                  column: "hmsd.age",
                },
                {
                  type: "simple_column",
                  alias: "person_id",
                  column: "hmsd.person_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "l.uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "l.name",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_meds",
                  column: "hmsd.cur_arv_meds",
                },
                {
                  type: "derived_column",
                  alias: "enrollment_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "arv_first_regimen_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "cur_regimen_arv_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_line",
                  column: "hmsd.cur_arv_line",
                },
                {
                  type: "simple_column",
                  alias: "vl_1",
                  column: "hmsd.vl_1",
                },
                {
                  type: "derived_column",
                  alias: "vl_1_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "age_range",
                  expressionType: "case_statement",
                  expressionOptions: {
                    caseOptions: [
                      {
                        condition: "hmsd.age >= 15",
                        value: "older_than_15",
                      },
                      {
                        condition: "else",
                        value: "below_15_years",
                      },
                    ],
                  },
                },
                {
                  type: "simple_column",
                  alias: "enrolled_this_month",
                  column: "hmsd.enrolled_this_month",
                },
                {
                  type: "simple_column",
                  alias: "current_in_care",
                  column: "hmsd.active_in_care_this_month",
                },
                {
                  type: "simple_column",
                  alias: "pre_art",
                  column: "hmsd.is_pre_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "active_on_art",
                  column: "hmsd.on_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "on_ctx_prophylaxis",
                  column: "hmsd.on_pcp_prophylaxis_this_month",
                },
                {
                  type: "simple_column",
                  alias: "screened_for_tb",
                  column: "hmsd.tb_screened_active_this_month",
                },
                {
                  type: "simple_column",
                  alias: "tb_screened_this_visit_this_month",
                  column: "hmsd.tb_screened_this_visit_this_month",
                },
                {
                  type: "simple_column",
                  alias: "tb_screened_positive",
                  column: "hmsd.presumed_tb_positive_this_month",
                },
                {
                  type: "derived_column",
                  alias: "screened_for_cervical_ca",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "0",
                  },
                },
                {
                  type: "simple_column",
                  alias: "started_ipt",
                  column: "hmsd.started_ipt_this_month",
                },
                {
                  type: "derived_column",
                  alias: "completed_ipt_past_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "completed_ipt_past_12_months",
                  },
                },
                {
                  type: "derived_column",
                  alias: "condoms_provided",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "condoms_provided_this_month",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "started_modern_contraception_this_month",
                  },
                },
                {
                  type: "simple_column",
                  alias: "on_modern_contraception",
                  column: "hmsd.on_modern_contraception_this_month",
                },
                {
                  type: "simple_column",
                  alias: "f_gte_18_visits",
                  column: "hmsd.f_18_and_older_this_month",
                },
              ],
              filters: {
                conditionJoinOperator: "and",
                conditions: [
                  {
                    filterType: "tableColumns",
                    conditionExpression: "endDate = ?",
                    parameterName: "endDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression: "hmsd.location_id in ?",
                    parameterName: "locations",
                  },
                ],
              },
            },
          },
        },
        reportQuery:
          "SELECT 1 AS `join_location`, hmsd.location_uuid AS `location_uuid`, hmsd.location AS `location`, hmsd.gender AS `gender`, hmsd.location_id AS `location_id`, hmsd.age_range AS `age_range`, sum(hmsd.enrolled_this_month) AS `enrolled_this_month`, sum(hmsd.pre_art) AS `pre_art`, sum(hmsd.current_in_care) AS `current_in_care`, sum(hmsd.active_on_art) AS `active_on_art`, sum(hmsd.on_ctx_prophylaxis) AS `on_ctx_prophylaxis`, sum(hmsd.screened_for_tb) AS `screened_for_tb`, sum(hmsd.tb_screened_this_visit_this_month) AS `tb_screened_this_visit_this_month`, sum(hmsd.tb_screened_positive) AS `tb_screened_positive`, sum(hmsd.started_ipt) AS `started_ipt`, sum(hmsd.completed_ipt_past_12_months) AS `completed_ipt_past_12_months`, sum(hmsd.condoms_provided) AS `condoms_provided`, sum(hmsd.condoms_provided) AS `started_modern_contraception`, sum(hmsd.on_modern_contraception) AS `on_modern_contraception`, sum(hmsd.f_gte_18_visits) AS `f_gte_18_visits` FROM (SELECT hmsd.gender AS `gender`, hmsd.birthdate AS `birthdate`, hmsd.age AS `age`, hmsd.person_id AS `person_id`, l.uuid AS `location_uuid`, l.name AS `location`, hmsd.location_id AS `location_id`, hmsd.cur_arv_meds AS `cur_arv_meds`, date_format(hmsd.enrollment_date,'%d-%m-%Y') AS `enrollment_date`, date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y') AS `arv_first_regimen_start_date`, date_format(hmsd.arv_start_date,'%d-%m-%Y') AS `cur_regimen_arv_start_date`, hmsd.cur_arv_line AS `cur_arv_line`, hmsd.vl_1 AS `vl_1`, date_format(hmsd.vl_1_date,'%d-%m-%Y') AS `vl_1_date`, CASE WHEN (hmsd.age >= 15) THEN 'older_than_15' ELSE 'below_15_years' END AS `age_range`, hmsd.enrolled_this_month AS `enrolled_this_month`, hmsd.active_in_care_this_month AS `current_in_care`, hmsd.is_pre_art_this_month AS `pre_art`, hmsd.on_art_this_month AS `active_on_art`, hmsd.on_pcp_prophylaxis_this_month AS `on_ctx_prophylaxis`, hmsd.tb_screened_active_this_month AS `screened_for_tb`, hmsd.tb_screened_this_visit_this_month AS `tb_screened_this_visit_this_month`, hmsd.presumed_tb_positive_this_month AS `tb_screened_positive`, 0 AS `screened_for_cervical_ca`, hmsd.started_ipt_this_month AS `started_ipt`, completed_ipt_past_12_months AS `completed_ipt_past_12_months`, condoms_provided_this_month AS `condoms_provided`, started_modern_contraception_this_month AS `started_modern_contraception`, hmsd.on_modern_contraception_this_month AS `on_modern_contraception`, hmsd.f_18_and_older_this_month AS `f_gte_18_visits` FROM etl.hiv_monthly_report_dataset_cbb `hmsd` INNER JOIN amrs.location `l` ON (l.location_id = hmsd.location_id) WHERE (endDate = '2020-09-30') AND (hmsd.location_id in (19))) `hmsd` GROUP BY age_range, location_id",
        queryResults: {
          results: [
            {
              join_location: 1,
              location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
              location: "Busia",
              gender: "F",
              location_id: 19,
              dc__age_range__below_15_years__enrolled_this_month: 0,
              dc__age_range__below_15_years__pre_art: 0,
              dc__age_range__below_15_years__current_in_care: 236,
              dc__age_range__below_15_years__active_on_art: 236,
              dc__age_range__below_15_years__on_ctx_prophylaxis: 147,
              dc__age_range__below_15_years__screened_for_tb: 230,
              dc__age_range__below_15_years__tb_screened_this_visit_this_month: 69,
              dc__age_range__below_15_years__tb_screened_positive: 1,
              dc__age_range__below_15_years__started_ipt: 2,
              dc__age_range__below_15_years__completed_ipt_past_12_months: 111,
              dc__age_range__below_15_years__condoms_provided: 0,
              dc__age_range__below_15_years__started_modern_contraception: 0,
              dc__age_range__below_15_years__on_modern_contraception: 0,
              dc__age_range__below_15_years__f_gte_18_visits: 0,
              dc__age_range__older_than_15__enrolled_this_month: 18,
              dc__age_range__older_than_15__pre_art: 0,
              dc__age_range__older_than_15__current_in_care: 5330,
              dc__age_range__older_than_15__active_on_art: 5327,
              dc__age_range__older_than_15__on_ctx_prophylaxis: 4580,
              dc__age_range__older_than_15__screened_for_tb: 4862,
              dc__age_range__older_than_15__tb_screened_this_visit_this_month: 669,
              dc__age_range__older_than_15__tb_screened_positive: 0,
              dc__age_range__older_than_15__started_ipt: 10,
              dc__age_range__older_than_15__completed_ipt_past_12_months: 1455,
              dc__age_range__older_than_15__condoms_provided: 324,
              dc__age_range__older_than_15__started_modern_contraception: 324,
              dc__age_range__older_than_15__on_modern_contraception: 1399,
              dc__age_range__older_than_15__f_gte_18_visits: 489,
            },
          ],
        },
      },
      results: {
        schemas: {
          main: {
            name: "mainDatasetAggregateAge15Disaggregation",
            version: "1.0",
            tag: "",
            description: "",
            uses: [
              {
                name: "mainDataSetBaseAge15",
                version: "1.0",
                type: "dataset_def",
              },
            ],
            sources: [
              {
                dataSet: "mainDataSetBaseAge15",
                alias: "hmsd",
              },
            ],
            columns: [
              {
                type: "derived_column",
                alias: "join_location",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "1",
                },
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "hmsd.location_uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "hmsd.location",
              },
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "age_range",
                column: "hmsd.age_range",
              },
              {
                type: "derived_column",
                alias: "enrolled_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.enrolled_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "pre_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.pre_art)",
                },
              },
              {
                type: "derived_column",
                alias: "current_in_care",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.current_in_care)",
                },
              },
              {
                type: "derived_column",
                alias: "active_on_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.active_on_art)",
                },
              },
              {
                type: "derived_column",
                alias: "on_ctx_prophylaxis",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.on_ctx_prophylaxis)",
                },
              },
              {
                type: "derived_column",
                alias: "screened_for_tb",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.screened_for_tb)",
                },
              },
              {
                type: "derived_column",
                alias: "tb_screened_this_visit_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.tb_screened_this_visit_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "tb_screened_positive",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.tb_screened_positive)",
                },
              },
              {
                type: "derived_column",
                alias: "started_ipt",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.started_ipt)",
                },
              },
              {
                type: "derived_column",
                alias: "completed_ipt_past_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.completed_ipt_past_12_months)",
                },
              },
              {
                type: "derived_column",
                alias: "condoms_provided",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.condoms_provided)",
                },
              },
              {
                type: "derived_column",
                alias: "started_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.condoms_provided)",
                },
              },
              {
                type: "derived_column",
                alias: "on_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.on_modern_contraception)",
                },
              },
              {
                type: "derived_column",
                alias: "f_gte_18_visits",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.f_gte_18_visits)",
                },
              },
            ],
            groupBy: {
              groupParam: "groupByParam",
              columns: ["age_range", "location_id"],
              excludeParam: "excludeParam",
            },
            transFormDirectives: {
              joinColumn: "location_id",
              joinColumnParam: "joinColumnParam",
              skipColumns: ["location_uuid", "gender", "join_location"],
              disaggregationColumns: ["age_range"],
            },
            dynamicJsonQueryGenerationDirectives: {
              patientListGenerator: {
                useTemplate: "patient-list-frozen-template",
                useTemplateVersion: "1.0",
                generatingDirectives: {
                  joinDirectives: {
                    joinType: "INNER",
                    joinCondition: "<<base_column>> = <<template_column>>",
                    baseColumn: "person_id",
                    templateColumn: "person_id",
                  },
                },
              },
            },
            default: {
              name: "mainDatasetAggregateAge15Disaggregation",
              version: "1.0",
              tag: "",
              description: "",
              uses: [
                {
                  name: "mainDataSetBaseAge15",
                  version: "1.0",
                  type: "dataset_def",
                },
              ],
              sources: [
                {
                  dataSet: "mainDataSetBaseAge15",
                  alias: "hmsd",
                },
              ],
              columns: [
                {
                  type: "derived_column",
                  alias: "join_location",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "1",
                  },
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "hmsd.location_uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "hmsd.location",
                },
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "age_range",
                  column: "hmsd.age_range",
                },
                {
                  type: "derived_column",
                  alias: "enrolled_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.enrolled_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "pre_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.pre_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "current_in_care",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.current_in_care)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "active_on_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.active_on_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_ctx_prophylaxis",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.on_ctx_prophylaxis)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "screened_for_tb",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.screened_for_tb)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "tb_screened_this_visit_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.tb_screened_this_visit_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "tb_screened_positive",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.tb_screened_positive)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_ipt",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.started_ipt)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "completed_ipt_past_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.completed_ipt_past_12_months)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "condoms_provided",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.condoms_provided)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.condoms_provided)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.on_modern_contraception)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "f_gte_18_visits",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.f_gte_18_visits)",
                  },
                },
              ],
              groupBy: {
                groupParam: "groupByParam",
                columns: ["age_range", "location_id"],
                excludeParam: "excludeParam",
              },
              transFormDirectives: {
                joinColumn: "location_id",
                joinColumnParam: "joinColumnParam",
                skipColumns: ["location_uuid", "gender", "join_location"],
                disaggregationColumns: ["age_range"],
              },
              dynamicJsonQueryGenerationDirectives: {
                patientListGenerator: {
                  useTemplate: "patient-list-frozen-template",
                  useTemplateVersion: "1.0",
                  generatingDirectives: {
                    joinDirectives: {
                      joinType: "INNER",
                      joinCondition: "<<base_column>> = <<template_column>>",
                      baseColumn: "person_id",
                      templateColumn: "person_id",
                    },
                  },
                },
              },
            },
          },
          mainDataSetBaseAge15: {
            name: "mainDataSetBaseAge15",
            version: "1.0",
            tag: "",
            description: "",
            uses: [],
            sources: [
              {
                table: "etl.hiv_monthly_report_dataset_cbb",
                alias: "hmsd",
              },
              {
                table: "amrs.location",
                alias: "l",
                join: {
                  type: "INNER",
                  joinCondition: "l.location_id = hmsd.location_id",
                },
              },
            ],
            columns: [
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "birthdate",
                column: "hmsd.birthdate",
              },
              {
                type: "simple_column",
                alias: "age",
                column: "hmsd.age",
              },
              {
                type: "simple_column",
                alias: "person_id",
                column: "hmsd.person_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "l.uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "l.name",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "cur_arv_meds",
                column: "hmsd.cur_arv_meds",
              },
              {
                type: "derived_column",
                alias: "enrollment_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "arv_first_regimen_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "cur_regimen_arv_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "simple_column",
                alias: "cur_arv_line",
                column: "hmsd.cur_arv_line",
              },
              {
                type: "simple_column",
                alias: "vl_1",
                column: "hmsd.vl_1",
              },
              {
                type: "derived_column",
                alias: "vl_1_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "age_range",
                expressionType: "case_statement",
                expressionOptions: {
                  caseOptions: [
                    {
                      condition: "hmsd.age >= 15",
                      value: "older_than_15",
                    },
                    {
                      condition: "else",
                      value: "below_15_years",
                    },
                  ],
                },
              },
              {
                type: "simple_column",
                alias: "enrolled_this_month",
                column: "hmsd.enrolled_this_month",
              },
              {
                type: "simple_column",
                alias: "current_in_care",
                column: "hmsd.active_in_care_this_month",
              },
              {
                type: "simple_column",
                alias: "pre_art",
                column: "hmsd.is_pre_art_this_month",
              },
              {
                type: "simple_column",
                alias: "active_on_art",
                column: "hmsd.on_art_this_month",
              },
              {
                type: "simple_column",
                alias: "on_ctx_prophylaxis",
                column: "hmsd.on_pcp_prophylaxis_this_month",
              },
              {
                type: "simple_column",
                alias: "screened_for_tb",
                column: "hmsd.tb_screened_active_this_month",
              },
              {
                type: "simple_column",
                alias: "tb_screened_this_visit_this_month",
                column: "hmsd.tb_screened_this_visit_this_month",
              },
              {
                type: "simple_column",
                alias: "tb_screened_positive",
                column: "hmsd.presumed_tb_positive_this_month",
              },
              {
                type: "derived_column",
                alias: "screened_for_cervical_ca",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "0",
                },
              },
              {
                type: "simple_column",
                alias: "started_ipt",
                column: "hmsd.started_ipt_this_month",
              },
              {
                type: "derived_column",
                alias: "completed_ipt_past_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "completed_ipt_past_12_months",
                },
              },
              {
                type: "derived_column",
                alias: "condoms_provided",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "condoms_provided_this_month",
                },
              },
              {
                type: "derived_column",
                alias: "started_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "started_modern_contraception_this_month",
                },
              },
              {
                type: "simple_column",
                alias: "on_modern_contraception",
                column: "hmsd.on_modern_contraception_this_month",
              },
              {
                type: "simple_column",
                alias: "f_gte_18_visits",
                column: "hmsd.f_18_and_older_this_month",
              },
            ],
            filters: {
              conditionJoinOperator: "and",
              conditions: [
                {
                  filterType: "tableColumns",
                  conditionExpression: "endDate = ?",
                  parameterName: "endDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression: "hmsd.location_id in ?",
                  parameterName: "locations",
                },
              ],
            },
            default: {
              name: "mainDataSetBaseAge15",
              version: "1.0",
              tag: "",
              description: "",
              uses: [],
              sources: [
                {
                  table: "<<hivMonthlyDatasetSource>>",
                  alias: "hmsd",
                },
                {
                  table: "amrs.location",
                  alias: "l",
                  join: {
                    type: "INNER",
                    joinCondition: "l.location_id = hmsd.location_id",
                  },
                },
              ],
              columns: [
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "birthdate",
                  column: "hmsd.birthdate",
                },
                {
                  type: "simple_column",
                  alias: "age",
                  column: "hmsd.age",
                },
                {
                  type: "simple_column",
                  alias: "person_id",
                  column: "hmsd.person_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "l.uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "l.name",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_meds",
                  column: "hmsd.cur_arv_meds",
                },
                {
                  type: "derived_column",
                  alias: "enrollment_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "arv_first_regimen_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "cur_regimen_arv_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_line",
                  column: "hmsd.cur_arv_line",
                },
                {
                  type: "simple_column",
                  alias: "vl_1",
                  column: "hmsd.vl_1",
                },
                {
                  type: "derived_column",
                  alias: "vl_1_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "age_range",
                  expressionType: "case_statement",
                  expressionOptions: {
                    caseOptions: [
                      {
                        condition: "hmsd.age >= 15",
                        value: "older_than_15",
                      },
                      {
                        condition: "else",
                        value: "below_15_years",
                      },
                    ],
                  },
                },
                {
                  type: "simple_column",
                  alias: "enrolled_this_month",
                  column: "hmsd.enrolled_this_month",
                },
                {
                  type: "simple_column",
                  alias: "current_in_care",
                  column: "hmsd.active_in_care_this_month",
                },
                {
                  type: "simple_column",
                  alias: "pre_art",
                  column: "hmsd.is_pre_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "active_on_art",
                  column: "hmsd.on_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "on_ctx_prophylaxis",
                  column: "hmsd.on_pcp_prophylaxis_this_month",
                },
                {
                  type: "simple_column",
                  alias: "screened_for_tb",
                  column: "hmsd.tb_screened_active_this_month",
                },
                {
                  type: "simple_column",
                  alias: "tb_screened_this_visit_this_month",
                  column: "hmsd.tb_screened_this_visit_this_month",
                },
                {
                  type: "simple_column",
                  alias: "tb_screened_positive",
                  column: "hmsd.presumed_tb_positive_this_month",
                },
                {
                  type: "derived_column",
                  alias: "screened_for_cervical_ca",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "0",
                  },
                },
                {
                  type: "simple_column",
                  alias: "started_ipt",
                  column: "hmsd.started_ipt_this_month",
                },
                {
                  type: "derived_column",
                  alias: "completed_ipt_past_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "completed_ipt_past_12_months",
                  },
                },
                {
                  type: "derived_column",
                  alias: "condoms_provided",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "condoms_provided_this_month",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "started_modern_contraception_this_month",
                  },
                },
                {
                  type: "simple_column",
                  alias: "on_modern_contraception",
                  column: "hmsd.on_modern_contraception_this_month",
                },
                {
                  type: "simple_column",
                  alias: "f_gte_18_visits",
                  column: "hmsd.f_18_and_older_this_month",
                },
              ],
              filters: {
                conditionJoinOperator: "and",
                conditions: [
                  {
                    filterType: "tableColumns",
                    conditionExpression: "endDate = ?",
                    parameterName: "endDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression: "hmsd.location_id in ?",
                    parameterName: "locations",
                  },
                ],
              },
            },
          },
        },
        sqlQuery:
          "SELECT 1 AS `join_location`, hmsd.location_uuid AS `location_uuid`, hmsd.location AS `location`, hmsd.gender AS `gender`, hmsd.location_id AS `location_id`, hmsd.age_range AS `age_range`, sum(hmsd.enrolled_this_month) AS `enrolled_this_month`, sum(hmsd.pre_art) AS `pre_art`, sum(hmsd.current_in_care) AS `current_in_care`, sum(hmsd.active_on_art) AS `active_on_art`, sum(hmsd.on_ctx_prophylaxis) AS `on_ctx_prophylaxis`, sum(hmsd.screened_for_tb) AS `screened_for_tb`, sum(hmsd.tb_screened_this_visit_this_month) AS `tb_screened_this_visit_this_month`, sum(hmsd.tb_screened_positive) AS `tb_screened_positive`, sum(hmsd.started_ipt) AS `started_ipt`, sum(hmsd.completed_ipt_past_12_months) AS `completed_ipt_past_12_months`, sum(hmsd.condoms_provided) AS `condoms_provided`, sum(hmsd.condoms_provided) AS `started_modern_contraception`, sum(hmsd.on_modern_contraception) AS `on_modern_contraception`, sum(hmsd.f_gte_18_visits) AS `f_gte_18_visits` FROM (SELECT hmsd.gender AS `gender`, hmsd.birthdate AS `birthdate`, hmsd.age AS `age`, hmsd.person_id AS `person_id`, l.uuid AS `location_uuid`, l.name AS `location`, hmsd.location_id AS `location_id`, hmsd.cur_arv_meds AS `cur_arv_meds`, date_format(hmsd.enrollment_date,'%d-%m-%Y') AS `enrollment_date`, date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y') AS `arv_first_regimen_start_date`, date_format(hmsd.arv_start_date,'%d-%m-%Y') AS `cur_regimen_arv_start_date`, hmsd.cur_arv_line AS `cur_arv_line`, hmsd.vl_1 AS `vl_1`, date_format(hmsd.vl_1_date,'%d-%m-%Y') AS `vl_1_date`, CASE WHEN (hmsd.age >= 15) THEN 'older_than_15' ELSE 'below_15_years' END AS `age_range`, hmsd.enrolled_this_month AS `enrolled_this_month`, hmsd.active_in_care_this_month AS `current_in_care`, hmsd.is_pre_art_this_month AS `pre_art`, hmsd.on_art_this_month AS `active_on_art`, hmsd.on_pcp_prophylaxis_this_month AS `on_ctx_prophylaxis`, hmsd.tb_screened_active_this_month AS `screened_for_tb`, hmsd.tb_screened_this_visit_this_month AS `tb_screened_this_visit_this_month`, hmsd.presumed_tb_positive_this_month AS `tb_screened_positive`, 0 AS `screened_for_cervical_ca`, hmsd.started_ipt_this_month AS `started_ipt`, completed_ipt_past_12_months AS `completed_ipt_past_12_months`, condoms_provided_this_month AS `condoms_provided`, started_modern_contraception_this_month AS `started_modern_contraception`, hmsd.on_modern_contraception_this_month AS `on_modern_contraception`, hmsd.f_18_and_older_this_month AS `f_gte_18_visits` FROM etl.hiv_monthly_report_dataset_cbb `hmsd` INNER JOIN amrs.location `l` ON (l.location_id = hmsd.location_id) WHERE (endDate = '2020-09-30') AND (hmsd.location_id in (19))) `hmsd` GROUP BY age_range, location_id",
        results: {
          results: [
            {
              join_location: 1,
              location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
              location: "Busia",
              gender: "F",
              location_id: 19,
              dc__age_range__below_15_years__enrolled_this_month: 0,
              dc__age_range__below_15_years__pre_art: 0,
              dc__age_range__below_15_years__current_in_care: 236,
              dc__age_range__below_15_years__active_on_art: 236,
              dc__age_range__below_15_years__on_ctx_prophylaxis: 147,
              dc__age_range__below_15_years__screened_for_tb: 230,
              dc__age_range__below_15_years__tb_screened_this_visit_this_month: 69,
              dc__age_range__below_15_years__tb_screened_positive: 1,
              dc__age_range__below_15_years__started_ipt: 2,
              dc__age_range__below_15_years__completed_ipt_past_12_months: 111,
              dc__age_range__below_15_years__condoms_provided: 0,
              dc__age_range__below_15_years__started_modern_contraception: 0,
              dc__age_range__below_15_years__on_modern_contraception: 0,
              dc__age_range__below_15_years__f_gte_18_visits: 0,
              dc__age_range__older_than_15__enrolled_this_month: 18,
              dc__age_range__older_than_15__pre_art: 0,
              dc__age_range__older_than_15__current_in_care: 5330,
              dc__age_range__older_than_15__active_on_art: 5327,
              dc__age_range__older_than_15__on_ctx_prophylaxis: 4580,
              dc__age_range__older_than_15__screened_for_tb: 4862,
              dc__age_range__older_than_15__tb_screened_this_visit_this_month: 669,
              dc__age_range__older_than_15__tb_screened_positive: 0,
              dc__age_range__older_than_15__started_ipt: 10,
              dc__age_range__older_than_15__completed_ipt_past_12_months: 1455,
              dc__age_range__older_than_15__condoms_provided: 324,
              dc__age_range__older_than_15__started_modern_contraception: 324,
              dc__age_range__older_than_15__on_modern_contraception: 1399,
              dc__age_range__older_than_15__f_gte_18_visits: 489,
            },
          ],
        },
      },
    },
    {
      report: {
        reportName: "StartingARTAggregationAgeGreen",
        params: {
          endDate: "2020-09-30",
          startDate: "2020-09-01",
          reportName: "MOH-731-report-2017",
          locationUuids: ["08fec60a-1352-11df-a1f1-0026b9348838"],
          isAggregated: false,
          locations: [19],
          referenceDate: "2020-09-14",
          startAge: 0,
          endAge: 150,
          gender: ["M", "F"],
          genders: ["M", "F"],
          hivMonthlyDatasetSource: "etl.hiv_monthly_report_dataset_cbb",
        },
        reportSchemas: {
          main: {
            name: "StartingARTAggregationAgeGreen",
            version: "1.0",
            tag: "",
            description: "",
            uses: [
              {
                name: "StartingARTSetBaseAgeGreen",
                version: "1.0",
                type: "dataset_def",
              },
            ],
            sources: [
              {
                dataSet: "StartingARTSetBaseAgeGreen",
                alias: "hmsd",
              },
            ],
            columns: [
              {
                type: "derived_column",
                alias: "join_location",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "1",
                },
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "hmsd.location_uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "hmsd.location",
              },
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "age_range",
                column: "hmsd.age_range",
              },
              {
                type: "derived_column",
                alias: "started_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.started_art)",
                },
              },
            ],
            groupBy: {
              groupParam: "groupByParam",
              columns: ["location_id"],
              excludeParam: "excludeParam",
            },
            transFormDirectives: {
              joinColumn: "location_id",
              skipColumns: [
                "location_uuid",
                "gender",
                "age_range",
                "join_location",
              ],
              joinColumnParam: "joinColumnParam",
              disaggregationColumns: [],
            },
            dynamicJsonQueryGenerationDirectives: {
              patientListGenerator: {
                useTemplate: "patient-list-frozen-template",
                useTemplateVersion: "1.0",
                generatingDirectives: {
                  joinDirectives: {
                    joinType: "INNER",
                    joinCondition: "<<base_column>> = <<template_column>>",
                    baseColumn: "person_id",
                    templateColumn: "person_id",
                  },
                },
              },
            },
            default: {
              name: "StartingARTAggregationAgeGreen",
              version: "1.0",
              tag: "",
              description: "",
              uses: [
                {
                  name: "StartingARTSetBaseAgeGreen",
                  version: "1.0",
                  type: "dataset_def",
                },
              ],
              sources: [
                {
                  dataSet: "StartingARTSetBaseAgeGreen",
                  alias: "hmsd",
                },
              ],
              columns: [
                {
                  type: "derived_column",
                  alias: "join_location",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "1",
                  },
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "hmsd.location_uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "hmsd.location",
                },
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "age_range",
                  column: "hmsd.age_range",
                },
                {
                  type: "derived_column",
                  alias: "started_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.started_art)",
                  },
                },
              ],
              groupBy: {
                groupParam: "groupByParam",
                columns: ["location_id"],
                excludeParam: "excludeParam",
              },
              transFormDirectives: {
                joinColumn: "location_id",
                skipColumns: [
                  "location_uuid",
                  "gender",
                  "age_range",
                  "join_location",
                ],
                joinColumnParam: "joinColumnParam",
                disaggregationColumns: [],
              },
              dynamicJsonQueryGenerationDirectives: {
                patientListGenerator: {
                  useTemplate: "patient-list-frozen-template",
                  useTemplateVersion: "1.0",
                  generatingDirectives: {
                    joinDirectives: {
                      joinType: "INNER",
                      joinCondition: "<<base_column>> = <<template_column>>",
                      baseColumn: "person_id",
                      templateColumn: "person_id",
                    },
                  },
                },
              },
            },
          },
          StartingARTSetBaseAgeGreen: {
            name: "StartingARTSetBaseAgeGreen",
            version: "1.0",
            tag: "",
            description: "",
            uses: [],
            sources: [
              {
                table: "etl.hiv_monthly_report_dataset_cbb",
                alias: "hmsd",
              },
              {
                table: "amrs.location",
                alias: "l",
                join: {
                  type: "INNER",
                  joinCondition: "l.location_id = hmsd.location_id",
                },
              },
            ],
            columns: [
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "birthdate",
                column: "hmsd.birthdate",
              },
              {
                type: "simple_column",
                alias: "age",
                column: "hmsd.age",
              },
              {
                type: "simple_column",
                alias: "person_id",
                column: "hmsd.person_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "l.uuid",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.arv_first_regimen_location_id",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "l.name",
              },
              {
                type: "simple_column",
                alias: "cur_arv_meds",
                column: "hmsd.cur_arv_meds",
              },
              {
                type: "derived_column",
                alias: "enrollment_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "age_range",
                expressionType: "case_statement",
                expressionOptions: {
                  caseOptions: [
                    {
                      condition: "hmsd.age < 1",
                      value: "0_to_1",
                    },
                    {
                      condition: "hmsd.age between 1 and 9",
                      value: "1_to_9",
                    },
                    {
                      condition: "hmsd.age between 10 and 14",
                      value: "10_to_14",
                    },
                    {
                      condition: "hmsd.age between 15 and 19",
                      value: "15_to_19",
                    },
                    {
                      condition: "hmsd.age between 20 and 24",
                      value: "20_to_24",
                    },
                    {
                      condition: "else",
                      value: "older_than_24",
                    },
                  ],
                },
              },
              {
                type: "simple_column",
                alias: "started_art",
                column: "started_art_this_month",
              },
              {
                type: "derived_column",
                alias: "arv_first_regimen_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "cur_regimen_arv_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "simple_column",
                alias: "cur_arv_line",
                column: "hmsd.cur_arv_line",
              },
              {
                type: "simple_column",
                alias: "vl_1",
                column: "hmsd.vl_1",
              },
              {
                type: "derived_column",
                alias: "vl_1_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                },
              },
            ],
            filters: {
              conditionJoinOperator: "and",
              conditions: [
                {
                  filterType: "tableColumns",
                  conditionExpression: "endDate = ?",
                  parameterName: "endDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression:
                    "hmsd.arv_first_regimen_location_id in ?",
                  parameterName: "locations",
                },
              ],
            },
            default: {
              name: "StartingARTSetBaseAgeGreen",
              version: "1.0",
              tag: "",
              description: "",
              uses: [],
              sources: [
                {
                  table: "<<hivMonthlyDatasetSource>>",
                  alias: "hmsd",
                },
                {
                  table: "amrs.location",
                  alias: "l",
                  join: {
                    type: "INNER",
                    joinCondition: "l.location_id = hmsd.location_id",
                  },
                },
              ],
              columns: [
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "birthdate",
                  column: "hmsd.birthdate",
                },
                {
                  type: "simple_column",
                  alias: "age",
                  column: "hmsd.age",
                },
                {
                  type: "simple_column",
                  alias: "person_id",
                  column: "hmsd.person_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "l.uuid",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.arv_first_regimen_location_id",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "l.name",
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_meds",
                  column: "hmsd.cur_arv_meds",
                },
                {
                  type: "derived_column",
                  alias: "enrollment_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "age_range",
                  expressionType: "case_statement",
                  expressionOptions: {
                    caseOptions: [
                      {
                        condition: "hmsd.age < 1",
                        value: "0_to_1",
                      },
                      {
                        condition: "hmsd.age between 1 and 9",
                        value: "1_to_9",
                      },
                      {
                        condition: "hmsd.age between 10 and 14",
                        value: "10_to_14",
                      },
                      {
                        condition: "hmsd.age between 15 and 19",
                        value: "15_to_19",
                      },
                      {
                        condition: "hmsd.age between 20 and 24",
                        value: "20_to_24",
                      },
                      {
                        condition: "else",
                        value: "older_than_24",
                      },
                    ],
                  },
                },
                {
                  type: "simple_column",
                  alias: "started_art",
                  column: "started_art_this_month",
                },
                {
                  type: "derived_column",
                  alias: "arv_first_regimen_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "cur_regimen_arv_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_line",
                  column: "hmsd.cur_arv_line",
                },
                {
                  type: "simple_column",
                  alias: "vl_1",
                  column: "hmsd.vl_1",
                },
                {
                  type: "derived_column",
                  alias: "vl_1_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                  },
                },
              ],
              filters: {
                conditionJoinOperator: "and",
                conditions: [
                  {
                    filterType: "tableColumns",
                    conditionExpression: "endDate = ?",
                    parameterName: "endDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression:
                      "hmsd.arv_first_regimen_location_id in ?",
                    parameterName: "locations",
                  },
                ],
              },
            },
          },
        },
        reportQuery:
          "SELECT 1 AS `join_location`, hmsd.location_uuid AS `location_uuid`, hmsd.location AS `location`, hmsd.gender AS `gender`, hmsd.location_id AS `location_id`, hmsd.age_range AS `age_range`, sum(hmsd.started_art) AS `started_art` FROM (SELECT hmsd.gender AS `gender`, hmsd.birthdate AS `birthdate`, hmsd.age AS `age`, hmsd.person_id AS `person_id`, l.uuid AS `location_uuid`, hmsd.arv_first_regimen_location_id AS `location_id`, l.name AS `location`, hmsd.cur_arv_meds AS `cur_arv_meds`, date_format(hmsd.enrollment_date,'%d-%m-%Y') AS `enrollment_date`, CASE WHEN (hmsd.age between 20 and 24) THEN '20_to_24' WHEN (hmsd.age between 15 and 19) THEN '15_to_19' WHEN (hmsd.age between 10 and 14) THEN '10_to_14' WHEN (hmsd.age between 1 and 9) THEN '1_to_9' WHEN (hmsd.age < 1) THEN '0_to_1' ELSE 'older_than_24' END AS `age_range`, started_art_this_month AS `started_art`, date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y') AS `arv_first_regimen_start_date`, date_format(hmsd.arv_start_date,'%d-%m-%Y') AS `cur_regimen_arv_start_date`, hmsd.cur_arv_line AS `cur_arv_line`, hmsd.vl_1 AS `vl_1`, date_format(hmsd.vl_1_date,'%d-%m-%Y') AS `vl_1_date` FROM etl.hiv_monthly_report_dataset_cbb `hmsd` INNER JOIN amrs.location `l` ON (l.location_id = hmsd.location_id) WHERE (endDate = '2020-09-30') AND (hmsd.arv_first_regimen_location_id in (19))) `hmsd` GROUP BY location_id",
        queryResults: {
          results: [
            {
              join_location: 1,
              location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
              location: "Busia",
              gender: "F",
              location_id: 19,
              age_range: "older_than_24",
              started_art: 18,
            },
          ],
        },
      },
      results: {
        schemas: {
          main: {
            name: "StartingARTAggregationAgeGreen",
            version: "1.0",
            tag: "",
            description: "",
            uses: [
              {
                name: "StartingARTSetBaseAgeGreen",
                version: "1.0",
                type: "dataset_def",
              },
            ],
            sources: [
              {
                dataSet: "StartingARTSetBaseAgeGreen",
                alias: "hmsd",
              },
            ],
            columns: [
              {
                type: "derived_column",
                alias: "join_location",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "1",
                },
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "hmsd.location_uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "hmsd.location",
              },
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "age_range",
                column: "hmsd.age_range",
              },
              {
                type: "derived_column",
                alias: "started_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.started_art)",
                },
              },
            ],
            groupBy: {
              groupParam: "groupByParam",
              columns: ["location_id"],
              excludeParam: "excludeParam",
            },
            transFormDirectives: {
              joinColumn: "location_id",
              skipColumns: [
                "location_uuid",
                "gender",
                "age_range",
                "join_location",
              ],
              joinColumnParam: "joinColumnParam",
              disaggregationColumns: [],
            },
            dynamicJsonQueryGenerationDirectives: {
              patientListGenerator: {
                useTemplate: "patient-list-frozen-template",
                useTemplateVersion: "1.0",
                generatingDirectives: {
                  joinDirectives: {
                    joinType: "INNER",
                    joinCondition: "<<base_column>> = <<template_column>>",
                    baseColumn: "person_id",
                    templateColumn: "person_id",
                  },
                },
              },
            },
            default: {
              name: "StartingARTAggregationAgeGreen",
              version: "1.0",
              tag: "",
              description: "",
              uses: [
                {
                  name: "StartingARTSetBaseAgeGreen",
                  version: "1.0",
                  type: "dataset_def",
                },
              ],
              sources: [
                {
                  dataSet: "StartingARTSetBaseAgeGreen",
                  alias: "hmsd",
                },
              ],
              columns: [
                {
                  type: "derived_column",
                  alias: "join_location",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "1",
                  },
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "hmsd.location_uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "hmsd.location",
                },
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "age_range",
                  column: "hmsd.age_range",
                },
                {
                  type: "derived_column",
                  alias: "started_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.started_art)",
                  },
                },
              ],
              groupBy: {
                groupParam: "groupByParam",
                columns: ["location_id"],
                excludeParam: "excludeParam",
              },
              transFormDirectives: {
                joinColumn: "location_id",
                skipColumns: [
                  "location_uuid",
                  "gender",
                  "age_range",
                  "join_location",
                ],
                joinColumnParam: "joinColumnParam",
                disaggregationColumns: [],
              },
              dynamicJsonQueryGenerationDirectives: {
                patientListGenerator: {
                  useTemplate: "patient-list-frozen-template",
                  useTemplateVersion: "1.0",
                  generatingDirectives: {
                    joinDirectives: {
                      joinType: "INNER",
                      joinCondition: "<<base_column>> = <<template_column>>",
                      baseColumn: "person_id",
                      templateColumn: "person_id",
                    },
                  },
                },
              },
            },
          },
          StartingARTSetBaseAgeGreen: {
            name: "StartingARTSetBaseAgeGreen",
            version: "1.0",
            tag: "",
            description: "",
            uses: [],
            sources: [
              {
                table: "etl.hiv_monthly_report_dataset_cbb",
                alias: "hmsd",
              },
              {
                table: "amrs.location",
                alias: "l",
                join: {
                  type: "INNER",
                  joinCondition: "l.location_id = hmsd.location_id",
                },
              },
            ],
            columns: [
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "birthdate",
                column: "hmsd.birthdate",
              },
              {
                type: "simple_column",
                alias: "age",
                column: "hmsd.age",
              },
              {
                type: "simple_column",
                alias: "person_id",
                column: "hmsd.person_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "l.uuid",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.arv_first_regimen_location_id",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "l.name",
              },
              {
                type: "simple_column",
                alias: "cur_arv_meds",
                column: "hmsd.cur_arv_meds",
              },
              {
                type: "derived_column",
                alias: "enrollment_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "age_range",
                expressionType: "case_statement",
                expressionOptions: {
                  caseOptions: [
                    {
                      condition: "hmsd.age < 1",
                      value: "0_to_1",
                    },
                    {
                      condition: "hmsd.age between 1 and 9",
                      value: "1_to_9",
                    },
                    {
                      condition: "hmsd.age between 10 and 14",
                      value: "10_to_14",
                    },
                    {
                      condition: "hmsd.age between 15 and 19",
                      value: "15_to_19",
                    },
                    {
                      condition: "hmsd.age between 20 and 24",
                      value: "20_to_24",
                    },
                    {
                      condition: "else",
                      value: "older_than_24",
                    },
                  ],
                },
              },
              {
                type: "simple_column",
                alias: "started_art",
                column: "started_art_this_month",
              },
              {
                type: "derived_column",
                alias: "arv_first_regimen_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "cur_regimen_arv_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "simple_column",
                alias: "cur_arv_line",
                column: "hmsd.cur_arv_line",
              },
              {
                type: "simple_column",
                alias: "vl_1",
                column: "hmsd.vl_1",
              },
              {
                type: "derived_column",
                alias: "vl_1_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                },
              },
            ],
            filters: {
              conditionJoinOperator: "and",
              conditions: [
                {
                  filterType: "tableColumns",
                  conditionExpression: "endDate = ?",
                  parameterName: "endDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression:
                    "hmsd.arv_first_regimen_location_id in ?",
                  parameterName: "locations",
                },
              ],
            },
            default: {
              name: "StartingARTSetBaseAgeGreen",
              version: "1.0",
              tag: "",
              description: "",
              uses: [],
              sources: [
                {
                  table: "<<hivMonthlyDatasetSource>>",
                  alias: "hmsd",
                },
                {
                  table: "amrs.location",
                  alias: "l",
                  join: {
                    type: "INNER",
                    joinCondition: "l.location_id = hmsd.location_id",
                  },
                },
              ],
              columns: [
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "birthdate",
                  column: "hmsd.birthdate",
                },
                {
                  type: "simple_column",
                  alias: "age",
                  column: "hmsd.age",
                },
                {
                  type: "simple_column",
                  alias: "person_id",
                  column: "hmsd.person_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "l.uuid",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.arv_first_regimen_location_id",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "l.name",
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_meds",
                  column: "hmsd.cur_arv_meds",
                },
                {
                  type: "derived_column",
                  alias: "enrollment_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "age_range",
                  expressionType: "case_statement",
                  expressionOptions: {
                    caseOptions: [
                      {
                        condition: "hmsd.age < 1",
                        value: "0_to_1",
                      },
                      {
                        condition: "hmsd.age between 1 and 9",
                        value: "1_to_9",
                      },
                      {
                        condition: "hmsd.age between 10 and 14",
                        value: "10_to_14",
                      },
                      {
                        condition: "hmsd.age between 15 and 19",
                        value: "15_to_19",
                      },
                      {
                        condition: "hmsd.age between 20 and 24",
                        value: "20_to_24",
                      },
                      {
                        condition: "else",
                        value: "older_than_24",
                      },
                    ],
                  },
                },
                {
                  type: "simple_column",
                  alias: "started_art",
                  column: "started_art_this_month",
                },
                {
                  type: "derived_column",
                  alias: "arv_first_regimen_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "cur_regimen_arv_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_line",
                  column: "hmsd.cur_arv_line",
                },
                {
                  type: "simple_column",
                  alias: "vl_1",
                  column: "hmsd.vl_1",
                },
                {
                  type: "derived_column",
                  alias: "vl_1_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                  },
                },
              ],
              filters: {
                conditionJoinOperator: "and",
                conditions: [
                  {
                    filterType: "tableColumns",
                    conditionExpression: "endDate = ?",
                    parameterName: "endDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression:
                      "hmsd.arv_first_regimen_location_id in ?",
                    parameterName: "locations",
                  },
                ],
              },
            },
          },
        },
        sqlQuery:
          "SELECT 1 AS `join_location`, hmsd.location_uuid AS `location_uuid`, hmsd.location AS `location`, hmsd.gender AS `gender`, hmsd.location_id AS `location_id`, hmsd.age_range AS `age_range`, sum(hmsd.started_art) AS `started_art` FROM (SELECT hmsd.gender AS `gender`, hmsd.birthdate AS `birthdate`, hmsd.age AS `age`, hmsd.person_id AS `person_id`, l.uuid AS `location_uuid`, hmsd.arv_first_regimen_location_id AS `location_id`, l.name AS `location`, hmsd.cur_arv_meds AS `cur_arv_meds`, date_format(hmsd.enrollment_date,'%d-%m-%Y') AS `enrollment_date`, CASE WHEN (hmsd.age between 20 and 24) THEN '20_to_24' WHEN (hmsd.age between 15 and 19) THEN '15_to_19' WHEN (hmsd.age between 10 and 14) THEN '10_to_14' WHEN (hmsd.age between 1 and 9) THEN '1_to_9' WHEN (hmsd.age < 1) THEN '0_to_1' ELSE 'older_than_24' END AS `age_range`, started_art_this_month AS `started_art`, date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y') AS `arv_first_regimen_start_date`, date_format(hmsd.arv_start_date,'%d-%m-%Y') AS `cur_regimen_arv_start_date`, hmsd.cur_arv_line AS `cur_arv_line`, hmsd.vl_1 AS `vl_1`, date_format(hmsd.vl_1_date,'%d-%m-%Y') AS `vl_1_date` FROM etl.hiv_monthly_report_dataset_cbb `hmsd` INNER JOIN amrs.location `l` ON (l.location_id = hmsd.location_id) WHERE (endDate = '2020-09-30') AND (hmsd.arv_first_regimen_location_id in (19))) `hmsd` GROUP BY location_id",
        results: {
          results: [
            {
              join_location: 1,
              location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
              location: "Busia",
              gender: "F",
              location_id: 19,
              age_range: "older_than_24",
              started_art: 18,
            },
          ],
        },
      },
    },
    {
      report: {
        reportName: "StartingARTDisaggregationAgeGreen",
        params: {
          endDate: "2020-09-30",
          startDate: "2020-09-01",
          reportName: "MOH-731-report-2017",
          locationUuids: ["08fec60a-1352-11df-a1f1-0026b9348838"],
          isAggregated: false,
          locations: [19],
          referenceDate: "2020-09-14",
          startAge: 0,
          endAge: 150,
          gender: ["M", "F"],
          genders: ["M", "F"],
          hivMonthlyDatasetSource: "etl.hiv_monthly_report_dataset_cbb",
        },
        reportSchemas: {
          main: {
            name: "StartingARTDisaggregationAgeGreen",
            version: "1.0",
            tag: "",
            description: "",
            uses: [
              {
                name: "StartingARTSetBaseAgeGreen",
                version: "1.0",
                type: "dataset_def",
              },
            ],
            sources: [
              {
                dataSet: "StartingARTSetBaseAgeGreen",
                alias: "hmsd",
              },
            ],
            columns: [
              {
                type: "derived_column",
                alias: "join_location",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "1",
                },
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "hmsd.location_uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "hmsd.location",
              },
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "age_range",
                column: "hmsd.age_range",
              },
              {
                type: "derived_column",
                alias: "started_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.started_art)",
                },
              },
            ],
            groupBy: {
              groupParam: "groupByParam",
              columns: ["age_range", "location_id", "gender"],
              excludeParam: "excludeParam",
            },
            transFormDirectives: {
              joinColumn: "location_id",
              skipColumns: ["location_uuid", "join_location"],
              joinColumnParam: "joinColumnParam",
              disaggregationColumns: ["age_range", "gender"],
            },
            dynamicJsonQueryGenerationDirectives: {
              patientListGenerator: {
                useTemplate: "patient-list-frozen-template",
                useTemplateVersion: "1.0",
                generatingDirectives: {
                  joinDirectives: {
                    joinType: "INNER",
                    joinCondition: "<<base_column>> = <<template_column>>",
                    baseColumn: "person_id",
                    templateColumn: "person_id",
                  },
                },
              },
            },
            default: {
              name: "StartingARTDisaggregationAgeGreen",
              version: "1.0",
              tag: "",
              description: "",
              uses: [
                {
                  name: "StartingARTSetBaseAgeGreen",
                  version: "1.0",
                  type: "dataset_def",
                },
              ],
              sources: [
                {
                  dataSet: "StartingARTSetBaseAgeGreen",
                  alias: "hmsd",
                },
              ],
              columns: [
                {
                  type: "derived_column",
                  alias: "join_location",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "1",
                  },
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "hmsd.location_uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "hmsd.location",
                },
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "age_range",
                  column: "hmsd.age_range",
                },
                {
                  type: "derived_column",
                  alias: "started_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.started_art)",
                  },
                },
              ],
              groupBy: {
                groupParam: "groupByParam",
                columns: ["age_range", "location_id", "gender"],
                excludeParam: "excludeParam",
              },
              transFormDirectives: {
                joinColumn: "location_id",
                skipColumns: ["location_uuid", "join_location"],
                joinColumnParam: "joinColumnParam",
                disaggregationColumns: ["age_range", "gender"],
              },
              dynamicJsonQueryGenerationDirectives: {
                patientListGenerator: {
                  useTemplate: "patient-list-frozen-template",
                  useTemplateVersion: "1.0",
                  generatingDirectives: {
                    joinDirectives: {
                      joinType: "INNER",
                      joinCondition: "<<base_column>> = <<template_column>>",
                      baseColumn: "person_id",
                      templateColumn: "person_id",
                    },
                  },
                },
              },
            },
          },
          StartingARTSetBaseAgeGreen: {
            name: "StartingARTSetBaseAgeGreen",
            version: "1.0",
            tag: "",
            description: "",
            uses: [],
            sources: [
              {
                table: "etl.hiv_monthly_report_dataset_cbb",
                alias: "hmsd",
              },
              {
                table: "amrs.location",
                alias: "l",
                join: {
                  type: "INNER",
                  joinCondition: "l.location_id = hmsd.location_id",
                },
              },
            ],
            columns: [
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "birthdate",
                column: "hmsd.birthdate",
              },
              {
                type: "simple_column",
                alias: "age",
                column: "hmsd.age",
              },
              {
                type: "simple_column",
                alias: "person_id",
                column: "hmsd.person_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "l.uuid",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.arv_first_regimen_location_id",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "l.name",
              },
              {
                type: "simple_column",
                alias: "cur_arv_meds",
                column: "hmsd.cur_arv_meds",
              },
              {
                type: "derived_column",
                alias: "enrollment_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "age_range",
                expressionType: "case_statement",
                expressionOptions: {
                  caseOptions: [
                    {
                      condition: "hmsd.age < 1",
                      value: "0_to_1",
                    },
                    {
                      condition: "hmsd.age between 1 and 9",
                      value: "1_to_9",
                    },
                    {
                      condition: "hmsd.age between 10 and 14",
                      value: "10_to_14",
                    },
                    {
                      condition: "hmsd.age between 15 and 19",
                      value: "15_to_19",
                    },
                    {
                      condition: "hmsd.age between 20 and 24",
                      value: "20_to_24",
                    },
                    {
                      condition: "else",
                      value: "older_than_24",
                    },
                  ],
                },
              },
              {
                type: "simple_column",
                alias: "started_art",
                column: "started_art_this_month",
              },
              {
                type: "derived_column",
                alias: "arv_first_regimen_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "cur_regimen_arv_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "simple_column",
                alias: "cur_arv_line",
                column: "hmsd.cur_arv_line",
              },
              {
                type: "simple_column",
                alias: "vl_1",
                column: "hmsd.vl_1",
              },
              {
                type: "derived_column",
                alias: "vl_1_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                },
              },
            ],
            filters: {
              conditionJoinOperator: "and",
              conditions: [
                {
                  filterType: "tableColumns",
                  conditionExpression: "endDate = ?",
                  parameterName: "endDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression:
                    "hmsd.arv_first_regimen_location_id in ?",
                  parameterName: "locations",
                },
              ],
            },
            default: {
              name: "StartingARTSetBaseAgeGreen",
              version: "1.0",
              tag: "",
              description: "",
              uses: [],
              sources: [
                {
                  table: "<<hivMonthlyDatasetSource>>",
                  alias: "hmsd",
                },
                {
                  table: "amrs.location",
                  alias: "l",
                  join: {
                    type: "INNER",
                    joinCondition: "l.location_id = hmsd.location_id",
                  },
                },
              ],
              columns: [
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "birthdate",
                  column: "hmsd.birthdate",
                },
                {
                  type: "simple_column",
                  alias: "age",
                  column: "hmsd.age",
                },
                {
                  type: "simple_column",
                  alias: "person_id",
                  column: "hmsd.person_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "l.uuid",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.arv_first_regimen_location_id",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "l.name",
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_meds",
                  column: "hmsd.cur_arv_meds",
                },
                {
                  type: "derived_column",
                  alias: "enrollment_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "age_range",
                  expressionType: "case_statement",
                  expressionOptions: {
                    caseOptions: [
                      {
                        condition: "hmsd.age < 1",
                        value: "0_to_1",
                      },
                      {
                        condition: "hmsd.age between 1 and 9",
                        value: "1_to_9",
                      },
                      {
                        condition: "hmsd.age between 10 and 14",
                        value: "10_to_14",
                      },
                      {
                        condition: "hmsd.age between 15 and 19",
                        value: "15_to_19",
                      },
                      {
                        condition: "hmsd.age between 20 and 24",
                        value: "20_to_24",
                      },
                      {
                        condition: "else",
                        value: "older_than_24",
                      },
                    ],
                  },
                },
                {
                  type: "simple_column",
                  alias: "started_art",
                  column: "started_art_this_month",
                },
                {
                  type: "derived_column",
                  alias: "arv_first_regimen_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "cur_regimen_arv_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_line",
                  column: "hmsd.cur_arv_line",
                },
                {
                  type: "simple_column",
                  alias: "vl_1",
                  column: "hmsd.vl_1",
                },
                {
                  type: "derived_column",
                  alias: "vl_1_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                  },
                },
              ],
              filters: {
                conditionJoinOperator: "and",
                conditions: [
                  {
                    filterType: "tableColumns",
                    conditionExpression: "endDate = ?",
                    parameterName: "endDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression:
                      "hmsd.arv_first_regimen_location_id in ?",
                    parameterName: "locations",
                  },
                ],
              },
            },
          },
        },
        reportQuery:
          "SELECT 1 AS `join_location`, hmsd.location_uuid AS `location_uuid`, hmsd.location AS `location`, hmsd.gender AS `gender`, hmsd.location_id AS `location_id`, hmsd.age_range AS `age_range`, sum(hmsd.started_art) AS `started_art` FROM (SELECT hmsd.gender AS `gender`, hmsd.birthdate AS `birthdate`, hmsd.age AS `age`, hmsd.person_id AS `person_id`, l.uuid AS `location_uuid`, hmsd.arv_first_regimen_location_id AS `location_id`, l.name AS `location`, hmsd.cur_arv_meds AS `cur_arv_meds`, date_format(hmsd.enrollment_date,'%d-%m-%Y') AS `enrollment_date`, CASE WHEN (hmsd.age between 20 and 24) THEN '20_to_24' WHEN (hmsd.age between 15 and 19) THEN '15_to_19' WHEN (hmsd.age between 10 and 14) THEN '10_to_14' WHEN (hmsd.age between 1 and 9) THEN '1_to_9' WHEN (hmsd.age < 1) THEN '0_to_1' ELSE 'older_than_24' END AS `age_range`, started_art_this_month AS `started_art`, date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y') AS `arv_first_regimen_start_date`, date_format(hmsd.arv_start_date,'%d-%m-%Y') AS `cur_regimen_arv_start_date`, hmsd.cur_arv_line AS `cur_arv_line`, hmsd.vl_1 AS `vl_1`, date_format(hmsd.vl_1_date,'%d-%m-%Y') AS `vl_1_date` FROM etl.hiv_monthly_report_dataset_cbb `hmsd` INNER JOIN amrs.location `l` ON (l.location_id = hmsd.location_id) WHERE (endDate = '2020-09-30') AND (hmsd.arv_first_regimen_location_id in (19))) `hmsd` GROUP BY age_range, location_id, gender",
        queryResults: {
          results: [
            {
              join_location: 1,
              location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
              location: "Busia",
              location_id: 19,
              dc__age_range__10_to_14__gender__F__started_art: 0,
              dc__age_range__10_to_14__gender__M__started_art: 0,
              dc__age_range__15_to_19__gender__F__started_art: 1,
              dc__age_range__15_to_19__gender__M__started_art: 0,
              dc__age_range__1_to_9__gender__F__started_art: 0,
              dc__age_range__1_to_9__gender__M__started_art: 0,
              dc__age_range__20_to_24__gender__F__started_art: 0,
              dc__age_range__20_to_24__gender__M__started_art: 0,
              dc__age_range__older_than_24__gender__F__started_art: 9,
              dc__age_range__older_than_24__gender__M__started_art: 8,
            },
          ],
        },
      },
      results: {
        schemas: {
          main: {
            name: "StartingARTDisaggregationAgeGreen",
            version: "1.0",
            tag: "",
            description: "",
            uses: [
              {
                name: "StartingARTSetBaseAgeGreen",
                version: "1.0",
                type: "dataset_def",
              },
            ],
            sources: [
              {
                dataSet: "StartingARTSetBaseAgeGreen",
                alias: "hmsd",
              },
            ],
            columns: [
              {
                type: "derived_column",
                alias: "join_location",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "1",
                },
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "hmsd.location_uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "hmsd.location",
              },
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "age_range",
                column: "hmsd.age_range",
              },
              {
                type: "derived_column",
                alias: "started_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.started_art)",
                },
              },
            ],
            groupBy: {
              groupParam: "groupByParam",
              columns: ["age_range", "location_id", "gender"],
              excludeParam: "excludeParam",
            },
            transFormDirectives: {
              joinColumn: "location_id",
              skipColumns: ["location_uuid", "join_location"],
              joinColumnParam: "joinColumnParam",
              disaggregationColumns: ["age_range", "gender"],
            },
            dynamicJsonQueryGenerationDirectives: {
              patientListGenerator: {
                useTemplate: "patient-list-frozen-template",
                useTemplateVersion: "1.0",
                generatingDirectives: {
                  joinDirectives: {
                    joinType: "INNER",
                    joinCondition: "<<base_column>> = <<template_column>>",
                    baseColumn: "person_id",
                    templateColumn: "person_id",
                  },
                },
              },
            },
            default: {
              name: "StartingARTDisaggregationAgeGreen",
              version: "1.0",
              tag: "",
              description: "",
              uses: [
                {
                  name: "StartingARTSetBaseAgeGreen",
                  version: "1.0",
                  type: "dataset_def",
                },
              ],
              sources: [
                {
                  dataSet: "StartingARTSetBaseAgeGreen",
                  alias: "hmsd",
                },
              ],
              columns: [
                {
                  type: "derived_column",
                  alias: "join_location",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "1",
                  },
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "hmsd.location_uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "hmsd.location",
                },
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "age_range",
                  column: "hmsd.age_range",
                },
                {
                  type: "derived_column",
                  alias: "started_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.started_art)",
                  },
                },
              ],
              groupBy: {
                groupParam: "groupByParam",
                columns: ["age_range", "location_id", "gender"],
                excludeParam: "excludeParam",
              },
              transFormDirectives: {
                joinColumn: "location_id",
                skipColumns: ["location_uuid", "join_location"],
                joinColumnParam: "joinColumnParam",
                disaggregationColumns: ["age_range", "gender"],
              },
              dynamicJsonQueryGenerationDirectives: {
                patientListGenerator: {
                  useTemplate: "patient-list-frozen-template",
                  useTemplateVersion: "1.0",
                  generatingDirectives: {
                    joinDirectives: {
                      joinType: "INNER",
                      joinCondition: "<<base_column>> = <<template_column>>",
                      baseColumn: "person_id",
                      templateColumn: "person_id",
                    },
                  },
                },
              },
            },
          },
          StartingARTSetBaseAgeGreen: {
            name: "StartingARTSetBaseAgeGreen",
            version: "1.0",
            tag: "",
            description: "",
            uses: [],
            sources: [
              {
                table: "etl.hiv_monthly_report_dataset_cbb",
                alias: "hmsd",
              },
              {
                table: "amrs.location",
                alias: "l",
                join: {
                  type: "INNER",
                  joinCondition: "l.location_id = hmsd.location_id",
                },
              },
            ],
            columns: [
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "birthdate",
                column: "hmsd.birthdate",
              },
              {
                type: "simple_column",
                alias: "age",
                column: "hmsd.age",
              },
              {
                type: "simple_column",
                alias: "person_id",
                column: "hmsd.person_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "l.uuid",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.arv_first_regimen_location_id",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "l.name",
              },
              {
                type: "simple_column",
                alias: "cur_arv_meds",
                column: "hmsd.cur_arv_meds",
              },
              {
                type: "derived_column",
                alias: "enrollment_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "age_range",
                expressionType: "case_statement",
                expressionOptions: {
                  caseOptions: [
                    {
                      condition: "hmsd.age < 1",
                      value: "0_to_1",
                    },
                    {
                      condition: "hmsd.age between 1 and 9",
                      value: "1_to_9",
                    },
                    {
                      condition: "hmsd.age between 10 and 14",
                      value: "10_to_14",
                    },
                    {
                      condition: "hmsd.age between 15 and 19",
                      value: "15_to_19",
                    },
                    {
                      condition: "hmsd.age between 20 and 24",
                      value: "20_to_24",
                    },
                    {
                      condition: "else",
                      value: "older_than_24",
                    },
                  ],
                },
              },
              {
                type: "simple_column",
                alias: "started_art",
                column: "started_art_this_month",
              },
              {
                type: "derived_column",
                alias: "arv_first_regimen_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "cur_regimen_arv_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "simple_column",
                alias: "cur_arv_line",
                column: "hmsd.cur_arv_line",
              },
              {
                type: "simple_column",
                alias: "vl_1",
                column: "hmsd.vl_1",
              },
              {
                type: "derived_column",
                alias: "vl_1_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                },
              },
            ],
            filters: {
              conditionJoinOperator: "and",
              conditions: [
                {
                  filterType: "tableColumns",
                  conditionExpression: "endDate = ?",
                  parameterName: "endDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression:
                    "hmsd.arv_first_regimen_location_id in ?",
                  parameterName: "locations",
                },
              ],
            },
            default: {
              name: "StartingARTSetBaseAgeGreen",
              version: "1.0",
              tag: "",
              description: "",
              uses: [],
              sources: [
                {
                  table: "<<hivMonthlyDatasetSource>>",
                  alias: "hmsd",
                },
                {
                  table: "amrs.location",
                  alias: "l",
                  join: {
                    type: "INNER",
                    joinCondition: "l.location_id = hmsd.location_id",
                  },
                },
              ],
              columns: [
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "birthdate",
                  column: "hmsd.birthdate",
                },
                {
                  type: "simple_column",
                  alias: "age",
                  column: "hmsd.age",
                },
                {
                  type: "simple_column",
                  alias: "person_id",
                  column: "hmsd.person_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "l.uuid",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.arv_first_regimen_location_id",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "l.name",
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_meds",
                  column: "hmsd.cur_arv_meds",
                },
                {
                  type: "derived_column",
                  alias: "enrollment_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "age_range",
                  expressionType: "case_statement",
                  expressionOptions: {
                    caseOptions: [
                      {
                        condition: "hmsd.age < 1",
                        value: "0_to_1",
                      },
                      {
                        condition: "hmsd.age between 1 and 9",
                        value: "1_to_9",
                      },
                      {
                        condition: "hmsd.age between 10 and 14",
                        value: "10_to_14",
                      },
                      {
                        condition: "hmsd.age between 15 and 19",
                        value: "15_to_19",
                      },
                      {
                        condition: "hmsd.age between 20 and 24",
                        value: "20_to_24",
                      },
                      {
                        condition: "else",
                        value: "older_than_24",
                      },
                    ],
                  },
                },
                {
                  type: "simple_column",
                  alias: "started_art",
                  column: "started_art_this_month",
                },
                {
                  type: "derived_column",
                  alias: "arv_first_regimen_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "cur_regimen_arv_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_line",
                  column: "hmsd.cur_arv_line",
                },
                {
                  type: "simple_column",
                  alias: "vl_1",
                  column: "hmsd.vl_1",
                },
                {
                  type: "derived_column",
                  alias: "vl_1_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                  },
                },
              ],
              filters: {
                conditionJoinOperator: "and",
                conditions: [
                  {
                    filterType: "tableColumns",
                    conditionExpression: "endDate = ?",
                    parameterName: "endDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression:
                      "hmsd.arv_first_regimen_location_id in ?",
                    parameterName: "locations",
                  },
                ],
              },
            },
          },
        },
        sqlQuery:
          "SELECT 1 AS `join_location`, hmsd.location_uuid AS `location_uuid`, hmsd.location AS `location`, hmsd.gender AS `gender`, hmsd.location_id AS `location_id`, hmsd.age_range AS `age_range`, sum(hmsd.started_art) AS `started_art` FROM (SELECT hmsd.gender AS `gender`, hmsd.birthdate AS `birthdate`, hmsd.age AS `age`, hmsd.person_id AS `person_id`, l.uuid AS `location_uuid`, hmsd.arv_first_regimen_location_id AS `location_id`, l.name AS `location`, hmsd.cur_arv_meds AS `cur_arv_meds`, date_format(hmsd.enrollment_date,'%d-%m-%Y') AS `enrollment_date`, CASE WHEN (hmsd.age between 20 and 24) THEN '20_to_24' WHEN (hmsd.age between 15 and 19) THEN '15_to_19' WHEN (hmsd.age between 10 and 14) THEN '10_to_14' WHEN (hmsd.age between 1 and 9) THEN '1_to_9' WHEN (hmsd.age < 1) THEN '0_to_1' ELSE 'older_than_24' END AS `age_range`, started_art_this_month AS `started_art`, date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y') AS `arv_first_regimen_start_date`, date_format(hmsd.arv_start_date,'%d-%m-%Y') AS `cur_regimen_arv_start_date`, hmsd.cur_arv_line AS `cur_arv_line`, hmsd.vl_1 AS `vl_1`, date_format(hmsd.vl_1_date,'%d-%m-%Y') AS `vl_1_date` FROM etl.hiv_monthly_report_dataset_cbb `hmsd` INNER JOIN amrs.location `l` ON (l.location_id = hmsd.location_id) WHERE (endDate = '2020-09-30') AND (hmsd.arv_first_regimen_location_id in (19))) `hmsd` GROUP BY age_range, location_id, gender",
        results: {
          results: [
            {
              join_location: 1,
              location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
              location: "Busia",
              location_id: 19,
              dc__age_range__10_to_14__gender__F__started_art: 0,
              dc__age_range__10_to_14__gender__M__started_art: 0,
              dc__age_range__15_to_19__gender__F__started_art: 1,
              dc__age_range__15_to_19__gender__M__started_art: 0,
              dc__age_range__1_to_9__gender__F__started_art: 0,
              dc__age_range__1_to_9__gender__M__started_art: 0,
              dc__age_range__20_to_24__gender__F__started_art: 0,
              dc__age_range__20_to_24__gender__M__started_art: 0,
              dc__age_range__older_than_24__gender__F__started_art: 9,
              dc__age_range__older_than_24__gender__M__started_art: 8,
            },
          ],
        },
      },
    },
    {
      report: {
        reportName: "StartingARTDisaggregationAgeOnlyGreen",
        params: {
          endDate: "2020-09-30",
          startDate: "2020-09-01",
          reportName: "MOH-731-report-2017",
          locationUuids: ["08fec60a-1352-11df-a1f1-0026b9348838"],
          isAggregated: false,
          locations: [19],
          referenceDate: "2020-09-14",
          startAge: 0,
          endAge: 150,
          gender: ["M", "F"],
          genders: ["M", "F"],
          hivMonthlyDatasetSource: "etl.hiv_monthly_report_dataset_cbb",
        },
        reportSchemas: {
          main: {
            name: "StartingARTDisaggregationAgeOnlyGreen",
            version: "1.0",
            tag: "",
            description: "",
            uses: [
              {
                name: "StartingARTSetBaseAgeGreen",
                version: "1.0",
                type: "dataset_def",
              },
            ],
            sources: [
              {
                dataSet: "StartingARTSetBaseAgeGreen",
                alias: "hmsd",
              },
            ],
            columns: [
              {
                type: "derived_column",
                alias: "join_location",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "1",
                },
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "hmsd.location_uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "hmsd.location",
              },
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "age_range",
                column: "hmsd.age_range",
              },
              {
                type: "derived_column",
                alias: "started_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.started_art)",
                },
              },
            ],
            groupBy: {
              groupParam: "groupByParam",
              columns: ["age_range", "location_id"],
              excludeParam: "excludeParam",
            },
            transFormDirectives: {
              joinColumn: "location_id",
              skipColumns: ["location_uuid", "join_location", "gender"],
              joinColumnParam: "joinColumnParam",
              disaggregationColumns: ["age_range"],
            },
            dynamicJsonQueryGenerationDirectives: {
              patientListGenerator: {
                useTemplate: "patient-list-frozen-template",
                useTemplateVersion: "1.0",
                generatingDirectives: {
                  joinDirectives: {
                    joinType: "INNER",
                    joinCondition: "<<base_column>> = <<template_column>>",
                    baseColumn: "person_id",
                    templateColumn: "person_id",
                  },
                },
              },
            },
            default: {
              name: "StartingARTDisaggregationAgeOnlyGreen",
              version: "1.0",
              tag: "",
              description: "",
              uses: [
                {
                  name: "StartingARTSetBaseAgeGreen",
                  version: "1.0",
                  type: "dataset_def",
                },
              ],
              sources: [
                {
                  dataSet: "StartingARTSetBaseAgeGreen",
                  alias: "hmsd",
                },
              ],
              columns: [
                {
                  type: "derived_column",
                  alias: "join_location",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "1",
                  },
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "hmsd.location_uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "hmsd.location",
                },
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "age_range",
                  column: "hmsd.age_range",
                },
                {
                  type: "derived_column",
                  alias: "started_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.started_art)",
                  },
                },
              ],
              groupBy: {
                groupParam: "groupByParam",
                columns: ["age_range", "location_id"],
                excludeParam: "excludeParam",
              },
              transFormDirectives: {
                joinColumn: "location_id",
                skipColumns: ["location_uuid", "join_location", "gender"],
                joinColumnParam: "joinColumnParam",
                disaggregationColumns: ["age_range"],
              },
              dynamicJsonQueryGenerationDirectives: {
                patientListGenerator: {
                  useTemplate: "patient-list-frozen-template",
                  useTemplateVersion: "1.0",
                  generatingDirectives: {
                    joinDirectives: {
                      joinType: "INNER",
                      joinCondition: "<<base_column>> = <<template_column>>",
                      baseColumn: "person_id",
                      templateColumn: "person_id",
                    },
                  },
                },
              },
            },
          },
          StartingARTSetBaseAgeGreen: {
            name: "StartingARTSetBaseAgeGreen",
            version: "1.0",
            tag: "",
            description: "",
            uses: [],
            sources: [
              {
                table: "etl.hiv_monthly_report_dataset_cbb",
                alias: "hmsd",
              },
              {
                table: "amrs.location",
                alias: "l",
                join: {
                  type: "INNER",
                  joinCondition: "l.location_id = hmsd.location_id",
                },
              },
            ],
            columns: [
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "birthdate",
                column: "hmsd.birthdate",
              },
              {
                type: "simple_column",
                alias: "age",
                column: "hmsd.age",
              },
              {
                type: "simple_column",
                alias: "person_id",
                column: "hmsd.person_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "l.uuid",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.arv_first_regimen_location_id",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "l.name",
              },
              {
                type: "simple_column",
                alias: "cur_arv_meds",
                column: "hmsd.cur_arv_meds",
              },
              {
                type: "derived_column",
                alias: "enrollment_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "age_range",
                expressionType: "case_statement",
                expressionOptions: {
                  caseOptions: [
                    {
                      condition: "hmsd.age < 1",
                      value: "0_to_1",
                    },
                    {
                      condition: "hmsd.age between 1 and 9",
                      value: "1_to_9",
                    },
                    {
                      condition: "hmsd.age between 10 and 14",
                      value: "10_to_14",
                    },
                    {
                      condition: "hmsd.age between 15 and 19",
                      value: "15_to_19",
                    },
                    {
                      condition: "hmsd.age between 20 and 24",
                      value: "20_to_24",
                    },
                    {
                      condition: "else",
                      value: "older_than_24",
                    },
                  ],
                },
              },
              {
                type: "simple_column",
                alias: "started_art",
                column: "started_art_this_month",
              },
              {
                type: "derived_column",
                alias: "arv_first_regimen_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "cur_regimen_arv_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "simple_column",
                alias: "cur_arv_line",
                column: "hmsd.cur_arv_line",
              },
              {
                type: "simple_column",
                alias: "vl_1",
                column: "hmsd.vl_1",
              },
              {
                type: "derived_column",
                alias: "vl_1_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                },
              },
            ],
            filters: {
              conditionJoinOperator: "and",
              conditions: [
                {
                  filterType: "tableColumns",
                  conditionExpression: "endDate = ?",
                  parameterName: "endDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression:
                    "hmsd.arv_first_regimen_location_id in ?",
                  parameterName: "locations",
                },
              ],
            },
            default: {
              name: "StartingARTSetBaseAgeGreen",
              version: "1.0",
              tag: "",
              description: "",
              uses: [],
              sources: [
                {
                  table: "<<hivMonthlyDatasetSource>>",
                  alias: "hmsd",
                },
                {
                  table: "amrs.location",
                  alias: "l",
                  join: {
                    type: "INNER",
                    joinCondition: "l.location_id = hmsd.location_id",
                  },
                },
              ],
              columns: [
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "birthdate",
                  column: "hmsd.birthdate",
                },
                {
                  type: "simple_column",
                  alias: "age",
                  column: "hmsd.age",
                },
                {
                  type: "simple_column",
                  alias: "person_id",
                  column: "hmsd.person_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "l.uuid",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.arv_first_regimen_location_id",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "l.name",
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_meds",
                  column: "hmsd.cur_arv_meds",
                },
                {
                  type: "derived_column",
                  alias: "enrollment_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "age_range",
                  expressionType: "case_statement",
                  expressionOptions: {
                    caseOptions: [
                      {
                        condition: "hmsd.age < 1",
                        value: "0_to_1",
                      },
                      {
                        condition: "hmsd.age between 1 and 9",
                        value: "1_to_9",
                      },
                      {
                        condition: "hmsd.age between 10 and 14",
                        value: "10_to_14",
                      },
                      {
                        condition: "hmsd.age between 15 and 19",
                        value: "15_to_19",
                      },
                      {
                        condition: "hmsd.age between 20 and 24",
                        value: "20_to_24",
                      },
                      {
                        condition: "else",
                        value: "older_than_24",
                      },
                    ],
                  },
                },
                {
                  type: "simple_column",
                  alias: "started_art",
                  column: "started_art_this_month",
                },
                {
                  type: "derived_column",
                  alias: "arv_first_regimen_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "cur_regimen_arv_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_line",
                  column: "hmsd.cur_arv_line",
                },
                {
                  type: "simple_column",
                  alias: "vl_1",
                  column: "hmsd.vl_1",
                },
                {
                  type: "derived_column",
                  alias: "vl_1_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                  },
                },
              ],
              filters: {
                conditionJoinOperator: "and",
                conditions: [
                  {
                    filterType: "tableColumns",
                    conditionExpression: "endDate = ?",
                    parameterName: "endDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression:
                      "hmsd.arv_first_regimen_location_id in ?",
                    parameterName: "locations",
                  },
                ],
              },
            },
          },
        },
        reportQuery:
          "SELECT 1 AS `join_location`, hmsd.location_uuid AS `location_uuid`, hmsd.location AS `location`, hmsd.gender AS `gender`, hmsd.location_id AS `location_id`, hmsd.age_range AS `age_range`, sum(hmsd.started_art) AS `started_art` FROM (SELECT hmsd.gender AS `gender`, hmsd.birthdate AS `birthdate`, hmsd.age AS `age`, hmsd.person_id AS `person_id`, l.uuid AS `location_uuid`, hmsd.arv_first_regimen_location_id AS `location_id`, l.name AS `location`, hmsd.cur_arv_meds AS `cur_arv_meds`, date_format(hmsd.enrollment_date,'%d-%m-%Y') AS `enrollment_date`, CASE WHEN (hmsd.age between 20 and 24) THEN '20_to_24' WHEN (hmsd.age between 15 and 19) THEN '15_to_19' WHEN (hmsd.age between 10 and 14) THEN '10_to_14' WHEN (hmsd.age between 1 and 9) THEN '1_to_9' WHEN (hmsd.age < 1) THEN '0_to_1' ELSE 'older_than_24' END AS `age_range`, started_art_this_month AS `started_art`, date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y') AS `arv_first_regimen_start_date`, date_format(hmsd.arv_start_date,'%d-%m-%Y') AS `cur_regimen_arv_start_date`, hmsd.cur_arv_line AS `cur_arv_line`, hmsd.vl_1 AS `vl_1`, date_format(hmsd.vl_1_date,'%d-%m-%Y') AS `vl_1_date` FROM etl.hiv_monthly_report_dataset_cbb `hmsd` INNER JOIN amrs.location `l` ON (l.location_id = hmsd.location_id) WHERE (endDate = '2020-09-30') AND (hmsd.arv_first_regimen_location_id in (19))) `hmsd` GROUP BY age_range, location_id",
        queryResults: {
          results: [
            {
              join_location: 1,
              location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
              location: "Busia",
              gender: "F",
              location_id: 19,
              dc__age_range__10_to_14__started_art: 0,
              dc__age_range__15_to_19__started_art: 1,
              dc__age_range__1_to_9__started_art: 0,
              dc__age_range__20_to_24__started_art: 0,
              dc__age_range__older_than_24__started_art: 17,
            },
          ],
        },
      },
      results: {
        schemas: {
          main: {
            name: "StartingARTDisaggregationAgeOnlyGreen",
            version: "1.0",
            tag: "",
            description: "",
            uses: [
              {
                name: "StartingARTSetBaseAgeGreen",
                version: "1.0",
                type: "dataset_def",
              },
            ],
            sources: [
              {
                dataSet: "StartingARTSetBaseAgeGreen",
                alias: "hmsd",
              },
            ],
            columns: [
              {
                type: "derived_column",
                alias: "join_location",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "1",
                },
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "hmsd.location_uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "hmsd.location",
              },
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "age_range",
                column: "hmsd.age_range",
              },
              {
                type: "derived_column",
                alias: "started_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.started_art)",
                },
              },
            ],
            groupBy: {
              groupParam: "groupByParam",
              columns: ["age_range", "location_id"],
              excludeParam: "excludeParam",
            },
            transFormDirectives: {
              joinColumn: "location_id",
              skipColumns: ["location_uuid", "join_location", "gender"],
              joinColumnParam: "joinColumnParam",
              disaggregationColumns: ["age_range"],
            },
            dynamicJsonQueryGenerationDirectives: {
              patientListGenerator: {
                useTemplate: "patient-list-frozen-template",
                useTemplateVersion: "1.0",
                generatingDirectives: {
                  joinDirectives: {
                    joinType: "INNER",
                    joinCondition: "<<base_column>> = <<template_column>>",
                    baseColumn: "person_id",
                    templateColumn: "person_id",
                  },
                },
              },
            },
            default: {
              name: "StartingARTDisaggregationAgeOnlyGreen",
              version: "1.0",
              tag: "",
              description: "",
              uses: [
                {
                  name: "StartingARTSetBaseAgeGreen",
                  version: "1.0",
                  type: "dataset_def",
                },
              ],
              sources: [
                {
                  dataSet: "StartingARTSetBaseAgeGreen",
                  alias: "hmsd",
                },
              ],
              columns: [
                {
                  type: "derived_column",
                  alias: "join_location",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "1",
                  },
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "hmsd.location_uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "hmsd.location",
                },
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "age_range",
                  column: "hmsd.age_range",
                },
                {
                  type: "derived_column",
                  alias: "started_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.started_art)",
                  },
                },
              ],
              groupBy: {
                groupParam: "groupByParam",
                columns: ["age_range", "location_id"],
                excludeParam: "excludeParam",
              },
              transFormDirectives: {
                joinColumn: "location_id",
                skipColumns: ["location_uuid", "join_location", "gender"],
                joinColumnParam: "joinColumnParam",
                disaggregationColumns: ["age_range"],
              },
              dynamicJsonQueryGenerationDirectives: {
                patientListGenerator: {
                  useTemplate: "patient-list-frozen-template",
                  useTemplateVersion: "1.0",
                  generatingDirectives: {
                    joinDirectives: {
                      joinType: "INNER",
                      joinCondition: "<<base_column>> = <<template_column>>",
                      baseColumn: "person_id",
                      templateColumn: "person_id",
                    },
                  },
                },
              },
            },
          },
          StartingARTSetBaseAgeGreen: {
            name: "StartingARTSetBaseAgeGreen",
            version: "1.0",
            tag: "",
            description: "",
            uses: [],
            sources: [
              {
                table: "etl.hiv_monthly_report_dataset_cbb",
                alias: "hmsd",
              },
              {
                table: "amrs.location",
                alias: "l",
                join: {
                  type: "INNER",
                  joinCondition: "l.location_id = hmsd.location_id",
                },
              },
            ],
            columns: [
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "birthdate",
                column: "hmsd.birthdate",
              },
              {
                type: "simple_column",
                alias: "age",
                column: "hmsd.age",
              },
              {
                type: "simple_column",
                alias: "person_id",
                column: "hmsd.person_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "l.uuid",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.arv_first_regimen_location_id",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "l.name",
              },
              {
                type: "simple_column",
                alias: "cur_arv_meds",
                column: "hmsd.cur_arv_meds",
              },
              {
                type: "derived_column",
                alias: "enrollment_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "age_range",
                expressionType: "case_statement",
                expressionOptions: {
                  caseOptions: [
                    {
                      condition: "hmsd.age < 1",
                      value: "0_to_1",
                    },
                    {
                      condition: "hmsd.age between 1 and 9",
                      value: "1_to_9",
                    },
                    {
                      condition: "hmsd.age between 10 and 14",
                      value: "10_to_14",
                    },
                    {
                      condition: "hmsd.age between 15 and 19",
                      value: "15_to_19",
                    },
                    {
                      condition: "hmsd.age between 20 and 24",
                      value: "20_to_24",
                    },
                    {
                      condition: "else",
                      value: "older_than_24",
                    },
                  ],
                },
              },
              {
                type: "simple_column",
                alias: "started_art",
                column: "started_art_this_month",
              },
              {
                type: "derived_column",
                alias: "arv_first_regimen_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "cur_regimen_arv_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "simple_column",
                alias: "cur_arv_line",
                column: "hmsd.cur_arv_line",
              },
              {
                type: "simple_column",
                alias: "vl_1",
                column: "hmsd.vl_1",
              },
              {
                type: "derived_column",
                alias: "vl_1_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                },
              },
            ],
            filters: {
              conditionJoinOperator: "and",
              conditions: [
                {
                  filterType: "tableColumns",
                  conditionExpression: "endDate = ?",
                  parameterName: "endDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression:
                    "hmsd.arv_first_regimen_location_id in ?",
                  parameterName: "locations",
                },
              ],
            },
            default: {
              name: "StartingARTSetBaseAgeGreen",
              version: "1.0",
              tag: "",
              description: "",
              uses: [],
              sources: [
                {
                  table: "<<hivMonthlyDatasetSource>>",
                  alias: "hmsd",
                },
                {
                  table: "amrs.location",
                  alias: "l",
                  join: {
                    type: "INNER",
                    joinCondition: "l.location_id = hmsd.location_id",
                  },
                },
              ],
              columns: [
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "birthdate",
                  column: "hmsd.birthdate",
                },
                {
                  type: "simple_column",
                  alias: "age",
                  column: "hmsd.age",
                },
                {
                  type: "simple_column",
                  alias: "person_id",
                  column: "hmsd.person_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "l.uuid",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.arv_first_regimen_location_id",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "l.name",
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_meds",
                  column: "hmsd.cur_arv_meds",
                },
                {
                  type: "derived_column",
                  alias: "enrollment_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "age_range",
                  expressionType: "case_statement",
                  expressionOptions: {
                    caseOptions: [
                      {
                        condition: "hmsd.age < 1",
                        value: "0_to_1",
                      },
                      {
                        condition: "hmsd.age between 1 and 9",
                        value: "1_to_9",
                      },
                      {
                        condition: "hmsd.age between 10 and 14",
                        value: "10_to_14",
                      },
                      {
                        condition: "hmsd.age between 15 and 19",
                        value: "15_to_19",
                      },
                      {
                        condition: "hmsd.age between 20 and 24",
                        value: "20_to_24",
                      },
                      {
                        condition: "else",
                        value: "older_than_24",
                      },
                    ],
                  },
                },
                {
                  type: "simple_column",
                  alias: "started_art",
                  column: "started_art_this_month",
                },
                {
                  type: "derived_column",
                  alias: "arv_first_regimen_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "cur_regimen_arv_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_line",
                  column: "hmsd.cur_arv_line",
                },
                {
                  type: "simple_column",
                  alias: "vl_1",
                  column: "hmsd.vl_1",
                },
                {
                  type: "derived_column",
                  alias: "vl_1_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                  },
                },
              ],
              filters: {
                conditionJoinOperator: "and",
                conditions: [
                  {
                    filterType: "tableColumns",
                    conditionExpression: "endDate = ?",
                    parameterName: "endDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression:
                      "hmsd.arv_first_regimen_location_id in ?",
                    parameterName: "locations",
                  },
                ],
              },
            },
          },
        },
        sqlQuery:
          "SELECT 1 AS `join_location`, hmsd.location_uuid AS `location_uuid`, hmsd.location AS `location`, hmsd.gender AS `gender`, hmsd.location_id AS `location_id`, hmsd.age_range AS `age_range`, sum(hmsd.started_art) AS `started_art` FROM (SELECT hmsd.gender AS `gender`, hmsd.birthdate AS `birthdate`, hmsd.age AS `age`, hmsd.person_id AS `person_id`, l.uuid AS `location_uuid`, hmsd.arv_first_regimen_location_id AS `location_id`, l.name AS `location`, hmsd.cur_arv_meds AS `cur_arv_meds`, date_format(hmsd.enrollment_date,'%d-%m-%Y') AS `enrollment_date`, CASE WHEN (hmsd.age between 20 and 24) THEN '20_to_24' WHEN (hmsd.age between 15 and 19) THEN '15_to_19' WHEN (hmsd.age between 10 and 14) THEN '10_to_14' WHEN (hmsd.age between 1 and 9) THEN '1_to_9' WHEN (hmsd.age < 1) THEN '0_to_1' ELSE 'older_than_24' END AS `age_range`, started_art_this_month AS `started_art`, date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y') AS `arv_first_regimen_start_date`, date_format(hmsd.arv_start_date,'%d-%m-%Y') AS `cur_regimen_arv_start_date`, hmsd.cur_arv_line AS `cur_arv_line`, hmsd.vl_1 AS `vl_1`, date_format(hmsd.vl_1_date,'%d-%m-%Y') AS `vl_1_date` FROM etl.hiv_monthly_report_dataset_cbb `hmsd` INNER JOIN amrs.location `l` ON (l.location_id = hmsd.location_id) WHERE (endDate = '2020-09-30') AND (hmsd.arv_first_regimen_location_id in (19))) `hmsd` GROUP BY age_range, location_id",
        results: {
          results: [
            {
              join_location: 1,
              location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
              location: "Busia",
              gender: "F",
              location_id: 19,
              dc__age_range__10_to_14__started_art: 0,
              dc__age_range__15_to_19__started_art: 1,
              dc__age_range__1_to_9__started_art: 0,
              dc__age_range__20_to_24__started_art: 0,
              dc__age_range__older_than_24__started_art: 17,
            },
          ],
        },
      },
    },
    {
      report: {
        reportName: "mainDatasetAggregateAge18Disaggregation",
        params: {
          endDate: "2020-09-30",
          startDate: "2020-09-01",
          reportName: "MOH-731-report-2017",
          locationUuids: ["08fec60a-1352-11df-a1f1-0026b9348838"],
          isAggregated: false,
          locations: [19],
          referenceDate: "2020-09-14",
          startAge: 0,
          endAge: 150,
          gender: ["M", "F"],
          genders: ["M", "F"],
          hivMonthlyDatasetSource: "etl.hiv_monthly_report_dataset_cbb",
        },
        reportSchemas: {
          main: {
            name: "mainDatasetAggregateAgeDisaggregation",
            version: "1.0",
            tag: "",
            description: "",
            uses: [
              {
                name: "mainDataSetBaseAge18",
                version: "1.0",
                type: "dataset_def",
              },
            ],
            sources: [
              {
                dataSet: "mainDataSetBaseAge18",
                alias: "hmsd",
              },
            ],
            columns: [
              {
                type: "derived_column",
                alias: "join_location",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "1",
                },
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "hmsd.location_uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "hmsd.location",
              },
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "age_range",
                column: "hmsd.age_range",
              },
              {
                type: "derived_column",
                alias: "enrolled_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.enrolled_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "pre_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.pre_art)",
                },
              },
              {
                type: "derived_column",
                alias: "current_in_care",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.current_in_care)",
                },
              },
              {
                type: "derived_column",
                alias: "active_on_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.active_on_art)",
                },
              },
              {
                type: "derived_column",
                alias: "on_ctx_prophylaxis",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.on_ctx_prophylaxis)",
                },
              },
              {
                type: "derived_column",
                alias: "screened_for_tb",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.screened_for_tb)",
                },
              },
              {
                type: "derived_column",
                alias: "tb_screened_this_visit_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.tb_screened_this_visit_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "tb_screened_positive",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.tb_screened_positive)",
                },
              },
              {
                type: "derived_column",
                alias: "started_ipt",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.started_ipt)",
                },
              },
              {
                type: "derived_column",
                alias: "completed_ipt_past_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.completed_ipt_past_12_months)",
                },
              },
              {
                type: "derived_column",
                alias: "condoms_provided",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.condoms_provided)",
                },
              },
              {
                type: "derived_column",
                alias: "started_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.condoms_provided)",
                },
              },
              {
                type: "derived_column",
                alias: "on_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.on_modern_contraception)",
                },
              },
              {
                type: "derived_column",
                alias: "f_gte_18_visits",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.f_gte_18_visits)",
                },
              },
            ],
            groupBy: {
              groupParam: "groupByParam",
              columns: ["age_range", "location_id"],
              excludeParam: "excludeParam",
            },
            transFormDirectives: {
              joinColumn: "location_id",
              joinColumnParam: "joinColumnParam",
              skipColumns: ["location_uuid", "gender", "join_location"],
              disaggregationColumns: ["age_range"],
            },
            dynamicJsonQueryGenerationDirectives: {
              patientListGenerator: {
                useTemplate: "patient-list-frozen-template",
                useTemplateVersion: "1.0",
                generatingDirectives: {
                  joinDirectives: {
                    joinType: "INNER",
                    joinCondition: "<<base_column>> = <<template_column>>",
                    baseColumn: "person_id",
                    templateColumn: "person_id",
                  },
                },
              },
            },
            default: {
              name: "mainDatasetAggregateAgeDisaggregation",
              version: "1.0",
              tag: "",
              description: "",
              uses: [
                {
                  name: "mainDataSetBaseAge18",
                  version: "1.0",
                  type: "dataset_def",
                },
              ],
              sources: [
                {
                  dataSet: "mainDataSetBaseAge18",
                  alias: "hmsd",
                },
              ],
              columns: [
                {
                  type: "derived_column",
                  alias: "join_location",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "1",
                  },
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "hmsd.location_uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "hmsd.location",
                },
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "age_range",
                  column: "hmsd.age_range",
                },
                {
                  type: "derived_column",
                  alias: "enrolled_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.enrolled_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "pre_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.pre_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "current_in_care",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.current_in_care)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "active_on_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.active_on_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_ctx_prophylaxis",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.on_ctx_prophylaxis)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "screened_for_tb",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.screened_for_tb)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "tb_screened_this_visit_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.tb_screened_this_visit_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "tb_screened_positive",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.tb_screened_positive)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_ipt",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.started_ipt)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "completed_ipt_past_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.completed_ipt_past_12_months)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "condoms_provided",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.condoms_provided)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.condoms_provided)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.on_modern_contraception)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "f_gte_18_visits",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.f_gte_18_visits)",
                  },
                },
              ],
              groupBy: {
                groupParam: "groupByParam",
                columns: ["age_range", "location_id"],
                excludeParam: "excludeParam",
              },
              transFormDirectives: {
                joinColumn: "location_id",
                joinColumnParam: "joinColumnParam",
                skipColumns: ["location_uuid", "gender", "join_location"],
                disaggregationColumns: ["age_range"],
              },
              dynamicJsonQueryGenerationDirectives: {
                patientListGenerator: {
                  useTemplate: "patient-list-frozen-template",
                  useTemplateVersion: "1.0",
                  generatingDirectives: {
                    joinDirectives: {
                      joinType: "INNER",
                      joinCondition: "<<base_column>> = <<template_column>>",
                      baseColumn: "person_id",
                      templateColumn: "person_id",
                    },
                  },
                },
              },
            },
          },
          mainDataSetBaseAge18: {
            name: "mainDataSetBaseAge18",
            version: "1.0",
            tag: "",
            description: "",
            uses: [],
            sources: [
              {
                table: "etl.hiv_monthly_report_dataset_cbb",
                alias: "hmsd",
              },
              {
                table: "amrs.location",
                alias: "l",
                join: {
                  type: "INNER",
                  joinCondition: "l.location_id = hmsd.location_id",
                },
              },
            ],
            columns: [
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "birthdate",
                column: "hmsd.birthdate",
              },
              {
                type: "simple_column",
                alias: "age",
                column: "hmsd.age",
              },
              {
                type: "simple_column",
                alias: "person_id",
                column: "hmsd.person_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "l.uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "l.name",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "cur_arv_meds",
                column: "hmsd.cur_arv_meds",
              },
              {
                type: "derived_column",
                alias: "enrollment_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "arv_first_regimen_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "cur_regimen_arv_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "simple_column",
                alias: "cur_arv_line",
                column: "hmsd.cur_arv_line",
              },
              {
                type: "simple_column",
                alias: "vl_1",
                column: "hmsd.vl_1",
              },
              {
                type: "derived_column",
                alias: "vl_1_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "age_range",
                expressionType: "case_statement",
                expressionOptions: {
                  caseOptions: [
                    {
                      condition: "hmsd.age >= 18",
                      value: "18_and_above",
                    },
                    {
                      condition: "else",
                      value: "below_18",
                    },
                  ],
                },
              },
              {
                type: "simple_column",
                alias: "enrolled_this_month",
                column: "hmsd.enrolled_this_month",
              },
              {
                type: "simple_column",
                alias: "current_in_care",
                column: "hmsd.active_in_care_this_month",
              },
              {
                type: "simple_column",
                alias: "pre_art",
                column: "hmsd.is_pre_art_this_month",
              },
              {
                type: "simple_column",
                alias: "active_on_art",
                column: "hmsd.on_art_this_month",
              },
              {
                type: "simple_column",
                alias: "on_ctx_prophylaxis",
                column: "hmsd.on_pcp_prophylaxis_this_month",
              },
              {
                type: "simple_column",
                alias: "screened_for_tb",
                column: "hmsd.tb_screened_active_this_month",
              },
              {
                type: "simple_column",
                alias: "tb_screened_this_visit_this_month",
                column: "hmsd.tb_screened_this_visit_this_month",
              },
              {
                type: "simple_column",
                alias: "tb_screened_positive",
                column: "hmsd.presumed_tb_positive_this_month",
              },
              {
                type: "derived_column",
                alias: "screened_for_cervical_ca",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "0",
                },
              },
              {
                type: "simple_column",
                alias: "started_ipt",
                column: "hmsd.started_ipt_this_month",
              },
              {
                type: "derived_column",
                alias: "completed_ipt_past_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "completed_ipt_past_12_months",
                },
              },
              {
                type: "derived_column",
                alias: "condoms_provided",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "condoms_provided_this_month",
                },
              },
              {
                type: "derived_column",
                alias: "started_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "started_modern_contraception_this_month",
                },
              },
              {
                type: "simple_column",
                alias: "on_modern_contraception",
                column: "hmsd.on_modern_contraception_this_month",
              },
              {
                type: "simple_column",
                alias: "f_gte_18_visits",
                column: "hmsd.f_18_and_older_this_month",
              },
            ],
            filters: {
              conditionJoinOperator: "and",
              conditions: [
                {
                  filterType: "tableColumns",
                  conditionExpression: "endDate = ?",
                  parameterName: "endDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression: "hmsd.location_id in ?",
                  parameterName: "locations",
                },
              ],
            },
            default: {
              name: "mainDataSetBaseAge18",
              version: "1.0",
              tag: "",
              description: "",
              uses: [],
              sources: [
                {
                  table: "<<hivMonthlyDatasetSource>>",
                  alias: "hmsd",
                },
                {
                  table: "amrs.location",
                  alias: "l",
                  join: {
                    type: "INNER",
                    joinCondition: "l.location_id = hmsd.location_id",
                  },
                },
              ],
              columns: [
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "birthdate",
                  column: "hmsd.birthdate",
                },
                {
                  type: "simple_column",
                  alias: "age",
                  column: "hmsd.age",
                },
                {
                  type: "simple_column",
                  alias: "person_id",
                  column: "hmsd.person_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "l.uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "l.name",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_meds",
                  column: "hmsd.cur_arv_meds",
                },
                {
                  type: "derived_column",
                  alias: "enrollment_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "arv_first_regimen_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "cur_regimen_arv_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_line",
                  column: "hmsd.cur_arv_line",
                },
                {
                  type: "simple_column",
                  alias: "vl_1",
                  column: "hmsd.vl_1",
                },
                {
                  type: "derived_column",
                  alias: "vl_1_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "age_range",
                  expressionType: "case_statement",
                  expressionOptions: {
                    caseOptions: [
                      {
                        condition: "hmsd.age >= 18",
                        value: "18_and_above",
                      },
                      {
                        condition: "else",
                        value: "below_18",
                      },
                    ],
                  },
                },
                {
                  type: "simple_column",
                  alias: "enrolled_this_month",
                  column: "hmsd.enrolled_this_month",
                },
                {
                  type: "simple_column",
                  alias: "current_in_care",
                  column: "hmsd.active_in_care_this_month",
                },
                {
                  type: "simple_column",
                  alias: "pre_art",
                  column: "hmsd.is_pre_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "active_on_art",
                  column: "hmsd.on_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "on_ctx_prophylaxis",
                  column: "hmsd.on_pcp_prophylaxis_this_month",
                },
                {
                  type: "simple_column",
                  alias: "screened_for_tb",
                  column: "hmsd.tb_screened_active_this_month",
                },
                {
                  type: "simple_column",
                  alias: "tb_screened_this_visit_this_month",
                  column: "hmsd.tb_screened_this_visit_this_month",
                },
                {
                  type: "simple_column",
                  alias: "tb_screened_positive",
                  column: "hmsd.presumed_tb_positive_this_month",
                },
                {
                  type: "derived_column",
                  alias: "screened_for_cervical_ca",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "0",
                  },
                },
                {
                  type: "simple_column",
                  alias: "started_ipt",
                  column: "hmsd.started_ipt_this_month",
                },
                {
                  type: "derived_column",
                  alias: "completed_ipt_past_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "completed_ipt_past_12_months",
                  },
                },
                {
                  type: "derived_column",
                  alias: "condoms_provided",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "condoms_provided_this_month",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "started_modern_contraception_this_month",
                  },
                },
                {
                  type: "simple_column",
                  alias: "on_modern_contraception",
                  column: "hmsd.on_modern_contraception_this_month",
                },
                {
                  type: "simple_column",
                  alias: "f_gte_18_visits",
                  column: "hmsd.f_18_and_older_this_month",
                },
              ],
              filters: {
                conditionJoinOperator: "and",
                conditions: [
                  {
                    filterType: "tableColumns",
                    conditionExpression: "endDate = ?",
                    parameterName: "endDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression: "hmsd.location_id in ?",
                    parameterName: "locations",
                  },
                ],
              },
            },
          },
        },
        reportQuery:
          "SELECT 1 AS `join_location`, hmsd.location_uuid AS `location_uuid`, hmsd.location AS `location`, hmsd.gender AS `gender`, hmsd.location_id AS `location_id`, hmsd.age_range AS `age_range`, sum(hmsd.enrolled_this_month) AS `enrolled_this_month`, sum(hmsd.pre_art) AS `pre_art`, sum(hmsd.current_in_care) AS `current_in_care`, sum(hmsd.active_on_art) AS `active_on_art`, sum(hmsd.on_ctx_prophylaxis) AS `on_ctx_prophylaxis`, sum(hmsd.screened_for_tb) AS `screened_for_tb`, sum(hmsd.tb_screened_this_visit_this_month) AS `tb_screened_this_visit_this_month`, sum(hmsd.tb_screened_positive) AS `tb_screened_positive`, sum(hmsd.started_ipt) AS `started_ipt`, sum(hmsd.completed_ipt_past_12_months) AS `completed_ipt_past_12_months`, sum(hmsd.condoms_provided) AS `condoms_provided`, sum(hmsd.condoms_provided) AS `started_modern_contraception`, sum(hmsd.on_modern_contraception) AS `on_modern_contraception`, sum(hmsd.f_gte_18_visits) AS `f_gte_18_visits` FROM (SELECT hmsd.gender AS `gender`, hmsd.birthdate AS `birthdate`, hmsd.age AS `age`, hmsd.person_id AS `person_id`, l.uuid AS `location_uuid`, l.name AS `location`, hmsd.location_id AS `location_id`, hmsd.cur_arv_meds AS `cur_arv_meds`, date_format(hmsd.enrollment_date,'%d-%m-%Y') AS `enrollment_date`, date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y') AS `arv_first_regimen_start_date`, date_format(hmsd.arv_start_date,'%d-%m-%Y') AS `cur_regimen_arv_start_date`, hmsd.cur_arv_line AS `cur_arv_line`, hmsd.vl_1 AS `vl_1`, date_format(hmsd.vl_1_date,'%d-%m-%Y') AS `vl_1_date`, CASE WHEN (hmsd.age >= 18) THEN '18_and_above' ELSE 'below_18' END AS `age_range`, hmsd.enrolled_this_month AS `enrolled_this_month`, hmsd.active_in_care_this_month AS `current_in_care`, hmsd.is_pre_art_this_month AS `pre_art`, hmsd.on_art_this_month AS `active_on_art`, hmsd.on_pcp_prophylaxis_this_month AS `on_ctx_prophylaxis`, hmsd.tb_screened_active_this_month AS `screened_for_tb`, hmsd.tb_screened_this_visit_this_month AS `tb_screened_this_visit_this_month`, hmsd.presumed_tb_positive_this_month AS `tb_screened_positive`, 0 AS `screened_for_cervical_ca`, hmsd.started_ipt_this_month AS `started_ipt`, completed_ipt_past_12_months AS `completed_ipt_past_12_months`, condoms_provided_this_month AS `condoms_provided`, started_modern_contraception_this_month AS `started_modern_contraception`, hmsd.on_modern_contraception_this_month AS `on_modern_contraception`, hmsd.f_18_and_older_this_month AS `f_gte_18_visits` FROM etl.hiv_monthly_report_dataset_cbb `hmsd` INNER JOIN amrs.location `l` ON (l.location_id = hmsd.location_id) WHERE (endDate = '2020-09-30') AND (hmsd.location_id in (19))) `hmsd` GROUP BY age_range, location_id",
        queryResults: {
          results: [
            {
              join_location: 1,
              location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
              location: "Busia",
              gender: "F",
              location_id: 19,
              dc__age_range__18_and_above__enrolled_this_month: 18,
              dc__age_range__18_and_above__pre_art: 0,
              dc__age_range__18_and_above__current_in_care: 5210,
              dc__age_range__18_and_above__active_on_art: 5207,
              dc__age_range__18_and_above__on_ctx_prophylaxis: 4506,
              dc__age_range__18_and_above__screened_for_tb: 4751,
              dc__age_range__18_and_above__tb_screened_this_visit_this_month: 628,
              dc__age_range__18_and_above__tb_screened_positive: 0,
              dc__age_range__18_and_above__started_ipt: 10,
              dc__age_range__18_and_above__completed_ipt_past_12_months: 1401,
              dc__age_range__18_and_above__condoms_provided: 324,
              dc__age_range__18_and_above__started_modern_contraception: 324,
              dc__age_range__18_and_above__on_modern_contraception: 1399,
              dc__age_range__18_and_above__f_gte_18_visits: 489,
              dc__age_range__below_18__enrolled_this_month: 0,
              dc__age_range__below_18__pre_art: 0,
              dc__age_range__below_18__current_in_care: 356,
              dc__age_range__below_18__active_on_art: 356,
              dc__age_range__below_18__on_ctx_prophylaxis: 221,
              dc__age_range__below_18__screened_for_tb: 341,
              dc__age_range__below_18__tb_screened_this_visit_this_month: 110,
              dc__age_range__below_18__tb_screened_positive: 1,
              dc__age_range__below_18__started_ipt: 2,
              dc__age_range__below_18__completed_ipt_past_12_months: 165,
              dc__age_range__below_18__condoms_provided: 0,
              dc__age_range__below_18__started_modern_contraception: 0,
              dc__age_range__below_18__on_modern_contraception: 0,
              dc__age_range__below_18__f_gte_18_visits: 0,
            },
          ],
        },
      },
      results: {
        schemas: {
          main: {
            name: "mainDatasetAggregateAgeDisaggregation",
            version: "1.0",
            tag: "",
            description: "",
            uses: [
              {
                name: "mainDataSetBaseAge18",
                version: "1.0",
                type: "dataset_def",
              },
            ],
            sources: [
              {
                dataSet: "mainDataSetBaseAge18",
                alias: "hmsd",
              },
            ],
            columns: [
              {
                type: "derived_column",
                alias: "join_location",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "1",
                },
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "hmsd.location_uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "hmsd.location",
              },
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "age_range",
                column: "hmsd.age_range",
              },
              {
                type: "derived_column",
                alias: "enrolled_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.enrolled_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "pre_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.pre_art)",
                },
              },
              {
                type: "derived_column",
                alias: "current_in_care",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.current_in_care)",
                },
              },
              {
                type: "derived_column",
                alias: "active_on_art",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.active_on_art)",
                },
              },
              {
                type: "derived_column",
                alias: "on_ctx_prophylaxis",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.on_ctx_prophylaxis)",
                },
              },
              {
                type: "derived_column",
                alias: "screened_for_tb",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.screened_for_tb)",
                },
              },
              {
                type: "derived_column",
                alias: "tb_screened_this_visit_this_month",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.tb_screened_this_visit_this_month)",
                },
              },
              {
                type: "derived_column",
                alias: "tb_screened_positive",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.tb_screened_positive)",
                },
              },
              {
                type: "derived_column",
                alias: "started_ipt",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.started_ipt)",
                },
              },
              {
                type: "derived_column",
                alias: "completed_ipt_past_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.completed_ipt_past_12_months)",
                },
              },
              {
                type: "derived_column",
                alias: "condoms_provided",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.condoms_provided)",
                },
              },
              {
                type: "derived_column",
                alias: "started_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.condoms_provided)",
                },
              },
              {
                type: "derived_column",
                alias: "on_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.on_modern_contraception)",
                },
              },
              {
                type: "derived_column",
                alias: "f_gte_18_visits",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "sum(hmsd.f_gte_18_visits)",
                },
              },
            ],
            groupBy: {
              groupParam: "groupByParam",
              columns: ["age_range", "location_id"],
              excludeParam: "excludeParam",
            },
            transFormDirectives: {
              joinColumn: "location_id",
              joinColumnParam: "joinColumnParam",
              skipColumns: ["location_uuid", "gender", "join_location"],
              disaggregationColumns: ["age_range"],
            },
            dynamicJsonQueryGenerationDirectives: {
              patientListGenerator: {
                useTemplate: "patient-list-frozen-template",
                useTemplateVersion: "1.0",
                generatingDirectives: {
                  joinDirectives: {
                    joinType: "INNER",
                    joinCondition: "<<base_column>> = <<template_column>>",
                    baseColumn: "person_id",
                    templateColumn: "person_id",
                  },
                },
              },
            },
            default: {
              name: "mainDatasetAggregateAgeDisaggregation",
              version: "1.0",
              tag: "",
              description: "",
              uses: [
                {
                  name: "mainDataSetBaseAge18",
                  version: "1.0",
                  type: "dataset_def",
                },
              ],
              sources: [
                {
                  dataSet: "mainDataSetBaseAge18",
                  alias: "hmsd",
                },
              ],
              columns: [
                {
                  type: "derived_column",
                  alias: "join_location",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "1",
                  },
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "hmsd.location_uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "hmsd.location",
                },
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "age_range",
                  column: "hmsd.age_range",
                },
                {
                  type: "derived_column",
                  alias: "enrolled_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.enrolled_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "pre_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.pre_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "current_in_care",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.current_in_care)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "active_on_art",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.active_on_art)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_ctx_prophylaxis",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.on_ctx_prophylaxis)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "screened_for_tb",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.screened_for_tb)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "tb_screened_this_visit_this_month",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.tb_screened_this_visit_this_month)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "tb_screened_positive",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.tb_screened_positive)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_ipt",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.started_ipt)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "completed_ipt_past_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.completed_ipt_past_12_months)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "condoms_provided",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.condoms_provided)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.condoms_provided)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "on_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.on_modern_contraception)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "f_gte_18_visits",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "sum(hmsd.f_gte_18_visits)",
                  },
                },
              ],
              groupBy: {
                groupParam: "groupByParam",
                columns: ["age_range", "location_id"],
                excludeParam: "excludeParam",
              },
              transFormDirectives: {
                joinColumn: "location_id",
                joinColumnParam: "joinColumnParam",
                skipColumns: ["location_uuid", "gender", "join_location"],
                disaggregationColumns: ["age_range"],
              },
              dynamicJsonQueryGenerationDirectives: {
                patientListGenerator: {
                  useTemplate: "patient-list-frozen-template",
                  useTemplateVersion: "1.0",
                  generatingDirectives: {
                    joinDirectives: {
                      joinType: "INNER",
                      joinCondition: "<<base_column>> = <<template_column>>",
                      baseColumn: "person_id",
                      templateColumn: "person_id",
                    },
                  },
                },
              },
            },
          },
          mainDataSetBaseAge18: {
            name: "mainDataSetBaseAge18",
            version: "1.0",
            tag: "",
            description: "",
            uses: [],
            sources: [
              {
                table: "etl.hiv_monthly_report_dataset_cbb",
                alias: "hmsd",
              },
              {
                table: "amrs.location",
                alias: "l",
                join: {
                  type: "INNER",
                  joinCondition: "l.location_id = hmsd.location_id",
                },
              },
            ],
            columns: [
              {
                type: "simple_column",
                alias: "gender",
                column: "hmsd.gender",
              },
              {
                type: "simple_column",
                alias: "birthdate",
                column: "hmsd.birthdate",
              },
              {
                type: "simple_column",
                alias: "age",
                column: "hmsd.age",
              },
              {
                type: "simple_column",
                alias: "person_id",
                column: "hmsd.person_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "l.uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "l.name",
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "cur_arv_meds",
                column: "hmsd.cur_arv_meds",
              },
              {
                type: "derived_column",
                alias: "enrollment_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "arv_first_regimen_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "cur_regimen_arv_start_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                },
              },
              {
                type: "simple_column",
                alias: "cur_arv_line",
                column: "hmsd.cur_arv_line",
              },
              {
                type: "simple_column",
                alias: "vl_1",
                column: "hmsd.vl_1",
              },
              {
                type: "derived_column",
                alias: "vl_1_date",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                },
              },
              {
                type: "derived_column",
                alias: "age_range",
                expressionType: "case_statement",
                expressionOptions: {
                  caseOptions: [
                    {
                      condition: "hmsd.age >= 18",
                      value: "18_and_above",
                    },
                    {
                      condition: "else",
                      value: "below_18",
                    },
                  ],
                },
              },
              {
                type: "simple_column",
                alias: "enrolled_this_month",
                column: "hmsd.enrolled_this_month",
              },
              {
                type: "simple_column",
                alias: "current_in_care",
                column: "hmsd.active_in_care_this_month",
              },
              {
                type: "simple_column",
                alias: "pre_art",
                column: "hmsd.is_pre_art_this_month",
              },
              {
                type: "simple_column",
                alias: "active_on_art",
                column: "hmsd.on_art_this_month",
              },
              {
                type: "simple_column",
                alias: "on_ctx_prophylaxis",
                column: "hmsd.on_pcp_prophylaxis_this_month",
              },
              {
                type: "simple_column",
                alias: "screened_for_tb",
                column: "hmsd.tb_screened_active_this_month",
              },
              {
                type: "simple_column",
                alias: "tb_screened_this_visit_this_month",
                column: "hmsd.tb_screened_this_visit_this_month",
              },
              {
                type: "simple_column",
                alias: "tb_screened_positive",
                column: "hmsd.presumed_tb_positive_this_month",
              },
              {
                type: "derived_column",
                alias: "screened_for_cervical_ca",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "0",
                },
              },
              {
                type: "simple_column",
                alias: "started_ipt",
                column: "hmsd.started_ipt_this_month",
              },
              {
                type: "derived_column",
                alias: "completed_ipt_past_12_months",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "completed_ipt_past_12_months",
                },
              },
              {
                type: "derived_column",
                alias: "condoms_provided",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "condoms_provided_this_month",
                },
              },
              {
                type: "derived_column",
                alias: "started_modern_contraception",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "started_modern_contraception_this_month",
                },
              },
              {
                type: "simple_column",
                alias: "on_modern_contraception",
                column: "hmsd.on_modern_contraception_this_month",
              },
              {
                type: "simple_column",
                alias: "f_gte_18_visits",
                column: "hmsd.f_18_and_older_this_month",
              },
            ],
            filters: {
              conditionJoinOperator: "and",
              conditions: [
                {
                  filterType: "tableColumns",
                  conditionExpression: "endDate = ?",
                  parameterName: "endDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression: "hmsd.location_id in ?",
                  parameterName: "locations",
                },
              ],
            },
            default: {
              name: "mainDataSetBaseAge18",
              version: "1.0",
              tag: "",
              description: "",
              uses: [],
              sources: [
                {
                  table: "<<hivMonthlyDatasetSource>>",
                  alias: "hmsd",
                },
                {
                  table: "amrs.location",
                  alias: "l",
                  join: {
                    type: "INNER",
                    joinCondition: "l.location_id = hmsd.location_id",
                  },
                },
              ],
              columns: [
                {
                  type: "simple_column",
                  alias: "gender",
                  column: "hmsd.gender",
                },
                {
                  type: "simple_column",
                  alias: "birthdate",
                  column: "hmsd.birthdate",
                },
                {
                  type: "simple_column",
                  alias: "age",
                  column: "hmsd.age",
                },
                {
                  type: "simple_column",
                  alias: "person_id",
                  column: "hmsd.person_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "l.uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "l.name",
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_meds",
                  column: "hmsd.cur_arv_meds",
                },
                {
                  type: "derived_column",
                  alias: "enrollment_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.enrollment_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "arv_first_regimen_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "cur_regimen_arv_start_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.arv_start_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "simple_column",
                  alias: "cur_arv_line",
                  column: "hmsd.cur_arv_line",
                },
                {
                  type: "simple_column",
                  alias: "vl_1",
                  column: "hmsd.vl_1",
                },
                {
                  type: "derived_column",
                  alias: "vl_1_date",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "date_format(hmsd.vl_1_date,'%d-%m-%Y')",
                  },
                },
                {
                  type: "derived_column",
                  alias: "age_range",
                  expressionType: "case_statement",
                  expressionOptions: {
                    caseOptions: [
                      {
                        condition: "hmsd.age >= 18",
                        value: "18_and_above",
                      },
                      {
                        condition: "else",
                        value: "below_18",
                      },
                    ],
                  },
                },
                {
                  type: "simple_column",
                  alias: "enrolled_this_month",
                  column: "hmsd.enrolled_this_month",
                },
                {
                  type: "simple_column",
                  alias: "current_in_care",
                  column: "hmsd.active_in_care_this_month",
                },
                {
                  type: "simple_column",
                  alias: "pre_art",
                  column: "hmsd.is_pre_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "active_on_art",
                  column: "hmsd.on_art_this_month",
                },
                {
                  type: "simple_column",
                  alias: "on_ctx_prophylaxis",
                  column: "hmsd.on_pcp_prophylaxis_this_month",
                },
                {
                  type: "simple_column",
                  alias: "screened_for_tb",
                  column: "hmsd.tb_screened_active_this_month",
                },
                {
                  type: "simple_column",
                  alias: "tb_screened_this_visit_this_month",
                  column: "hmsd.tb_screened_this_visit_this_month",
                },
                {
                  type: "simple_column",
                  alias: "tb_screened_positive",
                  column: "hmsd.presumed_tb_positive_this_month",
                },
                {
                  type: "derived_column",
                  alias: "screened_for_cervical_ca",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "0",
                  },
                },
                {
                  type: "simple_column",
                  alias: "started_ipt",
                  column: "hmsd.started_ipt_this_month",
                },
                {
                  type: "derived_column",
                  alias: "completed_ipt_past_12_months",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "completed_ipt_past_12_months",
                  },
                },
                {
                  type: "derived_column",
                  alias: "condoms_provided",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "condoms_provided_this_month",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_modern_contraception",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "started_modern_contraception_this_month",
                  },
                },
                {
                  type: "simple_column",
                  alias: "on_modern_contraception",
                  column: "hmsd.on_modern_contraception_this_month",
                },
                {
                  type: "simple_column",
                  alias: "f_gte_18_visits",
                  column: "hmsd.f_18_and_older_this_month",
                },
              ],
              filters: {
                conditionJoinOperator: "and",
                conditions: [
                  {
                    filterType: "tableColumns",
                    conditionExpression: "endDate = ?",
                    parameterName: "endDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression: "hmsd.location_id in ?",
                    parameterName: "locations",
                  },
                ],
              },
            },
          },
        },
        sqlQuery:
          "SELECT 1 AS `join_location`, hmsd.location_uuid AS `location_uuid`, hmsd.location AS `location`, hmsd.gender AS `gender`, hmsd.location_id AS `location_id`, hmsd.age_range AS `age_range`, sum(hmsd.enrolled_this_month) AS `enrolled_this_month`, sum(hmsd.pre_art) AS `pre_art`, sum(hmsd.current_in_care) AS `current_in_care`, sum(hmsd.active_on_art) AS `active_on_art`, sum(hmsd.on_ctx_prophylaxis) AS `on_ctx_prophylaxis`, sum(hmsd.screened_for_tb) AS `screened_for_tb`, sum(hmsd.tb_screened_this_visit_this_month) AS `tb_screened_this_visit_this_month`, sum(hmsd.tb_screened_positive) AS `tb_screened_positive`, sum(hmsd.started_ipt) AS `started_ipt`, sum(hmsd.completed_ipt_past_12_months) AS `completed_ipt_past_12_months`, sum(hmsd.condoms_provided) AS `condoms_provided`, sum(hmsd.condoms_provided) AS `started_modern_contraception`, sum(hmsd.on_modern_contraception) AS `on_modern_contraception`, sum(hmsd.f_gte_18_visits) AS `f_gte_18_visits` FROM (SELECT hmsd.gender AS `gender`, hmsd.birthdate AS `birthdate`, hmsd.age AS `age`, hmsd.person_id AS `person_id`, l.uuid AS `location_uuid`, l.name AS `location`, hmsd.location_id AS `location_id`, hmsd.cur_arv_meds AS `cur_arv_meds`, date_format(hmsd.enrollment_date,'%d-%m-%Y') AS `enrollment_date`, date_format(hmsd.arv_first_regimen_start_date,'%d-%m-%Y') AS `arv_first_regimen_start_date`, date_format(hmsd.arv_start_date,'%d-%m-%Y') AS `cur_regimen_arv_start_date`, hmsd.cur_arv_line AS `cur_arv_line`, hmsd.vl_1 AS `vl_1`, date_format(hmsd.vl_1_date,'%d-%m-%Y') AS `vl_1_date`, CASE WHEN (hmsd.age >= 18) THEN '18_and_above' ELSE 'below_18' END AS `age_range`, hmsd.enrolled_this_month AS `enrolled_this_month`, hmsd.active_in_care_this_month AS `current_in_care`, hmsd.is_pre_art_this_month AS `pre_art`, hmsd.on_art_this_month AS `active_on_art`, hmsd.on_pcp_prophylaxis_this_month AS `on_ctx_prophylaxis`, hmsd.tb_screened_active_this_month AS `screened_for_tb`, hmsd.tb_screened_this_visit_this_month AS `tb_screened_this_visit_this_month`, hmsd.presumed_tb_positive_this_month AS `tb_screened_positive`, 0 AS `screened_for_cervical_ca`, hmsd.started_ipt_this_month AS `started_ipt`, completed_ipt_past_12_months AS `completed_ipt_past_12_months`, condoms_provided_this_month AS `condoms_provided`, started_modern_contraception_this_month AS `started_modern_contraception`, hmsd.on_modern_contraception_this_month AS `on_modern_contraception`, hmsd.f_18_and_older_this_month AS `f_gte_18_visits` FROM etl.hiv_monthly_report_dataset_cbb `hmsd` INNER JOIN amrs.location `l` ON (l.location_id = hmsd.location_id) WHERE (endDate = '2020-09-30') AND (hmsd.location_id in (19))) `hmsd` GROUP BY age_range, location_id",
        results: {
          results: [
            {
              join_location: 1,
              location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
              location: "Busia",
              gender: "F",
              location_id: 19,
              dc__age_range__18_and_above__enrolled_this_month: 18,
              dc__age_range__18_and_above__pre_art: 0,
              dc__age_range__18_and_above__current_in_care: 5210,
              dc__age_range__18_and_above__active_on_art: 5207,
              dc__age_range__18_and_above__on_ctx_prophylaxis: 4506,
              dc__age_range__18_and_above__screened_for_tb: 4751,
              dc__age_range__18_and_above__tb_screened_this_visit_this_month: 628,
              dc__age_range__18_and_above__tb_screened_positive: 0,
              dc__age_range__18_and_above__started_ipt: 10,
              dc__age_range__18_and_above__completed_ipt_past_12_months: 1401,
              dc__age_range__18_and_above__condoms_provided: 324,
              dc__age_range__18_and_above__started_modern_contraception: 324,
              dc__age_range__18_and_above__on_modern_contraception: 1399,
              dc__age_range__18_and_above__f_gte_18_visits: 489,
              dc__age_range__below_18__enrolled_this_month: 0,
              dc__age_range__below_18__pre_art: 0,
              dc__age_range__below_18__current_in_care: 356,
              dc__age_range__below_18__active_on_art: 356,
              dc__age_range__below_18__on_ctx_prophylaxis: 221,
              dc__age_range__below_18__screened_for_tb: 341,
              dc__age_range__below_18__tb_screened_this_visit_this_month: 110,
              dc__age_range__below_18__tb_screened_positive: 1,
              dc__age_range__below_18__started_ipt: 2,
              dc__age_range__below_18__completed_ipt_past_12_months: 165,
              dc__age_range__below_18__condoms_provided: 0,
              dc__age_range__below_18__started_modern_contraception: 0,
              dc__age_range__below_18__on_modern_contraception: 0,
              dc__age_range__below_18__f_gte_18_visits: 0,
            },
          ],
        },
      },
    },
    {
      report: {
        reportName: "pepDatasetAggregate",
        params: {
          endDate: "2020-09-30",
          startDate: "2020-09-01",
          reportName: "MOH-731-report-2017",
          locationUuids: ["08fec60a-1352-11df-a1f1-0026b9348838"],
          isAggregated: false,
          locations: [19],
          referenceDate: "2020-09-14",
          startAge: 0,
          endAge: 150,
          gender: ["M", "F"],
          genders: ["M", "F"],
          hivMonthlyDatasetSource: "etl.hiv_monthly_report_dataset_cbb",
        },
        reportSchemas: {
          main: {
            name: "pepDatasetAggregate",
            version: "1.0",
            tag: "",
            description: "",
            uses: [
              {
                name: "pepDataSetbase",
                version: "1.0",
                type: "dataset_def",
              },
            ],
            sources: [
              {
                dataSet: "pepDataSetbase",
                alias: "hmsd",
              },
            ],
            columns: [
              {
                type: "derived_column",
                alias: "join_location",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "1",
                },
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "hmsd.location_uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "hmsd.location",
              },
              {
                type: "derived_column",
                alias: "total_hiv_exposed",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "count(distinct concat(hmsd.total_hiv_exposed, hmsd.person_id))",
                },
              },
              {
                type: "derived_column",
                alias: "hiv_exposed_occupational",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "count(distinct concat(hmsd.hiv_exposed_occupational,hmsd.person_id))",
                },
              },
              {
                type: "derived_column",
                alias: "hiv_exposed_non_occupational",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "count(distinct concat(hmsd.hiv_exposed_non_occupational,hmsd.person_id))",
                },
              },
              {
                type: "derived_column",
                alias: "total_started_PEP",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "count(distinct concat(hmsd.total_started_PEP,hmsd.person_id))",
                },
              },
              {
                type: "derived_column",
                alias: "started_PEP_occupational",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "count(distinct concat( hmsd.started_PEP_occupational,hmsd.person_id))",
                },
              },
              {
                type: "derived_column",
                alias: "started_PEP_non_occupational",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "count(distinct concat(hmsd.started_PEP_non_occupational,hmsd.person_id))",
                },
              },
            ],
            groupBy: {
              groupParam: "groupByParam",
              columns: ["location_id"],
              excludeParam: "excludeParam",
            },
            transFormDirectives: {
              joinColumn: "location_id",
              joinColumnParam: "joinColumnParam",
              skipColumns: ["join_location"],
              disaggregationColumns: [],
            },
            dynamicJsonQueryGenerationDirectives: {
              patientListGenerator: {
                useTemplate: "patient-list-template",
                useTemplateVersion: "1.0",
                generatingDirectives: {
                  joinDirectives: {
                    joinType: "INNER",
                    joinCondition: "<<base_column>> = <<template_column>>",
                    baseColumn: "person_id",
                    templateColumn: "person_id",
                  },
                },
              },
            },
            default: {
              name: "pepDatasetAggregate",
              version: "1.0",
              tag: "",
              description: "",
              uses: [
                {
                  name: "pepDataSetbase",
                  version: "1.0",
                  type: "dataset_def",
                },
              ],
              sources: [
                {
                  dataSet: "pepDataSetbase",
                  alias: "hmsd",
                },
              ],
              columns: [
                {
                  type: "derived_column",
                  alias: "join_location",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "1",
                  },
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "hmsd.location_uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "hmsd.location",
                },
                {
                  type: "derived_column",
                  alias: "total_hiv_exposed",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "count(distinct concat(hmsd.total_hiv_exposed, hmsd.person_id))",
                  },
                },
                {
                  type: "derived_column",
                  alias: "hiv_exposed_occupational",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "count(distinct concat(hmsd.hiv_exposed_occupational,hmsd.person_id))",
                  },
                },
                {
                  type: "derived_column",
                  alias: "hiv_exposed_non_occupational",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "count(distinct concat(hmsd.hiv_exposed_non_occupational,hmsd.person_id))",
                  },
                },
                {
                  type: "derived_column",
                  alias: "total_started_PEP",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "count(distinct concat(hmsd.total_started_PEP,hmsd.person_id))",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_PEP_occupational",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "count(distinct concat( hmsd.started_PEP_occupational,hmsd.person_id))",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_PEP_non_occupational",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "count(distinct concat(hmsd.started_PEP_non_occupational,hmsd.person_id))",
                  },
                },
              ],
              groupBy: {
                groupParam: "groupByParam",
                columns: ["location_id"],
                excludeParam: "excludeParam",
              },
              transFormDirectives: {
                joinColumn: "location_id",
                joinColumnParam: "joinColumnParam",
                skipColumns: ["join_location"],
                disaggregationColumns: [],
              },
              dynamicJsonQueryGenerationDirectives: {
                patientListGenerator: {
                  useTemplate: "patient-list-template",
                  useTemplateVersion: "1.0",
                  generatingDirectives: {
                    joinDirectives: {
                      joinType: "INNER",
                      joinCondition: "<<base_column>> = <<template_column>>",
                      baseColumn: "person_id",
                      templateColumn: "person_id",
                    },
                  },
                },
              },
            },
          },
          pepDataSetbase: {
            name: "pepDataSetbase",
            version: "1.0",
            tag: "",
            description: "",
            uses: [],
            sources: [
              {
                table: "etl.flat_pep_summary",
                alias: "pep",
              },
              {
                table: "amrs.location",
                alias: "l",
                join: {
                  type: "INNER",
                  joinCondition: "l.location_id = pep.location_id",
                },
              },
            ],
            columns: [
              {
                type: "simple_column",
                alias: "location_id",
                column: "pep.location_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "l.uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "l.name",
              },
              {
                type: "simple_column",
                alias: "person_id",
                column: "pep.person_id",
              },
              {
                type: "derived_column",
                alias: "total_hiv_exposed",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "if(hiv_exposed_occupational is not null,1,null)",
                },
              },
              {
                type: "derived_column",
                alias: "hiv_exposed_occupational",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "if(hiv_exposed_occupational=1,1,null)",
                },
              },
              {
                type: "derived_column",
                alias: "hiv_exposed_non_occupational",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "if(hiv_exposed_occupational=0,1,null)",
                },
              },
              {
                type: "derived_column",
                alias: "total_started_PEP",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "if(hiv_exposed_occupational is not null and date(pep_start_date) between '{startDate}' and '{endDate}',1,null)",
                },
              },
              {
                type: "derived_column",
                alias: "started_PEP_occupational",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "if(hiv_exposed_occupational=1 and date(pep_start_date) between '{startDate}' and '{endDate}',1,null)",
                },
              },
              {
                type: "derived_column",
                alias: "started_PEP_non_occupational",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "if(hiv_exposed_occupational=0 and date(pep_start_date) between '{startDate}' and '{endDate}',1,null)",
                },
              },
            ],
            filters: {
              conditionJoinOperator: "and",
              conditions: [
                {
                  filterType: "tableColumns",
                  conditionExpression: "pep.encounter_datetime <= ?",
                  parameterName: "endDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression: "pep.encounter_datetime >= ?",
                  parameterName: "startDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression: "pep.location_id in ?",
                  parameterName: "locations",
                },
              ],
            },
            default: {
              name: "pepDataSetbase",
              version: "1.0",
              tag: "",
              description: "",
              uses: [],
              sources: [
                {
                  table: "etl.flat_pep_summary",
                  alias: "pep",
                },
                {
                  table: "amrs.location",
                  alias: "l",
                  join: {
                    type: "INNER",
                    joinCondition: "l.location_id = pep.location_id",
                  },
                },
              ],
              columns: [
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "pep.location_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "l.uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "l.name",
                },
                {
                  type: "simple_column",
                  alias: "person_id",
                  column: "pep.person_id",
                },
                {
                  type: "derived_column",
                  alias: "total_hiv_exposed",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "if(hiv_exposed_occupational is not null,1,null)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "hiv_exposed_occupational",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "if(hiv_exposed_occupational=1,1,null)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "hiv_exposed_non_occupational",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "if(hiv_exposed_occupational=0,1,null)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "total_started_PEP",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "if(hiv_exposed_occupational is not null and date(pep_start_date) between '{startDate}' and '{endDate}',1,null)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_PEP_occupational",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "if(hiv_exposed_occupational=1 and date(pep_start_date) between '{startDate}' and '{endDate}',1,null)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_PEP_non_occupational",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "if(hiv_exposed_occupational=0 and date(pep_start_date) between '{startDate}' and '{endDate}',1,null)",
                  },
                },
              ],
              filters: {
                conditionJoinOperator: "and",
                conditions: [
                  {
                    filterType: "tableColumns",
                    conditionExpression: "pep.encounter_datetime <= ?",
                    parameterName: "endDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression: "pep.encounter_datetime >= ?",
                    parameterName: "startDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression: "pep.location_id in ?",
                    parameterName: "locations",
                  },
                ],
              },
            },
          },
        },
        reportQuery:
          "SELECT 1 AS `join_location`, hmsd.location_id AS `location_id`, hmsd.location_uuid AS `location_uuid`, hmsd.location AS `location`, count(distinct concat(hmsd.total_hiv_exposed, hmsd.person_id)) AS `total_hiv_exposed`, count(distinct concat(hmsd.hiv_exposed_occupational,hmsd.person_id)) AS `hiv_exposed_occupational`, count(distinct concat(hmsd.hiv_exposed_non_occupational,hmsd.person_id)) AS `hiv_exposed_non_occupational`, count(distinct concat(hmsd.total_started_PEP,hmsd.person_id)) AS `total_started_PEP`, count(distinct concat( hmsd.started_PEP_occupational,hmsd.person_id)) AS `started_PEP_occupational`, count(distinct concat(hmsd.started_PEP_non_occupational,hmsd.person_id)) AS `started_PEP_non_occupational` FROM (SELECT pep.location_id AS `location_id`, l.uuid AS `location_uuid`, l.name AS `location`, pep.person_id AS `person_id`, if(hiv_exposed_occupational is not null,1,null) AS `total_hiv_exposed`, if(hiv_exposed_occupational=1,1,null) AS `hiv_exposed_occupational`, if(hiv_exposed_occupational=0,1,null) AS `hiv_exposed_non_occupational`, if(hiv_exposed_occupational is not null and date(pep_start_date) between '2020-09-01' and '2020-09-30',1,null) AS `total_started_PEP`, if(hiv_exposed_occupational=1 and date(pep_start_date) between '2020-09-01' and '2020-09-30',1,null) AS `started_PEP_occupational`, if(hiv_exposed_occupational=0 and date(pep_start_date) between '2020-09-01' and '2020-09-30',1,null) AS `started_PEP_non_occupational` FROM etl.flat_pep_summary `pep` INNER JOIN amrs.location `l` ON (l.location_id = pep.location_id) WHERE (pep.encounter_datetime <= '2020-09-30') AND (pep.encounter_datetime >= '2020-09-01') AND (pep.location_id in (19))) `hmsd` GROUP BY location_id",
        queryResults: {
          results: [
            {
              join_location: 1,
              location_id: 19,
              location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
              location: "Busia",
              total_hiv_exposed: 10,
              hiv_exposed_occupational: 0,
              hiv_exposed_non_occupational: 10,
              total_started_PEP: 10,
              started_PEP_occupational: 0,
              started_PEP_non_occupational: 10,
            },
          ],
        },
      },
      results: {
        schemas: {
          main: {
            name: "pepDatasetAggregate",
            version: "1.0",
            tag: "",
            description: "",
            uses: [
              {
                name: "pepDataSetbase",
                version: "1.0",
                type: "dataset_def",
              },
            ],
            sources: [
              {
                dataSet: "pepDataSetbase",
                alias: "hmsd",
              },
            ],
            columns: [
              {
                type: "derived_column",
                alias: "join_location",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "1",
                },
              },
              {
                type: "simple_column",
                alias: "location_id",
                column: "hmsd.location_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "hmsd.location_uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "hmsd.location",
              },
              {
                type: "derived_column",
                alias: "total_hiv_exposed",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "count(distinct concat(hmsd.total_hiv_exposed, hmsd.person_id))",
                },
              },
              {
                type: "derived_column",
                alias: "hiv_exposed_occupational",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "count(distinct concat(hmsd.hiv_exposed_occupational,hmsd.person_id))",
                },
              },
              {
                type: "derived_column",
                alias: "hiv_exposed_non_occupational",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "count(distinct concat(hmsd.hiv_exposed_non_occupational,hmsd.person_id))",
                },
              },
              {
                type: "derived_column",
                alias: "total_started_PEP",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "count(distinct concat(hmsd.total_started_PEP,hmsd.person_id))",
                },
              },
              {
                type: "derived_column",
                alias: "started_PEP_occupational",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "count(distinct concat( hmsd.started_PEP_occupational,hmsd.person_id))",
                },
              },
              {
                type: "derived_column",
                alias: "started_PEP_non_occupational",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "count(distinct concat(hmsd.started_PEP_non_occupational,hmsd.person_id))",
                },
              },
            ],
            groupBy: {
              groupParam: "groupByParam",
              columns: ["location_id"],
              excludeParam: "excludeParam",
            },
            transFormDirectives: {
              joinColumn: "location_id",
              joinColumnParam: "joinColumnParam",
              skipColumns: ["join_location"],
              disaggregationColumns: [],
            },
            dynamicJsonQueryGenerationDirectives: {
              patientListGenerator: {
                useTemplate: "patient-list-template",
                useTemplateVersion: "1.0",
                generatingDirectives: {
                  joinDirectives: {
                    joinType: "INNER",
                    joinCondition: "<<base_column>> = <<template_column>>",
                    baseColumn: "person_id",
                    templateColumn: "person_id",
                  },
                },
              },
            },
            default: {
              name: "pepDatasetAggregate",
              version: "1.0",
              tag: "",
              description: "",
              uses: [
                {
                  name: "pepDataSetbase",
                  version: "1.0",
                  type: "dataset_def",
                },
              ],
              sources: [
                {
                  dataSet: "pepDataSetbase",
                  alias: "hmsd",
                },
              ],
              columns: [
                {
                  type: "derived_column",
                  alias: "join_location",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "1",
                  },
                },
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "hmsd.location_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "hmsd.location_uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "hmsd.location",
                },
                {
                  type: "derived_column",
                  alias: "total_hiv_exposed",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "count(distinct concat(hmsd.total_hiv_exposed, hmsd.person_id))",
                  },
                },
                {
                  type: "derived_column",
                  alias: "hiv_exposed_occupational",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "count(distinct concat(hmsd.hiv_exposed_occupational,hmsd.person_id))",
                  },
                },
                {
                  type: "derived_column",
                  alias: "hiv_exposed_non_occupational",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "count(distinct concat(hmsd.hiv_exposed_non_occupational,hmsd.person_id))",
                  },
                },
                {
                  type: "derived_column",
                  alias: "total_started_PEP",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "count(distinct concat(hmsd.total_started_PEP,hmsd.person_id))",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_PEP_occupational",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "count(distinct concat( hmsd.started_PEP_occupational,hmsd.person_id))",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_PEP_non_occupational",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "count(distinct concat(hmsd.started_PEP_non_occupational,hmsd.person_id))",
                  },
                },
              ],
              groupBy: {
                groupParam: "groupByParam",
                columns: ["location_id"],
                excludeParam: "excludeParam",
              },
              transFormDirectives: {
                joinColumn: "location_id",
                joinColumnParam: "joinColumnParam",
                skipColumns: ["join_location"],
                disaggregationColumns: [],
              },
              dynamicJsonQueryGenerationDirectives: {
                patientListGenerator: {
                  useTemplate: "patient-list-template",
                  useTemplateVersion: "1.0",
                  generatingDirectives: {
                    joinDirectives: {
                      joinType: "INNER",
                      joinCondition: "<<base_column>> = <<template_column>>",
                      baseColumn: "person_id",
                      templateColumn: "person_id",
                    },
                  },
                },
              },
            },
          },
          pepDataSetbase: {
            name: "pepDataSetbase",
            version: "1.0",
            tag: "",
            description: "",
            uses: [],
            sources: [
              {
                table: "etl.flat_pep_summary",
                alias: "pep",
              },
              {
                table: "amrs.location",
                alias: "l",
                join: {
                  type: "INNER",
                  joinCondition: "l.location_id = pep.location_id",
                },
              },
            ],
            columns: [
              {
                type: "simple_column",
                alias: "location_id",
                column: "pep.location_id",
              },
              {
                type: "simple_column",
                alias: "location_uuid",
                column: "l.uuid",
              },
              {
                type: "simple_column",
                alias: "location",
                column: "l.name",
              },
              {
                type: "simple_column",
                alias: "person_id",
                column: "pep.person_id",
              },
              {
                type: "derived_column",
                alias: "total_hiv_exposed",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "if(hiv_exposed_occupational is not null,1,null)",
                },
              },
              {
                type: "derived_column",
                alias: "hiv_exposed_occupational",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "if(hiv_exposed_occupational=1,1,null)",
                },
              },
              {
                type: "derived_column",
                alias: "hiv_exposed_non_occupational",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression: "if(hiv_exposed_occupational=0,1,null)",
                },
              },
              {
                type: "derived_column",
                alias: "total_started_PEP",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "if(hiv_exposed_occupational is not null and date(pep_start_date) between '{startDate}' and '{endDate}',1,null)",
                },
              },
              {
                type: "derived_column",
                alias: "started_PEP_occupational",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "if(hiv_exposed_occupational=1 and date(pep_start_date) between '{startDate}' and '{endDate}',1,null)",
                },
              },
              {
                type: "derived_column",
                alias: "started_PEP_non_occupational",
                expressionType: "simple_expression",
                expressionOptions: {
                  expression:
                    "if(hiv_exposed_occupational=0 and date(pep_start_date) between '{startDate}' and '{endDate}',1,null)",
                },
              },
            ],
            filters: {
              conditionJoinOperator: "and",
              conditions: [
                {
                  filterType: "tableColumns",
                  conditionExpression: "pep.encounter_datetime <= ?",
                  parameterName: "endDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression: "pep.encounter_datetime >= ?",
                  parameterName: "startDate",
                },
                {
                  filterType: "tableColumns",
                  conditionExpression: "pep.location_id in ?",
                  parameterName: "locations",
                },
              ],
            },
            default: {
              name: "pepDataSetbase",
              version: "1.0",
              tag: "",
              description: "",
              uses: [],
              sources: [
                {
                  table: "etl.flat_pep_summary",
                  alias: "pep",
                },
                {
                  table: "amrs.location",
                  alias: "l",
                  join: {
                    type: "INNER",
                    joinCondition: "l.location_id = pep.location_id",
                  },
                },
              ],
              columns: [
                {
                  type: "simple_column",
                  alias: "location_id",
                  column: "pep.location_id",
                },
                {
                  type: "simple_column",
                  alias: "location_uuid",
                  column: "l.uuid",
                },
                {
                  type: "simple_column",
                  alias: "location",
                  column: "l.name",
                },
                {
                  type: "simple_column",
                  alias: "person_id",
                  column: "pep.person_id",
                },
                {
                  type: "derived_column",
                  alias: "total_hiv_exposed",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "if(hiv_exposed_occupational is not null,1,null)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "hiv_exposed_occupational",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "if(hiv_exposed_occupational=1,1,null)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "hiv_exposed_non_occupational",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression: "if(hiv_exposed_occupational=0,1,null)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "total_started_PEP",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "if(hiv_exposed_occupational is not null and date(pep_start_date) between '{startDate}' and '{endDate}',1,null)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_PEP_occupational",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "if(hiv_exposed_occupational=1 and date(pep_start_date) between '{startDate}' and '{endDate}',1,null)",
                  },
                },
                {
                  type: "derived_column",
                  alias: "started_PEP_non_occupational",
                  expressionType: "simple_expression",
                  expressionOptions: {
                    expression:
                      "if(hiv_exposed_occupational=0 and date(pep_start_date) between '{startDate}' and '{endDate}',1,null)",
                  },
                },
              ],
              filters: {
                conditionJoinOperator: "and",
                conditions: [
                  {
                    filterType: "tableColumns",
                    conditionExpression: "pep.encounter_datetime <= ?",
                    parameterName: "endDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression: "pep.encounter_datetime >= ?",
                    parameterName: "startDate",
                  },
                  {
                    filterType: "tableColumns",
                    conditionExpression: "pep.location_id in ?",
                    parameterName: "locations",
                  },
                ],
              },
            },
          },
        },
        sqlQuery:
          "SELECT 1 AS `join_location`, hmsd.location_id AS `location_id`, hmsd.location_uuid AS `location_uuid`, hmsd.location AS `location`, count(distinct concat(hmsd.total_hiv_exposed, hmsd.person_id)) AS `total_hiv_exposed`, count(distinct concat(hmsd.hiv_exposed_occupational,hmsd.person_id)) AS `hiv_exposed_occupational`, count(distinct concat(hmsd.hiv_exposed_non_occupational,hmsd.person_id)) AS `hiv_exposed_non_occupational`, count(distinct concat(hmsd.total_started_PEP,hmsd.person_id)) AS `total_started_PEP`, count(distinct concat( hmsd.started_PEP_occupational,hmsd.person_id)) AS `started_PEP_occupational`, count(distinct concat(hmsd.started_PEP_non_occupational,hmsd.person_id)) AS `started_PEP_non_occupational` FROM (SELECT pep.location_id AS `location_id`, l.uuid AS `location_uuid`, l.name AS `location`, pep.person_id AS `person_id`, if(hiv_exposed_occupational is not null,1,null) AS `total_hiv_exposed`, if(hiv_exposed_occupational=1,1,null) AS `hiv_exposed_occupational`, if(hiv_exposed_occupational=0,1,null) AS `hiv_exposed_non_occupational`, if(hiv_exposed_occupational is not null and date(pep_start_date) between '2020-09-01' and '2020-09-30',1,null) AS `total_started_PEP`, if(hiv_exposed_occupational=1 and date(pep_start_date) between '2020-09-01' and '2020-09-30',1,null) AS `started_PEP_occupational`, if(hiv_exposed_occupational=0 and date(pep_start_date) between '2020-09-01' and '2020-09-30',1,null) AS `started_PEP_non_occupational` FROM etl.flat_pep_summary `pep` INNER JOIN amrs.location `l` ON (l.location_id = pep.location_id) WHERE (pep.encounter_datetime <= '2020-09-30') AND (pep.encounter_datetime >= '2020-09-01') AND (pep.location_id in (19))) `hmsd` GROUP BY location_id",
        results: {
          results: [
            {
              join_location: 1,
              location_id: 19,
              location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
              location: "Busia",
              total_hiv_exposed: 10,
              hiv_exposed_occupational: 0,
              hiv_exposed_non_occupational: 10,
              total_started_PEP: 10,
              started_PEP_occupational: 0,
              started_PEP_non_occupational: 10,
            },
          ],
        },
      },
    },
  ],
  result: [
    {
      join_location: 1,
      location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
      location: "Busia",
      location_id: 19,
      dc__gender__F__age_range__10_to_14__current_on_art: 76,
      dc__gender__F__age_range__10_to_14__enrolled_this_month: 0,
      dc__gender__F__age_range__10_to_14__pre_art: 0,
      dc__gender__F__age_range__10_to_14__current_in_care: 76,
      dc__gender__F__age_range__10_to_14__active_on_art: 76,
      dc__gender__F__age_range__10_to_14__on_ctx_prophylaxis: 46,
      dc__gender__F__age_range__10_to_14__screened_for_tb: 75,
      dc__gender__F__age_range__10_to_14__tb_screened_this_visit_this_month: 22,
      dc__gender__F__age_range__10_to_14__tb_screened_positive: 1,
      dc__gender__F__age_range__10_to_14__started_ipt: 1,
      dc__gender__F__age_range__10_to_14__completed_ipt_past_12_months: 37,
      dc__gender__F__age_range__10_to_14__condoms_provided: 0,
      dc__gender__F__age_range__10_to_14__started_modern_contraception: 0,
      dc__gender__F__age_range__10_to_14__on_modern_contraception: 0,
      dc__gender__F__age_range__10_to_14__art_revisit_this_month: 76,
      dc__gender__F__age_range__10_to_14__f_gte_18_visits: 0,
      dc__gender__F__age_range__15_to_19__current_on_art: 81,
      dc__gender__F__age_range__15_to_19__enrolled_this_month: 1,
      dc__gender__F__age_range__15_to_19__pre_art: 0,
      dc__gender__F__age_range__15_to_19__current_in_care: 81,
      dc__gender__F__age_range__15_to_19__active_on_art: 81,
      dc__gender__F__age_range__15_to_19__on_ctx_prophylaxis: 58,
      dc__gender__F__age_range__15_to_19__screened_for_tb: 76,
      dc__gender__F__age_range__15_to_19__tb_screened_this_visit_this_month: 25,
      dc__gender__F__age_range__15_to_19__tb_screened_positive: 0,
      dc__gender__F__age_range__15_to_19__started_ipt: 0,
      dc__gender__F__age_range__15_to_19__completed_ipt_past_12_months: 26,
      dc__gender__F__age_range__15_to_19__condoms_provided: 0,
      dc__gender__F__age_range__15_to_19__started_modern_contraception: 0,
      dc__gender__F__age_range__15_to_19__on_modern_contraception: 1,
      dc__gender__F__age_range__15_to_19__art_revisit_this_month: 80,
      dc__gender__F__age_range__15_to_19__f_gte_18_visits: 7,
      dc__gender__F__age_range__1_to_9__current_on_art: 55,
      dc__gender__F__age_range__1_to_9__enrolled_this_month: 0,
      dc__gender__F__age_range__1_to_9__pre_art: 0,
      dc__gender__F__age_range__1_to_9__current_in_care: 55,
      dc__gender__F__age_range__1_to_9__active_on_art: 55,
      dc__gender__F__age_range__1_to_9__on_ctx_prophylaxis: 37,
      dc__gender__F__age_range__1_to_9__screened_for_tb: 54,
      dc__gender__F__age_range__1_to_9__tb_screened_this_visit_this_month: 11,
      dc__gender__F__age_range__1_to_9__tb_screened_positive: 0,
      dc__gender__F__age_range__1_to_9__started_ipt: 1,
      dc__gender__F__age_range__1_to_9__completed_ipt_past_12_months: 26,
      dc__gender__F__age_range__1_to_9__condoms_provided: 0,
      dc__gender__F__age_range__1_to_9__started_modern_contraception: 0,
      dc__gender__F__age_range__1_to_9__on_modern_contraception: 0,
      dc__gender__F__age_range__1_to_9__art_revisit_this_month: 55,
      dc__gender__F__age_range__1_to_9__f_gte_18_visits: 0,
      dc__gender__F__age_range__20_to_24__current_on_art: 93,
      dc__gender__F__age_range__20_to_24__enrolled_this_month: 0,
      dc__gender__F__age_range__20_to_24__pre_art: 0,
      dc__gender__F__age_range__20_to_24__current_in_care: 93,
      dc__gender__F__age_range__20_to_24__active_on_art: 93,
      dc__gender__F__age_range__20_to_24__on_ctx_prophylaxis: 78,
      dc__gender__F__age_range__20_to_24__screened_for_tb: 84,
      dc__gender__F__age_range__20_to_24__tb_screened_this_visit_this_month: 14,
      dc__gender__F__age_range__20_to_24__tb_screened_positive: 0,
      dc__gender__F__age_range__20_to_24__started_ipt: 0,
      dc__gender__F__age_range__20_to_24__completed_ipt_past_12_months: 32,
      dc__gender__F__age_range__20_to_24__condoms_provided: 6,
      dc__gender__F__age_range__20_to_24__started_modern_contraception: 6,
      dc__gender__F__age_range__20_to_24__on_modern_contraception: 21,
      dc__gender__F__age_range__20_to_24__art_revisit_this_month: 93,
      dc__gender__F__age_range__20_to_24__f_gte_18_visits: 14,
      dc__gender__F__age_range__older_than_24__current_on_art: 3326,
      dc__gender__F__age_range__older_than_24__enrolled_this_month: 9,
      dc__gender__F__age_range__older_than_24__pre_art: 0,
      dc__gender__F__age_range__older_than_24__current_in_care: 3328,
      dc__gender__F__age_range__older_than_24__active_on_art: 3326,
      dc__gender__F__age_range__older_than_24__on_ctx_prophylaxis: 2897,
      dc__gender__F__age_range__older_than_24__screened_for_tb: 3033,
      dc__gender__F__age_range__older_than_24__tb_screened_this_visit_this_month: 377,
      dc__gender__F__age_range__older_than_24__tb_screened_positive: 0,
      dc__gender__F__age_range__older_than_24__started_ipt: 8,
      dc__gender__F__age_range__older_than_24__completed_ipt_past_12_months: 857,
      dc__gender__F__age_range__older_than_24__condoms_provided: 189,
      dc__gender__F__age_range__older_than_24__started_modern_contraception: 189,
      dc__gender__F__age_range__older_than_24__on_modern_contraception: 1377,
      dc__gender__F__age_range__older_than_24__art_revisit_this_month: 3317,
      dc__gender__F__age_range__older_than_24__f_gte_18_visits: 468,
      dc__gender__M__age_range__10_to_14__current_on_art: 68,
      dc__gender__M__age_range__10_to_14__enrolled_this_month: 0,
      dc__gender__M__age_range__10_to_14__pre_art: 0,
      dc__gender__M__age_range__10_to_14__current_in_care: 68,
      dc__gender__M__age_range__10_to_14__active_on_art: 68,
      dc__gender__M__age_range__10_to_14__on_ctx_prophylaxis: 40,
      dc__gender__M__age_range__10_to_14__screened_for_tb: 66,
      dc__gender__M__age_range__10_to_14__tb_screened_this_visit_this_month: 26,
      dc__gender__M__age_range__10_to_14__tb_screened_positive: 0,
      dc__gender__M__age_range__10_to_14__started_ipt: 0,
      dc__gender__M__age_range__10_to_14__completed_ipt_past_12_months: 32,
      dc__gender__M__age_range__10_to_14__condoms_provided: 0,
      dc__gender__M__age_range__10_to_14__started_modern_contraception: 0,
      dc__gender__M__age_range__10_to_14__on_modern_contraception: 0,
      dc__gender__M__age_range__10_to_14__art_revisit_this_month: 68,
      dc__gender__M__age_range__10_to_14__f_gte_18_visits: 0,
      dc__gender__M__age_range__15_to_19__current_on_art: 96,
      dc__gender__M__age_range__15_to_19__enrolled_this_month: 0,
      dc__gender__M__age_range__15_to_19__pre_art: 0,
      dc__gender__M__age_range__15_to_19__current_in_care: 97,
      dc__gender__M__age_range__15_to_19__active_on_art: 96,
      dc__gender__M__age_range__15_to_19__on_ctx_prophylaxis: 60,
      dc__gender__M__age_range__15_to_19__screened_for_tb: 91,
      dc__gender__M__age_range__15_to_19__tb_screened_this_visit_this_month: 31,
      dc__gender__M__age_range__15_to_19__tb_screened_positive: 0,
      dc__gender__M__age_range__15_to_19__started_ipt: 0,
      dc__gender__M__age_range__15_to_19__completed_ipt_past_12_months: 45,
      dc__gender__M__age_range__15_to_19__condoms_provided: 0,
      dc__gender__M__age_range__15_to_19__started_modern_contraception: 0,
      dc__gender__M__age_range__15_to_19__on_modern_contraception: 0,
      dc__gender__M__age_range__15_to_19__art_revisit_this_month: 96,
      dc__gender__M__age_range__15_to_19__f_gte_18_visits: 0,
      dc__gender__M__age_range__1_to_9__current_on_art: 37,
      dc__gender__M__age_range__1_to_9__enrolled_this_month: 0,
      dc__gender__M__age_range__1_to_9__pre_art: 0,
      dc__gender__M__age_range__1_to_9__current_in_care: 37,
      dc__gender__M__age_range__1_to_9__active_on_art: 37,
      dc__gender__M__age_range__1_to_9__on_ctx_prophylaxis: 24,
      dc__gender__M__age_range__1_to_9__screened_for_tb: 35,
      dc__gender__M__age_range__1_to_9__tb_screened_this_visit_this_month: 10,
      dc__gender__M__age_range__1_to_9__tb_screened_positive: 0,
      dc__gender__M__age_range__1_to_9__started_ipt: 0,
      dc__gender__M__age_range__1_to_9__completed_ipt_past_12_months: 16,
      dc__gender__M__age_range__1_to_9__condoms_provided: 0,
      dc__gender__M__age_range__1_to_9__started_modern_contraception: 0,
      dc__gender__M__age_range__1_to_9__on_modern_contraception: 0,
      dc__gender__M__age_range__1_to_9__art_revisit_this_month: 37,
      dc__gender__M__age_range__1_to_9__f_gte_18_visits: 0,
      dc__gender__M__age_range__20_to_24__current_on_art: 57,
      dc__gender__M__age_range__20_to_24__enrolled_this_month: 0,
      dc__gender__M__age_range__20_to_24__pre_art: 0,
      dc__gender__M__age_range__20_to_24__current_in_care: 57,
      dc__gender__M__age_range__20_to_24__active_on_art: 57,
      dc__gender__M__age_range__20_to_24__on_ctx_prophylaxis: 46,
      dc__gender__M__age_range__20_to_24__screened_for_tb: 52,
      dc__gender__M__age_range__20_to_24__tb_screened_this_visit_this_month: 14,
      dc__gender__M__age_range__20_to_24__tb_screened_positive: 0,
      dc__gender__M__age_range__20_to_24__started_ipt: 0,
      dc__gender__M__age_range__20_to_24__completed_ipt_past_12_months: 21,
      dc__gender__M__age_range__20_to_24__condoms_provided: 5,
      dc__gender__M__age_range__20_to_24__started_modern_contraception: 5,
      dc__gender__M__age_range__20_to_24__on_modern_contraception: 0,
      dc__gender__M__age_range__20_to_24__art_revisit_this_month: 57,
      dc__gender__M__age_range__20_to_24__f_gte_18_visits: 0,
      dc__gender__M__age_range__older_than_24__current_on_art: 1674,
      dc__gender__M__age_range__older_than_24__enrolled_this_month: 8,
      dc__gender__M__age_range__older_than_24__pre_art: 0,
      dc__gender__M__age_range__older_than_24__current_in_care: 1674,
      dc__gender__M__age_range__older_than_24__active_on_art: 1674,
      dc__gender__M__age_range__older_than_24__on_ctx_prophylaxis: 1441,
      dc__gender__M__age_range__older_than_24__screened_for_tb: 1526,
      dc__gender__M__age_range__older_than_24__tb_screened_this_visit_this_month: 208,
      dc__gender__M__age_range__older_than_24__tb_screened_positive: 0,
      dc__gender__M__age_range__older_than_24__started_ipt: 2,
      dc__gender__M__age_range__older_than_24__completed_ipt_past_12_months: 474,
      dc__gender__M__age_range__older_than_24__condoms_provided: 124,
      dc__gender__M__age_range__older_than_24__started_modern_contraception: 124,
      dc__gender__M__age_range__older_than_24__on_modern_contraception: 0,
      dc__gender__M__age_range__older_than_24__art_revisit_this_month: 1666,
      dc__gender__M__age_range__older_than_24__f_gte_18_visits: 0,
      arv_first_regimen_location_id: 9999,
      dc__gender__F__age_range__gte_15__arv_first_regimen: 1724,
      dc__gender__M__age_range__gte_15__arv_first_regimen: 790,
      dc__gender__F__age_range__lt_15__arv_first_regimen: 81,
      dc__gender__M__age_range__lt_15__arv_first_regimen: 82,
      net_cohort: 47,
      active: 30,
      ltfu: 14,
      perc_ltfu: 0.2979,
      dead: 3,
      on_tx: 30,
      suppressed: 22,
      total_with_vl: 24,
      on_second_line: 1,
      on_original_first_line: 4,
      on_alternative_first_line: 7,
      gender: "F",
      age_range: "older_than_24",
      enrolled_this_month: 18,
      pre_art: 0,
      started_art_pregnant: 0,
      art_revisit_this_month: 5545,
      started_art_and_has_tb: 0,
      current_in_care: 5566,
      active_on_art: 5563,
      on_ctx_prophylaxis: 4727,
      screened_for_tb: 5092,
      tb_screened_this_visit_this_month: 738,
      current_on_art: 5563,
      tb_screened_positive: 1,
      started_ipt: 12,
      completed_ipt_past_12_months: 1566,
      condoms_provided: 324,
      started_modern_contraception: 324,
      on_modern_contraception: 1399,
      f_gte_18_visits: 489,
      scheduled_visits: 421,
      unscheduled_visits: 447,
      total_visits: 891,
      is_cross_border_on_art_this_month: 2,
      is_cross_border_vl_suppressed_this_month: 0,
      is_cross_border_active_on_art_12_month_cohort_this_month: 0,
      is_cross_border_presumed_tb_positive_this_month: 1,
      is_cross_border_started_tb_tx_this_month: 2,
      is_cross_border_on_tb_tx_this_month: 2,
      is_cross_border_completed_tb_tx: 1,
      is_cross_border_stopped_tb_tx: 0,
      is_cross_border_on_tb_tx_transferred_out: 0,
      is_cross_border_on_tb_tx_ltfu: 0,
      is_cross_border_on_tb_tx_dead: 0,
      is_cross_border_on_modern_contraception_this_month: 1,
      is_cross_border_country_this_month: 3,
      is_cross_border_county_this_month: 0,
      travelled_outside_last_3_months: 3,
      travelled_outside_last_6_months: 3,
      travelled_outside_last_12_months: 3,
      is_cross_border_country_kenya: 1,
      is_cross_border_country_uganda: 2,
      dc__age_range__10_to_14__current_on_art: 144,
      dc__age_range__10_to_14__enrolled_this_month: 0,
      dc__age_range__10_to_14__pre_art: 0,
      dc__age_range__10_to_14__current_in_care: 144,
      dc__age_range__10_to_14__active_on_art: 144,
      dc__age_range__10_to_14__on_ctx_prophylaxis: 86,
      dc__age_range__10_to_14__screened_for_tb: 141,
      dc__age_range__10_to_14__tb_screened_this_visit_this_month: 48,
      dc__age_range__10_to_14__tb_screened_positive: 1,
      dc__age_range__10_to_14__started_ipt: 1,
      dc__age_range__10_to_14__completed_ipt_past_12_months: 69,
      dc__age_range__10_to_14__condoms_provided: 0,
      dc__age_range__10_to_14__started_modern_contraception: 0,
      dc__age_range__10_to_14__on_modern_contraception: 0,
      dc__age_range__10_to_14__f_gte_18_visits: 0,
      dc__age_range__15_to_19__current_on_art: 177,
      dc__age_range__15_to_19__enrolled_this_month: 1,
      dc__age_range__15_to_19__pre_art: 0,
      dc__age_range__15_to_19__current_in_care: 178,
      dc__age_range__15_to_19__active_on_art: 177,
      dc__age_range__15_to_19__on_ctx_prophylaxis: 118,
      dc__age_range__15_to_19__screened_for_tb: 167,
      dc__age_range__15_to_19__tb_screened_this_visit_this_month: 56,
      dc__age_range__15_to_19__tb_screened_positive: 0,
      dc__age_range__15_to_19__started_ipt: 0,
      dc__age_range__15_to_19__completed_ipt_past_12_months: 71,
      dc__age_range__15_to_19__condoms_provided: 0,
      dc__age_range__15_to_19__started_modern_contraception: 0,
      dc__age_range__15_to_19__on_modern_contraception: 1,
      dc__age_range__15_to_19__f_gte_18_visits: 7,
      dc__age_range__1_to_9__current_on_art: 92,
      dc__age_range__1_to_9__enrolled_this_month: 0,
      dc__age_range__1_to_9__pre_art: 0,
      dc__age_range__1_to_9__current_in_care: 92,
      dc__age_range__1_to_9__active_on_art: 92,
      dc__age_range__1_to_9__on_ctx_prophylaxis: 61,
      dc__age_range__1_to_9__screened_for_tb: 89,
      dc__age_range__1_to_9__tb_screened_this_visit_this_month: 21,
      dc__age_range__1_to_9__tb_screened_positive: 0,
      dc__age_range__1_to_9__started_ipt: 1,
      dc__age_range__1_to_9__completed_ipt_past_12_months: 42,
      dc__age_range__1_to_9__condoms_provided: 0,
      dc__age_range__1_to_9__started_modern_contraception: 0,
      dc__age_range__1_to_9__on_modern_contraception: 0,
      dc__age_range__1_to_9__f_gte_18_visits: 0,
      dc__age_range__20_to_24__current_on_art: 150,
      dc__age_range__20_to_24__enrolled_this_month: 0,
      dc__age_range__20_to_24__pre_art: 0,
      dc__age_range__20_to_24__current_in_care: 150,
      dc__age_range__20_to_24__active_on_art: 150,
      dc__age_range__20_to_24__on_ctx_prophylaxis: 124,
      dc__age_range__20_to_24__screened_for_tb: 136,
      dc__age_range__20_to_24__tb_screened_this_visit_this_month: 28,
      dc__age_range__20_to_24__tb_screened_positive: 0,
      dc__age_range__20_to_24__started_ipt: 0,
      dc__age_range__20_to_24__completed_ipt_past_12_months: 53,
      dc__age_range__20_to_24__condoms_provided: 11,
      dc__age_range__20_to_24__started_modern_contraception: 11,
      dc__age_range__20_to_24__on_modern_contraception: 21,
      dc__age_range__20_to_24__f_gte_18_visits: 14,
      dc__age_range__older_than_24__current_on_art: 5000,
      dc__age_range__older_than_24__enrolled_this_month: 17,
      dc__age_range__older_than_24__pre_art: 0,
      dc__age_range__older_than_24__current_in_care: 5002,
      dc__age_range__older_than_24__active_on_art: 5000,
      dc__age_range__older_than_24__on_ctx_prophylaxis: 4338,
      dc__age_range__older_than_24__screened_for_tb: 4559,
      dc__age_range__older_than_24__tb_screened_this_visit_this_month: 585,
      dc__age_range__older_than_24__tb_screened_positive: 0,
      dc__age_range__older_than_24__started_ipt: 10,
      dc__age_range__older_than_24__completed_ipt_past_12_months: 1331,
      dc__age_range__older_than_24__condoms_provided: 313,
      dc__age_range__older_than_24__started_modern_contraception: 313,
      dc__age_range__older_than_24__on_modern_contraception: 1377,
      dc__age_range__older_than_24__f_gte_18_visits: 468,
      dc__age_range__below_15_years__enrolled_this_month: 0,
      dc__age_range__below_15_years__pre_art: 0,
      dc__age_range__below_15_years__current_in_care: 236,
      dc__age_range__below_15_years__active_on_art: 236,
      dc__age_range__below_15_years__on_ctx_prophylaxis: 147,
      dc__age_range__below_15_years__screened_for_tb: 230,
      dc__age_range__below_15_years__tb_screened_this_visit_this_month: 69,
      dc__age_range__below_15_years__tb_screened_positive: 1,
      dc__age_range__below_15_years__started_ipt: 2,
      dc__age_range__below_15_years__completed_ipt_past_12_months: 111,
      dc__age_range__below_15_years__condoms_provided: 0,
      dc__age_range__below_15_years__started_modern_contraception: 0,
      dc__age_range__below_15_years__on_modern_contraception: 0,
      dc__age_range__below_15_years__f_gte_18_visits: 0,
      dc__age_range__older_than_15__enrolled_this_month: 18,
      dc__age_range__older_than_15__pre_art: 0,
      dc__age_range__older_than_15__current_in_care: 5330,
      dc__age_range__older_than_15__active_on_art: 5327,
      dc__age_range__older_than_15__on_ctx_prophylaxis: 4580,
      dc__age_range__older_than_15__screened_for_tb: 4862,
      dc__age_range__older_than_15__tb_screened_this_visit_this_month: 669,
      dc__age_range__older_than_15__tb_screened_positive: 0,
      dc__age_range__older_than_15__started_ipt: 10,
      dc__age_range__older_than_15__completed_ipt_past_12_months: 1455,
      dc__age_range__older_than_15__condoms_provided: 324,
      dc__age_range__older_than_15__started_modern_contraception: 324,
      dc__age_range__older_than_15__on_modern_contraception: 1399,
      dc__age_range__older_than_15__f_gte_18_visits: 489,
      started_art: 18,
      dc__age_range__10_to_14__gender__F__started_art: 0,
      dc__age_range__10_to_14__gender__M__started_art: 0,
      dc__age_range__15_to_19__gender__F__started_art: 1,
      dc__age_range__15_to_19__gender__M__started_art: 0,
      dc__age_range__1_to_9__gender__F__started_art: 0,
      dc__age_range__1_to_9__gender__M__started_art: 0,
      dc__age_range__20_to_24__gender__F__started_art: 0,
      dc__age_range__20_to_24__gender__M__started_art: 0,
      dc__age_range__older_than_24__gender__F__started_art: 9,
      dc__age_range__older_than_24__gender__M__started_art: 8,
      dc__age_range__10_to_14__started_art: 0,
      dc__age_range__15_to_19__started_art: 1,
      dc__age_range__1_to_9__started_art: 0,
      dc__age_range__20_to_24__started_art: 0,
      dc__age_range__older_than_24__started_art: 17,
      dc__age_range__18_and_above__enrolled_this_month: 18,
      dc__age_range__18_and_above__pre_art: 0,
      dc__age_range__18_and_above__current_in_care: 5210,
      dc__age_range__18_and_above__active_on_art: 5207,
      dc__age_range__18_and_above__on_ctx_prophylaxis: 4506,
      dc__age_range__18_and_above__screened_for_tb: 4751,
      dc__age_range__18_and_above__tb_screened_this_visit_this_month: 628,
      dc__age_range__18_and_above__tb_screened_positive: 0,
      dc__age_range__18_and_above__started_ipt: 10,
      dc__age_range__18_and_above__completed_ipt_past_12_months: 1401,
      dc__age_range__18_and_above__condoms_provided: 324,
      dc__age_range__18_and_above__started_modern_contraception: 324,
      dc__age_range__18_and_above__on_modern_contraception: 1399,
      dc__age_range__18_and_above__f_gte_18_visits: 489,
      dc__age_range__below_18__enrolled_this_month: 0,
      dc__age_range__below_18__pre_art: 0,
      dc__age_range__below_18__current_in_care: 356,
      dc__age_range__below_18__active_on_art: 356,
      dc__age_range__below_18__on_ctx_prophylaxis: 221,
      dc__age_range__below_18__screened_for_tb: 341,
      dc__age_range__below_18__tb_screened_this_visit_this_month: 110,
      dc__age_range__below_18__tb_screened_positive: 1,
      dc__age_range__below_18__started_ipt: 2,
      dc__age_range__below_18__completed_ipt_past_12_months: 165,
      dc__age_range__below_18__condoms_provided: 0,
      dc__age_range__below_18__started_modern_contraception: 0,
      dc__age_range__below_18__on_modern_contraception: 0,
      dc__age_range__below_18__f_gte_18_visits: 0,
      total_hiv_exposed: 10,
      hiv_exposed_occupational: 0,
      hiv_exposed_non_occupational: 10,
      total_started_PEP: 10,
      started_PEP_occupational: 0,
      started_PEP_non_occupational: 10,
    },
  ],
  sectionDefinitions: [
    {
      sectionTitle: "3.1 Enrolled in Care",
      indicators: [
        {
          label: "Enrolled in care - Below 1yr",
          ref: "HV03-001",
          indicator: "dc__age_range__0_to_1__enrolled_this_month",
        },
        {
          label: "Enrolled in care - 1 to 9yrs",
          ref: "HV03-002",
          indicator: "dc__age_range__1_to_9__enrolled_this_month",
        },
        {
          label: "Enrolled in care - 10 to 14yrs(M)",
          ref: "HV03-003",
          indicator: "dc__gender__M__age_range__10_to_14__enrolled_this_month",
        },
        {
          label: "Enrolled in care - 10 to 14yrs(F)",
          ref: "HV03-004",
          indicator: "dc__gender__F__age_range__10_to_14__enrolled_this_month",
        },
        {
          label: "Enrolled in care - 15 to 19yrs(M)",
          ref: "HV03-005",
          indicator: "dc__gender__M__age_range__15_to_19__enrolled_this_month",
        },
        {
          label: "Enrolled in care - 15 to 19yrs(F)",
          ref: "HV03-006",
          indicator: "dc__gender__F__age_range__15_to_19__enrolled_this_month",
        },
        {
          label: "Enrolled in care - 20 to 24yrs(M)",
          ref: "HV03-007",
          indicator: "dc__gender__M__age_range__20_to_24__enrolled_this_month",
        },
        {
          label: "Enrolled in care - 20 to 24yrs(F)",
          ref: "HV03-008",
          indicator: "dc__gender__F__age_range__20_to_24__enrolled_this_month",
        },
        {
          label: "EnrolledMale25",
          ref: "HV03-009",
          indicator:
            "dc__gender__M__age_range__older_than_24__enrolled_this_month",
        },
        {
          label: "Enrolled in care - 25yrs and older(F)",
          ref: "HV03-010",
          indicator:
            "dc__gender__F__age_range__older_than_24__enrolled_this_month",
        },
        {
          label: "Enrolled in care - Total (Sum HV03-001 to HV03-010)",
          ref: "HV03-011",
          indicator: "enrolled_this_month",
        },
        {
          label: "Enrolled in care - key population",
          ref: "HV03-012",
          indicator: "",
        },
      ],
    },
    {
      sectionTitle: "3.2 Current On Pre ART",
      indicators: [
        {
          label: "In Pre ART - 0 to 14yrs",
          ref: "HV03-013",
          indicator: "dc__age_range__below_15_years__pre_art",
        },
        {
          label: "In Pre ART - 15yrs and older",
          ref: "HV03-014",
          indicator: "dc__age_range__older_than_15__pre_art",
        },
        {
          label: "In Pre ART - Total (Sum HV03-013 to HV013-014)",
          ref: "HV03-015",
          indicator: "pre_art",
        },
      ],
    },
    {
      sectionTitle: "3.3 Starting ART",
      indicators: [
        {
          label: "Starting ART - Below 1yr",
          ref: "HV03-016",
          indicator: "dc__age_range__0_to_1__started_art",
        },
        {
          label: "Starting ART - 1 to 9yrs",
          ref: "HV03-017",
          indicator: "dc__age_range__1_to_9__started_art",
        },
        {
          label: "Starting ART - 10 to 14yrs(M)",
          ref: "HV03-018",
          indicator: "dc__age_range__10_to_14__gender__M__started_art",
        },
        {
          label: "Starting ART - 10 to 14yrs(F)",
          ref: "HV03-019",
          indicator: "dc__age_range__10_to_14__gender__F__started_art",
        },
        {
          label: "Starting ART - 15 to 19yrs(M)",
          ref: "HV03-020",
          indicator: "dc__age_range__15_to_19__gender__M__started_art",
        },
        {
          label: "Starting ART - 15 to 19yrs(F)",
          ref: "HV03-021",
          indicator: "dc__age_range__15_to_19__gender__F__started_art",
        },
        {
          label: "Starting ART - 20 to 24yrs(M)",
          ref: "HV03-022",
          indicator: "dc__age_range__20_to_24__gender__M__started_art",
        },
        {
          label: "Starting ART - 20 to 24yrs(F)",
          ref: "HV03-023",
          indicator: "dc__age_range__20_to_24__gender__F__started_art",
        },
        {
          label: "Starting ART - 25 and older(M)",
          ref: "HV03-024",
          indicator: "dc__age_range__older_than_24__gender__M__started_art",
        },
        {
          label: "Starting ART - 25 and older(F)",
          ref: "HV03-025",
          indicator: "dc__age_range__older_than_24__gender__F__started_art",
        },
        {
          label: "Starting on ART - Total (Sum HV03-016 to HV03-025)",
          ref: "HV03-026",
          indicator: "started_art",
        },
        {
          label: "Starting on ART - key population",
          ref: "HV03-027",
          indicator: "",
        },
      ],
    },
    {
      sectionTitle:
        "3.4 Currently on ART [ALL] - (Add 3.2 and 3.3 e.g HV03-34=HV03-20+HV03-28)",
      indicators: [
        {
          label: "Currently on ART - Below 1yr",
          ref: "HV03-028",
          indicator: "dc__age_range__0_to_1__current_on_art",
        },
        {
          label: "Currently on ART - 1 to 9yrs",
          ref: "HV03-029",
          indicator: "dc__age_range__1_to_9__current_on_art",
        },
        {
          label: "Currently on ART - 10 to 14yrs(M)",
          ref: "HV03-030",
          indicator: "dc__gender__M__age_range__10_to_14__current_on_art",
        },
        {
          label: "Currently on ART - 10 to 14yrs(F)",
          ref: "HV03-031",
          indicator: "dc__gender__F__age_range__10_to_14__current_on_art",
        },
        {
          label: "Currently on ART - 15 to 19yrs(M)",
          ref: "HV03-032",
          indicator: "dc__gender__M__age_range__15_to_19__current_on_art",
        },
        {
          label: "Currently on ART - 15 to 19yrs(F)",
          ref: "HV03-033",
          indicator: "dc__gender__F__age_range__15_to_19__current_on_art",
        },
        {
          label: "Currently on ART - 20 to 24yrs(M)",
          ref: "HV03-034",
          indicator: "dc__gender__M__age_range__20_to_24__current_on_art",
        },
        {
          label: "Currently on ART - 20 to 24yrs(F)",
          ref: "HV03-035",
          indicator: "dc__gender__F__age_range__20_to_24__current_on_art",
        },
        {
          label: "Currently on ART - 25yrs and older(M)",
          ref: "HV03-036",
          indicator: "dc__gender__M__age_range__older_than_24__current_on_art",
        },
        {
          label: "Currently on ART - 25yrs and older(F)",
          ref: "HV03-037",
          indicator: "dc__gender__F__age_range__older_than_24__current_on_art",
        },
        {
          label: "Total currently on ART (Sum HV03-028 to HV03-037)",
          ref: "HV03-038",
          indicator: "current_on_art",
        },
        {
          label: "Currently on ART - key population",
          ref: "HV03-039",
          indicator: "",
        },
      ],
    },
    {
      sectionTitle: "3.5 Survival and Retention on ART at 12 months",
      indicators: [
        {
          label: "On ART  at 12 months",
          ref: "HV03-040",
          indicator: "active",
        },
        {
          label: "ART Net Cohort at 12 months",
          ref: "HV03-041",
          indicator: "net_cohort",
        },
        {
          label: "Viral load less than 1000 at 12 months",
          ref: "HV03-042",
          indicator: "suppressed",
        },
        {
          label: "Viral load results at 12 months",
          ref: "HV03-043",
          indicator: "total_with_vl",
        },
      ],
    },
    {
      sectionTitle: "3.6 On Cotrimoxazole Prophylaxis (within 2 months)",
      indicators: [
        {
          label: "On CTX - Below 1yr",
          ref: "HV03-044",
          indicator: "dc__age_range__0_to_1__on_ctx_prophylaxis",
        },
        {
          label: "On CTX - 1 to 9yrs",
          ref: "HV03-045",
          indicator: "dc__age_range__1_to_9__on_ctx_prophylaxis",
        },
        {
          label: "On CTX - 10 to 14yrs",
          ref: "HV03-046",
          indicator: "dc__age_range__10_to_14__on_ctx_prophylaxis",
        },
        {
          label: "On CTX - 15 to 19yrs",
          ref: "HV03-047",
          indicator: "dc__age_range__15_to_19__on_ctx_prophylaxis",
        },
        {
          label: "On CTX - 20 to 24yrs",
          ref: "HV03-048",
          indicator: "dc__age_range__20_to_24__on_ctx_prophylaxis",
        },
        {
          label: "On CTX - 25yrs and older",
          ref: "HV03-049",
          indicator: "dc__age_range__older_than_24__on_ctx_prophylaxis",
        },
        {
          label: "Total on CTX (Sum HV03-044 TO HV03-049)",
          ref: "HV03-050",
          indicator: "on_ctx_prophylaxis",
        },
      ],
    },
    {
      sectionTitle: "3.7 Screening",
      indicators: [
        {
          label: "Screened for TB - Below 1yrs(M)",
          ref: "HV03-051",
          indicator: "dc__age_range__0_to_1__screened_for_tb",
        },
        {
          label: "Screened for TB - 1 to 9yrs",
          ref: "HV03-052",
          indicator: "dc__age_range__1_to_9__screened_for_tb",
        },
        {
          label: "Screened for TB - 10 to 14yrs",
          ref: "HV03-053",
          indicator: "dc__age_range__10_to_14__screened_for_tb",
        },
        {
          label: "Screened for TB - 15 to 19yrs",
          ref: "HV03-054",
          indicator: "dc__age_range__15_to_19__screened_for_tb",
        },
        {
          label: "Screened for TB - 20 to 24yrs",
          ref: "HV03-055",
          indicator: "dc__age_range__20_to_24__screened_for_tb",
        },
        {
          label: "Screened for TB - 25yrs & older",
          ref: "HV03-056",
          indicator: "dc__age_range__older_than_24__screened_for_tb",
        },
        {
          label: "Total Screened for TB (Sum HV03-51 to HV03-56)",
          ref: "HV03-057",
          indicator: "screened_for_tb",
        },
        {
          label: "Presumed TB Total ",
          ref: "HV03-058",
          indicator: "tb_screened_positive",
        },
      ],
    },
    {
      sectionTitle: "3.8 Starting IPT",
      indicators: [
        {
          label: "Starting IPT - Below 1yrs",
          ref: "HV03-059",
          indicator: "dc__age_range__0_to_1__started_ipt",
        },
        {
          label: "Starting IPT - 1 to 9yrs",
          ref: "HV03-060",
          indicator: "dc__age_range__1_to_9__started_ipt",
        },
        {
          label: "Starting IPT - 10 to 14yrs",
          ref: "HV03-061",
          indicator: "dc__age_range__10_to_14__started_ipt",
        },
        {
          label: "Starting IPT - 15 to 19yrs",
          ref: "HV03-062",
          indicator: "dc__age_range__15_to_19__started_ipt",
        },
        {
          label: "Starting IPT  - 20 to 24yrs",
          ref: "HV03-063",
          indicator: "dc__age_range__20_to_24__started_ipt",
        },
        {
          label: "Starting IPT - 25yrs and older(F)",
          ref: "HV03-064",
          indicator: "dc__age_range__older_than_24__started_ipt",
        },
        {
          label: "Total Starting IPT (Sum HV03-059 to HV03-064)",
          ref: "HV03-065",
          indicator: "started_ipt",
        },
        {
          label: "Completed IPT 12months ",
          ref: "HV03-066",
          indicator: "completed_ipt_past_12_months",
        },
      ],
    },
    {
      sectionTitle: "3.9 Nutrition and HIV",
      indicators: [
        {
          label: "Nutrition Assess less than 15yrs",
          ref: "HV03-067",
          indicator: "",
        },
        {
          label: "Nutrition Assess greater than 15yrs",
          ref: "HV03-068",
          indicator: "",
        },
        {
          label: "Nutrition Assess Total (Sum HV03-067 to HV03-068)",
          ref: "HV03-069",
          indicator: "",
        },
        {
          label: "Malnourished less than 15",
          ref: "HV03-070",
          indicator: "",
        },
        {
          label: "Malnourished greater than 15",
          ref: "HV03-071",
          indicator: "",
        },
        {
          label: "Malnourished Total (Sum HV03-070 to HV03-071)",
          ref: "HV03-072",
          indicator: "",
        },
        {
          label: "FBP Provided less than 15",
          ref: "HV03-073",
          indicator: "",
        },
        {
          label: "FBP Provided greater than 15",
          ref: "HV03-074",
          indicator: "",
        },
        {
          label: "FBP Provided (Sum HV03-073 to HV03-074)",
          ref: "HV03-075",
          indicator: "",
        },
      ],
    },
    {
      sectionTitle: "3.10 HIV in TB Clinic",
      indicators: [
        {
          label: "TB cases New",
          ref: "HV03-076",
          indicator: "",
        },
        {
          label: "TB cases KP",
          ref: "HV03-077",
          indicator: "HIV_patients_newly_enrolled_into_TB_treatment",
        },
        {
          label: "TB Cases Tested HIV",
          ref: "HV03-078",
          indicator: "",
        },
        {
          label: "TB Known Status (Sum HV03-077 and HV03-078)",
          ref: "HV03-079",
          indicator: "",
        },
        {
          label: "TB New HIV Positive",
          ref: "HV03-080",
          indicator: "TB_patients_newly_enrolled_into_HIV_care",
        },
        {
          label: "TB TOTAL HIV Positive (Sum HV03-077 and HV03-080)",
          ref: "HV03-081",
          indicator: "newly_identified_HIV_positive_patient_on_TB_treatment",
        },
        {
          label: "TB already on HAART",
          ref: "HV03-082",
          indicator: "patients_on_ARV_starting_TB_treatment",
        },
        {
          label: "TB starting HAART",
          ref: "HV03-083",
          indicator: "TB_patients_starting_ARV_medication",
        },
        {
          label: "TB  Total on HAART (Sum HV03-082 and HV03-083)",
          ref: "HV03-084",
          indicator: "newly_identified_TB_patients_on_ARVs",
        },
      ],
    },
    {
      sectionTitle: "3.11 Community Dispensing of ARVs",
      indicators: [
        {
          label: "Community ART current(M)",
          ref: "HV03-085",
          indicator: "community_ART_dispensing_male",
        },
        {
          label: "Community ART current(F)",
          ref: "HV03-086",
          indicator: "community_ART_dispensing_female",
        },
      ],
    },
    {
      sectionTitle: "3.12 Family planning & CaCx screen in HIV CCC",
      indicators: [
        {
          label: "Screen CaCx New F18+",
          ref: "HV03-087",
          indicator: "",
        },
        {
          label: "Clinical visits F18+",
          ref: "HV03-089",
          indicator: "f_gte_18_visits",
        },
        {
          label: "On modern FP F15+",
          ref: "HV03-090",
          indicator: "dc__age_range__15_and_above__on_modern_contraception",
        },
      ],
    },
    {
      sectionTitle: "5. Post Exposure Prophylaxis",
      indicators: [
        {
          label: "Exposed Occupational",
          ref: "HV05-01",
          indicator: "hiv_exposed_occupational",
        },
        {
          label: "Exposed Other",
          ref: "HV05-02",
          indicator: "hiv_exposed_non_occupational",
        },
        {
          label: "Exposed Total (Sum HV05-01 and HV05-02)",
          ref: "HV05-03",
          indicator: "total_hiv_exposed",
        },
        {
          label: "PEP Occupational",
          ref: "HV05-04",
          indicator: "started_PEP_occupational",
        },
        {
          label: "PEP Other",
          ref: "HV05-05",
          indicator: "started_PEP_non_occupational",
        },
        {
          label: "PEP Total (Sum HV05-04 and HV05-05)",
          ref: "HV03-06",
          indicator: "total_started_PEP",
        },
      ],
    },
    {
      sectionTitle: "6. Cross Border Indicator Reporting",
      indicators: [
        {
          label: "Cross Country Patients",
          ref: "HV06-01",
          indicator: "is_cross_border_country_this_month",
        },
        {
          label: "Cross County Patients",
          ref: "HV06-02",
          indicator: "is_cross_border_county_this_month",
        },
        {
          label: "Travelled in the last 3 months",
          ref: "HV06-03",
          indicator: "travelled_outside_last_3_months",
        },
        {
          label: "Travelled in the last 6 months",
          ref: "HV06-04",
          indicator: "travelled_outside_last_6_months",
        },
        {
          label: "Travelled in the last 12 months",
          ref: "HV06-05",
          indicator: "travelled_outside_last_12_months",
        },
        {
          label: "Currently On ART",
          ref: "HV06-06",
          indicator: "is_cross_border_on_art_this_month",
        },
        {
          label: "Viral load less than 1000 at 12 months",
          ref: "HV06-07",
          indicator: "is_cross_border_vl_suppressed_this_month",
        },
        {
          label: "On ART at 12 months",
          ref: "HV06-08",
          indicator: "is_cross_border_active_on_art_12_month_cohort_this_month",
        },
        {
          label: "Presumed TB positive",
          ref: "HV06-09",
          indicator: "is_cross_border_presumed_tb_positive_this_month",
        },
        {
          label: "Started Tb Tx this month",
          ref: "HV06-10",
          indicator: "is_cross_border_started_tb_tx_this_month",
        },
        {
          label: "On Tb Tx",
          ref: "HV06-11",
          indicator: "is_cross_border_on_tb_tx_this_month",
        },
        {
          label: "On Modern Contraception",
          ref: "HV06-12",
          indicator: "is_cross_border_on_modern_contraception_this_month",
        },
      ],
    },
    {
      sectionTitle: "6.1 Cross Border Country Disaggregation",
      indicators: [
        {
          label: "Kenya",
          ref: "HV06-013",
          indicator: "is_cross_border_country_kenya",
        },
        {
          label: "Uganda",
          ref: "HV06-014",
          indicator: "is_cross_border_country_uganda",
        },
      ],
    },
    {
      sectionTitle: "6.2 Cross Border Tb Tx Outcomes",
      indicators: [
        {
          label: "Completed",
          ref: "HV06-015",
          indicator: "is_cross_border_completed_tb_tx",
        },
        {
          label: "Stopped",
          ref: "HV06-016",
          indicator: "is_cross_border_stopped_tb_tx",
        },
        {
          label: "Transferred Out",
          ref: "HV06-017",
          indicator: "is_cross_border_on_tb_tx_transferred_out",
        },
        {
          label: "Turned LTFU",
          ref: "HV06-018",
          indicator: "is_cross_border_on_tb_tx_ltfu",
        },
        {
          label: "Died",
          ref: "HV06-019",
          indicator: "is_cross_border_on_tb_tx_dead",
        },
      ],
    },
  ],
  indicatorDefinitions: [],
  isReleased: false,
};

export const mockCrossBorderPatientListResponse = [
  {
    gender: "M",
    birthdate: "1981-12-31T21:00:00.000Z",
    age: 38,
    person_id: 844088,
    location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
    location: "Location test",
    location_id: 19,
    cur_arv_meds: "LAMIVUDINE, TENOFOVIR, DOLUTEGRAVIR",
    enrollment_date: "17-08-2017",
    arv_first_regimen_start_date: "15-01-2018",
    cur_regimen_arv_start_date: "02-09-2020",
    cur_arv_line: 1,
    vl_1: 0,
    vl_1_date: "26-05-2020",
    age_range: "older_than_24",
    enrolled_this_month: 0,
    art_revisit_this_month: 1,
    current_in_care: 1,
    pre_art: 0,
    started_art_pregnant: 0,
    started_art_and_has_tb: 0,
    active_on_art: 1,
    on_ctx_prophylaxis: 1,
    current_on_art: 1,
    screened_for_tb: 1,
    tb_screened_this_visit_this_month: 1,
    tb_screened_positive: 0,
    screened_for_cervical_ca: 0,
    started_ipt: 0,
    completed_ipt_past_12_months: 1,
    condoms_provided: 0,
    started_modern_contraception: 0,
    on_modern_contraception: 0,
    scheduled_visits: 0,
    unscheduled_visits: 1,
    total_visits: 1,
    f_gte_18_visits: 0,
    is_cross_border_on_art_this_month: 1,
    is_cross_border_vl_suppressed_this_month: 1,
    is_cross_border_active_on_art_12_month_cohort_this_month: 0,
    is_cross_border_presumed_tb_positive_this_month: 0,
    is_cross_border_started_tb_tx_this_month: 0,
    is_cross_border_on_tb_tx_this_month: 0,
    is_cross_border_completed_tb_tx: 0,
    is_cross_border_stopped_tb_tx: 0,
    is_cross_border_on_tb_tx_transferred_out: 0,
    is_cross_border_on_tb_tx_ltfu: 0,
    is_cross_border_on_tb_tx_dead: 0,
    is_cross_border_on_modern_contraception_this_month: 0,
    is_cross_border_country_this_month: 1,
    is_cross_border_county_this_month: 0,
    travelled_outside_last_3_months: 0,
    travelled_outside_last_6_months: 1,
    travelled_outside_last_12_months: 1,
    is_cross_border_this_month_kenya: 0,
    is_cross_border_this_month_uganda: 1,
    is_cross_border_this_month_other: 0,
    is_cross_border_this_month: 1,
    patient_uuid: "987654321",
    uuid: "987654321",
    person_name: "TEST PATIENT",
    identifiers: "22112BS-2, 15834-16470",
    phone_number: null,
    latest_rtc_date: "2020-11-25",
    latest_vl: 0,
    latest_vl_date: "2020-05-26",
    last_appointment: "2020-09-02 ADULTRETURN",
    cur_meds: "628 ## 802 ## 9759",
    previous_vl: 400,
    previous_vl_date: "2019-11-05",
    nearest_center: null,
    age_rstarted_modern_contraceptionange: 0,
  },
  {
    gender: "M",
    birthdate: "1976-06-14T21:00:00.000Z",
    age: 44,
    person_id: 856283,
    location_uuid: "08fec60a-1352-11df-a1f1-0026b9348838",
    location: "Busia",
    location_id: 19,
    cur_arv_meds: "LAMIVUDINE, TENOFOVIR, DOLUTEGRAVIR",
    enrollment_date: "04-05-2018",
    arv_first_regimen_start_date: "04-05-2018",
    cur_regimen_arv_start_date: "11-12-2018",
    cur_arv_line: 1,
    vl_1: 0,
    vl_1_date: "30-03-2020",
    age_range: "older_than_24",
    enrolled_this_month: 0,
    art_revisit_this_month: 1,
    current_in_care: 1,
    pre_art: 0,
    started_art_pregnant: 0,
    started_art_and_has_tb: 0,
    active_on_art: 1,
    on_ctx_prophylaxis: 1,
    current_on_art: 1,
    screened_for_tb: 1,
    tb_screened_this_visit_this_month: 0,
    tb_screened_positive: 0,
    screened_for_cervical_ca: 0,
    started_ipt: 0,
    completed_ipt_past_12_months: 0,
    condoms_provided: 0,
    started_modern_contraception: 0,
    on_modern_contraception: 0,
    scheduled_visits: 0,
    unscheduled_visits: 0,
    total_visits: 0,
    f_gte_18_visits: 0,
    is_cross_border_on_art_this_month: 1,
    is_cross_border_vl_suppressed_this_month: 1,
    is_cross_border_active_on_art_12_month_cohort_this_month: 0,
    is_cross_border_presumed_tb_positive_this_month: 0,
    is_cross_border_started_tb_tx_this_month: 0,
    is_cross_border_on_tb_tx_this_month: 0,
    is_cross_border_completed_tb_tx: 0,
    is_cross_border_stopped_tb_tx: 0,
    is_cross_border_on_tb_tx_transferred_out: 0,
    is_cross_border_on_tb_tx_ltfu: 0,
    is_cross_border_on_tb_tx_dead: 0,
    is_cross_border_on_modern_contraception_this_month: 0,
    is_cross_border_country_this_month: 1,
    is_cross_border_county_this_month: 0,
    travelled_outside_last_3_months: 1,
    travelled_outside_last_6_months: 1,
    travelled_outside_last_12_months: 1,
    is_cross_border_this_month_kenya: 0,
    is_cross_border_this_month_uganda: 1,
    is_cross_border_this_month_other: 0,
    is_cross_border_this_month: 1,
    patient_uuid: "12535686910",
    uuid: "12535686910",
    person_name: "SAMPLE PATIENT TWO",
    identifiers: "15834-16668, 22695BS-6",
    phone_number: "0795441405",
    latest_rtc_date: "2020-11-10",
    latest_vl: 0,
    latest_vl_date: "2020-03-30",
    last_appointment: "2020-08-18 DRUGPICKUP",
    cur_meds: "628 ## 802 ## 9759",
    previous_vl: 86,
    previous_vl_date: "2019-03-05",
    nearest_center: "Arubaini near Greens primary school",
    age_rstarted_modern_contraceptionange: 0,
  },
];
