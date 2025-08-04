"use client";

import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-neutral-500 py-5 text-center">
      <p>
        Copyright © {new Date().getFullYear()} - All right reserved by ACME
        Industries Ltd
      </p>
    </div>
  );
}
