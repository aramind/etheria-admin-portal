import { teal } from "@mui/material/colors";

const useStyles = () => {
  const styles = {
    form: {
      inputLabel: {
        textAlign: "left",
        fontSize: "0.8rem",
        px: "5px",
        color: "#333",
        fontWeight: "bold",
      },
      primaryActionButton: {
        my: "1rem",
        py: "0.5rem",
        fontSize: "1.5rem",
        fontWeight: "bold",

        "&:hover": {
          backgroundColor: "tertiary.main",
          color: "black",
        },
      },
      primaryActionIcon: {
        fontSize: "2rem",
      },
      cardBorder: {
        borderTop: `15px solid ${teal["100"]}`,
        borderBottom: `2px solid ${teal["100"]}`,
        borderLeft: `2px solid ${teal["100"]}`,
        borderRight: `2px solid ${teal["100"]}`,
      },
    },
  };
  return styles;
};

export default useStyles;
