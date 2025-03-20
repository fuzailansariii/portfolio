"use client";

import { MenuItems } from "@/lib/NavbarData";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import DashboardNav from "./DashboardNav";

export default function Navbar() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  const openModal = () => modalRef.current?.showModal();
  const closeModal = () => modalRef.current?.open && modalRef.current.close();

  useEffect(() => {
    closeModal();
  }, [pathname]);

  return (
    <nav className="navbar flex justify-between items-center z-50 px-5 md:px-10 bg-base-200">
      {/* Left Section: Logo & Title */}
      <div className="navbar-start flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
          <span className="text-2xl font-bold">Fuzail</span>
          <span className="font-thin text-xl">Developer</span>
        </Link>
      </div>

      {/* Middle Section: Menu Items (Desktop) */}
      <div className="hidden lg:flex items-center gap-4">
        {MenuItems.map((menu, index) => (
          <Link key={index} href={menu.link} className="px-2">
            {menu.title}
          </Link>
        ))}
        <DashboardNav />
      </div>

      {/* Right Section: Mobile Menu Button */}
      <div className="navbar-end lg:hidden">
        <button
          className="btn btn-ghost"
          onClick={openModal}
          aria-label="Open Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Modal */}
      <dialog
        ref={modalRef}
        className="modal md:hidden"
        onClick={(e) => {
          if (e.target === modalRef.current) closeModal();
        }}
      >
        <div className="modal-box h-[50%] rounded-2xl bg-base-200">
          <MobileMenu />
        </div>
      </dialog>
    </nav>
  );
}
