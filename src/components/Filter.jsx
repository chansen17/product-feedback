import React from 'react'
import { state } from '../store';

export default function Filter() {

    const handleFilter = (id) => {
        state.filter = id;
        console.log(state.filter)
    }

  return (
    <div className='h-auto px-5 py-8 bg-white rounded-xl'>
        <div className="flex flex-wrap gap-2">
            {state.categories.map((c) => (
                <button onClick={() => handleFilter(c.id)} key={c.id} className='px-3 py-1 font-medium text-blue-600 capitalize shadow-xl shadow-violet-100 bg-violet-100 rounded-xl'>{c.name.toLowerCase()}</button>
            ))}

        </div>
    </div>
  )
}
