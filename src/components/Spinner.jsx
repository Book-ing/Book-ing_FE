import React from "react";
import { CircularProgress, Box } from "@mui/material";

const Spinner = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
      }}
    >
      <CircularProgress style={{ color: `var(--point)`, margin: "auto" }} />
    </Box>
  );
};

export default Spinner;
