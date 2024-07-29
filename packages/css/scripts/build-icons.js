import { readdirSync, writeFileSync } from 'fs';

/**
 * Generates a JavScript file that adds an 'icons' variable to the window that contains a list of all icons.
 * Import the JavaScript file in our example for displaying icons.
 */
function main() {
  const iconFiles = readdirSync('icons');
  const iconSvgFiles = iconFiles.filter(iconFile => iconFile.includes('.svg'));
  const iconsJs = `window.icons = ${JSON.stringify(iconSvgFiles)};\n`;
  writeFileSync('example/icons.js', iconsJs);
  console.log(`Generated icons.js file with ${iconSvgFiles.length} icons`);
}

main();
