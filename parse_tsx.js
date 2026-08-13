const fs = require('fs');

function extractSections(filePath, arrayName) {
    const code = fs.readFileSync(filePath, 'utf8');
    const startIdx = code.indexOf(`const ${arrayName} = [`);
    if (startIdx === -1) return [];
    const endIdx = code.indexOf(`];`, startIdx);
    let arrayStr = code.substring(startIdx + `const ${arrayName} = [`.length, endIdx);
    
    let sections = [];
    const titleRegex = /title:\s*"([^"]+)"/g;
    let match;
    let matches = [];
    while ((match = titleRegex.exec(arrayStr)) !== null) {
        matches.push({ title: match[1], index: match.index });
    }
    
    for (let i = 0; i < matches.length; i++) {
        let title = matches[i].title;
        let startIndex = matches[i].index;
        let endIndex = (i + 1 < matches.length) ? matches[i+1].index : arrayStr.length;
        
        let chunk = arrayStr.substring(startIndex, endIndex);
        let contentStartIdx = chunk.indexOf('content: (');
        if (contentStartIdx === -1) continue;
        
        let contentStr = chunk.substring(contentStartIdx + 10);
        let endBracket = contentStr.lastIndexOf(')');
        contentStr = contentStr.substring(0, endBracket).trim();
        
        // Clean up JSX to HTML
        contentStr = contentStr.replace(/className="/g, 'class="');
        contentStr = contentStr.replace(/&quot;/g, '"');
        contentStr = contentStr.replace(/<Mail[^>]*>/g, '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#FFAF2C]" style="color: #FFAF2C; margin-right: 8px;"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> ');
        contentStr = contentStr.replace(/<Globe[^>]*>/g, '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#FFAF2C]" style="color: #FFAF2C; margin-right: 8px;"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg> ');
        
        sections.push({ title, content: contentStr });
    }
    return sections;
}

const pages = [
  {
    name: 'privacy.html',
    title: 'Privacy Policy',
    sections: extractSections('src/app/privacy/page.tsx', 'PRIVACY_SECTIONS')
  },
  {
    name: 'terms.html',
    title: 'Terms & Conditions',
    sections: extractSections('src/app/terms/page.tsx', 'TERMS_SECTIONS')
  },
  {
    name: 'delivery.html',
    title: 'Authenticity & Delivery Policy',
    sections: extractSections('src/app/delivery/page.tsx', 'DELIVERY_SECTIONS')
  }
];

const topPart = fs.readFileSync('layout_top.txt', 'utf8');
const bottomPart = fs.readFileSync('layout_bottom.txt', 'utf8');

