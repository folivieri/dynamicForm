import { RegisterOptions } from "react-hook-form";

export type ControlType =
  | "text"
  | "select"
  | "number"
  | "checkbox"
  | "date"
  | "boolean";

export interface SelectOption {
  label: string;
  value: string;
}

export interface DynamicFieldData {
  label: string;
  inputType: ControlType;
  fieldName: string;
  defaultValue: any;
  required?: boolean;
  options?: SelectOption[];
  config?: RegisterOptions;
}
