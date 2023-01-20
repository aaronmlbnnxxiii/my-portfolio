import React from 'react'
import { links } from './Menu'
import { Link } from 'gatsby-link'

const MobileMenu = ({ style }: any) => {
    return (
        <div className='flex flex-col bg-white h-screen fixed inset-0 z-40' style={style}>
            <ul className="flex flex-col mt-10 p-4">
                {links.map((val: any, index: any) => (
                    <li key={val.name + index}>
                        <Link className="nav-item" to={val.url}>{val.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MobileMenu