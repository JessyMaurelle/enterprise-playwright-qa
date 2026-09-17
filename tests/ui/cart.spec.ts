import { test, expect } from '@playwright/test';

test.describe('Product search', () => {
  test('@smoke customer can search for an existing product', async ({ page }) => {
    await test.step('Search for an existing product', async () => {
      await page.goto('/');

      await page
        .getByPlaceholder(/search/i)
        .fill('hammer');

      await page
        .getByRole('button', { name: /search/i })
        .click();
    });

    await test.step('Verify that relevant products are displayed', async () => {
      const firstProduct = page
        .locator('[data-test="product-name"]')
        .first();

      await expect(firstProduct).toBeVisible();
      await expect(firstProduct).toContainText(/hammer/i);
    });
  });

  test('@regression user receives feedback when no product is found', async ({ page }) => {
    await test.step('Search for an unknown product', async () => {
      await page.goto('/');

      await page
        .getByPlaceholder(/search/i)
        .fill('unknown-product-987654');

      await page
        .getByRole('button', { name: /search/i })
        .click();
    });

    await test.step('Verify that no product is displayed', async () => {
      await expect(
        page.locator('[data-test="product-name"]')
      ).toHaveCount(0);
    });

    await test.step('Verify that the user receives feedback', async () => {
      await expect(
        page.getByText(/no products found/i)
      ).toBeVisible();
    });
  });
});