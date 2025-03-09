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

  const signoutHandler = () => {
    signOut();
  };

  return (
    <div className="hidden md:block">
      {session ? (
        <div className="flex justify-center items-center gap-5 ml-2">
          {isAdmin ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="avatar dropdown-toggle"
              >
                <div className="w-12 rounded-full">
                  <Image src={AdminAvatar} alt="Profile" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-200 rounded-box z-50 mt-3 w-52 p-2 shadow-md"
              >
                <li>
                  <h1 className="font-bold">
                    Hello,{" "}
                    <span className="text-cyan-400 text-xl">
                      {session.user.fullName?.split(" ")[0]}
                    </span>
                  </h1>
                </li>
                <li>
                  <Link href={"/add-project"}>Add Project</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <a
                      onClick={signoutHandler}
                      className="text-left text-red-400 hover:text-red-300"
                    >
                      Sign Out
                    </a>{" "}
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="avatar dropdown-toggle"
                >
                  <div className="w-12 rounded-full">
                    <Image src={UserAvatar} alt="Profile" property="false" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content bg-base-200 rounded-box z-50 mt-3 w-52 p-2 shadow-md"
                >
                  <li>
                    <h1 className="font-bold">
                      Hello,{" "}
                      <span className="text-cyan-400 text-xl">
                        {session.user.fullName?.split(" ")[0]}
                      </span>
                    </h1>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <a
                        onClick={signoutHandler}
                        className="text-left text-red-400 hover:text-red-300"
                      >
                        Sign Out
                      </a>{" "}
                    </div>
                  </li>
                </ul>
              </div>
            </>
          )}
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
