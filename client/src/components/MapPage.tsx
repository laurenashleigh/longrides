
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import { MapWrapper } from './MapPage.styles';
import PageContainer from './PageContainer';

const climbLocations = [
  { id: 1, lat: 45.4642, lon: 9.1900, label: "Milan Climb 🚴" },
  { id: 2, lat: 40.7128, lon: -74.0060, label: "NYC Ride 🏙️" },
  { id: 3, lat: 48.8566, lon: 2.3522, label: "Paris View 🗼" },
]
const sleepLocations = [
    { id: 4, lat: 36.7213, lon: -4.4214, label: "Malaga 🌴" },
    { id: 5, lat: 36.7153, lon: -4.1870, label: "Benajarafe 🏖️" },
    { id: 6, lat: 36.7461, lon: -3.6118, label: "Salobreña 🏰" },
    { id: 7, lat: 36.8340, lon: -2.4637, label: "Almería 🌅" },
    { id: 8, lat: 37.1496, lon: -1.8258, label: "Mojacar 🏝️" },
    { id: 9, lat: 37.5996, lon: -1.2485, label: "Mazarron ⛵" },
    { id: 10, lat: 37.6257, lon: -0.9966, label: "Cartagena ⚓" },
    { id: 11, lat: 38.1910, lon: -0.5650, label: "Santa Pola 🐟" },
    { id: 12, lat: 38.3452, lon: -0.4810, label: "Alicante 🌇" },
    { id: 13, lat: 38.7946, lon: 0.1677, label: "Xabia 🏞️" },
    { id: 14, lat: 39.4699, lon: -0.3763, label: "Valencia 🍊" },
    { id: 15, lat: 40.0923, lon: 0.1256, label: "Oropesa del Mar 🏖️" },
    { id: 16, lat: 40.7194, lon: 0.7229, label: "Deltebre 🌾" },
    { id: 17, lat: 41.1189, lon: 1.2445, label: "Tarragona 🏛️" },
    { id: 18, lat: 41.3851, lon: 2.1734, label: "Barcelona 🌟" },
];


const MapPage = () => {
  return (
    <PageContainer pageTitle='My Tours' pageSubtitle='Explore your rides on the map.'>
      <MapWrapper>
        <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={true} style={{ height: '80vh', width: '100%' }}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            {sleepLocations.map((location) => (
            <Marker key={location.id} position={[location.lat, location.lon]}>
                <Popup>{location.label}</Popup>
            </Marker>
            ))}
        </MapContainer>
      </MapWrapper>
    </PageContainer>
  );
}

export default MapPage;