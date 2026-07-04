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
      title: "Secure Payments",
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
      title: "Buyer Protection",
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
    <section id="why-choose-us" className={`bg-[#FFFFFF0A] py-24 px-6 text-white overflow-hidden ${dmSans.className}`}>
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-24 space-y-4">
        <h2 className={`${playfair.className} text-5xl md:text-6xl font-medium tracking-tight`}>
          Built on Trust
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed opacity-80">
          From verification to payment protection, every step is designed to keep buyers and sellers confident.
        </p>
      </div>

      {/* Cards Container with the Horizontal Line */}
      <div className="relative max-w-7xl mx-auto">
        
        {/* The horizontal "wire" line */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-screen h-[4px] bg-[#333] z-0"></div>

        <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden gap-6 pb-6 pt-4 w-full md:grid md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div key={index} className="relative group pt-12 flex-none w-[280px] sm:w-[320px] md:w-auto">
              
              {/* Hanging "Hook" Image */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-[50px] z-10 -mt-[2px]">
                <Image src="/Group 1707483204.png" alt="Card Hanger" fill className="object-contain" />
              </div>

              {/* The Card */}
              <div 
                className={`
                  relative h-full flex flex-col items-center text-center p-8 rounded-[2rem] transition-all duration-500
                  ${item.active 
                    ? 'text-black scale-105' 
                    : 'bg-[#FFFFFF1A] border border-white/5 backdrop-blur-sm hover:border-white/20'
                  }
                `}
                style={
                  item.active 
                    ? { background: "linear-gradient(99.37deg, #AF7413 4.77%, #C98C28 19.33%, #E2B744 38.93%, #FFED81 50.54%, #E1C24E 62.1%, #A06008 90.74%)" } 
                    : {}
                }
              >
                {/* Hover Gradient Border for inactive cards */}
                {!item.active && (
                  <div 
                    className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                    style={{
                      padding: "1px",
                      background: "linear-gradient(99.37deg, #AF7413 4.77%, #C98C28 19.33%, #E2B744 38.93%, #FFED81 50.54%, #E1C24E 62.1%, #A06008 90.74%)",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude"
                    }}
                  />
                )}
                
                {/* Icon Circle Wrapper */}
                <div className={`relative z-10 mb-8 flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                  
                  {/* The icon */}
                  <div className={`relative z-10 ${item.active ? 'text-black' : 'text-white'}`}>
                    {item.icon}
                  </div>

                  {/* Ellipse Base Glow */}
                  <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[220px] h-[70px] pointer-events-none z-0">
                    <Image 
                      src={item.active ? "/Ellipse 4867 (1).png" : "/Ellipse 4867.png"} 
                      alt="Base Glow" 
                      fill 
                      className="object-contain opacity-100" 
                    />
                  </div>
                </div>

                <h3 className={`text-base font-bold uppercase tracking-widest mb-4 leading-tight`}>
                  {item.title}
                </h3>
                
                <p className={`text-sm leading-relaxed font-medium ${item.active ? 'text-black/80' : 'text-gray-400'}`}>
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
