import { chromium, firefox, webkit, LaunchOptions, devices } from "@playwright/test";

const options:LaunchOptions={
    headless:false,
    ...devices['iPhone 13']
}

export const invokeBrowser = ()=>{
    const browserType = process.env.npm_config_BROWSER || "chrome";
    switch(browserType){
        case "chrome":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);
        case "webkit":
            return webkit.launch(options)
        default:
            throw new Error("please provide valid Brower")
    }
}