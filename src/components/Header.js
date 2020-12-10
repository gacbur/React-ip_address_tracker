import React, { useState, useContext } from 'react'

import { AppContext } from '../context/AppContext'

import InfoBar from './InfoBar'
import iconarrow from '../images/iconarrow.svg'

const Header = () => {

    const [inputValue, setInputValue] = useState('')

    const { SearchUserIP } = useContext(AppContext)


    const handleAddIP = () => {
        SearchUserIP(inputValue)
    }

    return (
        <div className="header">
            <div className="header-content">
                <h1>IP Address Tracker</h1>
                <div className="search-element">
                    <input
                        type="text"
                        placeholder="Search for any IP or domain"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    ></input>
                    <button
                        onClick={handleAddIP}
                    ><img src={iconarrow} alt="icon"></img></button>
                </div>
                <InfoBar />
            </div>
        </div >
    )
}

export default Header
