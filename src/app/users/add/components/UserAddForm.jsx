"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

export default function UserAddForm() {
    const router = useRouter();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const newUser = {name: userName, email: userEmail};
        const res = await fetch('http://localhost:3000/api/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        const result = await res.json();
        result.insertedId&&router.push("/users")
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder="Name" name='userName' className='border border-blue-400 rounded-lg px-1 py-2' />
        <input type="email" placeholder="Email" name='userEmail' className='border border-blue-400 rounded-lg px-1 py-2'/>
        <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded'>Add User</button>
      </form>
    </div>
  )
}
