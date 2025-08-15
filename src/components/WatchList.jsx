import React from 'react'

const WatchList = () => {
  return (
    <>

    <div className='flex justify-center flex-wrap m-4'>
      <div className='flex justify-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold items-center mx-4'>Action</div>
      <div className='flex justify-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold items-center'>Action</div>
    </div>


    <div className='flex justify-center my-4'>
      <input type="text" placeholder='search for movies' className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4'/>
    </div>

    <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
      <table className='w-full text-gray-800 text-center'>
        <thead className='border-b-2'>
          <tr>
            <th>Name</th>
            <th>Ratings</th>
            <th>Popularity</th>
            <th>Genre</th>
          </tr>
        </thead>

        <tbody>

          <tr className='border-b-2'>
            <td className='flex items-center px-6 py-4'>
              <img className='h-[6rem] w-[10rem]' src={`https://i.pinimg.com/originals/64/15/cb/6415cb69f4651186cd0d6e55037da48f.jpg`}/>
              <div className='mx-10'>The Matrix</div>
            </td>

            <td>8.5</td>
            <td>9</td>
            <td>Action</td>
            <td className='text-red-800'>Delete</td>
          </tr>

        </tbody>
      </table>
    </div>
    </>
  )
}

export default WatchList
