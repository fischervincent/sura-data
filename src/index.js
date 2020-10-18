import puppeteer from "puppeteer";
import "dotenv/config";
import { getBalance } from "./get-balance";
import { login } from "./login";
import { logout } from "./logout";
import { normalizeBalance } from "./normalize-balance";

export const handler = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(process.env.URL);
  await login(page);
  const balanceValue = await getBalance(page);
  const balanceNumber = normalizeBalance(balanceValue);
  console.info(`Balance: ${balanceNumber}€`);
  await logout(page);
  browser.close();
};

handler();
