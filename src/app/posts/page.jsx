import Link from "next/link";

export const postData = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();
    return data
}

export default async function posts() {
    const posts = await postData();
  return (
    <div className="grid grid-cols-4 gap-6">
      {posts.slice(0,10).map(post=><div key={post.id} className="border border-gray-300 rounded-2xl p-4 space-y-4">
        <h3 className="text-2xl font-bold">{post.title}</h3>
        <Link href={`/posts/${post.id}`} className="bg-blue-500 text-white rounded-md px-4 py-2">See Details</Link>
      </div>)}
    </div>
  )
}
