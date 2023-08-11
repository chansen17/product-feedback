import React from 'react'
import ListItem from './ListItem'

export default function List({ entries }) {
  return (
    <div className='py-6 space-y-4'>
        {entries.map((entry, i) => (
            <ListItem entry={entry} key={i} delay={i} />
        ))}
    </div>
  )
}
