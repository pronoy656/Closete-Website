const fs = require('fs');

['privacy.html', 'terms.html', 'delivery.html'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/class="mb-2 text-white\/90"/g, 'style="margin-bottom: 8px; color: rgba(255,255,255,0.9); font-weight: 500;"');
  content = content.replace(/class="list-disc pl-5 space-y-2"/g, 'style="list-style-type: disc; padding-left: 24px; margin-top: 8px; margin-bottom: 16px; display: flex; flex-direction: column; gap: 8px;"');
  content = content.replace(/class="space-y-4"/g, 'style="display: flex; flex-direction: column; gap: 16px;"');
  content = content.replace(/class="space-y-6"/g, 'style="display: flex; flex-direction: column; gap: 24px;"');
  content = content.replace(/<li>/g, '<li style="margin-bottom: 8px;">');
  fs.writeFileSync(file, content);
});
console.log('Successfully inlined Tailwind classes for content sections!');
