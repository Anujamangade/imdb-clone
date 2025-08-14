import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end' style={{backgroundImage : `url(https://www.yashrajfilms.com/images/default-source/movies/saiyaara/saiyaara_767x430.jpg?sfvrsn=1d5fdecc_13)`}}>
          <div className='text-white text-2xl text-center w-full bg-blue-900/60 p-4'>SAIYAARA</div>
    </div>
  )
}

export default Banner