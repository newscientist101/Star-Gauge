const { test, expect } = require('@playwright/test');

test.describe('Poem Generation Rules', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('file:///app/index.html');
  });

  test('Four-way, Four-corner Red-character Reading', async ({ page }) => {
    await page.selectOption('#poem-select', 'Four-way, Four-corner Red-character Reading');
    await page.click('[data-row="0"][data-col="0"]');
    const poem = await page.textContent('#poem-display');
    expect(poem).toBe('琴清流楚激弦商\n秦王怀土眷旧乡\n身荣君仁离殊方\n春阳熙茂凋兰芳');
  });

  test('Central Well-style Red-character Reading', async ({ page }) => {
    await page.selectOption('#poem-select', 'Central Well-style Red-character Reading');
    await page.click('[data-row="7"][data-col="21"]');
    const poem = await page.textContent('#poem-display');
    expect(poem).toBe('钦所感想妄淫荒\n岑幽岩峻嵯峨深\n林阳潜曜翳英华\n沙流颓逝异浮沉');
  });

  test('Black-character Reading', async ({ page }) => {
    await page.selectOption('#poem-select', 'Black-character Reading');
    await page.click('[data-row="1"][data-col="27"]');
    const poem = await page.textContent('#poem-display');
    expect(poem).toBe('嗟叹怀所离经遐\n清华英多多思感\n谁为荣经遐清华\n英');
  });

  test('Blue-character Reading', async ({ page }) => {
    await page.selectOption('#poem-select', 'Blue-character Reading');
    await page.click('[data-row="1"][data-col="13"]');
    const poem = await page.textContent('#poem-display');
    expect(poem).toBe('邵南周风');
  });

  test('Purple-character Reading', async ({ page }) => {
    await page.selectOption('#poem-select', 'Purple-character Reading');
    await page.click('[data-row="8"][data-col="26"]');
    const poem = await page.textContent('#poem-display');
    expect(poem).toBe('明荣城荧形未在\n慎深虑渐孽班祸\n形未在慎');
  });

  test('Yellow-character Reading', async ({ page }) => {
    await page.selectOption('#poem-select', 'Yellow-character Reading');
    await page.click('[data-row="11"][data-col="13"]');
    const poem = await page.textContent('#poem-display');
    expect(poem).toBe('颜曜绣');
  });

  test('7x7 Cross-line Reading', async ({ page }) => {
    await page.selectOption('#poem-select', '7x7 Cross-line Reading');
    await page.click('[data-row="0"][data-col="0"]');
    const poem = await page.textContent('#poem-display');
    expect(poem).toBe('琴清流楚激弦商');
  });
});
