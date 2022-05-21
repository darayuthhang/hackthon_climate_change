import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css'


mapboxgl.accessToken =
    'pk.eyJ1IjoiZGFyYXl1dGhoYW5nIiwiYSI6ImNrbW0zam90ZjFoN2Iyb3Q0cjlrZXAyZGEifQ.gz0ymRmL02S-Zt6lUeZhVw';

const Map = () => {
    const mapContainerRef = useRef(null);

    const [lng, setLng] = useState(5);
    const [lat, setLat] = useState(34);
    const [zoom, setZoom] = useState(1.5);
  

    // Initialize map when component mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-65.017, -16.457],
            zoom: 9 // starting zoom
        });

        // Set marker options.
        const marker = new mapboxgl.Marker({
            color: "#FFFFFF",
            draggable: true
        }).setLngLat([38.4161, 63.6167])
            .addTo(map);
   
        //Add navigation control (the +/- zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        //Create a default Marker and add it to the map.
        map.on('move', () => {
            setLng(map.getCenter().lng.toFixed(4));
            setLat(map.getCenter().lat.toFixed(4));
            setZoom(map.getZoom().toFixed(2));
        });

        // Clean up on unmount
        return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className='sidebarStyle'>
                <div className=''>
                    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>
            </div>
            <div className='map-container' ref={mapContainerRef} />
        </div>
    );
};

export default Map;
