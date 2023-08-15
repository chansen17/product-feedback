import React from 'react'
import { motion } from 'framer-motion'

export default function Comment({ comment, delay }) {
  return (
    <motion.div initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: 'tween', duration: .5, delay: delay * 0.05 }} className='py-12 border-b border-b-black/5'>
        <div className='flex items-start justify-between gap-6'>
            <img className='mt-6 border rounded-full w-14 h-14' src="https://robohash.org/YOUR-TEXT.png"/>
            <div className=''>
                <div className='flex items-center justify-between gap-3 py-6'>
                    <div>
                        <p className='text-lg font-bold'>{comment.user.name}</p>
                        <p className='text-sm font-light text-gray-400'>{comment.user.handle}</p>
                    </div>
                    <div>
                        <button className='text-blue-600'>Reply</button>
                    </div>
                </div>
                <p className='text-sm font-light text-gray-800 md:text-lg'>{comment.comment}</p>
            </div>
        </div>
    </motion.div>
  )
}
