import React from 'react'

export const postData = async(id)=>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json();
  return data
}
export default async function post({params}) {
    const {id} = await params;
    const post = await postData(id)
  return (
    <div>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.body}</p>
    </div>
  )
}
