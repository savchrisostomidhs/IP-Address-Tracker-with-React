import { Map as LeafletMap } from 'leaflet';
import { useMap } from 'react-leaflet';
import { useEffect } from 'react';

function MapReadySetter({ mapRef }: { mapRef: React.MutableRefObject<LeafletMap | null> }) {
    const map = useMap();

    useEffect(() => {
        mapRef.current = map;
    }, [map, mapRef]);

    return null;
}

export default MapReadySetter