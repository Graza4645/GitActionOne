// @ts-check
import { test, expect } from '@playwright/test';

test('@smoke has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log('hello world')
  expect('hello').toBe('h')

});

test('@regression has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log('hello world')

});
