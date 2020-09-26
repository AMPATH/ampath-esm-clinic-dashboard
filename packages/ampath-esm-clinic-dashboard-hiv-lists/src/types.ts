import { FunctionComponent } from "react";

export interface colDef {
  headerName: string;
  field: string;
  cellStyle?: React.CSSProperties;
  width?: string;
  cellRender?: FunctionComponent<{ value: any; rowNumber: number | null }>;
}
