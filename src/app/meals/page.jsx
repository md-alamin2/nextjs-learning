import React from "react";
import SearchInput from "./components/SearchInput";
import Image from "next/image";

export default async function MealsPage({ searchParams }) {
  const { search } = await searchParams;
  console.log(search);

  const fetchMeals = async () => {
    try {
      const res = await fetch(`https://ph-assignment-11-server-omega.vercel.app/food/search?searchValue=${search}`);
      const data = await res.json();
      return data
    } catch (err) {
      console.log(err);
    }
  };
  const food = await fetchMeals();
  return (
    <div>
      <h1 className="text-3xl font-bold">Meals</h1>
      <SearchInput />
      <div className="grid grid-cols-3 gap-4">
        {food?.map((product) => (
          <div key={product._id} className="max-w-2xl mt-5 border border-gray-50 rounded-2xl p-4 space-y-2">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <Image width={200} height={128}
              src={product.img}
              alt={product.title}
              className="rounded-lg"
            />
            <p className="text-lg font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
