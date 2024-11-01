import React from 'react'
import {Heart , Bookmark , Share2 , MessageCircle} from 'react-feather'
function Card({ para, imgSrc, name }) {
  return (
    <>
    <div  className='relative max-w-xs overflow-hidden rounded-2xl shadow-lg group h-4/6'>
        <img src={imgSrc} className='transition-transform group-hover:scale-110 duration-500' />
        <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent'>
        <div className='p-4 w-full text-white'>
          <h3 className='text-xl font-bold mb-2'>{name}</h3>
            <p className='hidden md:block'>{para}</p>
        <div className='mt-5 flex justify-between '>
      <div className='space-x-4'>
        <button>
          <Heart />
        </button>
        <button>
          <MessageCircle />
        </button>
        <button>
          <Share2 />
        </button>
      </div>
      <div>
        <Bookmark />
      </div>
      </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Card