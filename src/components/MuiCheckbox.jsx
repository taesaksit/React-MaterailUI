import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function MuiCheckbox() {
    
  const [checked, setChecked] = React.useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleChange = (event) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Select Options</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.option1}
              onChange={handleChange}
              name="option1"
            />
          }
          label="Option 1"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.option2}
              onChange={handleChange}
              name="option2"
            />
          }
          label="Option 2"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.option3}
              onChange={handleChange}
              name="option3"
            />
          }
          label="Option 3"
        />
      </FormGroup>
      <div style={{ marginTop: '10px' }}>
        Selected: {Object.keys(checked).filter((key) => checked[key]).join(', ')}
      </div>
    </FormControl>
  );
}
