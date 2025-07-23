import React from 'react'

const Titles = ({tex1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-gray-500'> {tex1} <span className='text-gray-800 font-medium'>{text2}</span></p>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700 mt-1'></p>
    </div>
  )
}

export default Titles