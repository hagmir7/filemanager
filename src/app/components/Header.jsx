import React from 'react'
import Upload from './Upload'

export default function Header() {
  return (
    <section>
      <div className='flex flex-row gap-5'>
        <div className='w-full'>
          <h1 className='text-2xl font-bold'>
            Sender File - Your Secure File Storage and Sharing Solution
          </h1>
          <p className='mt-3 text-lg'>
            Are you tired of juggling multiple platforms for file storage and
            sharing? <br /> Welcome to Sender File, your all-in-one solution for
            seamless and secure file management.
          </p>
        </div>
        <div className='w-full'>
          <Upload />
        </div>
      </div>


    </section>
  )
}
