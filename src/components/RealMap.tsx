import { Map, Overlay } from "pigeon-maps";
import { useState } from "react";
import { Property } from "../data/properties";
import MapPinProductText from "./MapPin";
import { PropertyCard } from "./PropertyCard";
import { motion, AnimatePresence } from "motion/react";

// Custom provider for a cleaner, more modern look (CartoDB Voyager)
// Voyager offers a good balance of color while maintaining a modern, clean aesthetic
function mapProvider(x: number, y: number, z: number, dpr?: number) {
  const s = String.fromCharCode(97 + (x + y + z) % 4);
  const retina = dpr && dpr >= 2 ? '@2x' : '';
  return `https://${s}.basemaps.cartocdn.com/rastertiles/voyager/${z}/${x}/${y}${retina}.png`;
}

export interface POI {
  lat: number;
  lng: number;
  label: string;
}

// Small dot marker for unloaded properties
function UnloadedDot() {
  return (
    <div 
      className="w-2 h-2 rounded-full shadow-sm"
      style={{ backgroundColor: '#0F51EC' }}
    />
  );
}

// Zoom threshold at which all pins expand (zoom level 13+ shows all as full pins)
const ZOOM_EXPAND_THRESHOLD = 13;

export function RealMap({ 
  properties, 
  allProperties,
  pois = [] 
}: { 
  properties: Property[], 
  allProperties?: Property[],
  pois?: POI[] 
}) {
  // Center of Maui
  const defaultCenter: [number, number] = [20.7984, -156.3319];
  const defaultZoom = 10;
  
  // Track current zoom level
  const [currentZoom, setCurrentZoom] = useState(defaultZoom);
  
  // Track selected property for popup
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  
  // Track hovered dot property to show full pin on hover
  const [hoveredDotId, setHoveredDotId] = useState<string | number | null>(null);

  // Handle wheel events on map container to prevent page scroll
  const handleMapWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
  };

  // Create a set of loaded property IDs for fast lookup
  const loadedPropertyIds = new Set(properties.map(p => p.id));
  
  // Use allProperties if provided, otherwise fall back to properties
  const allPropertiesToShow = allProperties || properties;
  
  // At high zoom levels, show all properties as full pins
  const isZoomedIn = currentZoom >= ZOOM_EXPAND_THRESHOLD;
  
  // Determine which properties show as full pins vs dots
  const fullPinProperties = isZoomedIn ? allPropertiesToShow : properties;
  const dotProperties = isZoomedIn ? [] : allPropertiesToShow.filter(p => !loadedPropertyIds.has(p.id));

  return (
    <div className="size-full overflow-hidden relative" onWheel={handleMapWheel} onClick={() => setSelectedProperty(null)}>
      {/* Property popup fixed at bottom center of map container - using top with calc to position from bottom */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute left-1/2 -translate-x-1/2 z-50"
            style={{ top: 'calc(100% - 96px - 180px)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <PropertyCard 
              property={selectedProperty} 
              index={0}
              horizontal
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      <Map 
        provider={mapProvider}
        defaultCenter={defaultCenter} 
        defaultZoom={defaultZoom}
        attribution={false} // Clean look
        onBoundsChanged={({ zoom }) => setCurrentZoom(zoom)}
      >
        {/* Unloaded properties as small dots (only when zoomed out) - show full pin on hover or when selected */}
        {dotProperties.map((property) => {
          const isHovered = hoveredDotId === property.id;
          const isSelected = selectedProperty?.id === property.id;
          const showFullPin = isHovered || isSelected;
          return (
            <Overlay 
              key={`unloaded-${property.id}`} 
              anchor={[property.coordinates.lat, property.coordinates.lng]} 
              offset={[0, 0]} 
            >
              <div 
                className="cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProperty(property);
                }}
                onMouseEnter={() => setHoveredDotId(property.id)}
                onMouseLeave={() => setHoveredDotId(null)}
              >
                {/* Container that keeps everything centered */}
                <div className="relative flex flex-col items-center">
                  {/* Dot - always centered at anchor point, with extra padding for hover area */}
                  <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 p-2"
                    style={{ 
                      opacity: showFullPin ? 0 : 1,
                      pointerEvents: showFullPin ? 'none' : 'auto'
                    }}
                  >
                    <UnloadedDot />
                  </div>
                  {/* Full pin - bottom aligned to anchor point */}
                  <div 
                    className="transition-opacity duration-150"
                    style={{ 
                      opacity: showFullPin ? 1 : 0,
                      pointerEvents: showFullPin ? 'auto' : 'none',
                      transform: 'translateX(-50%) translateY(-100%)',
                      position: 'absolute',
                      left: '50%',
                      top: 0,
                      paddingBottom: 4
                    }}
                  >
                    <MapPinProductText text={`$${property.price}`} selected={isSelected} disableHoverScale />
                  </div>
                </div>
              </div>
            </Overlay>
          );
        })}
        
        {/* Full pins (loaded properties, or ALL when zoomed in) */}
        {fullPinProperties.map((property) => (
          <Overlay 
            key={property.id} 
            anchor={[property.coordinates.lat, property.coordinates.lng]} 
            offset={[0, 0]} 
          >
            <div 
              className="transform -translate-x-1/2 -translate-y-full pb-1 cursor-pointer" 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProperty(property);
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                style={{ originX: 0.5, originY: 1 }}
              >
                <MapPinProductText text={`$${property.price}`} selected={selectedProperty?.id === property.id} />
              </motion.div>
            </div>
          </Overlay>
        ))}
        
        {/* Selected property popup - rendered outside of map overlays */}
        
        {pois.map((poi, i) => (
          <Overlay 
            key={`poi-${i}`} 
            anchor={[poi.lat, poi.lng]} 
            offset={[0, 0]} 
          >
             <div className="transform -translate-x-1/2 -translate-y-full pb-1 flex flex-col items-center z-50">
               <motion.div
                 initial={{ scale: 0, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
                 className="flex flex-col items-center"
               >
                 <div className="bg-black text-white px-3 py-1.5 rounded-full shadow-lg text-xs font-bold whitespace-nowrap cursor-pointer transition-transform hover:scale-110">
                   {poi.label}
                 </div>
               </motion.div>
             </div>
          </Overlay>
        ))}
      </Map>
    </div>
  );
}
