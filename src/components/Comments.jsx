import React from 'react'
import Comment from './Comment'

export default function Comments({ comments }) {
  return (
    <div className="w-full py-12 border-t">
        <div className='pb-6'>
            <h3 className='text-lg font-bold md:text-xl'>{comments.length} comments</h3>
        </div>
       {comments?.map((comment,i) => (
        <Comment key={i} comment={comment} delay={i} />
        ))}
    </div>
  )
}
