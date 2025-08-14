import React from 'react'

export const postData = async(id)=>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json();
  return data
}

export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params
 
  // fetch data
  const post = await postData(id)
 
  return {
    title: post.title,
    description: post.body.slice(0, 100)
  }
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
