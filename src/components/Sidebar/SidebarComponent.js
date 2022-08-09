import React from 'react'
import { Link } from 'react-router-dom';
function Sidebar({Icon, title}) {
    return (
        <div style={{display:'flex', padding:'10px 10px'}}>
                <Link style={{textDecoration:'none', color:'black'}} to="">
                    <Icon style={{color:'black'}}/>
                    {title}
                </Link>
        </div>
    )
}

export default Sidebar