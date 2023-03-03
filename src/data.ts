import { DynamicFieldData } from "./dynamic-control-types";

export const fields: DynamicFieldData[] = [
  {
    fieldName: "name",
    inputType: "text",
    label: "Name",
    defaultValue: "",
    required: true
  },
  {
    fieldName: "age",
    inputType: "number",
    label: "Age",
    defaultValue: 18,
    required: true,
    config: {
      validate: (value) => value >= 18 || "Still a minor"
    }
  },
  {
    fieldName: "language",
    inputType: "select",
    label: "Language",
    options: [
      { value: "english", label: "English" },
      { value: "french", label: "French" }
    ],
    defaultValue: "english"
  },
  {
    fieldName: "address",
    inputType: "text",
    label: "Address",
    defaultValue: ""
  },
  {
    fieldName: "isActive",
    inputType: "boolean",
    label: "Is Active",
    defaultValue: ""
  },
  {
    fieldName: "updatedFrom",
    inputType: "date",
    label: "Updated From Date",
    defaultValue: "02/24/2023",
    required: true
  },
  {
    fieldName: "updatedTo",
    inputType: "date",
    label: "Updated To Date",
    defaultValue: "08/02/1971 09:16 AM",
    required: true
  }
];
