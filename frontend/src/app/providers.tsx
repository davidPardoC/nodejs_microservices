"use client";
import { AuthProvider } from "@/context/AuthContext";
import React from "react";

const Providers = ({ children, ...props }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Providers;
