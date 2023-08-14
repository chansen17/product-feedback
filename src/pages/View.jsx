import React from 'react'
import { state } from '../store'
import { useLocation } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ListItem from '../components/ListItem'
import EntryView from '../components/EntryView'

export default function View() {
    const location = useLocation();    
    const id = location.state.id;

    const item = state.entries.filter(item => item.id === id);
    let entry = item[0]

  return (
    <div className='space-y-6 lg:col-span-9'>
        <div className="w-full">
            <div className="flex items-center justify-between gap-6">
                <Link to="/" className='flex items-center gap-2'>
                    <FaChevronLeft />
                    <span className='font-bold text-gray-700'>Go Back</span>
                </Link>
                <button className="px-4 py-3 text-center text-white bg-blue-600 rounded-2xl">Edit Feedback</button>
            </div>
        </div>
        <EntryView entry={entry} />
    </div>
  )
}
