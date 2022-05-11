import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function Select() {
  return (
    <Box sx={{ minWidth: 120, }}>
      <FormControl fullWidth>
        <NativeSelect

          variant='outlined'
          defaultValue={1}
          inputProps={{

            name: 'Department',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Logistics</option>
          <option value={20}>Financial</option>
          <option value={30}>Tax writing</option>
          <option value={1}>Department</option>
        </NativeSelect>
      </FormControl>
    </Box >
  );
}
