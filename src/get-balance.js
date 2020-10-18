export const getBalance = async (page) => {
  const balanceElement = await page.$(".table-cell.last.col-3");
  return page.evaluate(
    (balanceElement) => balanceElement.textContent,
    balanceElement,
  );
};
