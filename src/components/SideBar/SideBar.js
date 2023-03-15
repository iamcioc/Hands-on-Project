import React from "react";
import useStyles from "./SideBar.style";
import MiniSideBar from "../MiniSideBar/MiniSideBar";
import { Box } from "@mui/system";
import { propertiesList } from "./constant";
import { useState } from "react";


const SideBar = () => {
	const classes = useStyles();
    const [open, setOpen] = useState(false)
    
    const handleClick = () => {
        setOpen(!open)
    }

	return (
	
			
			<div className={classes.root}>
				<MiniSideBar />
				
					<div className={classes.flex1}>
						<Box>
							{propertiesList.map((property, index) => (
								<div key={index}>
									<h6 className={classes.header}>{property[0].header}</h6>
									<ul>
										{property.slice(1).map((item) => (
											<li key={item.id}>
												<a className={classes.flex2} href={item.link}>
													{item.icon}
													{item.link}
												</a>
											</li>
										))}
									</ul>
								</div>
							))}
						</Box>
					</div>
				
			</div>
	);
};

export default SideBar;
