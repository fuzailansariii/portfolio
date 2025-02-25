"use client";

import { MenuItems } from "@/lib/NavbarData";
import Link from "next/link";
import React from "react";

export default function MobileMenu() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      {MenuItems.map((menu, index) => (
        <ul key={index} className="text-2xl font-semibold">
          <li>
            <Link href={menu.link}>{menu.title}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
}
