import React from "react";
import { useDispatch } from "react-redux";
import { kakaoLogin } from "../redux/modules/user";
import { CircularProgress, Box } from "@mui/material";

const OAuth2RedirectHandler = (props) => {
  const dispatch = useDispatch();

  let code = new URL(window.location.href).searchParams.get("code");

  React.useEffect(() => {
    dispatch(kakaoLogin(code));
  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress style={{ color: `var(--point)` }} />
    </Box>
  );
};

export default OAuth2RedirectHandler;
