import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Partner {
  name: string;
  logo: string;
  category: string;
}

const partners: Partner[] = [
  { name: "Greenply", logo: "https://companieslogo.com/img/orig/GREENPLY.NS_BIG-b6a4a002.png?t=1604670420", category: "Laminates & Plywood" },
  { name: "CenturyPly", logo: "https://companieslogo.com/img/orig/CENTURYPLY.NS_BIG-33e1b422.png?t=1604067031", category: "Laminates & Plywood" },
  { name: "Merino", logo: "https://vtlogo.com/wp-content/uploads/2021/10/merino-laminates-ltd-vector-logo.png", category: "Laminates & Plywood" },
  { name: "Royalé Touché", logo: "https://i2.wp.com/matlab.com.lb/wp-content/uploads/2018/01/royale_touche_logo_mobile.png?ssl=1", category: "Laminates & Plywood" },
  { name: "Hettich", logo: "https://w7.pngwing.com/pngs/923/701/png-transparent-hettich-international-hd-logo.png", category: "Hardware" },
  { name: "Hafele", logo: "https://www.pngfind.com/pngs/m/419-4191719_hafele-logo-png-transparent-svg-vector-hafele-png.png", category: "Hardware" },
  { name: "Ebco", logo: "https://interior-world.in/img/ebco_with_taglinebg.png", category: "Hardware" },
  { name: "Godrej", logo: "https://www.pinpng.com/pngs/m/428-4285088_godrej-group-godrej-logo-png-transparent-png.png", category: "Hardware" },
  { name: "Asian Paints", logo: "https://www.kindpng.com/picc/m/9-91067_asian-paints-logo-png-asian-paints-transparent-png.png", category: "Paints" },
  { name: "Berger", logo: "https://companieslogo.com/img/orig/BERGEPAINT.NS-7a7201df.png?t=1601653024&download=true", category: "Paints" },
  { name: "Nerolac", logo: "https://companieslogo.com/img/orig/KANSAINER.NS_BIG-4ad69786.png?t=1611280024", category: "Paints" },
  { name: "Birla Opus", logo: "https://images.seeklogo.com/logo-png/54/1/birla-opus-paints-logo-png_seeklogo-541342.png", category: "Paints" },
  { name: "Jaquar", logo: "https://tse2.mm.bing.net/th/id/OIP.wgYku9fsiVX1RXXrliO4CgHaCh?pid=Api&P=0&h=180", category: "Lighting & Electrical" },
  { name: "Wipro", logo: "https://www.financialexpress.com/wp-content/uploads/2017/05/wipro.jpg?w=1024", category: "Lighting & Electrical" },
  { name: "Havells", logo: "https://e7.pngegg.com/pngimages/680/167/png-clipart-havells-logo-havell-s-electrical-shop-havells-logo-company-krrish-text-carnivoran.png", category: "Lighting & Electrical" },
  { name: "Philips", logo: "https://w7.pngwing.com/pngs/359/652/png-transparent-philips-lighting-philips-lighting-philips-hue-light-light-fixture-blue-text.png", category: "Lighting & Electrical" },
  { name: "Polycab", logo: "https://tse1.mm.bing.net/th/id/OIP.BZtIx6kac5onlX9UJkIzcgAAAA?pid=Api&P=0&h=180", category: "Lighting & Electrical" },
  { name: "KalingaStone", logo: "https://www.themarbleworkshop.co.uk/wp-content/uploads/2018/07/kalinga-stone-logo.jpg", category: "Countertops" },
  { name: "Caesarstone", logo: "https://www.liblogo.com/img-logo/ca6209c459-caesarstone-logo-caesarstone-cabinets-direct-usa.png", category: "Countertops" },
  { name: "Relaystone", logo: "https://static.wixstatic.com/media/d0f9cf_24a00409569f46faa591ddb4e2cee92f~mv2.png/v1/fill/w_525,h_523,al_c,q_85,enc_avif,quality_auto/d0f9cf_24a00409569f46faa591ddb4e2cee92f~mv2.png", category: "Countertops" },
  { name: "Hafele Surfaces", logo: "https://vectorseek.com/wp-content/uploads/2023/09/Hafele-Logo-Vector.svg-.png", category: "Countertops" },
];

const Partners: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());

  const updateScrollButtons = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 400;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isHovered) return;

    let animationId: number;
    let scrollPosition = 0;

    const autoScroll = () => {
      if (!scrollContainer) {
        animationId = requestAnimationFrame(autoScroll);
        return;
      }

      scrollPosition += 0.3;
      scrollContainer.scrollLeft = scrollPosition;

      if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPosition = 0;
      }

      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    updateScrollButtons();
    scrollContainer.addEventListener("scroll", updateScrollButtons);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const newIndices = new Set(visibleIndices);
      entries.forEach((entry) => {
        const index = Number((entry.target as HTMLElement).dataset.index);
        if (entry.isIntersecting) {
          newIndices.add(index);
        }
      });
      setVisibleIndices(newIndices);
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: scrollContainer,
      threshold: 0.1,
    });

    const items = scrollContainer.querySelectorAll("[data-index]");
    items.forEach((item) => observer.observe(item));

    return () => {
      scrollContainer.removeEventListener("scroll", updateScrollButtons);
      observer.disconnect();
    };
  }, [visibleIndices]);

  return (
    <section id="partners" className="py-16 px-4 sm:px-8 relative bg-white">
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .partner-card-visible {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .partner-card-hover {
          animation: float 3s ease-in-out infinite;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Trusted Brands We <span className="text-amber-600">Collaborate</span> With
          </h2>
          <p className="text-lg text-gray-600 max-w-5xl mx-auto">
            We partner with globally recognized brands to bring unmatched quality, innovation, and style to your interiors.
          </p>
        </div>

        <div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-amber-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-amber-700" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-amber-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-amber-700" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto overflow-y-hidden scrollbar-hide py-8 px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                data-index={index}
                className={`flex flex-col items-center justify-center rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-110 cursor-pointer p-6 min-w-[180px] flex-shrink-0 bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-amber-200 ${
                  visibleIndices.has(index) ? "partner-card-visible" : "opacity-0"
                } ${isHovered ? "partner-card-hover" : ""}`}
              >
                <div className="relative w-28 h-28 flex items-center justify-center mb-4 group/image">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 blur-lg"></div>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-24 h-24 object-contain relative z-10 transition-transform duration-300 group-hover/image:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="font-semibold text-gray-800 text-sm text-center">{partner.name}</p>
                <p className="text-xs text-gray-500 mt-1">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {[0, 1, 2, 3].map((dot) => (
            <div
              key={dot}
              className="h-2 rounded-full bg-gray-300 transition-all duration-300 hover:bg-amber-600"
              style={{ width: dot === 0 ? "24px" : "8px" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
