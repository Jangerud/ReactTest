import React from 'react'
import { Link } from 'react-router-dom'

export const NavigationDesktop = () => {
    return (
        <div>
            <Link to="/"> Home </Link>
            <Link to="/signin"> Sign In </Link>
        </div>
    )
}
