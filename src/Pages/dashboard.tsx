import React from 'react'

export const Dashboard = () => {
    return (
        <div className='-mt-4 pl-10 pr-10'>
            <div className='mb-10 '>
                <h1 className='text-2xl font-bold'>Dasboard</h1>
                <p className='text-gray-400'>Mer 06 Juil 2025</p>
            </div>

            <div className='flex flex-between item-center gap-90 bg-green-100 p-4 rounded-lg w-full'>
                <div>
                    <h1 className='text-5xl p-4 font-bold'>Bonjour, Admin</h1>
                    <p className='pl-4 p-2 text-xl'>Voici un récapitulatif des activités actuelles</p>
                </div>
                <img src="\imges\admin-panel-4438901-3726711.png" alt="" width={300}
                    height={150} className='-mt-20 z-100' />
            </div>
            <div className='mt-7'>
                <p className='font-bold text-gray-500'>Aperçu général</p>

                
            </div>
        </div>
    )
}
