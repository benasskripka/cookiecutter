import imgFrame1618874797 from "figma:asset/492095b031397fd28a17b0b5f5c10091e934e3bd.png";
import { SearchBar } from "./components/SearchBar";
import LoadingWithControls from "./imports/LoadingWithControls";
import GlobalNavigationNavBar from "./imports/GlobalNavigationNavBar";
import { useState, useEffect } from "react";
import Slider from "react-slick";
// Removed direct CSS imports to fix build errors with assets
import { PropertyCard } from "./components/PropertyCard";
import { Property, DBProperty } from "./data/properties";
import { projectId, publicAnonKey } from "./utils/supabase/info";

// Custom Arrow Icons
function ArrowRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9 18L15 12L9 6" stroke="#191E3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ArrowLeft() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M15 18L9 12L15 6" stroke="#191E3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Arrow components for the slider
function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 z-10 cursor-pointer w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
      onClick={onClick}
    >
      <ArrowRight />
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  // slick passes 'slick-disabled' in className if at start
  if (className.includes("slick-disabled")) return null;

  return (
    <div
      className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 z-10 cursor-pointer w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
      onClick={onClick}
    >
      <ArrowLeft />
    </div>
  );
}

export default function App() {
  const [showResults, setShowResults] = useState(false);
  const [searchData, setSearchData] = useState<any>(null);
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch properties from Supabase Edge Function
  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-217a788a/properties`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`
            }
          }
        );
        
        if (!response.ok) {
          throw new Error(`Failed to fetch properties: ${response.statusText}`);
        }

        const data: DBProperty[] = await response.json();
        
        // Map DB data to Frontend Property interface
        const mappedProperties: Property[] = data.map(p => {
          // Parse images safely
          let images: string[] = [];
          try {
            // Try to parse as JSON first
            if (p.image_urls.trim().startsWith('[')) {
                images = JSON.parse(p.image_urls);
            } else {
                // Split by comma if not JSON array
                images = p.image_urls.split(',').map(s => s.trim()).filter(s => s.length > 0);
            }
          } catch (e) {
            console.error("Failed to parse images for property", p.property_id, e);
            images = [p.image_urls]; // Fallback
          }
          
          // Ensure valid image URLs
          if (images.length === 0 || !images[0]) {
             images = ["https://images.unsplash.com/photo-1615044841895-9c576f5b5400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"];
          }

          const price = p.nightly_price_usd;
          const originalPrice = p.discount_percent > 0 
            ? Math.round(price / (1 - p.discount_percent / 100)) 
            : null;
            
          return {
            id: p.property_id,
            title: p.name,
            type: p.property_type,
            bedrooms: parseInt(p.bedrooms) || 0,
            beds: p.beds,
            bathrooms: Math.max(1, parseInt(p.bedrooms) || 1), // Estimate bathrooms if missing
            guests: p.beds * 2 + 2, // Estimate capacity
            highlight: p.highlights || p.long_highlight || "",
            description: p.long_highlight || "",
            rating: p.review_score_10 / 2, // Convert 10-scale to 5-scale
            reviews: p.review_count,
            price: price,
            originalPrice: originalPrice,
            discount: p.discount_percent > 0 ? `${p.discount_percent}% off` : null,
            totalPrice: `$${p.total_price_usd} total`,
            images: images,
            coordinates: {
              lat: p.latitude,
              lng: p.longitude
            },
            badge: p.review_score_10 >= 9.5 ? "Guest Favorite" : (p.review_score_10 >= 9 ? "Exceptional!" : null),
            amenities: p.tags ? p.tags.split(',').map(t => t.trim()) : []
          };
        });

        setProperties(mappedProperties);
      } catch (error) {
        console.error("Error loading properties:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProperties();
  }, []);

  if (showResults) {
    return <LoadingWithControls searchData={searchData} onLogoClick={() => setShowResults(false)} />;
  }

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  // Filter properties for "Amazing Pools" using real data
  const amazingPools = properties.filter(p => 
    p.amenities.some(a => a.toLowerCase().includes("pool")) || 
    p.title.toLowerCase().includes("pool") ||
    p.highlight.toLowerCase().includes("pool")
  ).slice(0, 8);

  // Filter properties for "Oceanfront Luxury" using real data
  const oceanfrontLuxury = properties.filter(p => 
    (p.amenities.some(a => a.toLowerCase().includes("ocean") || a.toLowerCase().includes("view")) || p.title.toLowerCase().includes("ocean")) && 
    p.price > 300
  ).slice(0, 8);

  return (
    <div className="bg-white overflow-x-hidden relative w-full min-h-screen font-['Centra_No2:Medium',sans-serif] pb-20">
      {/* Inject minimal Slick CSS manually to avoid build errors with fonts/assets */}
      <style>{`
        .slick-slider { position: relative; display: block; box-sizing: border-box; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-touch-callout: none; -khtml-user-select: none; -ms-touch-action: pan-y; touch-action: pan-y; -webkit-tap-highlight-color: transparent; }
        .slick-list { position: relative; display: block; overflow: hidden; margin: 0; padding: 0; }
        .slick-list:focus { outline: none; }
        .slick-list.dragging { cursor: pointer; cursor: hand; }
        .slick-slider .slick-track, .slick-slider .slick-list { -webkit-transform: translate3d(0, 0, 0); -moz-transform: translate3d(0, 0, 0); -ms-transform: translate3d(0, 0, 0); -o-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); }
        .slick-track { position: relative; top: 0; left: 0; display: block; margin-left: auto; margin-right: auto; }
        .slick-track:before, .slick-track:after { display: table; content: ''; }
        .slick-track:after { clear: both; }
        .slick-loading .slick-track { visibility: hidden; }
        .slick-slide { display: none; float: left; height: 100%; min-height: 1px; }
        [dir='rtl'] .slick-slide { float: right; }
        .slick-slide img { display: block; }
        .slick-slide.slick-loading img { display: none; }
        .slick-slide.dragging img { pointer-events: none; }
        .slick-initialized .slick-slide { display: block; }
        .slick-loading .slick-slide { visibility: hidden; }
        .slick-vertical .slick-slide { display: block; height: auto; border: 1px solid transparent; }
        .slick-arrow.slick-hidden { display: none; }
      `}</style>

      {/* Navigation Bar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <GlobalNavigationNavBar />
      </div>

      {/* Background Image Container */}
      <div className="absolute h-[320px] left-0 top-[64px] w-full">
        <img 
          alt="" 
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
          src={imgFrame1618874797} 
        />
      </div>

      {/* Hero Text */}
      <div className="absolute flex flex-col justify-center leading-[0] left-1/2 not-italic text-[#fdf1ec] text-[32px] text-center text-shadow-[0px_0px_25px_black] top-[178.5px] tracking-[-0.32px] translate-x-[-50%] translate-y-[-50%] w-full max-w-[488px] px-4 z-10">
        <p className="leading-[1.5] text-[rgb(255,255,255)]">Find your home.</p>
      </div>

      {/* Search Bar Container */}
      <div className="absolute left-1/2 top-[223px] translate-x-[-50%] z-20 w-full max-w-[968px] px-4 flex justify-center">
        <div className="w-full max-w-full">
          <SearchBar onSearch={(data) => {
            setSearchData(data);
            setShowResults(true);
          }} />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative mt-[412px] px-8 md:px-12 max-w-[1440px] mx-auto z-10">
        
        {/* Loading State */}
        {isLoading ? (
           <div className="flex items-center justify-center py-20">
             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
           </div>
        ) : (
          <>
            {/* First Carousel Section */}
            <div className="mb-0">
               <h2 className="font-['Centra_No2:Medium',sans-serif] text-[24px] text-[#191e3b] mb-6">Amazing pools</h2>
               {properties.filter(p => 
                 p.amenities.some(a => a.toLowerCase().includes("pool")) || 
                 p.title.toLowerCase().includes("pool") ||
                 p.highlight.toLowerCase().includes("pool")
               ).length > 0 ? (
                 <Slider {...sliderSettings}>
                   {properties.filter(p => 
                     p.amenities.some(a => a.toLowerCase().includes("pool")) || 
                     p.title.toLowerCase().includes("pool") ||
                     p.highlight.toLowerCase().includes("pool")
                   ).reverse().slice(0, 8).map((property: Property, index: number) => (
                     <div key={property.id} className="px-3">
                       <PropertyCard 
                         property={{ 
                           ...property, 
                           badge: null,
                           rating: property.rating * 2,
                           totalPrice: property.totalPrice?.replace(" total", "")
                         }} 
                         index={index} 
                       />
                     </div>
                   ))}
                 </Slider>
               ) : (
                 <p className="text-gray-500">No properties with pools found.</p>
               )}
            </div>

            {/* Second Carousel Section */}
            <div className="mb-12">
               <h2 className="font-['Centra_No2:Medium',sans-serif] text-[24px] text-[#191e3b] mb-6">Oceanfront luxury</h2>
               {oceanfrontLuxury.length > 0 ? (
                 <Slider {...sliderSettings}>
                   {oceanfrontLuxury.map((property: Property, index: number) => (
                     <div key={property.id} className="px-3">
                       <PropertyCard 
                         property={{ 
                           ...property, 
                           badge: null,
                           rating: property.rating * 2,
                           totalPrice: property.totalPrice?.replace(" total", "")
                         }} 
                         index={index} 
                       />
                     </div>
                   ))}
                 </Slider>
               ) : (
                 <p className="text-gray-500">No oceanfront luxury properties found.</p>
               )}
            </div>
          </>
        )}

      </div>
    </div>
  );
}
