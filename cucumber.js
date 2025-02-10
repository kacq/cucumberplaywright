import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        headless: false,
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
        screenshot: 'only-on-failure',
        trace: 'on',
    },
});