"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function AboutPage() {
  const router = useRouter();
  const isLoggedIn = true;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/team");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <p className="text-3xl font-bold">About page</p>
      <button
        onClick={handleNavigation}
        className="bg-indigo-500 text-white px-4 py-2 rounded-xl cursor-pointer"
      >
        Team Members
      </button>
    </div>
  );
}
