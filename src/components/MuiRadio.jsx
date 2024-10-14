import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

export default function MuiRadio() {
    
    const [value, setValue] = React.useState('female');
    const [otherValue, setOtherValue] = React.useState('');
    const [showOtherInput, setShowOtherInput] = React.useState(false);

    const handleChange = (event) => {

        const selectedValue = event.target.value;
        setValue(selectedValue);
        if (selectedValue === 'other') {
            setShowOtherInput(true);
        } else {
            setShowOtherInput(false);
            setOtherValue('');
        }
    };

    const handleOtherChange = (event) => {
        setOtherValue(event.target.value);
    };

    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            {showOtherInput && (
                <TextField
                    label="other.."
                    variant="outlined"
                    size='small'
                    value={otherValue}
                    onChange={handleOtherChange}
                    sx={{ mt: 2 }} // Adds margin on top
                />
            )}
            <div style={{ marginTop: '10px' }}>
                {value === 'other' ? `Other: ${otherValue}` : value}
            </div>
        </FormControl>
    );
}
