import React from 'react'
import BlogCard from '../components/BlogCard'

export default function Blogs() {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container mx-auto max-w-7x1'>
        <div className='flex flex-wrap w-full p-4'>
          <div className='w-full mb-6 lg:mb-0'>
            <h1 className='text-2xl font-bold title-font mb-2 text-gray-900'>
              Sender File Blog Articles
            </h1>
            <div className='h-1 w-20 bg-indigo-500 rounded'></div>
          </div>
        </div>
        <div className='flex flex-wrap -m-4'>
          <BlogCard
            slug='new-article'
            title='Fingerstache flexitarian street art 8-bit waistcoat.'
            image='https://asset.kompas.com/crops/Pk_pN6vllxXy1RshYsEv74Q1BYA=/56x0:1553x998/750x500/data/photo/2021/06/16/60c8f9d68ff4a.jpg'
          />
        </div>
      </div>
    </section>
  )
}
