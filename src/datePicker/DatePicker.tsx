import * as React from 'react';
import './DatePicker.css'
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';

export default function DateTimePicker() {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs('2022-12-16T12:00:00.000Z'),
  );
  return (
    <div className='dateTime'>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDateTimePicker
          label="Назначить Колл"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
    </div>
  );
}