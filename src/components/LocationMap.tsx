
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-0.3657, 51.4679], // Hounslow coordinates
      zoom: 13,
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add marker for business location
    const marker = new mapboxgl.Marker({
      color: "#FF0000",
    })
      .setLngLat([-0.3657, 51.4679])
      .setPopup(new mapboxgl.Popup().setHTML("<h3>Truetop Roofing Ltd</h3><p>14 Central Avenue, Hounslow, TW32QH</p>"))
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <div className="py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Find Us Here
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit us at our location in Hounslow or get in touch for a consultation.
          </p>
        </div>

        {!mapboxToken ? (
          <div className="text-center p-6">
            <p className="text-gray-600 mb-4">Please enter your Mapbox public token to view the map:</p>
            <input
              type="text"
              className="px-4 py-2 border rounded-lg w-full max-w-md"
              placeholder="Enter Mapbox public token"
              onChange={(e) => setMapboxToken(e.target.value)}
            />
            <p className="text-sm text-gray-500 mt-2">
              You can get your public token from {' '}
              <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Mapbox.com
              </a>
            </p>
          </div>
        ) : (
          <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-white to-purple-50">
            <div ref={mapContainer} className="w-full h-full" />
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationMap;
