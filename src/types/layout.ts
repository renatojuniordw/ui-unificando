import type React from "react";

export interface NavItem {
  label: string;
  path: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}