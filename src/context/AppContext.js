import React, { createContext, useState, useEffect } from 'react'

const initialState = {
    ip_address: '...loading',
    city: '...loading',
    timezone: '...loading',
    isp: '...loading',
    location: [0, 0]
}

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const [trackerInfo, setTrackerInfo] = useState(initialState)

    const getUserIP = async () => {

        const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_GEO_KEY}`)

        if (response.ok) {
            const responeJson = await response.json()

            const { ip, location, isp } = responeJson

            setTrackerInfo({
                ip_address: ip,
                city: location.city,
                timezone: location.timezone,
                isp: isp,
                location: [location.lat, location.lng]
            })
        } else {
            throw new Error("Bad response")
        }
    }

    const SearchUserIP = async (IP) => {

        const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_GEO_KEY}&ipAddress=${IP}`)

        if (response.ok) {
            const responeJson = await response.json()

            const { ip, location, isp } = responeJson

            setTrackerInfo({
                ip_address: ip,
                city: location.city,
                timezone: location.timezone,
                isp: isp,
                location: [location.lat, location.lng]
            })
        } else {
            throw new Error("Bad response")
        }
    }

    useEffect(() => {
        getUserIP()
    }, [])

    return (
        <AppContext.Provider value={{
            SearchUserIP,
            trackerInfo
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

