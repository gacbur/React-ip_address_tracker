import React, { useContext } from 'react'

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'

import iconmonstrlocation from '../images/iconmonstrlocation.png'

import { AppContext } from '../context/AppContext'

const markerIcon = new L.Icon({
    iconUrl: (iconmonstrlocation),
    iconSize: [47, 45],
    iconAnchor: [17, 45],
    popupAnchor: [0, -46]
})

const CenterView = ({ center }) => {
    const map = useMap()
    map.setView(center)
    return null
}

const Map = () => {

    const { trackerInfo } = useContext(AppContext)

    return (
        <MapContainer zoomControl={false} center={trackerInfo.location} zoom={13} scrollWheelZoom={true}>
            <CenterView center={trackerInfo.location} />
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={trackerInfo.location} icon={markerIcon}>
                <Popup>
                    <br /> This Ip address has got me here!
      </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map
