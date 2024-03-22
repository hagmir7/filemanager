import React from 'react'
import TableRow from './TableRow'

export default function FilesTable(props) {
  return (
    <div className='relative overflow-x-auto my-4'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3 rounded-s-lg'>
              File name
            </th>
            <th scope='col' className='px-6 py-3'>
              Size
            </th>
            <th scope='col' className='px-6 py-3 rounded-e-lg'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
            <TableRow id={props.data.name} name={props.data.name} size={props.data.size} />
        </tbody>
      </table>
    </div>
  )
}
