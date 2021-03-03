import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className="header">
            <h1>this is header</h1>
            
            <div className="header_left">
                <img src="" alt=""/>

                <div className="header_search">
                    {/* Search Icon*/}
                    <input type="text"/>
                </div>
            </div>

            <div className="header_right">

            </div>
            
        </div>
    )
}

export default Header
