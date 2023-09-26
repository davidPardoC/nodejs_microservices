"use client";
import React from "react";
import LoginForm from "@/components/LoginForm/LoginForm";
import { AuthProvider } from "@/context/AuthContext";

const LoginPage = () => {
  return <LoginForm isLogin />;
};

const LoginWrapper = () => {
  return (
    <AuthProvider>
      <LoginPage />
    </AuthProvider>
  );
};

export default LoginWrapper;
