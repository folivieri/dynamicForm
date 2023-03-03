import { ErrorMessage } from "@hookform/error-message";
import { FormProvider, useForm } from "react-hook-form";
import { DynamicFieldData } from "./dynamic-control-types";
import { DynamicControl } from "./DynamicControl";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface FormProps {
  fields: DynamicFieldData[];
}

export const Form = ({ fields }: FormProps) => {
  const formMethods = useForm();
  const {
    handleSubmit,
    formState: { isSubmitting, errors }
  } = formMethods;

  function onSubmit(data, error) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormProvider {...formMethods}>
        {fields.map((d, i) => (
          <div key={i}>
             <Box sx={{ width: '100%' }}>
                <Stack spacing={1}>     
                  <Item> 
                    <DynamicControl {...d} />
                  </Item>
                </Stack>
              </Box>         
            <ErrorMessage errors={errors} name={d.fieldName} />
          </div>
        ))}
      </FormProvider>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting" : "Submit"}
      </button>
    </LocalizationProvider>
    </form>
  );
};
