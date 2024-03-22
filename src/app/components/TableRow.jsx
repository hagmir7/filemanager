import React from 'react'

export default function TableRow(props) {
  return (
    <tr className='bg-white dark:bg-gray-800' key={props.id}>
      <th
        scope='row'
        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
      >
        {props.name}
      </th>
      <td className='px-6 py-4'>{props.size}</td>
      <td className='px-6 py-4'>$2999</td>
    </tr>
  )
}
