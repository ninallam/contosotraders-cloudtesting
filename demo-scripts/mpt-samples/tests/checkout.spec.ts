import { test, expect } from '@playwright/test';

const testTitles = [
    'test adding items to cart and proceeding to checkout',
    'verify cart page displays added items and total amount',
    'test guest checkout flow with required fields',
    'verify validation messages for missing checkout information',
    'test applying discount codes during checkout',
    'verify tax calculation and display in checkout summary',
    'test selecting different shipping options',
    'verify order confirmation page after successful checkout',
    'test placing an order with registered account',
    'verify email confirmation received after successful order',
    'test checkout flow with multiple quantities and variants'
    
]

testTitles.forEach(testTitle => {
	test(testTitle, async ({ page }) => {
		await page.goto('https://playwright.dev/');
		await expect(page).toHaveTitle(/Playwright/);
		await page.getByRole('link', { name: 'Get started' }).click();
		await expect(page).toHaveURL(/.*intro/);
	});
});
