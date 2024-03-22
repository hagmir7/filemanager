import React from 'react'

export default function BlogCard(props) {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
        <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src={props.image} alt="Image Size 720x400" />
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SENDER FILE</h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{props.title}</h2>
        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
    </div>
  )
}
