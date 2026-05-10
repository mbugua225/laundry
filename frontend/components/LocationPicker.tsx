'use client';
import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { MapPin, Navigation } from 'lucide-react';

const mapContainerStyle = {
  width: '100%',
  height: '300px',
  borderRadius: '0.5rem',
};

// Default center (Kimbo, Ruiru approximately)
const defaultCenter = {
  lat: -1.1340,
  lng: 36.9632,
};

interface LocationPickerProps {
  onLocationSelect: (location: { lat: number; lng: number; address: string }) => void;
}

export default function LocationPicker({ onLocationSelect }: LocationPickerProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  const [markerPosition, setMarkerPosition] = useState(defaultCenter);
  const [manualAddress, setManualAddress] = useState('');
  const [isLocating, setIsLocating] = useState(false);

  const onMapClick = useCallback((e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setMarkerPosition({ lat, lng });
      onLocationSelect({ lat, lng, address: manualAddress });
    }
  }, [manualAddress, onLocationSelect]);

  const handleManualAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setManualAddress(val);
    onLocationSelect({ lat: markerPosition.lat, lng: markerPosition.lng, address: val });
  };

  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
    
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setMarkerPosition({ lat, lng });
        onLocationSelect({ lat, lng, address: manualAddress });
        setIsLocating(false);
      },
      (error) => {
        console.error("Error getting location", error);
        alert("Unable to retrieve your location. Please check your browser permissions.");
        setIsLocating(false);
      }
    );
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-400">Pickup/Delivery Address</label>
      
      {/* Map or Fallback */}
      {isLoaded ? (
        <div className="border border-gray-700 rounded-lg overflow-hidden shadow-inner relative group">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={markerPosition}
            zoom={15}
            onClick={onMapClick}
            options={{ disableDefaultUI: true, zoomControl: true, styles: [
              { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
              { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
              { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            ] }}
          >
            <Marker position={markerPosition} />
          </GoogleMap>
          
          <button
            type="button"
            onClick={useCurrentLocation}
            disabled={isLocating}
            className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-white/20 transition-colors shadow-lg"
          >
            <Navigation className={`w-4 h-4 ${isLocating ? 'animate-pulse text-primary-blue' : 'text-white'}`} />
            {isLocating ? 'Locating...' : 'Use my current location'}
          </button>
          
          <div className="bg-[#111] px-4 py-2 text-xs text-gray-400 text-center border-t border-gray-800">
            Click on the map to drop a pin at your exact location
          </div>
        </div>
      ) : (
        <div className="h-[300px] bg-[#1a1a1a] flex items-center justify-center rounded-lg border border-gray-800">
          <p className="text-gray-500 text-sm">Loading map...</p>
        </div>
      )}

      {/* Manual Entry Fallback */}
      <div className="mt-6 bg-[#1a1a1a] p-5 rounded-xl border border-gray-800 shadow-inner relative">
        <div className="absolute -top-3 left-4 bg-[#111] px-2 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-primary-blue-dark/20 flex items-center justify-center border border-primary-blue/30">
            <MapPin className="w-3 h-3 text-primary-blue-light" />
          </div>
          <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
            Location Details
          </label>
        </div>
        
        <p className="text-sm text-gray-500 mb-3 mt-1">
          Add specific details like your building name, apartment number, or street to help our riders find you easily.
        </p>
        
        <div className="relative group">
          <input
            type="text"
            value={manualAddress}
            onChange={handleManualAddressChange}
            placeholder="e.g. Rdor Apartment, 3rd Floor, Door 12"
            className="w-full pl-4 pr-10 py-3.5 bg-[#111] border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue text-white placeholder-gray-600 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] group-hover:border-gray-600"
          />
          {manualAddress && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
          )}
        </div>
      </div>
    </div>
  );
}

