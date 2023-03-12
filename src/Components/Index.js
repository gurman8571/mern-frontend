import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {GetData} from '../utils/Config'
import {Link} from 'react-router-dom'

export default function Index() {
    const [data, setdata] = useState([]);
const [loading, setloading] = useState(false)
    
const fetchdata=async()=>{
setloading(true)
const res=await axios.get(GetData);
setdata(res);
//console.log(res.data);
setdata(res.data)
setloading(false)
}

useEffect(() => {
fetchdata();      
    }, [])
    
  return (
    <div className='mt-10 my-6 mx-4 '>
    <div className=''>
    <Link to='/' className='text-white px-2 py-1 bg-blue-500 float-right mt-4'>Add new</Link>
    <h1 className='font-bold text-2xl mx-6 py-4 '> Index</h1>
    
    </div>
  <div className="relative overflow-x-auto border border-gray-300 rounded-md shadow-sm px-4 py-6">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
              Date of birth
              </th>
            </tr>
          </thead>
          <tbody>
          {data.map((item)=>{
            return(<>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 " key={item._id}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item?.name}
              </th>
              <td className="px-6 py-4">
              {item?.email}
              </td>
              <td className="px-6 py-4">
              {item?.phone}
              </td>
              <td className="px-6 py-4">
              {item?.dob}
              </td>
            </tr>
            </>)
          })}
              </tbody>
        </table>
      </div>
    </div>
  )
}
