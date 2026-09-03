import type React from "react";

export type ModalType = "success" | "error" | "warning";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: ModalType;
}

export interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
  robots?: string;
  keywords?: string;
}