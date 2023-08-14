import React from 'react'
import ListItem from './ListItem'
import { state } from '../store'
import { useSnapshot } from 'valtio'

export default function List() {
    
    const snap = useSnapshot(state);

    const filteredEntries = snap.filter !== null ? snap.entries.filter(entry => entry.category === snap.filter) : snap.entries;

  return (
    <div className='py-6 space-y-4'>
        {filteredEntries.map((entry, i) => (
            <ListItem entry={entry} key={i} delay={i} />
        ))}
    </div>
  )
}
