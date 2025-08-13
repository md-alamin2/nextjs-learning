import React from "react";
import SearchInput from "./components/SearchInput";

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
  console.log(food)
  return (
    <div>
      <h1 className="text-3xl font-bold">Meals</h1>
      <SearchInput />
      <div>
        {food?.map((product) => (
          <div key={product.id} className="max-w-2xl mt-5 border border-gray-50 rounded-2xl p-4 space-y-2">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <img
              src={product.img}
              alt={product.title}
              className="w-32 h-32 object-cover"
            />
            <p className="text-lg font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
