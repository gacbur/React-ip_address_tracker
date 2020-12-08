import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const InfoBar = () => {


    const { trackerInfo } = useContext(AppContext)

    const { ip_address, city, timezone, isp } = trackerInfo

    return (
        <div className="infobar">
            <div className="infobar-elem">
                <h4>IP ADDRESS</h4>
                <h2>{ip_address}</h2>
            </div>
            <div className="infobar-elem">
                <h4>LOCATION</h4>
                <h2>{city}</h2>
            </div>
            <div className="infobar-elem">
                <h4>TIMEZONE</h4>
                <h2>{timezone}</h2>
            </div>
            <div className="infobar-elem">
                <h4>ISP</h4>
                <h2>{isp}</h2>
            </div>
        </div>
    )
}

export default InfoBar
