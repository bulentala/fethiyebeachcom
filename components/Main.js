import React from 'react'
import Link from 'next/link'
import slug from 'slug'

const Main = ({ beaches }) => {
  return (
    <div className='container mx-auto p-6 '>
      <div className=' flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1'>
        {beaches.map((beach) => (
          <div
            key={beach.id}
            className='text-center my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3'
          >
            <div className='flex justify-center items-center'>
              <div className='container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white'>
                <div
                  className='relative z-10'
                  style={{
                    clipPath:
                      'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))',
                  }}
                >
                  <amp-img
                    alt='A view of the sea'
                    src={`/${beach.imgUrl}`}
                    width='900'
                    height='675'
                    layout='responsive'
                  ></amp-img>
                  <div
                    className='text-center absolute w-full'
                    style={{ bottom: '4rem' }}
                  >
                    <p className='text-white tracking-wide uppercase text-lg font-bold'>
                      {beach.title}
                    </p>
                    <p className='text-gray-400 text-sm'>@johndoe</p>
                  </div>
                </div>
                <div className='relative flex justify-between items-center flex-row px-6 z-50 -mt-10'>
                  <p className='flex items-center text-gray-400'>
                    <span className='inline-block w-3 h-3 bg-green-500 rounded-full mr-2' />
                    online
                  </p>
                  <button className='p-4 bg-red-600 rounded-full hover:bg-red-500 focus:bg-red-700 transition ease-in duration-200 focus:outline-none'>
                    <svg
                      viewBox='0 0 20 20'
                      enableBackground='new 0 0 20 20'
                      className='w-6 h-6'
                    >
                      <path
                        fill='#FFFFFF'
                        d='M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                  C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                  C15.952,9,16,9.447,16,10z'
                      />
                    </svg>
                  </button>
                </div>
                <div className='pt-6 pb-8 text-gray-600 text-center'>
                  <p>Fullstack Developer </p>
                  <p className='text-sm'>Coding from Planet Earth</p>
                </div>
                <div className='pb-10 uppercase text-center tracking-wide flex justify-around'>
                  <div className='posts'>
                    <p className='text-gray-400 text-sm'>Posts</p>
                    <p className='text-lg font-semibold text-blue-300'>76</p>
                  </div>
                  <div className='followers'>
                    <p className='text-gray-400 text-sm'>Followers</p>
                    <p className='text-lg font-semibold text-blue-300'>964</p>
                  </div>
                  <div className='following'>
                    <p className='text-gray-400 text-sm'>Following</p>
                    <p className='text-lg font-semibold text-blue-300'>34</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <amp-img
                alt='A view of the sea'
                src={`/${beach.imgUrl}`}
                width='900'
                height='675'
                layout='responsive'
              ></amp-img>
            </div>
            <Link href={`/${slug(beach.title)}-${beach.id}`}>
              <a>{beach.title}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
export const config = { amp: true }
export default Main
