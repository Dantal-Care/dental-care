'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface MapPosition {
  lat: number;
  lng: number;
}

interface MarkerConfig {
  position: MapPosition;
  title: string;
  icon?: string;
}

interface GoogleMapProps {
  center?: MapPosition;
  zoom?: number;
  markers?: MarkerConfig[];
  mapId?: string;
  className?: string;
  style?: React.CSSProperties;
  onMapLoad?: (map: google.maps.Map) => void;
  onError?: (error: Error) => void;
}

const DEFAULT_CENTER: MapPosition = {
  lat: 6.795372623002794,
  lng: 79.9008348092943,
};

const DEFAULT_MARKERS: MarkerConfig[] = [
  {
    position: DEFAULT_CENTER,
    title: 'Location Marker',
  },
];

const GoogleMap: React.FC<GoogleMapProps> = ({
  center = DEFAULT_CENTER,
  zoom = 17,
  markers = DEFAULT_MARKERS,
  mapId,
  className = 'h-[600px] w-full',
  style,
  onMapLoad,
  onError,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];
  }, []);

  const addMarkers = useCallback((map: google.maps.Map, markerConfigs: MarkerConfig[]) => {
    clearMarkers();
    
    markerConfigs.forEach(config => {
      const marker = new google.maps.Marker({
        position: config.position,
        map,
        title: config.title,
        icon: config.icon,
      });
      
      markersRef.current.push(marker);
    });
  }, [clearMarkers]);

  const initializeMap = useCallback(async () => {
    if (!mapRef.current) {
      const error = new Error('Map container ref is not available');
      setError(error.message);
      onError?.(error);
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      const error = new Error('Google Maps API key is not configured');
      setError(error.message);
      onError?.(error);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const loader = new Loader({
        apiKey,
        version: 'weekly',
        libraries: ['places'],
      });

      const google = await loader.load();

      const mapOptions: google.maps.MapOptions = {
        center,
        zoom,
        ...(mapId && { mapId }),
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
      };

      const map = new google.maps.Map(mapRef.current, mapOptions);
      mapInstanceRef.current = map;

      // Add markers
      addMarkers(map, markers);

      // Call onMapLoad callback if provided
      onMapLoad?.(map);

      setIsLoading(false);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to initialize Google Maps');
      console.error('Google Maps initialization error:', error);
      setError(error.message);
      setIsLoading(false);
      onError?.(error);
    }
  }, [center, zoom, markers, mapId, onMapLoad, onError, addMarkers]);

  // Update map center when center prop changes
  useEffect(() => {
    if (mapInstanceRef.current && center) {
      mapInstanceRef.current.setCenter(center);
    }
  }, [center]);

  // Update map zoom when zoom prop changes
  useEffect(() => {
    if (mapInstanceRef.current && zoom) {
      mapInstanceRef.current.setZoom(zoom);
    }
  }, [zoom]);

  // Update markers when markers prop changes
  useEffect(() => {
    if (mapInstanceRef.current) {
      addMarkers(mapInstanceRef.current, markers);
    }
  }, [markers, addMarkers]);

  // Initialize map on component mount
  useEffect(() => {
    initializeMap();

    return () => {
      // Cleanup markers on unmount
      clearMarkers();
    };
  }, [initializeMap, clearMarkers]);

  if (error) {
    return (
      <div className={`${className} bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center`} style={style}>
        <div className="text-center p-6">
          <div className="text-red-500 text-lg mb-2">⚠️ Map Error</div>
          <p className="text-gray-600 text-sm">{error}</p>
          <button
            onClick={initializeMap}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full text-black bg-white flex items-center justify-center">
      <div ref={mapRef} className="h-[600px] w-[900px] rounded-lg border border-gray-200 shadow-sm" />
      
      {isLoading && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
            <p className="text-gray-600 text-sm">Loading map...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleMap;











// 'use client';

// import React, { useEffect, useRef } from 'react';
// import { Loader } from '@googlemaps/js-api-loader';

// const GoogleMap = () => {
//     const mapRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const mapInit = async () => {
//             console.log('Initializing Google Map...', process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
//             const loader = new Loader({
//                 apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
//                 version: 'weekly',
//                 libraries: ['places'],
//             });

//             const google = await loader.load(); // ✅ Correctly load the Google object

//             const position = {
//                 lat: 6.795372623002794,
//                 lng: 79.9008348092943,
//             };

//             const map = new google.maps.Map(mapRef.current as HTMLDivElement, {
//                 center: position,
//                 zoom: 17,
//                 mapId: 'YOUR_MAP_ID_HERE', // Replace with a valid Map ID if you're using Cloud Styled Maps
//             });

//             new google.maps.Marker({
//                 position,
//                 map,
//                 title: 'San Francisco',
//             });
//         };

//         mapInit();
//     }, []);

//     return (
//         <div className="h-screen w-full text-black bg-white flex items-center justify-center">
//             <div ref={mapRef} className="h-[600px] w-[900px] border shadow" />
//         </div>

//     );
// };

// export default GoogleMap;
