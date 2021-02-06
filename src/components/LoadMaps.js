import { usePosition } from "use-position";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const LoadMaps = () => {
  const watch = false;
  const {
    latitude,
    longitude,
    speed,
    timestamp,
    accuracy,
    error,
  } = usePosition(watch, { enableHighAccuracy: true });

  return (
    <div>
      {latitude !== undefined && longitude !== undefined && (
        <MapContainer
          style={{ height: "100vh" }}
          center={[latitude, longitude]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default LoadMaps;
