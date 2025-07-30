import { MapContainer, TileLayer } from 'react-leaflet'
import MapReadySetter from './MapReadySetter';
import { Map as LeafletMap } from 'leaflet';
import { useEffect, useRef } from 'react';
import { Marker } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import "./Map.css"

function Map({ lat, lng }: { lat: number | undefined, lng: number | undefined }) {
    const mapRef = useRef<LeafletMap | null>(null);

    useEffect(() => {
        if (lat && lng) {
            mapRef.current?.setView([lat, lng], 20)
        } else {
            mapRef.current?.setView([51.505, -0.09], 20)
        }
    }, [lat, lng]);

    const customIcon = new L.Icon({
        iconUrl: 'icon-location.svg',
        iconSize: [46, 56],
        iconAnchor: [23, 56],
    });

    return (
        <MapContainer
            className='map'
            center={(lat && lng) ? [lat, lng] : [51.505, -0.09]}
            zoom={20}
            style={{ height: "60vh", width: "100vw" }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MapReadySetter mapRef={mapRef} />
            {(lat && lng) && <Marker position={[lat, lng]} icon={customIcon} />}
        </MapContainer>
    )
}

export default Map