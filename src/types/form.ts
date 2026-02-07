import { ModalType } from "./ui";

export type ValidationResult = {
  isValid: boolean;
  error?: {
    title: string;
    message: string;
    type: ModalType;
  };
};
