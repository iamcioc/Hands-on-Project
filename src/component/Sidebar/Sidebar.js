import React from "react";
import SideBtn from "../Button/SideBtn";

const Sidebar = () => {
	return (
		<div className="sidebar" style={{}}>
			<div className="upperSideBtn">
				<SideBtn />
				<SideBtn />
				<SideBtn />
				<SideBtn />
			</div>
			<div className="lowerSideBtn">
				<SideBtn />
				<SideBtn />
				<SideBtn />
				<SideBtn />
			</div>
		</div>
	);
};

export default Sidebar;
