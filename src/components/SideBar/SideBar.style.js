import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
	root: {
		width: "250PX",
		// border: "1px solid black",
		height: "100vh",
		display: "flex",
	},

	flex1: {
		height: "100vh",
		border: "1px solid blue",
		width: "100%",
		// opacity: "0.8",
        paddingTop: "50px",
        
	},

	flex2: {
		textDecoration: "none",
		display: "flex",
		// flexDirection: "row",
		alignItems: "left",
		paddingRight: "10px",
		paddingTop: "11px",
		color: "#011B60",
		gap: 8,
	},   

	header: {
		opacity: ".3",
		padding: "10px",
		marginTop: "20px",
		marginBottom: "-20px",
	},
}));
export default useStyles;
