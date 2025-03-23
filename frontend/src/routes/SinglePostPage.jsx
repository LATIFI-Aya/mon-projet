import React from 'react'
import Image from '../Components/Image';
import { Link } from "react-router-dom";


const SinglePostPage= ()=>{
  return (
    <div className='flex flex-col gap-8'>
      {/* details */}
      <div className='flex gap-8'>
        <div className='lg:w-3/5 flex flex-col gap-8'>
          <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </h1>
          <div className='flex items-center gao-2 text-gray-400 text-sm'>

            <span >Written by </span>
            <Link className='text-blue-800'> John Doe</Link>
            <span > on</span>
            <Link className='text-blue-800'> Web Design</Link>
            <span> 2 days ago</span>
          </div>
          <p className='text-gray-500 font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Est, a, similique beatae voluptates consectetur impedit 
            accusantium ratione et dignissimos at tempora, accusamus 
            molestiae error quia laboriosam architecto facilis tempore enim.
          </p>

        </div>
        <div className='hidden lg:block w-2/5'>
          <Image src="/postImg.jpeg" w="600" className="rounded-2xl"/>
        </div>
      </div>
      {/* content */}
      <div className='flex flex-col md:flex-row gap-8'>
        {/* text */}
        <div className='lg:text-lg flex flex-col gap-6 text-justify'>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Incidunt nobis architecto deserunt itaque error neque,
              quaerat, dolore ipsa velit numquam, 
              lectus facere! Nulla corporis laboriosam, ad magnam minima at architecto.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Incidunt nobis architecto deserunt itaque error neque,
              quaerat, dolore ipsa velit numquam, 
              lectus facere! 
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing 
            elit. Minus dolorum, molestias repellendus deleniti enim necessitatibus nisi commodi debitis nulla veniam aliquam perspiciatis suscipit? 
             officiis fugiat non molestiae nesciunt. Voluptatem?
          </p>
        </div>
        {/* menu */}
        <div className='px-4 h-max sticky top-8'>
          <h1>Author</h1>
          <div className=''>
          <Image 
            src="/userImg.jpeg" 
            className="w-12 h-12 rounded-full object-cover"
            w="48"
            h="48"
            />
          <Link>JOJO Deo</Link>
          <p>Lorem ipsum, dolor sit amet consectetur.</p>
          <div className='flex gap-2'>
            <Link>
              <Image src="/facebook.svg"/>
            </Link>
            <Link>
              <Image src="/instagram.svg"/>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage