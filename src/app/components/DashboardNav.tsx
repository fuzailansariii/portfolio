"use client";

import { AuthItems } from "@/lib/NavbarData";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function DashboardNav() {
  const { data: session } = useSession();

  const signoutHandler = () => {
    signOut();
  };

  return (
    <div>
      {session ? (
        <div className="flex justify-center items-center gap-5 ml-2">
          <h1 className="">
            Welcome, <span>{session.user.fullName}</span>
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 cursor-pointer"
            onClick={signoutHandler}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
            />
          </svg>
        </div>
      ) : (
        <div className="w-auto">
          {AuthItems.map((menu, index) => (
            <ul key={index} className="menu menu-horizontal px-1">
              <li>
                <Link href={menu.link}>{menu.title}</Link>
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}
