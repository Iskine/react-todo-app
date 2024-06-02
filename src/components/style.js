import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { TextField } from "@mui/material";

export const Logos = styled("div")({
  padding: 8,
  borderRadius: 4,
});

export const Boxes = styled("div")({
  height: "100%",
  minWidth: "50vw",
  display: "flex",
  border: "3px solid #FFEADD",
  color: "#FFEADD",
  borderRadius: "25px",
  justifyContent: "space-around",
  padding: "20px",
  alignItems: "center",
  marginTop: "40px",
  "& p": {
    fontSize: "30px",
    fontWeight: "500",
    margin: "0",
  },
});

export const Circle = styled("div")({
  height: "140px",
  width: "140px",
  backgroundColor: "#FF6666",
  color: "#101621",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "50px",
  fontWeight: "700",
});

export const AddText = styled(TextField)({
  minWidth: "30vw",
  backgroundColor: "#FCAEAE",
  borderRadius: "15px",
  marginBottom: "50px",
  "& input": {
    color: "black",
    height: "5px",
    borderRadius: "15px",
  },
});

export const Task = styled("div")({
  width: "40%",
  height: "50px",
  border: "2px solid #FF6666",
  backgroundColor: "#FFEADD",
  borderRadius: "10px",
  marginBottom: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  textOverflow: "ellipsis",
  textWrap: "nowrap",
  "& #edit-button": {
    "&:hover": {
      cursor: "pointer",
      borderBottom: "3px solid #FF6666",
    },
  },
  "& #delete-button": {
    "&:hover": {
      cursor: "pointer",
      borderBottom: "3px solid #FF6666",
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  buttonCircle: {
    marginLeft: "10px",
    height: "40px",
    width: "40px",
    backgroundColor: "#FF6666",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    fontWeight: "600",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#FCAEAE",
    },
  },
  notDoneTaskCircle: {
    // position: "absolute",
    margin: "10px 20px 10px 20px",
    height: "30px",
    minWidth: "30px",
    backgroundColor: "transparent",
    border: "2px solid #FF6666",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    fontWeight: "600",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#11AD00",
    },
  },
  doneTaskCircle: {
    // position: "absolute",
    margin: "10px 20px 10px 20px",
    height: "30px",
    minWidth: "30px",
    backgroundColor: "#51FD00",
    border: "2px solid #FF6666",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    fontWeight: "600",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));
