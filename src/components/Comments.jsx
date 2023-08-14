import React from 'react'

export default function Comments({ comments }) {
  return (
    <div className="w-full py-12 border-t">
        <div className='pb-6'>
            <h3 className='text-lg font-bold md:text-xl'>{comments.length} comments</h3>
        </div>
       {comments?.map((comment,i) => (
            <div className='py-12 border-b border-b-black/5'>
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
            </div>
        ))}
    </div>
  )
}
