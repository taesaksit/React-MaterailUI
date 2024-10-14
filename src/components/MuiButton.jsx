import React from 'react'
import { Stack, Button , IconButton, Icon } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';
export default function MuiButton() {
  return (
    <>
      <Stack spacing={3} direction='column'>
        <Stack spacing={2} direction='row'>

          <Button variant="text" >Text</Button>
          <Button variant="contained" >contained</Button>
          <Button variant="outlined" >outlined</Button>
        </Stack>
        <hr />
        <Stack spacing={2} direction='row'>
          <Button variant="contained" color="primary" >Primary</Button>
          <Button variant="contained" color="secondary" >Secondary</Button>
          <Button variant="contained" color="error" >Error</Button>
          <Button variant="contained" color="warning" >Warning</Button>
          <Button variant="contained" color="info" >Info</Button>
          <Button variant="contained" color="success" >Success</Button>

        </Stack>
        <hr />

        <Stack spacing={2} direction='row'>
          <Button variant="contained" color="primary" size='small' >Small</Button>
          <Button variant="contained" color="primary" size='medium'>Medium</Button>
          <Button variant="contained" color="primary" size='large'>Large</Button>
        </Stack>

        <hr />

        <Stack spacing={2} direction='row'>
          <Button variant="contained" color="primary" size='small' startIcon={<SendIcon />}>Small</Button>
          <Button variant="contained" color="primary" size='medium' endIcon={<RestoreOutlinedIcon />}>Medium</Button>
          <Button variant="contained" color="primary" size='large' startIcon={<GpsFixedOutlinedIcon/>}>Large</Button>
        </Stack>

        <hr />

        <Stack spacing={2} direction='row'>
          <IconButton color='secondary'>
              <SendIcon/>
          </IconButton>
        
        </Stack>





      </Stack>

    </>
  )
}
