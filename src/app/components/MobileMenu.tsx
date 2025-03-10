"use client";

import { AuthItems, MenuItems } from "@/lib/NavbarData";
import Link from "next/link";
import React from "react";
import MobileDashboardNav from "./MobileDashboardNav";
import { useSession } from "next-auth/react";

export default function MobileMenu() {
  const { data: session } = useSession();
  const isAdmin = session?.user.role === "ADMIN";
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-full rounded-lg">
      <div>
        {session ? (
          <MobileDashboardNav session={session} isAdmin={isAdmin} />
        ) : (
          <div className="text-center space-x-3">
            {AuthItems.map((menu, index) => (
              <button
                key={index}
                className="btn btn-outline rounded-lg text-xl text-cyan-400 hover:text-cyan-300"
              >
                <Link href={menu.link}>{menu.title}</Link>
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="space-y-4 text-center">
        {MenuItems.map((menu, index) => (
          <ul key={index} className="text-2xl font-semibold">
            <li>
              <Link href={menu.link}>{menu.title}</Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
