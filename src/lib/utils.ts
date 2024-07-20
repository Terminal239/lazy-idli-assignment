const format = (value: number, maxDigits: number) => {
  if (value === 0) return "0".repeat(maxDigits);

  const digits = Math.floor(Math.log10(value)) + 1;
  return "0".repeat(maxDigits - digits) + value;
};

export { format };
