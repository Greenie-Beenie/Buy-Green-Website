import React from 'react'
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Map() {
    const [viewport, setViewport] = useState({
        width: "100%",
        height: 400,
        latitude: 43.65,
        longitude: -79.38,
        zoom: 8
      });
    
    return (
        <ReactMapGL
            {...viewport}
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapboxApiAccessToken="pk.eyJ1Ijoic2lrZXNzcyIsImEiOiJja3BzcXAzd20waTNhMnZwbW94azVvdzN6In0.PsFRoDv55rDSjh-mQ--4eQ"
            mapStyle="mapbox://styles/mapbox/streets-v11">
        </ReactMapGL>
    )
}

export default Map
