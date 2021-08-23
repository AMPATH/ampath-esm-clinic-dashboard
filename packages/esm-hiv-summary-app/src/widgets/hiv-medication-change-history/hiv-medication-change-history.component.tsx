import React, { useMemo } from 'react';
import DataTable, {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableHeader,
  TableCell,
  DataTableHeader,
} from 'carbon-components-react/es/components/DataTable';
import { useTranslation } from 'react-i18next';
import { useHIVMedicationChangeHistory } from '../../hooks/useHIVMedicationChangeHistory';
import { zeroVl } from '../helper';

interface HIVMedicationChangeHistoryProps {
  patientUuid: string;
}

const HIVMedicationChangeHistory: React.FC<HIVMedicationChangeHistoryProps> = ({ patientUuid }) => {
  const { t } = useTranslation();
  const { medicationChangeHistory } = useHIVMedicationChangeHistory(patientUuid);

  const headerData: Array<DataTableHeader> = useMemo(
    () => [
      { key: 'encounterDateChange', header: t('encounterDateChange', 'Encounter Date change') },
      { key: 'previousVL', header: t('previousVL', 'Previous VL') },
      { key: 'previousVlDate', header: t('previousVlDate', 'Previous Vl Date') },
      { key: 'currentRegimen', header: t('currentRegimen', 'Current Regimen') },
    ],
    [t],
  );

  const rowData = medicationChangeHistory.map((medChangeHistory, index) => {
    return {
      id: `${index}`,
      encounterDateChange: medChangeHistory.encounter_datetime,
      previousVL: zeroVl(medChangeHistory.previous_vl),
      previousVlDate: medChangeHistory.previous_vl_date,
      currentRegimen: medChangeHistory.current_regimen,
    };
  });

  return (
    <DataTable rows={rowData} headers={headerData}>
      {({ rows, headers, getHeaderProps, getTableProps }) => (
        <TableContainer title={t('hivMedicationChangeHistory', 'Medication Change History')}>
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableHeader {...getHeaderProps({ header })}>{header.header}</TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  {row.cells.map((cell) => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </DataTable>
  );
};

export default HIVMedicationChangeHistory;
