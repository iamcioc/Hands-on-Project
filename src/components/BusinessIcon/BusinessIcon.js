import React from "react";
import useStyles from "./BusinessIcon.style";

const BusinessIcon = ({ image }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
            <img className={classes.img} src={image} alt="" />
            
            
		</div>
	);
};

export default BusinessIcon;
