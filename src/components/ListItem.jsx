import React from 'react'
import { motion } from 'framer-motion';
import { BiMessageRounded } from 'react-icons/bi';
import { FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ListItem({ entry, delay }) {
  return (
    <Link to={`/view/${entry.id}`} state={{ id: entry.id }} className='block group'>
    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: 'tween', duration: .5, delay: delay * .05 }} className='h-auto px-5 py-8 duration-200 bg-white border border-transparent rounded-2xl group-hover:border-black/10'>
        <div className="flex items-center justify-between gap-6">
            <div className='flex items-center gap-6 space-y-3 md:gap-12'>
                <div className='flex flex-col items-center px-3 py-2 bg-violet-100 rounded-2xl'>
                    <FaChevronUp className='text-xs text-blue-600'/>
                    <span className='text-sm font-bold text-gray-700 md:text-lg'>{entry.voteCount}</span>
                </div>
                <div className='space-y-3'>
                    <div className='space-y-1'>
                        <h2 className='text-lg font-bold text-gray-800 capitalize'>{entry.name}</h2>
                        <p className='font-light capitalize text-md'>{entry.text}</p>
                    </div>
                    <button className='px-3 py-1 text-blue-500 rounded-xl bg-violet-50'>{entry.category}</button>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <div className='flex items-center gap-2'>
                    <BiMessageRounded />
                    <span>{entry.commentCount}</span>
                </div>
            </div>
        </div>
    </motion.div>
    </Link>
  )
}
