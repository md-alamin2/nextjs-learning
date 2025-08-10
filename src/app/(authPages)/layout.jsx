import Link from "next/link";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <div className="flex justify-center">
        <ul className="flex items-center gap-6">
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">{children}</div>
    </div>
  );
}
