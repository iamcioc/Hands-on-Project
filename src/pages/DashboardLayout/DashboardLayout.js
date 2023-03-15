import {Box} from "@mui/material";
// import Button from "../../components/Button";
import SideBar from "../../components/SideBar";
import useStyles from "./DashboardLayout.style"

function DashboardLayout() {
	const classes = useStyles ()


	return (
		<Box className={classes.root}>
			<SideBar />
		</Box>
	);
}

export default DashboardLayout;
