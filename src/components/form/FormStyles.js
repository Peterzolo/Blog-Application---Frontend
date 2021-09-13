import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#eeeeee",
    borderRadius: "10px",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
    backgroundColor: "#e0e0e0",
    padding: "10px",
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: "#00897b",
  },
  buttonClear: {
    marginBottom: 10,
    backgroundColor: "#26a69a",
  },
}));
