import { expect, test } from "@playwright/test";

test("navigation publique de base", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.getByRole("link", { name: "Menu" }).click();
  await expect(page).toHaveURL(/\/menu$/);
  await page.getByRole("link", { name: "Réservations" }).click();
  await expect(page).toHaveURL(/\/reservations$/);
});

