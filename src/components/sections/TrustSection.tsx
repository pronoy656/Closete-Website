import React from 'react';
import Image from 'next/image';
import { Playfair_Display, DM_Sans } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const TrustSection = () => {
  const features = [
    {
      title: "Authentication Guarantee",
      description: "Every item is verified through a combination of technology and expert validation.",
      icon: (
        <div className="relative w-12 h-12">
          <Image src="/Layer_1 (1).png" alt="Authentication" fill className="object-contain" />
        </div>
      ),
      active: false
    },
    {
      title: <>Secure <br /> Payments</>,
      description: "Funds are held securely and only released once the buyer confirms the item meets expectations.",
      icon: (
        <div className="relative w-12 h-12">
          <Image src="/Capa_1.png" alt="Secure Payments" fill className="object-contain" />
        </div>
      ),
      active: false
    },
    {
      title: "Controlled Delivery",
      description: "We manage the delivery process within Dubai to ensure a smooth and reliable handover.",
      icon: (
        <div className="relative w-12 h-12">
          <Image src="/Layer_1 (2).png" alt="Controlled Delivery" fill className="object-contain" />
        </div>
      ),
      active: true // The highlighted gold card
    },
    {
      title: <>Buyer <br /> Protection</>,
      description: "If an item does not meet expectations, it can be rejected at delivery with no payment released.",
      icon: (
        <div className="relative w-12 h-12">
          <Image src="/Layer_1 (3).png" alt="Buyer Protection" fill className="object-contain" />
        </div>
      ),
      active: false
    }
  ];

  return (
    <section id="why-choose-us" className={`bg-[#FFFFFF0A] pt-30 pb-16 px-6 text-white overflow-hidden ${dmSans.className}`}>
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 space-y-5">
        <h2 className={`${playfair.className} text-5xl md:text-6xl font-medium tracking-tight`}>
          Built on Trust
        </h2>
        <p style={{ color: "rgba(242,242,242,0.75)", fontSize: "18px", wordSpacing: "1px" }} className="max-w-xl mx-auto leading-relaxed">
          From verification to payment protection, every step is designed to keep buyers and sellers confident.
        </p>
      </div>

      {/* Cards Container with the Horizontal Line */}
      <div className="relative max-w-6xl mx-auto">
        
        {/* The horizontal "wire" line */}
        <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-screen h-[2px] bg-gradient-to-r from-transparent via-[#333] to-transparent z-0"></div>

        <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden gap-4 pb-6 pt-4 w-full md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-4 justify-items-center">
          {features.map((item, index) => (
            <div key={index} className="relative group pt-12 flex-none w-[250px] mx-auto cursor-pointer">
              
              {/* Hanging "Hook" Image */}
              <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-[60px] h-[50px] z-10 transition-all duration-500">
                {/* Default Hook */}
                <Image src="/Group 1707483204.png" alt="Card Hanger" fill className="object-contain transition-opacity duration-500 group-hover:opacity-0" />
                {/* Golden Gradient Hook on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(99.37deg, #AF7413 4.77%, #C98C28 19.33%, #E2B744 38.93%, #FFED81 50.54%, #E1C24E 62.1%, #A06008 90.74%)',
                    WebkitMaskImage: 'url("/Group 1707483204.png")',
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center'
                  }}
                />
              </div>

              {/* The Card */}
              <div 
                className="relative h-full flex flex-col items-center text-center p-8 rounded-[2rem] transition-all duration-500 bg-[#FFFFFF1A] border border-white/5 backdrop-blur-sm group-hover:border-transparent overflow-hidden"
              >
                {/* Exact Linear Gradient Background on Hover */}
                <div 
                  className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                  style={{
                    background: "linear-gradient(99.37deg, #AF7413 4.77%, #C98C28 19.33%, #E2B744 38.93%, #FFED81 50.54%, #E1C24E 62.1%, #A06008 90.74%)"
                  }}
                />
                
                {/* Icon Circle Wrapper */}
                <div className="relative z-10 mb-8 flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  
                  {/* The icon */}
                  <div className="relative z-10 brightness-0 invert group-hover:invert-0 transition-all duration-500">
                    {item.icon}
                  </div>

                  {/* Ellipse Base Glow */}
                  <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[220px] h-[70px] pointer-events-none z-0 transition-opacity duration-500">
                    <Image 
                      src="/Ellipse 4867 (1).png"
                      alt="Base Glow" 
                      fill 
                      className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                    />
                    <Image 
                      src="/Ellipse 4867.png"
                      alt="Base Glow" 
                      fill 
                      className="object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-500" 
                    />
                  </div>
                </div>

                <h3 className="relative z-10 text-base font-bold uppercase tracking-widest mb-4 leading-tight text-white group-hover:text-black transition-colors duration-500">
                  {item.title}
                </h3>
                
                <p className="relative z-10 text-sm leading-relaxed font-light text-gray-200 group-hover:text-black transition-colors duration-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { TrustSection };
