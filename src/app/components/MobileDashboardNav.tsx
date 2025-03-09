import { Session } from "next-auth";
import Image from "next/image";
import AdminAvatar from "@/assets/AdminAvatar.jpg";
import UserAvatar from "@/assets/UserAvatar.jpg";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface SessionProps {
  session: Session | null;
  isAdmin: boolean;
}

export default function MobileDashboardNav({ isAdmin, session }: SessionProps) {
  const handleSignOut = () => {
    signOut();
  };

  const userFirstName = session?.user.fullName?.split(" ")[0] || "User";

  return (
    <>
      {session && (
        <div className="px-10 py-5 rounded-xl shadow-2xl text-white md:hidden block">
          <div className="flex items-center gap-10">
            <div className="avatar">
              <div className="w-16 rounded-full overflow-hidden">
                <Image
                  src={isAdmin ? AdminAvatar : UserAvatar}
                  alt="Profile"
                  width={64}
                  height={64}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-lg">
                Hello, <span className="text-cyan-400">{userFirstName}</span>
              </h1>
              {isAdmin && (
                <Link
                  href="/add-project"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  Add Project
                </Link>
              )}
              <button
                onClick={handleSignOut}
                className="text-left text-red-400 hover:text-red-300"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
