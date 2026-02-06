export const validateEmail = (email: string): boolean => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

export const validateCPF = (cpf: string): boolean => {
  const strCPF = cpf.replace(/[^\d]/g, "");
  if (strCPF.length !== 11) return false;

  // Check for repeated digits (e.g. 111.111.111-11)
  if (/^(\d)\1{10}$/.test(strCPF)) return false;

  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) {
    sum = sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  }

  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(strCPF.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum = sum + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  }
  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(strCPF.substring(10, 11))) return false;

  return true;
};

export const validateCNPJ = (cnpj: string): boolean => {
  const strCNPJ = cnpj.replace(/[^\d]/g, "");

  if (strCNPJ.length !== 14) return false;

  // Check for repeated digits
  if (/^(\d)\1{13}$/.test(strCNPJ)) return false;

  let size = strCNPJ.length - 2;
  let numbers = strCNPJ.substring(0, size);
  const digits = strCNPJ.substring(size);
  let sum = 0;
  let pos = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(0))) return false;

  size = size + 1;
  numbers = strCNPJ.substring(0, size);
  sum = 0;
  pos = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(1))) return false;

  return true;
};

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
