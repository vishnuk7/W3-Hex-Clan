import { useState } from 'react';
import { usePosition } from 'use-position';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { ReportModal } from './ReportModal';

const LoadMaps = () => {
	const watch = false;
	const { latitude, longitude, speed, timestamp, accuracy, error } = usePosition(watch, { enableHighAccuracy: true });

	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	return (
		<div className='relative'>
			{latitude !== undefined && longitude !== undefined && (
				<>
					<MapContainer
						style={{ height: '100vh' }}
						center={[latitude, longitude]}
						zoom={13}
						scrollWheelZoom={true}>
						<TileLayer
							attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
							url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
						/>
						<Marker position={[latitude, longitude]}>
							<Popup>
								A pretty CSS3 popup. <br /> Easily customizable.
							</Popup>
						</Marker>
					</MapContainer>

					<button
						onClick={handleClick}
						className='absolute bottom-10 left-2/4 bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 px-4 py-2 rounded text-white text-2xl'
						style={{ zIndex: 314159 }}>
						Report
					</button>
					<ReportModal open={open} />
				</>
			)}
		</div>
	);
};

export default LoadMaps;
