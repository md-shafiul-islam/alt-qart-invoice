/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import ThemeProvider from "./ThemeProvider";
import AuthProvider from "./AuthProvider";
import { ToastContainer } from "react-toastify";
import localStore from "../utils/localStore";

const ContextWrapper = ({ children, ...props }) => {
  useEffect(() => {
    if (window) {
      localStore.initLocalStore(window);
    }
  }, []);
  return (
    <React.Fragment {...props}>
      <ToastContainer />
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </React.Fragment>
  );
};

export default ContextWrapper;
