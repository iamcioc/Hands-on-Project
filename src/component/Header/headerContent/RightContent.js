import React from 'react'
import { Button } from "@mui/material"
import { RocketLaunchOutlined } from '@mui/icons-material'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import wbSunnyOutlinedIcon from "@mui/icons-material/wbSunnyOutlined"
import { ToggleOffOutlinedIcon }  from '@material-ui/icons/ToggleOffOutlined'



const RightContent = () => {
  return (
      <div style={rightSide}>
          <Button variant="contained" style={{ textTransform: "none", backgroundColor: "#B0F0B5", border: 0 }}
              endIcon={<RocketLaunchOutlined color="secondary" />}>
              <p style={{ color: "#000" }}>Upgrade Plan</p>
          </Button>
          <SearchOutlinedIcon fontSize="large" />
          <wbSunnyOutlinedIcon fontSize="large" />
          <ToggleOffOutlinedIcon fontsize="large" color="primary" />
          
      
    </div>
  )
}

export default RightContent


const rightSide = {
    display: "flex",
    justifyContent: "space-betweeen"
}