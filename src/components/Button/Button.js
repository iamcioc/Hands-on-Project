import React from "react";
import useStyles from "./Button.style";

const Button = ({ children }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<button className="sideBtn">{children}</button>
		</div>
	);
};

export default Button;
