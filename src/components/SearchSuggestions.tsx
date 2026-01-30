import svgPaths from "../imports/svg-qohufkzzrq";
import svgPathsNew from "../imports/svg-3lgt4rt24h";
import { motion } from "framer-motion";

interface Suggestion {
  text: string;
  boldPart?: string;
  type: 'search' | 'location' | 'action' | 'sub-option';
}

interface SearchSuggestionsProps {
  query: string;
  onSelect: (value: string) => void;
  variant?: 'default' | 'hawaii' | 'maui-only';
  hasDates?: boolean;
}

export function SearchSuggestions({ query, onSelect, variant = 'default', hasDates = false }: SearchSuggestionsProps) {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[0px] top-[67px] w-full">
      {(() => {
        const getSmartSuggestions = () => {
          // Maui-only variant: Always show hardcoded Maui destinations
          if (variant === 'maui-only') {
            return [
              { text: 'Maui, Hawaii', type: 'location' as const },
              { text: 'Lahaina, Maui', type: 'location' as const },
              { text: 'Wailea, Maui', type: 'location' as const },
              { text: 'Kaanapali Beach, Maui', type: 'location' as const },
              { text: 'Paia, Maui', type: 'location' as const },
              { text: 'Kihei, Maui', type: 'location' as const },
            ];
          }
          
          if (!query) {
             if (variant === 'hawaii') {
               return [
                { text: 'Homes in Maui', type: 'search' as const },
                { text: 'Maui, Hawaii', type: 'location' as const },
                { text: 'Beachfront villas', type: 'search' as const },
                { text: 'Honolulu, Hawaii', type: 'location' as const },
                { text: 'Luxury condos in Wailea', type: 'search' as const },
                { text: 'Kauai, Hawaii', type: 'location' as const },
               ];
             }
             return [
              { text: 'Homes nearby for the weekend', type: 'search' as const },
              { text: 'Destin, Florida', type: 'location' as const },
              { text: 'Villas with a pool and hot tub', type: 'search' as const },
              { text: 'San Francisco, California', type: 'location' as const },
              { text: 'Miami, Florida', type: 'location' as const },
              { text: 'Pet friendly cabins', type: 'search' as const },
             ];
          }
          
          const q = query.toLowerCase().trim();
          
          const results: Suggestion[] = [];
          
          // --- DATASETS ---
          const locations = [
            'Destin, Florida', 'Santa Fe, New Mexico', 'San Francisco, California', 
            'Austin, Texas', 'Miami, Florida', 'Denver, Colorado', 
            'Seattle, Washington', 'Portland, Oregon', 'New York, New York', 
            'Los Angeles, California', 'Aspen, Colorado', 'Nashville, Tennessee',
            'Chicago, Illinois', 'Boston, Massachusetts', 'Las Vegas, Nevada',
            'New Orleans, Louisiana', 'Charleston, South Carolina', 'Savannah, Georgia',
            'Sedona, Arizona', 'Lake Tahoe, California', 'Moab, Utah',
            'London, UK', 'Paris, France', 'Tokyo, Japan', 'Sydney, Australia', 
            'Rome, Italy', 'Barcelona, Spain', 'Amsterdam, Netherlands',
            'Toronto, Canada', 'Vancouver, Canada', 'Mexico City, Mexico', 'Cancun, Mexico',
            'Maui, Hawaii', 'Honolulu, Hawaii', 'Kauai, Hawaii', 'Oahu, Hawaii', 'Big Island, Hawaii'
          ];
          
          const amenities = [
            'pool', 'hot tub', 'kitchen', 'wifi', 'gym', 'fireplace', 'ocean view', 
            'pet friendly', 'balcony', 'garden', 'parking', 'washer', 'dryer', 
            'air conditioning', 'workspace', 'piano', 'chef\'s kitchen', 'sauna'
          ];
          
          const vibes = [
            'romantic', 'cozy', 'modern', 'rustic', 'secluded', 'luxury', 
            'family friendly', 'historic', 'minimalist', 'bohemian', 'chic',
            'industrial', 'beachfront', 'mountain view', 'lakefront', 'desert'
          ];
          
          const activities = [
            'skiing', 'hiking', 'surfing', 'swimming', 'shopping', 'fishing', 
            'golfing', 'dining', 'sightseeing', 'wine tasting', 'snorkeling', 
            'cycling', 'rock climbing', 'yoga', 'camping'
          ];
          
          const propertyTypes = [
            'homes', 'apartments', 'condos', 'villas', 'cabins', 'bungalows', 
            'lofts', 'mansions', 'cottages', 'treehouses', 'yurts', 'penthouses', 'chalets'
          ];

          const synonyms: Record<string, string[]> = {
            'beach': ['ocean', 'sea', 'coast', 'waterfront', 'shore', 'sand', 'wave'],
            'mountain': ['hill', 'peak', 'slope', 'alpine', 'ski', 'hike', 'climb', 'summit'],
            'city': ['urban', 'downtown', 'metro', 'center', 'town', 'nightlife'],
            'country': ['rural', 'farm', 'nature', 'field', 'quiet', 'escape', 'green'],
            'water': ['lake', 'river', 'stream', 'pond', 'boat', 'fishing'],
            'snow': ['ski', 'winter', 'cold', 'ice', 'cabin', 'fireplace', 'snowboard'],
            'lux': ['expensive', 'premium', 'exclusive', 'high end', 'fancy', 'mansion', 'upscale'],
            'cheap': ['budget', 'affordable', 'value', 'low cost', 'deal', 'economy'],
            'family': ['kids', 'large', 'spacious', 'group', 'children'],
            'work': ['wifi', 'desk', 'office', 'business', 'remote']
          };

          // --- LOGIC ---

          // 1. Special "Next Month" Action - only show if dates aren't already set
          if (q.includes('next month') && !hasDates) {
             results.push({ text: 'Set dates', type: 'action' });
             results.push({ text: 'Flexible in February', type: 'sub-option' });
             results.push({ text: '1 Feb - 28 Feb', type: 'sub-option' });
          }

          // 1b. Special "Next Week" Action - only show if dates aren't already set
          if (q.includes('next week') && !hasDates) {
             results.push({ text: 'Set dates', type: 'action' });
             results.push({ text: 'Flexible next week', type: 'sub-option' });
             results.push({ text: '2 Feb - 8 Feb', type: 'sub-option' });
          }

          // 2. Location Matching (Highest Priority)
          const locMatches = locations.filter(l => l.toLowerCase().includes(q));
          // Prioritize startsWith matches
          locMatches.sort((a, b) => {
             const aStarts = a.toLowerCase().startsWith(q) ? -1 : 1;
             const bStarts = b.toLowerCase().startsWith(q) ? -1 : 1;
             return aStarts - bStarts;
          });
          locMatches.slice(0, 3).forEach(l => results.push({ text: l, type: 'location' }));

          // 3. Synonym/Concept Expansion
          let expandedConcepts: string[] = [q];
          Object.entries(synonyms).forEach(([key, terms]) => {
             if (q.includes(key) || terms.some(t => q.includes(t))) {
                expandedConcepts.push(key);
             }
          });

          // 4. Smart Composition (Diverse Suggestions)
          // Try to form queries like: "Luxury homes", "Cabins with pool", "Hiking in Aspen"
          
          const contextSuffix = variant === 'hawaii' ? ' in Maui' : '';

          // A. Property Type Combinations
          propertyTypes.forEach(p => {
             if (p.includes(q)) {
                // If user types "cab", suggest "Cabins", "Cabins with hot tub"
                results.push({ text: p.charAt(0).toUpperCase() + p.slice(1) + contextSuffix, boldPart: p, type: 'search' });
                results.push({ text: `${p.charAt(0).toUpperCase() + p.slice(1)} with hot tub${contextSuffix}`, boldPart: p, type: 'search' });
             } else if (expandedConcepts.some(c => c === 'lux' || c === 'family' || c === 'romantic')) {
                // Contextual property suggestions
                const context = expandedConcepts.find(c => ['lux', 'family', 'romantic'].includes(c));
                const adj = context === 'lux' ? 'Luxury' : (context === 'family' ? 'Family' : 'Romantic');
                if (!results.some(r => r.text.includes(adj + ' ' + p))) {
                   results.push({ text: `${adj} ${p}${contextSuffix}`, boldPart: adj, type: 'search' });
                }
             }
          });

          // B. Amenity/Vibe Combinations
          [...amenities, ...vibes].forEach(item => {
             if (item.includes(q)) {
                 results.push({ text: `Stays with ${item}${contextSuffix}`, boldPart: item, type: 'search' });
                 results.push({ text: `${item.charAt(0).toUpperCase() + item.slice(1)} homes${contextSuffix}`, boldPart: item, type: 'search' });
             }
          });

          // C. Activity Combinations
          activities.forEach(act => {
             if (act.includes(q)) {
                results.push({ text: `Places for ${act}${contextSuffix}`, boldPart: act, type: 'search' });
                // Find a relevant location for this activity
                if (act === 'skiing') results.push({ text: `Skiing in Aspen`, boldPart: act, type: 'search' });
                if (act === 'surfing') results.push({ text: `Surfing in Hawaii`, boldPart: act, type: 'search' });
                if (act === 'hiking') results.push({ text: `Hiking near Sedona`, boldPart: act, type: 'search' });
             }
          });

          // 5. Connector/Sentence Completion (High Intelligence)
          // Improved from simple lastWord check to full string parsing
          const connectors = [
             { token: ' in ', options: locations.map(l => l.split(',')[0]) },
             { token: ' near ', options: ['beach', 'downtown', 'mountains', 'lake', 'national park', 'airport'] },
             { token: ' with ', options: amenities },
             { token: ' for ', options: ['families', 'couples', 'weekends', 'large groups', 'honeymoon'] }
          ];

          let matchedConnector = false;
          connectors.forEach(c => {
             if (q.includes(c.token)) {
                matchedConnector = true;
                const [prefix, suffix] = q.split(c.token);
                const trimmedSuffix = suffix.trim();
                
                // If suffix is empty, suggest all options
                // If suffix exists, filter options
                const matchedOptions = trimmedSuffix 
                    ? c.options.filter(opt => opt.toLowerCase().startsWith(trimmedSuffix.toLowerCase())).slice(0, 5)
                    : c.options.slice(0, 5);
                
                matchedOptions.forEach(opt => {
                   // Capitalize first letter of option
                   const displayOpt = opt.charAt(0).toUpperCase() + opt.slice(1);
                   const fullText = `${prefix.trim()}${c.token}${displayOpt}`;
                   
                   // Don't duplicate if it exists
                   if (!results.some(r => r.text.toLowerCase() === fullText.toLowerCase())) {
                       results.push({ text: fullText, boldPart: displayOpt, type: 'search' });
                   }
                });
             }
          });

          // 6. Refinement & Juicy Suggestions (The "Juice" Step)
          // Detect if we have a robust query like "Homes in Maui" or just "Maui"
          const locationInQuery = locations.find(l => q.includes(l.toLowerCase().split(',')[0].trim().toLowerCase()));
          
          if (locationInQuery) {
             const locName = locationInQuery.split(',')[0].trim();
             // If the query is just the location or "Homes in [Location]"
             // We want to add specific, high-value modifiers
             
             // Specific tailored suggestions for Hawaii/Maui
             if (['Maui', 'Hawaii', 'Honolulu', 'Oahu', 'Kauai', 'Big Island'].some(h => locName.includes(h))) {
                 const juicyOptions = [
                    { suffix: ' beachfront', bold: 'beachfront' },
                    { suffix: ' with ocean view', bold: 'ocean view' },
                    { suffix: ' luxury villas', bold: 'luxury villas' },
                    { suffix: ' for honeymoon', bold: 'honeymoon' },
                    { suffix: ' with private pool', bold: 'private pool' },
                    { suffix: ' near the beach', bold: 'near the beach' }
                 ];
                 
                 // If query doesn't already have these modifiers
                 juicyOptions.forEach(opt => {
                    if (!q.includes(opt.bold)) {
                        // If query ends with the location, append. 
                        // If query is just "maui", make it "Maui beachfront"
                        results.push({ text: `${query}${opt.suffix}`, boldPart: opt.bold, type: 'search' });
                    }
                 });
             } else {
                 // General juicy suggestions for other locations
                 const generalJuicy = [
                    { suffix: ' downtown', bold: 'downtown' },
                    { suffix: ' with pool', bold: 'pool' },
                    { suffix: ' pet friendly', bold: 'pet friendly' },
                    { suffix: ' for weekend', bold: 'weekend' }
                 ];
                  generalJuicy.forEach(opt => {
                    if (!q.includes(opt.bold)) {
                        results.push({ text: `${query}${opt.suffix}`, boldPart: opt.bold, type: 'search' });
                    }
                 });
             }
          }

          // 7. Generic Fallback (if few results)
          if (results.length < 5) {
             const isPropertyType = propertyTypes.some(p => q.includes(p));
             const isLocation = locations.some(l => q.includes(l.toLowerCase().split(',')[0].trim()));
             
             if (q.length > 1) {
                // Only add "homes" suffix if the query doesn't already contain a property type
                if (!isPropertyType && !q.includes('homes') && !results.some(r => r.text.includes('homes'))) {
                   const suffix = variant === 'hawaii' ? ' homes in Maui' : ' homes';
                   results.push({ text: `${query}${suffix}`, boldPart: query, type: 'search' });
                }
                
                // Always valid to add "nearby" if not present
                if (!results.some(r => r.text.includes('nearby'))) {
                   results.push({ text: `${query} nearby`, boldPart: query, type: 'search' });
                }
             }
          }

          // Deduplicate
          const unique: Suggestion[] = [];
          const seen = new Set<string>();
          results.forEach(r => {
             // Normalized dedup key
             const key = r.text.toLowerCase().trim();
             // Prevent "Homes in Maui homes" type dupes if we just added juicy ones
             if (key.endsWith(' homes') && key.split(' homes').length > 2) {
                return; 
             }
             if (!seen.has(key)) {
                seen.add(key);
                unique.push(r);
             }
          });

          return unique.slice(0, 6);
        };

        return getSmartSuggestions().map((suggestion, index) => {
          const renderText = () => {
             if (!suggestion.boldPart) {
               return <span className="font-['CentraNo2',sans-serif] font-medium leading-[18px]">{suggestion.text}</span>;
             }
             // Case insensitive replace for bolding
             const parts = suggestion.text.split(new RegExp(`(${suggestion.boldPart})`, 'gi'));
             
             return (
               <>
                 {parts.map((part, i) => (
                    part.toLowerCase() === suggestion.boldPart?.toLowerCase() ? 
                    <span key={i} className="font-['CentraNo2',sans-serif] font-medium leading-[18px]">{part}</span> :
                    <span key={i} className="font-['CentraNo2',sans-serif] leading-[20px]">{part}</span>
                 ))}
               </>
             );
          };

          return (
            <motion.div
              key={`${suggestion.text}-${index}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.2,
                delay: index * 0.03,
                ease: "easeOut"
              }}
              onClick={() => onSelect(suggestion.text)}
              className={`content-stretch flex flex-col h-[48px] items-start overflow-clip relative shrink-0 w-full cursor-pointer rounded-[12px] hover:bg-[#F3F6F8] transition-colors ${suggestion.type === 'sub-option' ? 'pl-[40px]' : ''}`}
            >
              <div className="box-border content-stretch flex gap-[16px] items-center justify-start px-[24px] py-[12px] relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
                  <div className="relative shrink-0 size-[20px] text-[#191E3B]">
                    <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                      {suggestion.type === 'action' ? (
                        <g>
                          <path d={svgPaths.p31076400} fill="#0F51ED" />
                        </g>
                      ) : suggestion.type === 'sub-option' ? (
                        <g>
                           <path d={svgPathsNew.p1438baa0} fill="#1E2340" />
                        </g>
                      ) : (
                        <g>
                           {/* Location Pin or Search Icon */}
                           {suggestion.type === 'location' ? (
                             <path fillRule="evenodd" clipRule="evenodd" d={svgPaths.p1b11a100} fill="currentColor" fillOpacity="0.5"/>
                           ) : (
                             <path fillRule="evenodd" clipRule="evenodd" d={svgPaths.p28143280} fill="currentColor" fillOpacity="0.5"/>
                           )}
                        </g>
                      )}
                    </svg>
                  </div>
                  <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
                    <p className={`[white-space-collapse:collapse] basis-0 grow h-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap ${suggestion.type === 'action' ? 'text-[#0F51ED]' : 'text-[#191e3b]'}`}>
                      {renderText()}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        });
      })()}
    </div>
  );
}