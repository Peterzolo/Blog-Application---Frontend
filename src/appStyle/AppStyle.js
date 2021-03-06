import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    //color: 'rgba(0,183,255, 1)',
    color: "#00897b",
  },
  image: {
    marginLeft: "15px",
    borderRadius: "20px",
    padding: "5px",
  },
  [theme.breakpoints.down("sm")]: {
    appBarContainer: {
      flexDirection: "column-reverse",
    },
  },
}));

