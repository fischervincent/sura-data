export const normalizeBalance = (balance) =>
  Number(balance.replace("€", "").replace(/\s/g, "").replace(/,/g, ".").trim());
