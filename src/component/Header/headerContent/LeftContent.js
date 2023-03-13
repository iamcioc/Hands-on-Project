import React from "react";
import SystemSecurityUpdateGoodOutlinedIcon from "@mui/icons-material/SystemSecurityUpdateGoodOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const LeftContent = () => {
	return (
		<div style={leftStyle}>
			<SystemSecurityUpdateGoodOutlinedIcon />
			<p style={{ textDecoration: "underline", textTransform: "capitalize" }}>
				Lagos Mainland
			</p>
			<p style={{ color: "#ec9f34", marginLeft: 5 }}>HQ</p>
			<ExpandMoreOutlinedIcon />
		</div>
	);
};

export default LeftContent;

const leftStyle = {
	display: "flex",
	marginTop: "10"
};
