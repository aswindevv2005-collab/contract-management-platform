export type FieldType =
  | "Text"
  | "Date"
  | "Signature"
  | "Checkbox";

export type ContractStatus =
  | "Created"
  | "Approved"
  | "Sent"
  | "Signed"
  | "Locked"
  | "Revoked";

export interface Field {
  id: string;
  type: "Text" | "Date" | "Signature" | "Checkbox";
  label: string;
  x: number;
  y: number;
  value?: any;
}

export interface Blueprint {
  id: string;
  name: string;
  fields: Field[];
}

export interface Contract {
  id: string;
  name: string;
  blueprintId: string;        
  blueprintName: string;      
  status: ContractStatus;
  createdAt: string;
  fields: Field[];
}
