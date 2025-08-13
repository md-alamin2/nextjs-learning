"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const searchQuery = { search };
    const urlQueryParam = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParam}`;
    router.push(url);
  }, [search]);
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a meal..."
        className="border border-gray-300 rounded px-4 py-2 w-full text-white mt-4"
      />
      {/* <button className='bg-blue-500 text-white px-4 py-2 rounded'>Search</button> */}
    </div>
  );
}
