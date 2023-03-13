import React from "react";
import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Sidebar from "../Sidebar/Sidebar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import { AddBoxOutlined, SubjectOutlined } from "@material-ui/icons";
// import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../Header/Header";

const drawerWidth = 200;

const useStyles = makeStyles({
	drawer: {
		width: drawerWidth,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	root: {
		// border: "1px solid red",
		// width: "20vw",
		// height: "100vh",
	},
	// appbar: {
	// 	width: `calc(100% - ${drawerWidth}px)`,
	// },
	// toolbar: {
	// 	color: "#f9f9f9",
	// },
});

export default function Layout() {
	const classes = useStyles();
	// const navigate = useNavigate();

	const menuItems = [
		{
			text: "Dashboard",
			// icon: <SubjectOutlined color="secondary" fontSize="7px" />,
			path: "/",
		},
		{
			text: "Customers",
			icon: <AddCircleOutlineIcon color="secondary" fontSize="7px" />,
			path: "/",
		},
		{
			text: "Wallet",
			icon: <AddCircleOutlineIcon color="secondary" fontSize="7px" />,
			path: "/",
		},
		{
			text: "Online Shop",
			icon: <AddCircleOutlineIcon color="secondary" fontSize="7px" />,
			path: "/",
		},
		{
			text: "Orders",
			icon: <AddCircleOutlineIcon color="secondary" fontSize="7px" />,
			path: "/",
		},
		{
			text: "Invoicing",
			icon: <AddCircleOutlineIcon color="secondary" fontSize="7px" />,
			path: "/",
		},
		{
			text: "Point of Sale",
			icon: <AddCircleOutlineIcon color="secondary" fontSize="7px" />,
			path: "/",
		},
		{
			text: "Product and Services",
			icon: <AddCircleOutlineIcon color="secondary" fontSize="7px" />,
			path: "/",
		},

		{
			text: "Analytics",
			icon: <AddCircleOutlineIcon color="secondary" fontSize="7px" />,
			path: "/",
		},
		{
			text: "Accounting",
			icon: <AddCircleOutlineIcon color="secondary" fontSize="7px" />,
			path: "/",
		},
		{
			text: "Business Loan",
			icon: <AddCircleOutlineIcon color="secondary" fontSize="7px" />,
			path: "/",
		},
	];
	return (
		<div className={classes.root}>
			{/* app bar */}
			
			
				<Typography style={{}}>
				<Header/>
				</Typography>
			

			{/* side drawer */}
			<Drawer
				style={{
					// border: "1px solid black",
					// height: "100%",
					// width: "100%",
					// display: "flex !important",
					// flexDirection: "row",
					paddingLeft: "30px",
					maxWidth: "100px",
				}}
				className={classes.drawer}
				variant="permanent"
				anchor="left"
				classess={{ paper: classes.drawerPaper }}
			>
				<Sidebar />
				<div style={{ marginLeft: "50px" }}>
					<Typography variant="h4">Lets Go</Typography>
					<List>
						{/* <ListItem>
							<ListItemIcon>
								<AddCircleOutlineIcon fontSize="7px" />
							</ListItemIcon>
							<ListItemText>
								omor this task no 
							</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<AddCircleOutlineIcon fontSize = "7px"/>
							</ListItemIcon>
							<ListItemText>123</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<AddCircleOutlineIcon fontSize = "7px"/>
							</ListItemIcon>
							<ListItemText>123</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<AddCircleOutlineIcon fontSize = "7px"/>
							</ListItemIcon>
							<ListItemText>123</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<AddCircleOutlineIcon fontSize = "7px"/>
							</ListItemIcon>
							<ListItemText>123</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<AddCircleOutlineIcon fontSize = "7px"/>
							</ListItemIcon>
							<ListItemText>123</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<AddCircleOutlineIcon fontSize = "7px"/>
							</ListItemIcon>
							<ListItemText>123</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<AddCircleOutlineIcon fontSize = "7px"/>
							</ListItemIcon>
							<ListItemText>123</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<AddCircleOutlineIcon fontSize = "7px"/>
							</ListItemIcon>
							<ListItemText>123</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<AddCircleOutlineIcon fontSize = "7px"/>
							</ListItemIcon>
							<ListItemText>123</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<AddCircleOutlineIcon fontSize = "7px"/>
							</ListItemIcon>
							<ListItemText>123</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<AddCircleOutlineIcon fontSize = "7px"/>
							</ListItemIcon>
							<ListItemText>123</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<AddCircleOutlineIcon fontSize = "7px"/>
							</ListItemIcon>
							<ListItemText>123</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<AddCircleOutlineIcon fontSize = "7px"/>
							</ListItemIcon>
							<ListItemText>123</ListItemText>
						</ListItem> */}

						{/* list / links */}
						{menuItems.map((item) => (
							<ListItem
								// button
								Key={item.text}
								// onClick={() => navigate(item.path)}
							>
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItem>
						))}
					</List>
				</div>
			</Drawer>
		</div>
	);
}
