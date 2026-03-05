/**
 * Responsive Screenshot Test
 * Takes full-page screenshots at 6 target screen sizes + dark mode variants.
 * Results saved to tests/screenshots/
 */
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const SCREENS = [
  { name: '01-iphone-390',       width: 390,  height: 844,  label: 'iPhone Mobile' },
  { name: '02-android-412',      width: 412,  height: 915,  label: 'Android Mobile' },
  { name: '03-android-tablet-800', width: 800, height: 1280, label: 'Android Tablet' },
  { name: '04-ipad-820',         width: 820,  height: 1180, label: 'iPad Tablet' },
  { name: '05-desktop-1440',     width: 1440, height: 900,  label: 'Desktop (Chrome/Safari)' },
  { name: '06-desktop-1920',     width: 1920, height: 1080, label: 'Desktop Large' },
];

const TEST_PAGE = 'file://' + path.resolve(__dirname, '../docs/responsive-test.html');
const OUTPUT_DIR = path.resolve(__dirname, 'screenshots');

async function run() {
  // Ensure output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({ headless: true });
  const results = [];

  for (const screen of SCREENS) {
    console.log(`\n📱 Testing: ${screen.label} (${screen.width}x${screen.height})`);

    const page = await browser.newPage();
    await page.setViewport({ width: screen.width, height: screen.height });
    await page.goto(TEST_PAGE, { waitUntil: 'networkidle0' });

    // Wait for fonts to load
    await page.evaluate(() => document.fonts.ready);

    // Light mode screenshot
    const lightPath = path.join(OUTPUT_DIR, `${screen.name}-light.png`);
    await page.screenshot({ path: lightPath, fullPage: true });
    console.log(`  ✓ Light mode → ${screen.name}-light.png`);

    // Dark mode screenshot
    await page.evaluate(() => document.body.classList.add('dark-mode'));
    await new Promise(r => setTimeout(r, 300)); // Wait for transitions
    const darkPath = path.join(OUTPUT_DIR, `${screen.name}-dark.png`);
    await page.screenshot({ path: darkPath, fullPage: true });
    console.log(`  ✓ Dark mode  → ${screen.name}-dark.png`);

    // Open modal and screenshot
    await page.evaluate(() => {
      document.body.classList.remove('dark-mode');
      document.getElementById('testModal').removeAttribute('hidden');
    });
    await new Promise(r => setTimeout(r, 300));
    const modalPath = path.join(OUTPUT_DIR, `${screen.name}-modal.png`);
    await page.screenshot({ path: modalPath, fullPage: false }); // viewport only for modal
    console.log(`  ✓ Modal open → ${screen.name}-modal.png`);

    // Validate responsive breakpoints
    const checks = await page.evaluate(() => {
      const w = window.innerWidth;
      const results = {};

      // Check form row columns
      const formRow = document.querySelector('.drp-form-row');
      if (formRow) {
        const cols = getComputedStyle(formRow).gridTemplateColumns;
        results.formRowColumns = cols;
        results.formRowStacked = !cols.includes(' '); // single value = stacked
      }

      // Check card grid columns
      const grid4 = document.querySelector('.drp-grid-4');
      if (grid4) {
        results.gridColumns = getComputedStyle(grid4).gridTemplateColumns;
      }

      // Check button group wrap
      const btnGroup = document.querySelector('.drp-btn-group');
      if (btnGroup) {
        results.btnGroupWrap = getComputedStyle(btnGroup).flexWrap;
      }

      // Check tabs overflow
      const tabs = document.querySelector('.drp-tabs');
      if (tabs) {
        results.tabsOverflow = getComputedStyle(tabs).overflowX;
      }

      // Check modal max-width
      const modal = document.querySelector('.drp-modal');
      if (modal) {
        results.modalMaxWidth = getComputedStyle(modal).maxWidth;
      }

      // Check pagination wrap
      const pagination = document.querySelector('.drp-pagination');
      if (pagination) {
        results.paginationWrap = getComputedStyle(pagination).flexWrap;
      }

      // Check input font size (iOS zoom prevention)
      const input = document.querySelector('.drp-input');
      if (input) {
        results.inputFontSize = getComputedStyle(input).fontSize;
      }

      results.viewportWidth = w;
      return results;
    });

    // Validate expectations per screen
    const pass = [];
    const fail = [];
    const w = screen.width;

    // Form row: stacked at <= 768px
    if (w <= 768) {
      checks.formRowStacked ? pass.push('Form rows stacked') : fail.push('Form rows NOT stacked (expected single column)');
    } else {
      !checks.formRowStacked ? pass.push('Form rows 2-column') : fail.push('Form rows stacked (expected 2-column)');
    }

    // Grid: 4-col at desktop, 2-col at 768px, 1-col at <= 412px
    if (w <= 412) {
      checks.gridColumns && !checks.gridColumns.includes(' ')
        ? pass.push('Grid collapsed to 1-col')
        : fail.push(`Grid NOT 1-col: ${checks.gridColumns}`);
    } else if (w <= 768) {
      pass.push(`Grid columns: ${checks.gridColumns}`);
    } else {
      pass.push(`Grid columns: ${checks.gridColumns}`);
    }

    // Button group wrap at <= 768px
    if (w <= 768) {
      checks.btnGroupWrap === 'wrap' ? pass.push('Button group wraps') : fail.push(`Button group flexWrap: ${checks.btnGroupWrap}`);
    }

    // Tabs overflow at <= 768px
    if (w <= 768) {
      checks.tabsOverflow === 'auto' ? pass.push('Tabs horizontally scrollable') : fail.push(`Tabs overflow: ${checks.tabsOverflow}`);
    }

    // Pagination wrap at <= 768px
    if (w <= 768) {
      checks.paginationWrap === 'wrap' ? pass.push('Pagination wraps') : fail.push(`Pagination flexWrap: ${checks.paginationWrap}`);
    }

    // iOS zoom prevention at <= 390px
    if (w <= 390) {
      parseFloat(checks.inputFontSize) >= 16
        ? pass.push(`Input font-size: ${checks.inputFontSize} (iOS zoom safe)`)
        : fail.push(`Input font-size: ${checks.inputFontSize} (< 16px, iOS will zoom)`);
    }

    results.push({ screen: screen.label, width: w, pass, fail, checks });

    console.log(`  Pass: ${pass.length} | Fail: ${fail.length}`);
    pass.forEach(p => console.log(`    ✅ ${p}`));
    fail.forEach(f => console.log(`    ❌ ${f}`));

    await page.close();
  }

  await browser.close();

  // Summary
  console.log('\n' + '═'.repeat(60));
  console.log('RESPONSIVE TEST SUMMARY');
  console.log('═'.repeat(60));

  let totalPass = 0, totalFail = 0;
  for (const r of results) {
    const status = r.fail.length === 0 ? '✅' : '❌';
    console.log(`\n${status} ${r.screen} (${r.width}px)`);
    r.pass.forEach(p => console.log(`   ✅ ${p}`));
    r.fail.forEach(f => console.log(`   ❌ ${f}`));
    totalPass += r.pass.length;
    totalFail += r.fail.length;
  }

  console.log('\n' + '─'.repeat(60));
  console.log(`Total: ${totalPass} passed, ${totalFail} failed`);
  console.log(`Screenshots saved to: tests/screenshots/`);
  console.log('─'.repeat(60));

  // Write JSON report
  const report = {
    timestamp: new Date().toISOString(),
    screens: SCREENS,
    results: results.map(r => ({
      screen: r.screen,
      width: r.width,
      passed: r.pass.length,
      failed: r.fail.length,
      passDetails: r.pass,
      failDetails: r.fail,
      computedValues: r.checks,
    })),
    totals: { passed: totalPass, failed: totalFail },
  };
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'test-report.json'),
    JSON.stringify(report, null, 2)
  );

  process.exit(totalFail > 0 ? 1 : 0);
}

run().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
