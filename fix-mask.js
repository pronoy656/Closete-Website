const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/url\('\/Group 1707483204\.png'\)/g, "url('./public/Group 1707483204.png')");
fs.writeFileSync('index.html', html);
console.log('Fixed mask-image URLs');
