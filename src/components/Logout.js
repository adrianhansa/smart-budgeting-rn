import React from "react";
import { Button } from "react-native";
import { logout } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <Button
      onPress={() => {
        console.log("Logged out");
        dispatch(logout);
      }}
      title="Logout"
    />
  );
};

export default Logout;
