import { FunctionComponent } from "react";

export interface colDef {
  header: string;
  key: string;
  cellStyle?: React.CSSProperties;
  width?: string;
  cellRender?: FunctionComponent<{ value: any; rowNumber: number | null }>;
}
