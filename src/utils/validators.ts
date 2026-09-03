export const validatePhone = (phone: string): boolean => {
  // Expecting format +55... or just digits
  // Minimal length for BR numbers:
  // DDI (2) + DDD (2) + Number (8 or 9) = 12 or 13 digits.
  // react-international-phone returns with + usually.
  const cleanPhone = phone.replace(/[^\d+]/g, ""); // keep +

  if (!cleanPhone.includes("+")) {
    // fallback if no +, assume at least 10 digits (DDD+Num)
    return cleanPhone.replace(/\D/g, "").length >= 10;
  }

  // Assuming standard international format
  // +55 11 98888-8888 (13 digits excluding +)
  // +1 555 555-5555 (11 digits excluding +)
  const digitsOnly = cleanPhone.replace(/\D/g, "");
  return digitsOnly.length >= 10; // Very basic check, can be improved for specific countries if needed
};
