import { redirect } from 'next/navigation';
import React from 'react'

export default async function UsersPage() {
    const res = await fetch('http://localhost:3000/api/items', {
      cache: "force-cache"
    })
    const {data}= await res.json();
    // if(data.length >3){
    //   redirect("/")
    // }
  return (
    <div>
      <h2 className='font-bold text-xl'>Users List</h2>
      <ul>
        {data.map(user => (
          <li key={user._id} className='border-b border-gray-300 py-2'>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}
