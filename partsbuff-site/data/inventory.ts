export const formatMoney = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

export const formatMileage = (value: number | null) =>
  value === null ? "Not listed" : new Intl.NumberFormat("en-US").format(value);
