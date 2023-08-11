import React from 'react'
import { state } from '../store'
import { Link } from 'react-router-dom'

let categories = ['all', 'ui', 'ux', 'enhancement', 'bug', 'feature']

export default function Sidebar() {

    const handleFilter = (payload) => {
        state.filter = payload;
    }

  return (
    <div className='h-auto space-y-6 lg:col-span-3'>
        <div className='h-auto min-h-[200px] flex flex-col justify-end py-8 px-5 rounded-xl bg-gradient-to-br from-sky-500 via-purple-400 to-rose-400'>
            <h2 className='text-lg font-medium text-white md:text-xl'>Frontend Mentor</h2>
            <p className='text-sm font-light text-gray-200'>Feedback Board</p>
        </div>
        <div className='h-auto px-5 py-8 bg-white rounded-xl'>
            <div className="flex flex-wrap gap-2">
                {categories.map((c, i) => (
                    <button onClick={() => handleFilter(c)} key={i} className='px-3 py-1 font-medium text-blue-600 capitalize shadow-xl shadow-violet-100 bg-violet-100 rounded-xl'>{c}</button>
                ))}
            </div>
        </div>
        <div className='h-auto px-5 py-8 space-y-4 bg-white rounded-xl'>
            <div className="flex items-center justify-between gap-3">
                <h2 className='text-lg font-bold text-gray-700 md:text-xl'>Roadmap</h2>
                <Link to="/view/123" className='text-sm font-medium text-blue-600 underline'>View</Link>
            </div>
            <ul className="w-full">
                <li className="flex items-center justify-between gap-3">
                    <div className='flex items-center gap-4'>
                        <div className='w-1 h-1 bg-orange-400'/>
                        <p className='text-gray-500'>Planned</p>
                    </div>
                    <p className='font-bold text-gray-600'>2</p>
                </li>
                <li className="flex items-center justify-between gap-3">
                    <div className='flex items-center gap-4'>
                        <div className='w-1 h-1 bg-orange-400'/>
                        <p className='text-gray-500'>In-Progress</p>
                    </div>
                    <p className='font-bold text-gray-600'>3</p>
                </li>
                <li className="flex items-center justify-between gap-3">
                    <div className='flex items-center gap-4'>
                        <div className='w-1 h-1 bg-orange-400'/>
                        <p className='text-gray-500'>Live</p>
                    </div>
                    <p className='font-bold text-gray-600'>1</p>
                </li>
            </ul>
        </div>  
    </div>
  )
}
