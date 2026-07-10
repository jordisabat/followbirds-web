import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 375, height: 812 } // iPhone SE size
  });
  
  await page.goto('http://localhost:4321/followbirds-web/story', { waitUntil: 'load' });
  await page.waitForTimeout(1000); // Wait for page to fully render
  
  console.log('Page loaded. Inspecting layout...\n');
  
  // Debug: Check what's on the page
  const pageInfo = await page.evaluate(() => {
    return {
      title: document.title,
      bodyClasses: document.body.className,
      storyExperience: !!document.querySelector('.story-experience'),
      mainElement: !!document.querySelector('main'),
      allClasses: Array.from(document.querySelectorAll('[class*="story"]')).map(el => el.className)
    };
  });
  
  console.log('Page Debug Info:', JSON.stringify(pageInfo, null, 2));
  
  // Get layout information
  const layoutInfo = await page.evaluate(() => {
    const storyExperience = document.querySelector('.story-experience');
    const devicePanel = document.querySelector('.story-device-panel');
    const stepsPanel = document.querySelector('.story-steps-panel');
    const firstStep = document.querySelector('.story-step');
    
    return {
      storyExperienceFound: !!storyExperience,
      devicePanelFound: !!devicePanel,
      stepsPanelFound: !!stepsPanel,
      firstStepFound: !!firstStep,
      devicePanelHeight: devicePanel?.offsetHeight,
      devicePanelPosition: devicePanel ? window.getComputedStyle(devicePanel).position : null,
      devicePanelZIndex: devicePanel ? window.getComputedStyle(devicePanel).zIndex : null,
      stepsPanelMarginTop: stepsPanel ? window.getComputedStyle(stepsPanel).marginTop : null,
      firstStepHeight: firstStep?.offsetHeight,
      viewportHeight: window.innerHeight,
      documentHeight: document.documentElement.scrollHeight,
      bodyHeight: document.body.scrollHeight
    };
  });
  
  console.log('Layout Info:', JSON.stringify(layoutInfo, null, 2));
  
  // Scroll and check overlap
  console.log('\nScrolling 300px down...\n');
  await page.evaluate(() => window.scrollBy(0, 300));
  await page.waitForTimeout(300);
  
  const overlapInfo = await page.evaluate(() => {
    const devicePanel = document.querySelector('.story-device-panel');
    const firstStep = document.querySelector('.story-step');
    
    if (!devicePanel || !firstStep) {
      return { error: 'Elements not found' };
    }
    
    const deviceRect = devicePanel.getBoundingClientRect();
    const stepRect = firstStep.getBoundingClientRect();
    
    return {
      scrollPosition: window.scrollY,
      devicePanel: {
        top: Math.round(deviceRect.top),
        bottom: Math.round(deviceRect.bottom),
        height: Math.round(deviceRect.height),
        zIndex: window.getComputedStyle(devicePanel).zIndex
      },
      firstStep: {
        top: Math.round(stepRect.top),
        bottom: Math.round(stepRect.bottom),
        height: Math.round(stepRect.height),
        zIndex: window.getComputedStyle(firstStep).zIndex
      },
      isOverlapping: deviceRect.bottom > stepRect.top + 10
    };
  });
  
  console.log('After scrolling 300px:', JSON.stringify(overlapInfo, null, 2));
  
  await browser.close();
})();
