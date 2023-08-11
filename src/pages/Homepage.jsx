import React from 'react'
import { items } from '../data';
import { state } from '../store';
import { FaLightbulb } from 'react-icons/fa';
import List from '../components/List';

export default function Homepage() {

  const entries = state.filter !== null ? items.filter(item => item.category.toLowerCase() === state.filter.toLowerCase()) : items;

  return (
    <div className='lg:col-span-9'>
        <div className="w-full px-4 py-4 rounded-2xl bg-slate-700">
            <div className="flex flex-wrap items-center justify-between w-full gap-3">
                
                <div className='flex items-center gap-3 font-bold text-white'>
                    <FaLightbulb />
                    <p>6 Suggestions</p>
                </div>

                <button className='flex items-center gap-3 px-4 py-3 text-white bg-none'>
                    Sort By: <span className="font-bold">Most Upvotes</span>
                </button>

                <button className="px-4 py-3 font-medium text-center text-white bg-purple-600 rounded-2xl">
                    + Add Feedback
                </button>

            </div>
        </div>

        <List entries={entries} />
    </div>
  )
}
