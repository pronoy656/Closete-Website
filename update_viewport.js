const fs = require('fs');
const path = require('path');
const dir = './src/components/sections';
const files = fs.readdirSync(dir);
for (const file of files) {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const newContent = content.replace(/viewport=\{\{\s*once:\s*true\s*\}\}/g, 'viewport={{ once: true, margin: "0px 0px 300px 0px" }}');
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log('Updated ' + file);
    }
  }
}
