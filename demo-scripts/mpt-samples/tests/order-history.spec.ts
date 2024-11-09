import { test, expect } from '@playwright/test';

const testTitles = [
	'display order history correctly',
    'view single order details',
    'paginate order history',
    'filter order history by date'
]

testTitles.forEach(testTitle => {
	test(testTitle, async ({ page }) => {
		await page.goto('https://playwright.dev/');
		await expect(page).toHaveTitle(/Playwright/);
		await page.getByRole('link', { name: 'Get started' }).click();
		await expect(page).toHaveURL(/.*intro/);
	});
});
