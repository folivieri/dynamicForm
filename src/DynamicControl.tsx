
import { useFormContext } from "react-hook-form";
import { DynamicFieldData } from "./dynamic-control-types";
import {
  TextField,
  MenuItem,
  Switch,
} from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState } from 'react';
import dayjs from 'dayjs';

export const DynamicControl = ({
  inputType,
  fieldName,
  required,
  defaultValue,
  options = [],
  config = {}
}: DynamicFieldData) => {
  const { register } = useFormContext();
  const [updatedFromValue, setUpdatedFromValue] = useState(dayjs(defaultValue ? defaultValue : "08/02/1971"));

  switch (inputType) {
    case "text":
      return (
        <TextField
                className="form-control"
                type="text"
                label={fieldName}
                required={required}
                defaultValue={defaultValue}
                id={fieldName}
                size="small"
                sx={{ width: '250px' }}
                {...register(fieldName, config)}
            />
      );
    case "select": {
      return (
        <TextField label={fieldName} sx={{ width: '250px' }}
              {...register(fieldName, config)}
              defaultValue={defaultValue}
              required={required}
              select
              size="small"                        
          >
            <MenuItem key="choose" value="" >Choose...</MenuItem>
            { options.map((optn, index) => <MenuItem key={optn.label + index} value={optn.value} label={optn.label || optn.value} >{optn.value}</MenuItem>) }
        </TextField>
       
      );
    }
    case "number": {
      return (
        <TextField
                className="form-control"
                type="number"
                required={required}
                label={fieldName}
                defaultValue={defaultValue}
                id={fieldName}
                size="small"
                sx={{ width: '250px' }}
                {...register(fieldName, config)}
            />
      );
    }
    case "date":
      return (
        <DateTimePicker
            label={fieldName}
            value={updatedFromValue}           
            renderInput={(params) => <TextField
                      id={fieldName} 
                      required={required}
                      size="small" 
                      sx={{  width: '250px' }} 
                      {...params}
                      {...register(fieldName, config)} />} 
            onChange={function (value: any, keyboardInputValue?: string | undefined): void {
              setUpdatedFromValue(value);
            } }        
        />
      );
    case "boolean":
        return (          
            <FormControlLabel 
              control={<Switch id={fieldName} {...register(fieldName, config)} />} 
              label={fieldName} />
        );
    default:
      return <input type="text" />;
  }
};
