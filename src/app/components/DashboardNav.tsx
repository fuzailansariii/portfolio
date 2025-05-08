"use client";

import { AuthItems } from "@/lib/NavbarData";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import AdminAvatar from "@/assets/AdminAvatar.jpg";
import UserAvatar from "@/assets/UserAvatar.jpg";
import Image from "next/image";

export default function DashboardNav() {
  const { data: session } = useSession();
  const isAdmin = session?.user.role === "ADMIN";

  const signoutHandler = () => signOut();

  const avatarSrc = isAdmin ? AdminAvatar : UserAvatar;
  const userFirstName = session?.user.fullName
    ? session.user.fullName.split(" ")[0]
    : "User";

  return (
    <div className="hidden md:block font-quicksand">
      {session ? (
        <div className="flex justify-center items-center gap-5 ml-2">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="avatar dropdown-toggle">
              <div className="w-12 rounded-full">
                <Image src={avatarSrc} alt="Profile" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-200 rounded-box z-50 mt-3 w-52 p-2 shadow-md"
            >
              <li>
                <h1 className="font-bold">
                  Hello,{" "}
                  <span className="text-cyan-400 text-xl">{userFirstName}</span>
                </h1>
              </li>
              {isAdmin && (
                <li>
                  <Link href="/add-project">Add Project</Link>
                </li>
              )}
              <li>
                <button
                  onClick={signoutHandler}
                  className="text-left text-red-400 hover:text-red-300"
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="w-auto flex gap-4">
          {AuthItems.map((menu, index) => (
            <Link key={index} href={menu.link}>
              {menu.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
