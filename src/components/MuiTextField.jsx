import React from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
export default function MuiTextField() {
    return (
        <Stack spacing={4} direction='column'>
            <Stack direction='row' spacing={2}>
                <TextField label="name" variant='outlined' />
                <TextField label="name" variant='filled' />
                <TextField label="name" variant='standard' />
            </Stack>
            <hr />
            <Stack spacing={2} direction='row'>
                <TextField label="small" size='small' color='secondary' />
                <TextField label="medium" size='medium' />
                <TextField label="large" size='large' />
            </Stack>

            <hr />
            <Stack spacing={2} direction='row'>
                <TextField
                    label="username"
                    required
                    helperText="Please enter username"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                        )
                    }}
                />
                <TextField label="password" required helperText="Please enter password" error type='password' />
                <TextField label="read only" InputProps={{ readOnly: true }} />
            </Stack>
            <hr />
            <Stack spacing={2} direction='row'>
                <TextField
                    label="Weight"
                    size='small'
                    type='number'
                    InputProps={{
                         endAdornment:(
                             <InputAdornment position="end">
                                 kg
                             </InputAdornment>
                         )
                    }}
                />
            </Stack>
        </Stack >
    )
}
