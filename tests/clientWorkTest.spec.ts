import { test, expect } from '@playwright/test';

test('Navigate and verify Client Work', async ({ page }) => {
  // Navigate to the EPAM website
  await page.goto('https://www.epam.com/');

  // Select "Services" from the header menu
  await page.locator('span').filter({ hasText: 'Services Services' }).getByRole('link').click();

  // Click the "Explore Our Client Work" link
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  // Verify that the "Client Work" text is visible on the page
  const isVisible = await page.evaluate(() => document.body.innerText.includes('Client Work'));
  expect(isVisible).toBe(true);
});