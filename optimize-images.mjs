import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

const imagesToOptimize = [
  { input: 'Group 1707483234 (1).png', output: 'cta-background.webp' },
  { input: 'where-we-operate-mobile.png', output: 'where-we-operate-mobile.webp' },
  { input: 'map.png', output: 'map.webp' },
  { input: 'Group 1707483252.png', output: 'cta-foreground.webp' }
];

async function optimizeImages() {
  console.log('Starting image optimization...');
  for (const { input, output } of imagesToOptimize) {
    const inputPath = path.join(publicDir, input);
    const outputPath = path.join(publicDir, output);

    try {
      if (fs.existsSync(inputPath)) {
        console.log(`Optimizing: ${input}`);
        await sharp(inputPath)
          .webp({ quality: 85 })
          .toFile(outputPath);
        console.log(`✅ Successfully optimized to ${output}`);
      } else {
        console.log(`⚠️ Warning: Input file not found: ${inputPath}`);
      }
    } catch (err) {
      console.error(`❌ Error optimizing ${input}:`, err);
    }
  }
  console.log('Optimization complete.');
}

optimizeImages();
