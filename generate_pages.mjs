import fs from 'fs';

const topPart = fs.readFileSync('layout_top.txt', 'utf8');
const bottomPart = fs.readFileSync('layout_bottom.txt', 'utf8');

const pages = [
  {
    name: 'privacy.html',
    title: 'Privacy Policy',
    sections: [
      {
        title: "INTRODUCTION",
        content: "<p>Closete respects your privacy and is committed to protecting your personal data.</p><p>This Privacy Policy explains how we collect, use, and protect your information when you use the Closete mobile application and services.</p>"
      },
      {
        title: "INFORMATION WE COLLECT",
        content: "<p>We collect Account Information (Name, Email, Phone), Transaction Data (Item details, pricing, purchase history), Location & Delivery Information, Payment Information, Authentication Data, and Device & Usage Data.</p>"
      },
      {
        title: "HOW WE USE YOUR INFORMATION",
        content: "<p>We use your data to facilitate buying and selling, arrange collection and delivery, authenticate items, process payments securely, improve app performance, and communicate updates.</p>"
      },
      {
        title: "DATA SECURITY",
        content: "<p>We implement appropriate security measures to protect your data, including encrypted data transmission, secure storage systems, and strict access controls.</p>"
      },
      {
        title: "CONTACT US",
        content: "<p>For any questions, contact us at support@closete.app</p>"
      }
    ]
  },
  {
    name: 'terms.html',
    title: 'Terms & Conditions',
    sections: [
      {
        title: "ACCEPTANCE OF TERMS",
        content: "<p>By accessing or using the Closete platform, you agree to be bound by these Terms and Conditions.</p>"
      },
      {
        title: "USER ACCOUNTS",
        content: "<p>You must be at least 18 years old to create an account. You are responsible for maintaining the confidentiality of your account credentials.</p>"
      },
      {
        title: "BUYING AND SELLING",
        content: "<p>Sellers must provide accurate descriptions and authentic items. Buyers agree to pay the listed price and any applicable fees. Closete acts as an intermediary to ensure secure transactions.</p>"
      },
      {
        title: "AUTHENTICATION",
        content: "<p>All luxury items undergo our authentication process. If an item is found to be counterfeit, the transaction will be cancelled, and the seller may face account suspension.</p>"
      },
      {
        title: "LIMITATION OF LIABILITY",
        content: "<p>Closete shall not be liable for indirect or consequential losses. Our total liability is limited to the value of the transaction in question.</p>"
      }
    ]
  },
  {
    name: 'delivery.html',
    title: 'Returns & Delivery Policy',
    sections: [
      {
        title: "CONTROLLED DELIVERY",
        content: "<p>We manage the delivery process within Dubai to ensure a smooth and reliable handover. Our dedicated team picks up the item from the seller and delivers it safely to the buyer.</p>"
      },
      {
        title: "DELIVERY TIMEFRAMES",
        content: "<p>Once an item passes our authentication check, delivery is typically scheduled within 24 to 48 hours.</p>"
      },
      {
        title: "BUYER PROTECTION & RETURNS",
        content: "<p>If an item does not meet expectations or differs significantly from the listing, it can be rejected at the time of delivery with no payment released to the seller.</p>"
      },
      {
        title: "FINAL SALE",
        content: "<p>Once an item has been accepted by the buyer at the time of delivery, the sale is considered final and cannot be returned.</p>"
      }
    ]
  }
];

pages.forEach(page => {
  let contentHtml = `
      <main style="flex-grow: 1; background-color: #111; min-height: 100vh; padding-bottom: 96px; color: white;">
        <!-- Hero Section -->
        <div style="position: relative; width: 100%; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; padding-top: 128px; padding-bottom: 32px; min-height: 350px;">
          <div style="position: absolute; pointer-events: none; top: -20%; left: 50%; transform: translateX(-50%); width: 1600px; height: 1000px; background: radial-gradient(ellipse at 50% 18%, rgba(210,140,10,0.55) 0%, rgba(175,100,5,0.35) 30%, rgba(120,60,0,0.12) 55%, transparent 72%); filter: blur(8px);"></div>
          <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 128px; pointer-events: none; z-index: 10; background: linear-gradient(to top, #111, transparent);"></div>
          
          <div style="position: relative; z-index: 20; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding-left: 16px; padding-right: 16px;">
            <h1 class="font-serif font-semibold tracking-tight" style="font-size: 3.5rem; line-height: 1.1; margin: 0;">
              <span style="display: block; margin-bottom: 8px; font-size: 4rem; background: linear-gradient(90.13deg, #AF7413 0.11%, #C98C28 17.58%, #E2B744 41.1%, #FFED81 55.03%, #E1C24E 68.91%, #A06008 103.24%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; color: transparent;">Closete</span>
              <span style="color: white;">${page.title}</span>
            </h1>
            <p class="font-sans" style="margin-top: 24px; color: #9ca3af; font-size: 1rem;">
              Last updated: June 2026
            </p>
          </div>
        </div>

        <!-- Content Section -->
        <div class="font-sans" style="max-width: 1200px; margin: 32px auto 80px auto; padding-left: 16px; padding-right: 16px;">
          <div style="background-color: #141517; padding: 32px; border-radius: 28px;">
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
  `;

  // Fix footer links in the bottom part for these pages
  let currentBottom = bottomPart.replace(/href="#"/g, function(match, offset, str) {
      return match; // We will handle updating the footer links across all pages in a separate step
  });
  
  fs.writeFileSync(page.name, topPart + contentHtml + currentBottom);
});

// Update index.html and generated pages with correct footer links
['index.html', 'privacy.html', 'terms.html', 'delivery.html'].forEach(file => {
  if (fs.existsSync(file)) {
      let fContent = fs.readFileSync(file, 'utf8');
      fContent = fContent.replace(/<li><a href="#" class="text-white text-\[14px\] hover:text-\[#C98C28\] transition-colors">Privacy Policy<\/a><\/li>/, '<li><a href="privacy.html" class="text-white text-[14px] hover:text-[#C98C28] transition-colors">Privacy Policy</a></li>');
      fContent = fContent.replace(/<li><a href="#" class="text-white text-\[14px\] hover:text-\[#C98C28\] transition-colors">Terms &amp; Conditions<\/a><\/li>/, '<li><a href="terms.html" class="text-white text-[14px] hover:text-[#C98C28] transition-colors">Terms &amp; Conditions</a></li>');
      // Sometimes it's encoded as & instead of &amp;
      fContent = fContent.replace(/<li><a href="#" class="text-white text-\[14px\] hover:text-\[#C98C28\] transition-colors">Terms & Conditions<\/a><\/li>/, '<li><a href="terms.html" class="text-white text-[14px] hover:text-[#C98C28] transition-colors">Terms & Conditions</a></li>');
      fContent = fContent.replace(/<li><a href="#" class="text-white text-\[14px\] hover:text-\[#C98C28\] transition-colors">Returns & Delivery Policy<\/a><\/li>/, '<li><a href="delivery.html" class="text-white text-[14px] hover:text-[#C98C28] transition-colors">Returns & Delivery Policy</a></li>');
      fContent = fContent.replace(/<li><a href="#" class="text-white text-\[14px\] hover:text-\[#C98C28\] transition-colors">Returns &amp; Delivery Policy<\/a><\/li>/, '<li><a href="delivery.html" class="text-white text-[14px] hover:text-[#C98C28] transition-colors">Returns & Delivery Policy</a></li>');
      fs.writeFileSync(file, fContent);
  }
});

console.log('Pages generated and links updated successfully!');
