import { test, expect } from '@playwright/test';

test.describe('Product discovery', () => {
  test('@smoke customer can search for an existing product', async ({ page }) => {
    await page.goto('/');

    const searchInput = page.getByPlaceholder(/search/i);
    await expect(searchInput).toBeVisible();
    await searchInput.fill('hammer');
    await page.getByRole('button', { name: /search/i }).click();

    await expect(page.locator('[data-test="product-name"]').first()).toContainText(/hammer/i);
  });
});
