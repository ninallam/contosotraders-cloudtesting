import { test, expect } from '@playwright/test';

const testTitles = [
	'verify page load time for home page on desktop',
	'verify page load time for home page on mobile devices',
	'test resource load optimization for css files',
	'test resource load optimization for javascript files',
	'test oauth token generation and verification performance',
	'verify sql query execution plans and index utilization',
	'test jwt token signing and verification performance',
	'verify web server (e.g., nginx, apache) request handling capacity',
	'test full-page load time across different browsers and devices',
];

testTitles.forEach(testTitle => {
	test(testTitle, async ({ page }) => {
		await page.goto('https://playwright.dev/');
		await expect(page).toHaveTitle(/Playwright/);
		await page.getByRole('link', { name: 'Get started' }).click();
		await expect(page).toHaveURL(/.*intro/);
	});
});
