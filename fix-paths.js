const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/src="\/(.*?)\.(png|jpg|jpeg|svg|webp|ico|gif|mp4)"/gi, 'src="./public/$1.$2"');
html = html.replace(/href="\/(.*?)\.(png|jpg|jpeg|svg|webp|ico|gif|mp4)"/gi, 'href="./public/$1.$2"');
// Special cases that don't match the regex perfectly
html = html.replace(/src="\/cta-background\.webp"/g, 'src="./public/cta-background.webp"');
html = html.replace(/src="\/cta-foreground\.webp"/g, 'src="./public/cta-foreground.webp"');

fs.writeFileSync('index.html', html);

let js = fs.readFileSync('script.js', 'utf8');
js = js.replace(/src="\/(.*?)\.(png|jpg|jpeg|svg|webp|ico|gif|mp4)"/gi, 'src="./public/$1.$2"');
js = js.replace(/"\/(.*?)\.(png|jpg|jpeg|svg|webp|ico|gif|mp4)"/gi, '"./public/$1.$2"');
fs.writeFileSync('script.js', js);
console.log('Paths updated!');
