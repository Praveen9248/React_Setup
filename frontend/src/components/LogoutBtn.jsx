import React from "react";
import { Button } from "../components";
import { useAuth } from "../contexts";
const LogoutBtn = () => {
  const { logoutUser } = useAuth();
  const logoutHandler = () => {
    const result = logoutUser();
    if (result) {
      alert("logout successfull");
    } else {
      alert("logout Failed");
    }
  };
  return (
    <>
      <Button onClick={logoutHandler}>Logout</Button>
    </>
  );
};

export default LogoutBtn;
