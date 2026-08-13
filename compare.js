const fs = require('fs');
const tsx = fs.readFileSync('src/app/privacy/page.tsx', 'utf8');
const html = fs.readFileSync('privacy.html', 'utf8');
const tsxSections = [...tsx.matchAll(/title:\s*"([^"]+)"/g)].map(m => m[1]);
const htmlSections = [...html.matchAll(/<h2[^>]*>\s*(.*?)\s*<\/h2>/g)].map(m => m[1]);
console.log('TSX Sections:', tsxSections);
console.log('HTML Sections:', htmlSections);
console.log('Missing in HTML:', tsxSections.filter(s => !htmlSections.includes(s)));
