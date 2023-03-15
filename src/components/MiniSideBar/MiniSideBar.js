import React from "react";
import useStyles from "./MiniSideBar.style";
import { business, business2 } from "./constant";
import BusinessIcon from "../BusinessIcon";

const MiniSideBar = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div>
				{business.map((item) => (
					<BusinessIcon image={item?.icon} />
				))}
			</div>

			<div>
				{classes.lowerBtn}
				{business2.map((item) => (
					<BusinessIcon image={item?.icon} />
				))}
			</div>
		</div>
	);
};

export default MiniSideBar;
