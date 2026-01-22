import { Map, Overlay } from "pigeon-maps";
import { useEffect, useState } from "react";
import { projectId, publicAnonKey } from "../utils/supabase/info";
import { Property, DBProperty } from "../data/properties";
import MapPinProductText from "./MapPin";
import { motion } from "motion/react";

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

export function RealMap({ properties, pois = [] }: { properties: Property[], pois?: POI[] }) {
  // Center of Maui
  const defaultCenter: [number, number] = [20.7984, -156.3319];
  const defaultZoom = 10;

  return (
    <div className="size-full overflow-hidden relative">
      <Map 
        provider={mapProvider}
        defaultCenter={defaultCenter} 
        defaultZoom={defaultZoom}
        attribution={false} // Clean look
      >
        {properties.map((property) => (
          <Overlay 
            key={property.id} 
            anchor={[property.coordinates.lat, property.coordinates.lng]} 
            offset={[0, 0]} 
          >
            <div className="transform -translate-x-1/2 -translate-y-full pb-1"> 
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
                <MapPinProductText text={`$${property.price}`} />
              </motion.div>
            </div>
          </Overlay>
        ))}
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
