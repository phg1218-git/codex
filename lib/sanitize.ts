export const sanitizeText = (value: string): string =>
  value.replace(/[<>]/g, "").trim();
