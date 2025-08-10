"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathName = usePathname();
  if(pathName.includes("login") || pathName.includes("register")) return <></>
  return (
    <div className="flex justify-center py-6">
      <ul className="flex items-center gap-8">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/services'>Services</Link></li>
      </ul>
    </div>
  );
}
