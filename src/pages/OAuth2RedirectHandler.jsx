import React from "react";
import { useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { actionCreators as userActions } from "../redux/modules/user";

const OAuth2RedirectHandler = (props) => {
  const dispatch = useDispatch();

  let code = new URL(window.location.href).searchParams.get("code");

  React.useEffect(() => {
    dispatch(userActions.kakaoLogin(code));
  }, []);
  return <Spinner />;
};

export default OAuth2RedirectHandler;
