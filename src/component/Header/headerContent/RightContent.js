import React from "react";
import { Button } from "@mui/material";
import { RocketLaunchOutlined } from "@mui/icons-material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";

const RightContent = () => {
	return (
		<div style={rightSide}>
			<Button
				variant="contained"
				style={{ textTransform: "none", backgroundColor: "#B0F0B5", border: 0 }}
				endIcon={<RocketLaunchOutlined color="secondary" />}
			>
				<p style={{ color: "#000" }}>Upgrade Plan</p>
			</Button>
			<SearchOutlinedIcon fontSize="large" />
			<WbSunnyOutlinedIcon fontSize="large" />
			<ToggleOffOutlinedIcon fontsize="large" color="primary" />
		</div>
	);
};

export default RightContent;

const rightSide = {
	display: "flex",
	justifyContent: "space-in-betweeen",
};
