import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { useState } from 'react';
import HoverButton from '../Components/ui/HoverButton';
import { MapContainer, TileLayer, Marker, Popup ,GeoJSON} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { notifications } from '../data/notifications';
import { Link } from 'react-router-dom';

import area from '../data/ujjain_area_geojson.js';
import litter from '../data/litter_location_ujjain.js';
// Fix default marker icon issues in Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const getSeverityColor = (severity) => {
    switch (severity) {
        case 'high':
            return '#ff4d4d'; // Red
        case 'medium':
            return '#ffa64d'; // Orange
        case 'low':
            return '#4dff88'; // Green
        default:
            return '#ccc'; // Gray
    }
};


     // Style for polygons
const geoStyle = {
  fillColor: "#4A90E2",    // Calm, modern blue
  weight: 1.5,             // Sleek border
  opacity: 1,
  color: "white",          // Crisp outline
  fillOpacity: 0.4,        // Soft, elegant transparency
};

  const litterStyle = {
  radius: 6,
  fillColor: "#FF6B6B",    // Bright coral accent
  color: "#333333",        // Strong charcoal outline
  weight: 1,
  opacity: 1,
  fillOpacity: 0.9,
};

 const pointToLayer = (feature, latlng) => {
    return L.circleMarker(latlng, litterStyle).bindPopup(
      `Litter Spot ID: ${feature.properties.id}`
    );
  };
  // Popup for each feature
  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.id) {
      layer.bindPopup(`Area ID: ${feature.properties.id}`);
    }
  };

function Dashboard() {
    const zoneCategory = [
        {
            title: "Low",
            value: 2
        },
        {
            title: "Medium",
            value: 4
        },
        {
            title: "High",
            value: 3
        },
        {
            title: "Critical",
            value: 1
        }
    ]
    return (
        <div className='w-full flex'>
            <div className='w-full p-4 space-y-4'>

                <div className='flex space-x-8'>
                    <ul className='p-4 flex flex-col justify-center w-[30%] list-disc space-y-2 py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg'>
                        <h1 className='text-2xl font-bold'>Zones(<span className='text-xl'>Density-ppl/m<sup>2</sup></span>)</h1>
                        {
                            zoneCategory.map((link) => {
                                return <li className='flex justify-between w-full'><span>{link.title}</span><span className='font-bold'>{link.value}</span></li>
                            })
                        }
                        <Link href="/zones"><Button className='w-[100px]' colorScheme='teal'>See More</Button></Link>
                    </ul>
                    <div className='rounded-lg w-[68%] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-4'>
                        <h1 className='text-2xl'>Recent Updates</h1>
                        {notifications.slice(0, 2).map(notification => (
                            <div
                                key={notification.id}
                                style={{
                                    borderLeft: `5px solid ${getSeverityColor(notification.severity)}`,
                                    padding: '10px',
                                    margin: '10px 0',
                                    backgroundColor: '#f9f9f9',
                                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
                                }}
                            >
                                <p><strong>{notification.message}</strong></p>
                                <p style={{ fontSize: '12px', color: '#888' }}>{new Date(notification.timestamp).toLocaleString()}</p>
                            </div>
                        ))}
                        <Link to="/notification" className='text-blue-500 hover:text-blue-700'>See More...</Link>
                    </div>
                </div>
                <div className=''>
                    <div className='rounded-lg p-2 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                        <MapContainer
                            center={[23.1793,75.7849]} // Coordinates for London
                            zoom={13}
                            style={{ height: '430px', width: '100%' }} // Set the map size
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={[25.3176, 82.9739]}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.

                                </Popup>
                                <GeoJSON
                data={area}
                style={geoStyle}
                onEachFeature={onEachFeature}
              />
             {/* Litter points */}
              <GeoJSON data={litter} style={litterStyle} pointToLayer={pointToLayer} />
                            </Marker>
                        </MapContainer>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard