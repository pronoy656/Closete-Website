document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once visible
                // observer.unobserve(entry.target);
            } else {
                // If you want them to animate out when scrolled past, uncomment:
                // entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    // Observe all elements with the .reveal class
    document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
    });

    // 2. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without jumping
                window.history.pushState(null, '', targetId);
            }
        });
    });

    // Smooth scroll to top if clicking the current page's link in footer
    document.querySelectorAll('footer a[href$=".html"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetUrl = this.getAttribute('href');
            const currentPath = window.location.pathname.split('/').pop() || 'index.html';
            const targetPath = targetUrl.split('/').pop();
            
            // If clicking the link for the page we are already on, just smooth scroll to top
            if (currentPath === targetPath) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
            // Otherwise, let the browser navigate normally immediately
        });
    });

    // 3. Header Scroll Effect (Glassmorphism)
    const header = document.getElementById('site-header');
    const navbarInner = document.getElementById('navbar-inner');
    if (header && navbarInner) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('lg:bg-black/40', 'lg:backdrop-blur-md', 'lg:shadow-lg');
                header.classList.remove('bg-transparent');
                
                navbarInner.classList.add('backdrop-blur-xl');
                navbarInner.classList.remove('backdrop-blur-none');
            } else {
                header.classList.remove('lg:bg-black/40', 'lg:backdrop-blur-md', 'lg:shadow-lg');
                header.classList.add('bg-transparent');
                
                navbarInner.classList.remove('backdrop-blur-xl');
                navbarInner.classList.add('backdrop-blur-none');
            }
        });
    }

    // 4. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    function toggleMobileMenu() {
        const isOpen = !mobileMenu.classList.contains('hidden');
        
        if (isOpen) {
            mobileMenu.classList.add('opacity-0', '-translate-y-4');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            }, 300);
            menuIconOpen.classList.remove('hidden');
            menuIconClose.classList.add('hidden');
        } else {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
            // small delay for transition
            setTimeout(() => {
                mobileMenu.classList.remove('opacity-0', '-translate-y-4');
                mobileMenu.classList.add('opacity-100', 'translate-y-0');
            }, 10);
            menuIconOpen.classList.add('hidden');
            menuIconClose.classList.remove('hidden');
        }
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu on link click
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', toggleMobileMenu);
    });

    // Handle Active Link state on desktop
    const desktopNavLinks = document.querySelectorAll('.nav-link');
    desktopNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            desktopNavLinks.forEach(l => {
                l.classList.remove('text-white', 'active');
                l.classList.add('text-white/80');
                l.style.background = 'transparent';
                l.style.boxShadow = 'none';
                l.style.border = '1px solid transparent';
            });
            this.classList.add('text-white', 'active');
            this.classList.remove('text-white/80');
            this.style.background = 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)';
            this.style.boxShadow = 'inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 2px 8px rgba(0,0,0,0.1)';
            this.style.border = '1px solid rgba(255,255,255,0.1)';
        });
    });

    // 5. Hero Section Stars and Particles
    const starsContainer = document.getElementById('stars-container');
    if (starsContainer) {
        const starPositions = [
            { top: "4%",  left: "12%",  delay: "0.3s",  dur: "3.2s" }, { top: "8%",  left: "35%",  delay: "1.1s",  dur: "2.7s" },
            { top: "5%",  left: "58%",  delay: "0.7s",  dur: "3.5s" }, { top: "11%", left: "80%",  delay: "1.8s",  dur: "2.9s" },
            { top: "17%", left: "6%",   delay: "0.2s",  dur: "4.0s" }, { top: "22%", left: "25%",  delay: "2.1s",  dur: "3.1s" },
            { top: "19%", left: "47%",  delay: "0.9s",  dur: "2.6s" }, { top: "25%", left: "70%",  delay: "1.5s",  dur: "3.8s" },
            { top: "30%", left: "90%",  delay: "0.4s",  dur: "2.4s" }, { top: "35%", left: "15%",  delay: "1.9s",  dur: "3.3s" },
            { top: "38%", left: "55%",  delay: "0.6s",  dur: "4.2s" }, { top: "43%", left: "85%",  delay: "1.3s",  dur: "2.8s" },
            { top: "14%", left: "93%",  delay: "2.5s",  dur: "3.0s" }, { top: "7%",  left: "72%",  delay: "1.0s",  dur: "3.6s" },
            { top: "28%", left: "40%",  delay: "0.8s",  dur: "2.5s" }, { top: "2%",  left: "50%",  delay: "1.6s",  dur: "4.1s" },
            { top: "48%", left: "22%",  delay: "2.3s",  dur: "3.4s" }, { top: "45%", left: "65%",  delay: "0.5s",  dur: "2.2s" },
            { top: "33%", left: "3%",   delay: "1.7s",  dur: "3.9s" }, { top: "20%", left: "98%",  delay: "2.0s",  dur: "2.3s" }
        ];

        const fallingParticles = [
            { left: "40%", delay: 0.2, dur: 6.5 }, { left: "45%", delay: 1.5, dur: 5.5 }, { left: "50%", delay: 0.8, dur: 7.0 },
            { left: "55%", delay: 2.1, dur: 4.8 }, { left: "60%", delay: 0.5, dur: 6.2 }, { left: "35%", delay: 3.0, dur: 5.0 },
            { left: "65%", delay: 1.2, dur: 5.5 }, { left: "48%", delay: 2.5, dur: 6.0 }, { left: "52%", delay: 0.3, dur: 7.5 },
            { left: "42%", delay: 3.5, dur: 5.0 }, { left: "58%", delay: 1.8, dur: 6.5 }, { left: "38%", delay: 0.7, dur: 7.0 },
            { left: "62%", delay: 2.2, dur: 5.2 }, { left: "47%", delay: 3.8, dur: 6.0 }, { left: "53%", delay: 0.9, dur: 5.8 },
            { left: "25%", delay: 3.7, dur: 7.0 }, { left: "75%", delay: 2.3, dur: 6.1 }, { left: "28%", delay: 4.2, dur: 7.3 },
            { left: "10%", delay: 3.1, dur: 8.2 }, { left: "90%", delay: 0.5, dur: 6.7 }, { left: "15%", delay: 4.8, dur: 5.9 }
        ];

        const createStar = (className, styleStr) => {
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("viewBox", "0 0 24 24");
            svg.setAttribute("class", className);
            svg.setAttribute("style", styleStr);
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", "M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z");
            path.setAttribute("fill", "currentColor");
            svg.appendChild(path);
            return svg;
        };

        starPositions.forEach((s, i) => {
            const size = i % 3 === 0 ? '14px' : '8px';
            const style = `width:${size}; height:${size}; top:${s.top}; left:${s.left}; opacity:0.6; animation:pulse ${s.dur} ${s.delay} infinite;`;
            starsContainer.appendChild(createStar("absolute text-[#F4D381]", style));
        });

        fallingParticles.forEach((p, i) => {
            const size = i % 2 === 0 ? '10px' : '6px';
            const style = `width:${size}; height:${size}; left:${p.left}; top:0; opacity:0; animation:particle-fall ${p.dur}s linear ${p.delay}s infinite;`;
            starsContainer.appendChild(createStar("absolute text-[#E1C24E]", style));
        });
    }

    // 6. Hero Carousel
    const carouselContainer = document.getElementById('hero-carousel');
    if (carouselContainer) {
        const carouselData = [
            { image: "./public/lux-bag-red.png", name: "Maren B.", likes: "2.4K", avatar: "linear-gradient(135deg, #d4af37, #9b6c26)" },
            { image: "./public/user-dior.jpg", name: "David S.", likes: "8.9K", avatar: "linear-gradient(135deg, #f6d365, #fda085)" },
            { image: "./public/lux-bag-lv.png", name: "Sarah K.", likes: "3.1K", avatar: "linear-gradient(135deg, #ff9a9e, #fecfef)" },
            { image: "./public/user-bag1.jpg", name: "Emma W.", likes: "2.1K", avatar: "linear-gradient(135deg, #fdfbfb, #ebedee)" },
            { image: "./public/user-heels.jpg", name: "Elena G.", likes: "4.2K", avatar: "linear-gradient(135deg, #84fab0, #8fd3f4)" },
            { image: "./public/user-gucci.jpg", name: "Oliver P.", likes: "3.7K", avatar: "linear-gradient(135deg, #ffecd2, #fcb69f)" },
            { image: "./public/user-ladies-bag.jpg", name: "Chloe M.", likes: "5.5K", avatar: "linear-gradient(135deg, #e0c3fc, #8ec5fc)" },
            { image: "./public/user-bag2.jpg", name: "Liam H.", likes: "6.4K", avatar: "linear-gradient(135deg, #cfd9df, #e2ebf0)" },
            { image: "./public/lux-bag-red.png", name: "Mia L.", likes: "1.2K", avatar: "linear-gradient(135deg, #fccb90, #d57eeb)" },
            { image: "./public/user-dior.jpg", name: "Sophia D.", likes: "4.8K", avatar: "linear-gradient(135deg, #a8edea, #fed6e3)" },
            { image: "./public/user-heels.jpg", name: "Jessica T.", likes: "950", avatar: "linear-gradient(135deg, #a18cd1, #fbc2eb)" },
            { image: "./public/user-bag1.jpg", name: "Alex R.", likes: "1.8K", avatar: "linear-gradient(135deg, #e5e5e5, #a3a3a3)" }
        ];

        const positions = [
            { xPx: 0, xVw: 0, scale: 1, opacity: 1, zIndex: 40, isCenter: true, overlayOpacity: 0 },
            { xPx: 50, xVw: 15, scale: 0.75, opacity: 1, zIndex: 30, isCenter: false, overlayOpacity: 0.2 },
            { xPx: 95, xVw: 27, scale: 0.55, opacity: 1, zIndex: 25, isCenter: false, overlayOpacity: 0.5 },
            { xPx: 135, xVw: 37, scale: 0.4, opacity: 0.8, zIndex: 20, isCenter: false, overlayOpacity: 0.7 },
            { xPx: 165, xVw: 45, scale: 0.3, opacity: 0.5, zIndex: 10, isCenter: false, overlayOpacity: 0.85 },
            { xPx: 250, xVw: 65, scale: 0.2, opacity: 0, zIndex: 0, isCenter: false, overlayOpacity: 1 },
            { xPx: 250, xVw: 65, scale: 0.2, opacity: 0, zIndex: 0, isCenter: false, overlayOpacity: 1 },
            { xPx: -250, xVw: -65, scale: 0.2, opacity: 0, zIndex: 0, isCenter: false, overlayOpacity: 1 },
            { xPx: -165, xVw: -45, scale: 0.3, opacity: 0.5, zIndex: 10, isCenter: false, overlayOpacity: 0.85 },
            { xPx: -135, xVw: -37, scale: 0.4, opacity: 0.8, zIndex: 20, isCenter: false, overlayOpacity: 0.7 },
            { xPx: -95, xVw: -27, scale: 0.55, opacity: 1, zIndex: 25, isCenter: false, overlayOpacity: 0.5 },
            { xPx: -50, xVw: -15, scale: 0.75, opacity: 1, zIndex: 30, isCenter: false, overlayOpacity: 0.2 }
        ];

        let activeIndex = 0;
        let isHovered = false;
        let touchStart = null;
        let autoPlayInterval;

        const cards = carouselData.map((item, index) => {
            const el = document.createElement('div');
            el.className = "absolute left-1/2 -ml-[120px] sm:-ml-[150px] md:-ml-[180px] w-[240px] h-[340px] sm:w-[300px] sm:h-[400px] md:w-[360px] md:h-[480px] rounded-[16px]";
            el.style.top = "50%";
            
            el.innerHTML = `
                <div class="shadow-base absolute inset-0 rounded-[16px] pointer-events-none" style="box-shadow: 0 8px 32px rgba(0,0,0,0.4)"></div>
                <div class="shadow-active absolute inset-0 rounded-[16px] pointer-events-none" style="box-shadow: 0 24px 48px rgba(0,0,0,0.6); transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);"></div>
                <div class="card-inner absolute inset-0 overflow-hidden" style="border-radius: 16px;">
                    <img src="${item.image}" alt="Luxury fashion item" class="w-full h-full object-cover">
                    <div class="user-info absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 pointer-events-none" style="background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%); transition: opacity 0.8s ease;">
                        <div class="flex items-center gap-2">
                            <div class="rounded-full overflow-hidden flex-shrink-0" style="width: 26px; height: 26px; background: ${item.avatar}; border: 1.5px solid rgba(255,255,255,0.3);"></div>
                            <span class="text-white text-xs font-medium">${item.name}</span>
                        </div>
                        <div class="flex items-center gap-1 text-white text-xs">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-white/90"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                            <span>${item.likes}</span>
                        </div>
                    </div>
                    <div class="overlay absolute inset-0 pointer-events-none z-30 bg-black" style="transition: opacity 0.8s ease;"></div>
                </div>
            `;
            carouselContainer.appendChild(el);
            return el;
        });

        const updateCarousel = () => {
            const windowWidth = window.innerWidth;
            cards.forEach((card, index) => {
                const posIndex = (index - activeIndex + 12) % 12;
                const pos = positions[posIndex];
                
                const vwInPx = (pos.xVw / 100) * windowWidth;
                const maxPx = pos.xVw * 12.5;
                const minBound = Math.min(0, maxPx);
                const maxBound = Math.max(0, maxPx);
                const clampedVw = Math.max(minBound, Math.min(vwInPx, maxBound));
                const translateX = pos.xPx + clampedVw;

                card.style.transform = `translate(${translateX}px, -50%) scale(${pos.scale})`;
                card.style.opacity = pos.opacity;
                card.style.zIndex = pos.zIndex;
                card.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                
                card.querySelector('.shadow-active').style.opacity = pos.isCenter ? '1' : '0';
                
                const inner = card.querySelector('.card-inner');
                if (pos.isCenter) {
                    inner.style.border = "3px solid transparent";
                    inner.style.background = "linear-gradient(#0f0f0f, #0f0f0f) padding-box, linear-gradient(99.37deg, #AF7413 4.77%, #C98C28 19.33%, #E2B744 38.93%, #FFED81 50.54%, #E1C24E 62.1%, #A06008 90.74%) border-box";
                } else {
                    inner.style.border = "none";
                    inner.style.background = "none";
                }
                
                card.querySelector('.user-info').style.opacity = pos.isCenter ? '1' : '0';
                card.querySelector('.overlay').style.opacity = pos.overlayOpacity;
            });
        };

        updateCarousel();
        window.addEventListener('resize', updateCarousel);

        const nextSlide = () => {
            activeIndex = (activeIndex + 1) % 12;
            updateCarousel();
        };
        const prevSlide = () => {
            activeIndex = (activeIndex - 1 + 12) % 12;
            updateCarousel();
        };

        const startAutoPlay = () => {
            if (!autoPlayInterval) {
                autoPlayInterval = setInterval(nextSlide, 2500);
            }
        };
        const stopAutoPlay = () => {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
                autoPlayInterval = null;
            }
        };

        startAutoPlay();

        carouselContainer.addEventListener('mouseenter', () => { isHovered = true; stopAutoPlay(); });
        carouselContainer.addEventListener('mouseleave', () => { isHovered = false; startAutoPlay(); });

        carouselContainer.addEventListener('touchstart', (e) => {
            touchStart = e.touches[0].clientX;
            stopAutoPlay();
        });
        carouselContainer.addEventListener('touchend', (e) => {
            if (!touchStart) return;
            const touchEnd = e.changedTouches[0].clientX;
            const distance = touchStart - touchEnd;
            if (distance > 40) nextSlide();
            else if (distance < -40) prevSlide();
            touchStart = null;
            if (!isHovered) startAutoPlay();
        });
    }

    // 7. App Mockups Carousel
    const mockupsContainer = document.getElementById('mockups-carousel');
    const mockupDotsContainer = document.getElementById('mockup-dots');
    const mockupPrevBtn = document.getElementById('mockup-prev');
    const mockupNextBtn = document.getElementById('mockup-next');

    if (mockupsContainer && mockupDotsContainer) {
        const mockupImages = [
            "./public/Home.webp", 
            "./public/Product Vie.webp", 
            "./public/Payment.webp", 
            "./public/Review Listing.webp", 
            "./public/Order Confirmation.webp", 
        ];

        const mockupPositions = [
            { xPx: 0, xVw: 0, scale: 1, opacity: 1, zIndex: 40, isCenter: true, overlayOpacity: 0 },
            { xPx: 20, xVw: 22.5, scale: 0.8, opacity: 1, zIndex: 30, isCenter: false, overlayOpacity: 0.2 },
            { xPx: 40, xVw: 41.2, scale: 0.65, opacity: 1, zIndex: 25, isCenter: false, overlayOpacity: 0.5 },
            { xPx: -40, xVw: -41.2, scale: 0.65, opacity: 1, zIndex: 25, isCenter: false, overlayOpacity: 0.5 },
            { xPx: -20, xVw: -22.5, scale: 0.8, opacity: 1, zIndex: 30, isCenter: false, overlayOpacity: 0.2 },
        ];

        let mockupActiveIndex = 0;
        let mockupTouchStart = null;
        let mockupAutoPlayInterval;

        const mockupCards = mockupImages.map((src, index) => {
            const el = document.createElement('div');
            el.className = "absolute overflow-hidden rounded-[30px] md:rounded-[40px] bg-[#0a0a0a] w-[220px] h-[480px] md:w-[280px] md:h-[600px] left-1/2 -ml-[110px] md:-ml-[140px] top-1/2 -mt-[240px] md:-mt-[300px]";
            
            el.innerHTML = `
                <!-- GOLDEN BORDER (Active Center) -->
                <div class="notch-gold absolute inset-0 rounded-[inherit] pointer-events-none z-30 notch-main-clip" style="padding: 3px; background: linear-gradient(99.37deg, #AF7413 0%, #C98C28 17%, #E1B744 40%, #FFED81 53%, #E1C24E 67%, #A06008 100%); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; opacity: 0; transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);"></div>
                
                <!-- Notch Border (Desktop) -->
                <div class="notch-gold-desktop hidden md:block absolute inset-0 rounded-[inherit] pointer-events-none z-30" style="background: linear-gradient(99.37deg, #AF7413 0%, #C98C28 17%, #E1B744 40%, #FFED81 53%, #E1C24E 67%, #A06008 100%); -webkit-mask: url(&quot;data:image/svg+xml,%3Csvg width='280' height='600' viewBox='0 0 280 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 64 1.5 L 80 1.5 C 85 1.5, 87 2.5, 89 6.5 L 92 15.5 C 94 18.5, 96 20.5, 100 20.5 L 180 20.5 C 184 20.5, 186 18.5, 188 15.5 L 191 6.5 C 193 2.5, 195 1.5, 200 1.5 L 216 1.5' stroke='black' stroke-width='3' fill='none'/%3E%3C/svg%3E&quot;); opacity: 0; transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);"></div>
                
                <!-- Notch Border (Mobile) -->
                <div class="notch-gold-mobile block md:hidden absolute inset-0 rounded-[inherit] pointer-events-none z-30" style="background: linear-gradient(99.37deg, #AF7413 0%, #C98C28 17%, #E1B744 40%, #FFED81 53%, #E1C24E 67%, #A06008 100%); -webkit-mask: url(&quot;data:image/svg+xml,%3Csvg width='220' height='480' viewBox='0 0 220 480' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 49 1.5 L 55 1.5 C 60 1.5, 62 2.5, 64 5.5 L 67 12.5 C 68 15.5, 69 16.5, 73 16.5 L 147 16.5 C 151 16.5, 152 15.5, 153 12.5 L 156 5.5 C 158 2.5, 160 1.5, 165 1.5 L 171 1.5' stroke='black' stroke-width='3' fill='none'/%3E%3C/svg%3E&quot;); opacity: 0; transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);"></div>

                <!-- GREY BORDER 1PX (Inactive Sides) -->
                <div class="notch-grey absolute inset-0 rounded-[inherit] pointer-events-none z-30 notch-main-clip" style="padding: 1px; background: rgba(255,255,255,0.2); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; opacity: 1; transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);"></div>
                
                <!-- Grey Notch Border (Desktop) -->
                <div class="notch-grey-desktop hidden md:block absolute inset-0 rounded-[inherit] pointer-events-none z-30" style="background: rgba(255,255,255,0.2); -webkit-mask: url(&quot;data:image/svg+xml,%3Csvg width='280' height='600' viewBox='0 0 280 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 64 0.5 L 80 0.5 C 85 0.5, 87 1.5, 89 5.5 L 92 14.5 C 94 17.5, 96 19.5, 100 19.5 L 180 19.5 C 184 19.5, 186 17.5, 188 14.5 L 191 5.5 C 193 1.5, 195 0.5, 200 0.5 L 216 0.5' stroke='black' stroke-width='1' fill='none'/%3E%3C/svg%3E&quot;); opacity: 1; transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);"></div>
                
                <!-- Grey Notch Border (Mobile) -->
                <div class="notch-grey-mobile block md:hidden absolute inset-0 rounded-[inherit] pointer-events-none z-30" style="background: rgba(255,255,255,0.2); -webkit-mask: url(&quot;data:image/svg+xml,%3Csvg width='220' height='480' viewBox='0 0 220 480' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 49 0.5 L 55 0.5 C 60 0.5, 62 1.5, 64 4.5 L 67 11.5 C 68 14.5, 69 15.5, 73 15.5 L 147 15.5 C 151 15.5, 152 14.5, 153 11.5 L 156 4.5 C 158 1.5, 160 0.5, 165 0.5 L 171 0.5' stroke='black' stroke-width='1' fill='none'/%3E%3C/svg%3E&quot;); opacity: 1; transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);"></div>

                <!-- Notch Fill (Desktop) -->
                <svg width="150" height="24" viewBox="0 0 150 24" fill="none" class="absolute top-0 left-1/2 -translate-x-1/2 hidden md:block z-20 pointer-events-none" style="overflow: visible;">
                    <path d="M -1 1.5 L 15 1.5 C 20 1.5, 22 2.5, 24 6.5 L 27 15.5 C 29 18.5, 31 20.5, 35 20.5 L 115 20.5 C 119 20.5, 121 18.5, 123 15.5 L 126 6.5 C 128 2.5, 130 1.5, 135 1.5 L 151 1.5 L 151 -10 L -1 -10 Z" fill="#0a0a0a" />
                </svg>

                <!-- Notch Fill (Mobile) -->
                <svg width="120" height="20" viewBox="0 0 120 20" fill="none" class="absolute top-0 left-1/2 -translate-x-1/2 block md:hidden z-20 pointer-events-none" style="overflow: visible;">
                    <path d="M -1 1.5 L 5 1.5 C 10 1.5, 12 2.5, 14 5.5 L 17 12.5 C 18 15.5, 19 16.5, 23 16.5 L 97 16.5 C 101 16.5, 102 15.5, 103 12.5 L 106 5.5 C 108 2.5, 110 1.5, 115 1.5 L 121 1.5 L 121 -10 L -1 -10 Z" fill="#0a0a0a" />
                </svg>

                <img src="${src}" alt="App Mockup ${index}" class="absolute inset-0 w-full h-full object-cover z-0" />

                <!-- Gradient Overlay -->
                <div class="mockup-overlay absolute inset-0 pointer-events-none z-10" style="background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%); transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);"></div>
            `;
            
            mockupsContainer.appendChild(el);
            
            // Create dot
            const dot = document.createElement('button');
            dot.className = "rounded-full transition-all duration-300 w-2 h-2 bg-white/20 hover:bg-white/40";
            dot.setAttribute('aria-label', `Go to mockup ${index + 1}`);
            dot.addEventListener('click', () => {
                mockupActiveIndex = index;
                updateMockups();
            });
            mockupDotsContainer.appendChild(dot);
            
            return { el, dot };
        });

        const updateMockups = () => {
            const windowWidth = window.innerWidth;
            mockupCards.forEach(({el, dot}, index) => {
                const posIndex = (index - mockupActiveIndex + 5) % 5;
                const pos = mockupPositions[posIndex];

                const vwInPx = (pos.xVw / 100) * windowWidth;
                const maxPx = pos.xVw * 12.5;
                const minBound = Math.min(0, maxPx);
                const maxBound = Math.max(0, maxPx);
                const clampedVw = Math.max(minBound, Math.min(vwInPx, maxBound));
                const translateX = pos.xPx + clampedVw;

                el.style.transform = `translate3d(${translateX}px, 0, 0) scale(${pos.scale})`;
                el.style.opacity = pos.opacity;
                el.style.zIndex = pos.zIndex;
                el.style.boxShadow = pos.isCenter ? "none" : "0 10px 30px rgba(0,0,0,0.8)";
                el.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.8s cubic-bezier(0.16, 1, 0.3, 1)';

                el.querySelector('.notch-gold').style.opacity = pos.isCenter ? 1 : 0;
                el.querySelector('.notch-gold-desktop').style.opacity = pos.isCenter ? 1 : 0;
                el.querySelector('.notch-gold-mobile').style.opacity = pos.isCenter ? 1 : 0;
                
                el.querySelector('.notch-grey').style.opacity = pos.isCenter ? 0 : 1;
                el.querySelector('.notch-grey-desktop').style.opacity = pos.isCenter ? 0 : 1;
                el.querySelector('.notch-grey-mobile').style.opacity = pos.isCenter ? 0 : 1;

                el.querySelector('.mockup-overlay').style.opacity = pos.overlayOpacity;

                if (index === mockupActiveIndex) {
                    dot.className = "rounded-full transition-all duration-300 w-2.5 h-2.5 bg-white";
                } else {
                    dot.className = "rounded-full transition-all duration-300 w-2 h-2 bg-white/20 hover:bg-white/40";
                }
            });
        };

        updateMockups();
        window.addEventListener('resize', updateMockups);

        const mockupNextSlide = () => {
            mockupActiveIndex = (mockupActiveIndex + 1) % 5;
            updateMockups();
        };
        const mockupPrevSlide = () => {
            mockupActiveIndex = (mockupActiveIndex - 1 + 5) % 5;
            updateMockups();
        };

        if (mockupNextBtn) mockupNextBtn.addEventListener('click', mockupNextSlide);
        if (mockupPrevBtn) mockupPrevBtn.addEventListener('click', mockupPrevSlide);

        const startMockupAutoPlay = () => {
            if (window.innerWidth >= 768 && !mockupAutoPlayInterval) {
                mockupAutoPlayInterval = setInterval(mockupNextSlide, 3000);
            }
        };
        const stopMockupAutoPlay = () => {
            if (mockupAutoPlayInterval) {
                clearInterval(mockupAutoPlayInterval);
                mockupAutoPlayInterval = null;
            }
        };

        startMockupAutoPlay();
        window.addEventListener('resize', () => {
            stopMockupAutoPlay();
            startMockupAutoPlay();
        });

        mockupsContainer.addEventListener('touchstart', (e) => {
            mockupTouchStart = e.touches[0].clientX;
            stopMockupAutoPlay();
        });
        mockupsContainer.addEventListener('touchend', (e) => {
            if (!mockupTouchStart) return;
            const touchEnd = e.changedTouches[0].clientX;
            const distance = mockupTouchStart - touchEnd;
            if (distance > 40) mockupNextSlide();
            else if (distance < -40) mockupPrevSlide();
            mockupTouchStart = null;
            startMockupAutoPlay();
        });
    }

    // 8. Vision Section Typing Text Animation
    const typingTexts = document.querySelectorAll('.typing-text');
    typingTexts.forEach(el => {
        const text = el.getAttribute('data-text');
        el.innerHTML = '';
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.color = "rgba(242, 242, 242, 0.2)";
            span.style.transition = "color 0.1s linear";
            span.style.transitionDelay = `${0.2 + index * 0.03}s`;
            el.appendChild(span);
        });
    });

    const typingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const spans = entry.target.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.color = "rgba(255, 255, 255, 1)";
                });
                typingObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    const typingContainers = document.querySelectorAll('.typing-container');
    typingContainers.forEach(container => {
        typingObserver.observe(container);
    });

});
