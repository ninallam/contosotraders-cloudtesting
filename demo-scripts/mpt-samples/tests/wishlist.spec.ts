import { test, expect } from '@playwright/test';

const testTitles = [
	'add item to wishlist',
    'remove item from wishlist',
    'move item from wishlist to cart',
    'display empty wishlist message',
    'check sharing wishlist via email',
    'validate notification for out-of-stock wishlist items',
    'verify adding wishlist items to cart in bulk'
]

testTitles.forEach(testTitle => {
	test(testTitle, async ({ page }) => {
		await page.goto('https://playwright.dev/');
		await expect(page).toHaveTitle(/Playwright/);
		await page.getByRole('link', { name: 'Get started' }).click();
		await expect(page).toHaveURL(/.*intro/);
	});
});
