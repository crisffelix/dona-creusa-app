export const moneyFormatterBR = (value: number | undefined) => {
  return value
    ? Intl.NumberFormat("pt-br", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value)
    : "-";
};
