import React from 'react'
import { Icon } from '@iconify/react'

const AdminBar = () => {
    return (
        <div className="p-7 flex items-center ">
            <div className="relative max-w-md w-full">
                <input
                    type="text"
                    placeholder="Rechercher..."
                    className="bg-gray-100 border-none outline-none px-4 py-2 rounded w-full pr-10"
                />
                <Icon
                    icon="mdi:magnify"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 text-xl"
                />
            </div>

            <div className="ml-auto flex items-center text-xl">
                Admin
                <Icon icon="mdi:account" className="text-gray-500 ml-2" />
            </div>
        </div>
    )
}

export default AdminBar
