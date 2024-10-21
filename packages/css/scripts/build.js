import { cpSync, readdirSync, rmSync, writeFileSync } from 'fs';
import path from 'path';

const destDir = 'dist';
const srcDir = 'src';

/**
 * Generates a JavScript file that adds an 'icons' variable to the window that contains a list of all icons.
 * Import the JavaScript file in our example for displaying icons.
 */
function buildIcons() {
  const iconsDir = 'icons';
  const iconsSrcDir = path.join(srcDir, iconsDir);
  const iconFiles = readdirSync(iconsSrcDir);
  const iconSvgFiles = iconFiles.filter(iconFile => iconFile.includes('.svg'));
  const iconsJs = `window.icons = ${JSON.stringify(iconSvgFiles)};\n`;
  writeFileSync('example/icons.js', iconsJs);
  console.log(`Generated icons.js file with ${iconSvgFiles.length} icons`);

  const iconsDestDir = path.join(destDir, iconsDir);

  console.log('Cleaning existing icons...');
  rmSync(iconsDestDir, { recursive: true, force: true });
  console.log('Cleaned existing icons');

  console.log('Copying icons...');
  cpSync(iconsSrcDir, iconsDestDir, { recursive: true });
  console.log('Copied icons');
}

function copyFonts() {
  const fontsDir = 'font';
  const fontsSrcDir = path.join(srcDir, fontsDir);

  const fontsDestDir = path.join(destDir, fontsDir);

  console.log('Cleaning existing fonts...');
  rmSync(fontsDestDir, { recursive: true, force: true });
  console.log('Cleaned existing fonts');

  console.log('Copying fonts...');
  cpSync(fontsSrcDir, fontsDestDir, { recursive: true });
  console.log('Copied fonts');
}

function copySCSS() {
  const scssDir = 'scss';
  const scssSrcDir = path.join(srcDir, scssDir);

  const scssDestDir = path.join(destDir, scssDir);

  console.log('Cleaning existing SCSS...');
  rmSync(scssDestDir, { recursive: true, force: true });
  console.log('Cleaned existing SCSS');

  console.log('Copying SCSS...');
  cpSync(scssSrcDir, scssDestDir, { recursive: true });
  console.log('Copied SCSS');
}

function main() {
  buildIcons();
  copyFonts();
  copySCSS();
}

main();
