const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/srcset="\/(.*?)\.(png|jpg|jpeg|svg|webp|ico|gif|mp4)"/gi, 'srcset="./public/$1.$2"');
// Also handle uppercase "srcSet" if they exist
html = html.replace(/srcSet="\/(.*?)\.(png|jpg|jpeg|svg|webp|ico|gif|mp4)"/gi, 'srcset="./public/$1.$2"');

fs.writeFileSync('index.html', html);
console.log('srcset paths updated!');
