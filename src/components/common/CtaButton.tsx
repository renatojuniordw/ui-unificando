import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { trackCtaClick } from "../../utils/analytics";

interface CtaButtonProps {
  label?: string;
  size?: "md" | "lg";
  className?: string;
  trackingLabel?: string;
  trackingLocation?: string;
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  label = "Vamos construir algo?",
  size = "md",
  className,
  trackingLabel,
  trackingLocation = "cta_button",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (trackingLabel) {
      trackCtaClick({
        label: trackingLabel,
        location: trackingLocation,
        to: ROUTES.CONTACT,
      });
    }
    navigate(ROUTES.CONTACT);
  };

  const sizeClasses =
    size === "lg" ? "px-12 py-6 text-base" : "px-10 py-5 text-sm md:text-base";

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`bg-[#ccff00] text-slate-950 font-black hover:bg-white transition-all uppercase tracking-[0.2em] shadow-[6px_6px_0px_#fff] ${sizeClasses} ${
        className ?? ""
      }`}
      style={{ borderRadius: "0px" }}
    >
      {label}
    </button>
  );
};