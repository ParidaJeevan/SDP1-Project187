import React from 'react'
import './routing.css'

import {Link} from 'react-router-dom'

export default function Home()
{
    return <div>

    <ul>

<Link to="/home">
<li>Home</li>
</Link>

<Link to="/aboutus">
<li>AboutUs</li>
</Link>

<Link to="/services">
<li>Services</li>
</Link>

<Link to="/contactus">
<li>Contact Us</li>
</Link>

    </ul>

    </div>
}