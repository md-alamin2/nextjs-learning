"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
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
