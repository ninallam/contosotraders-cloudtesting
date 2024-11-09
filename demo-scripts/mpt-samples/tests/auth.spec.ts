import { test, expect } from '@playwright/test';

const testTitles = [
	'test user registration with valid credentials',
	'verify error message for duplicate email during registration',
	'test user login with expired password',
	'verify error message for expired password during login',
	'test user login with account pending activation',
	'verify error message for pending activation during login',
	'test user login with disabled account',
	'verify error message for disabled account during login',
	'test user login with uppercase characters in username',
	'test user registration with valid email and username',
	'verify successful registration and redirection to login page',
	'test user registration with uppercase characters in email',
	'verify case-insensitive email validation during registration',
	'test user registration with all fields empty',
	'verify error message for missing username during login',
	'verify error message for password containing username during registration',
	'test user registration with password same as username',
	'verify error message for password same as username during registration',
	'test user login with case-sensitive username',
	'verify case-sensitive username validation during login',
	'test user registration with missing password confirmation',
	'verify error message for missing password confirmation during registration',
	'test user registration with mismatched password and confirmation',
	'test user registration with invalid email and password',
	'verify error message for invalid email and password during registration',
	'test user registration with invalid email and valid password',
	'should register user with valid data',
	'should not register user with invalid data',
	'login user with valid credentials',
	'do not login user with invalid credentials',
	'logout user successfully'
]

testTitles.forEach(testTitle => {
	test(testTitle, async ({ page }) => {
		await page.goto('https://playwright.dev/');
		await expect(page).toHaveTitle(/Playwright/);
		await page.getByRole('link', { name: 'Get started' }).click();
		await expect(page).toHaveURL(/.*intro/);
	});
});
