export const login = async (page) => {
  await page.type("#_58_login", process.env.LOGIN);
  await page.type("#_58_password", process.env.PASSWORD);
  await page.click(".btn.btn-primary");
  await page.waitForNavigation();
};