pages.forEach(page => {
  let contentHtml = `
      <main style="flex-grow: 1; background-color: #111; min-height: 100vh; padding-bottom: 96px; color: white;">
        <!-- Hero Section -->
        <div style="position: relative; width: 100%; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; padding-top: 128px; padding-bottom: 32px; min-height: 350px;">
          <!-- Layer 1: Wide outer glow -->
          <div style="position: absolute; pointer-events: none; top: -20%; left: 50%; transform: translateX(-50%); width: 1600px; height: 1000px; background: radial-gradient(ellipse at 50% 18%, rgba(210,140,10,0.55) 0%, rgba(175,100,5,0.35) 30%, rgba(120,60,0,0.12) 55%, transparent 72%); filter: blur(8px);"></div>
          
          <!-- Layer 2: Bright golden core -->
          <div style="position: absolute; pointer-events: none; top: -8%; left: 50%; transform: translateX(-50%); width: 900px; height: 700px; background: radial-gradient(ellipse at 50% 12%, rgba(255,215,60,0.45) 0%, rgba(230,170,30,0.3) 28%, rgba(180,110,10,0.12) 52%, transparent 68%); filter: blur(4px);"></div>
          
          <!-- Layer 3: Specular hot-spot -->
          <div style="position: absolute; pointer-events: none; top: -4%; left: 50%; transform: translateX(-50%); width: 360px; height: 260px; background: radial-gradient(ellipse at 50% 10%, rgba(255,245,160,0.35) 0%, rgba(255,210,60,0.15) 38%, transparent 65%); filter: blur(2px);"></div>
          
          <!-- Torchlight 1: Narrow Beam -->
          <div style="position: absolute; pointer-events: none; top: 0%; left: 50%; transform: translateX(-50%); width: 500px; height: 550px; background: linear-gradient(to bottom, transparent 0%, rgba(255,215,60,0.15) 5%, rgba(230,170,30,0.05) 40%, transparent 100%); clip-path: polygon(35% 0, 65% 0, 100% 100%, 0 100%); filter: blur(140px);"></div>
          
          <!-- Torchlight 2: Medium Beam -->
          <div style="position: absolute; pointer-events: none; top: 0%; left: 50%; transform: translateX(-50%); width: 900px; height: 600px; background: linear-gradient(to bottom, transparent 0%, rgba(210,140,10,0.12) 8%, rgba(180,110,10,0.03) 45%, transparent 100%); clip-path: polygon(42% 0, 58% 0, 100% 100%, 0 100%); filter: blur(180px);"></div>
          
          <!-- Torchlight 3: Wide Beam -->
          <div style="position: absolute; pointer-events: none; top: 0%; left: 50%; transform: translateX(-50%); width: 1400px; height: 650px; background: linear-gradient(to bottom, transparent 0%, rgba(175,100,5,0.08) 12%, rgba(120,60,0,0.02) 50%, transparent 100%); clip-path: polygon(46% 0, 54% 0, 100% 100%, 0 100%); filter: blur(220px);"></div>

          <!-- Stars Container -->
          <div id="stars-container-${page.name.replace('.html','')}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; pointer-events: none;"></div>

          <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 128px; pointer-events: none; z-index: 10; background: linear-gradient(to top, #111, transparent);"></div>
          
          <div style="position: relative; z-index: 20; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding-left: 16px; padding-right: 16px;">
            <h1 class="font-serif font-semibold tracking-tight" style="font-size: 3.5rem; line-height: 1.1; margin: 0;">
              <span style="display: block; margin-bottom: 8px; font-size: 4rem; background: linear-gradient(90.13deg, #AF7413 0.11%, #C98C28 17.58%, #E2B744 41.1%, #FFED81 55.03%, #E1C24E 68.91%, #A06008 103.24%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; color: transparent;">Closeté</span>
              <span style="color: white;">${page.title}</span>
            </h1>
            <p class="font-sans" style="margin-top: 24px; color: #9ca3af; font-size: 1rem;">
              Last updated: June 2026
            </p>
          </div>
        </div>

        <!-- Content Section -->
        <div class="font-sans" style="max-width: 1200px; margin: 32px auto 80px auto; padding-left: 16px; padding-right: 16px;">
          <div style="background-color: #141517; padding: 32px; border-radius: 28px; border: 1px solid rgba(255,255,255,0.05);">
            ${page.sections.map(section => `
              <div style="padding: 32px; border-radius: 20px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); position: relative; overflow: hidden; background: linear-gradient(to right, #1C1D20 0%, #2B2D32 100%); border: 1px solid rgba(255, 255, 255, 0.1); margin-bottom: 24px;">
                <h2 style="font-weight: bold; letter-spacing: 0.05em; margin-bottom: 16px; color: white; font-size: 1.25rem;">
                  ${section.title}
                </h2>
                <div style="line-height: 1.6; font-weight: 300; color: #d1d5db; font-size: 1rem;">
                  ${section.content}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </main>
      <script>
        // Inline script to add stars since script.js might not target this container properly
        document.addEventListener('DOMContentLoaded', () => {
          const starsContainer = document.getElementById('stars-container-${page.name.replace('.html','')}');
          if (starsContainer) {
            for (let i = 0; i < 50; i++) {
              const star = document.createElement('div');
              star.className = 'absolute rounded-full bg-white';
              const size = Math.random() * 2 + 1;
              star.style.width = size + 'px';
              star.style.height = size + 'px';
              star.style.left = Math.random() * 100 + '%';
              star.style.top = Math.random() * 100 + '%';
              star.style.opacity = Math.random() * 0.7 + 0.3;
              star.style.boxShadow = '0 0 ' + (Math.random() * 3 + 1) + 'px rgba(255,255,255,0.8)';
              starsContainer.appendChild(star);
            }
          }
        });
      </script>
  `;
  fs.writeFileSync(page.name, topPart + contentHtml + bottomPart);
});
console.log('Pages generated successfully with full content and hero sections!');
