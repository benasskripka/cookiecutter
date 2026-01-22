import { Map, Overlay } from "pigeon-maps";
import { Property } from "../data/properties";
import MapPinProductText from "../imports/MapPinProductText";

interface PropertyMapProps {
  properties: Property[];
}

export function PropertyMap({ properties }: PropertyMapProps) {
  // Maui center
  const defaultCenter: [number, number] = [20.7984, -156.3319];
  
  return (
    <div className="size-full rounded-xl overflow-hidden relative isolate">
       <Map 
         defaultCenter={defaultCenter} 
         defaultZoom={10}
         attribution={false} // Clean look
       >
         {properties.map((property) => (
           <Overlay 
             key={property.id} 
             anchor={[property.coordinates.lat, property.coordinates.lng]} 
             offset={[14, 28]} // Adjust based on pin size (half width, full height roughly)
           >
             <div className="hover:z-50 relative cursor-pointer hover:scale-110 transition-transform">
               <MapPinProductText price={property.price} />
             </div>
           </Overlay>
         ))}
       </Map>
    </div>
  );
}
