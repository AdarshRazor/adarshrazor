import React from 'react'
import notsotech from '@/static/JSON/nontech.json'

function NotsoTech() {
  return (
    <div className='flex justify-start mx-18 gap-4'>
      <div className='md:w-1/3 mx-4'>
        <h1 className='text-4xl'>Music</h1>
        {notsotech['music'].map((music, index) => (
            <iframe
                key={index}
                src={music}
                className='my-4'
                width="90%"
                height="80"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>
        ))}
      </div>
      <div className='md:w-1/3'>
      <h1 className='text-4xl'>Books</h1>
      
      </div>
      <div className='md:w-1/3'>
      <h1 className='text-4xl'>Misc</h1>
      
      </div>
    </div>
  )
}

export default NotsoTech