import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Header from '../Components/Header';
import L from 'leaflet';
import 'tailwindcss/tailwind.css';
import Footer from '../Components/Footer';

// נתוני הסניפים לדוגמה
const branches = [
  { id: 1, name: 'סניף תל אביב', lat: 32.0853, lng: 34.7818 },
  { id: 2, name: 'סניף ירושלים', lat: 31.7683, lng: 35.2137 },
  { id: 3, name: 'סניף חיפה', lat: 32.7940, lng: 34.9896 },
  { id: 4, name: 'סניף באר שבע', lat: 31.2518, lng: 34.7913 },
  { id: 5, name: 'סניף אילת', lat: 29.5581, lng: 34.9482 },
  { id: 6, name: 'סניף רמת גן', lat: 32.0803, lng: 34.8148 },
  { id: 7, name: 'סניף נתניה', lat: 32.3215, lng: 34.8532 },
  { id: 8, name: 'סניף ראשון לציון', lat: 31.9700, lng: 34.7925 },
  { id: 9, name: 'סניף פתח תקווה', lat: 32.0871, lng: 34.8878 },
];

const FlyToLocation = ({ lat, lng }) => {
  const map = useMap();
  map.flyTo([lat, lng], 13);
  return null;
};

const StoreBranches = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSearch = () => {
    const branch = branches.find(b => b.name.includes(searchTerm));
    if (branch) {
      setSelectedLocation(branch);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-red-100">
      <Header title="Store Branches" />
      <div className="flex justify-center p-4 bg-red-100 shadow-lg">
        <input
          type="text"
          placeholder="הזן שם סניף"
          className="border p-2 rounded w-1/3 text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-red-200 hover:bg-red-300 text-black p-2 rounded ml-2 transition-colors duration-300"
        >
          חפש 
        </button>
      </div>
      <div className="flex flex-1">
        <div className="w-3/4 p-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <MapContainer
              center={[32.0853, 34.7818]}
              zoom={8}
              className="h-[500px] w-[500px] mx-auto"
            >
              
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              {branches.map(branch => (
                <Marker
                  key={branch.id}
                  position={[branch.lat, branch.lng]}
                  icon={L.icon({
                    iconUrl: '..\markerImage.png', // קובץ אייקון מותאם אישית
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                  })}
                >
                  <Popup>{branch.name}</Popup>
                </Marker>
              ))}
              {selectedLocation && (
                <FlyToLocation lat={selectedLocation.lat} lng={selectedLocation.lng} />
              )}
            </MapContainer>
          </div>
        </div>
        <div className="w-1/4 bg-red-100 shadow-md p-4 overflow-y-auto transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">רשימת סניפים</h1>
          <ul>
            {branches.map(branch => (
              <li
                key={branch.id}
                className="mb-4 p-3 rounded-md bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white shadow-lg cursor-pointer transition-transform transform hover:-translate-y-1 hover:scale-105"
                onClick={() => setSelectedLocation(branch)}
              >
                <div className="text-lg font-semibold">{branch.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default StoreBranches;