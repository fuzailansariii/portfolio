"use client";
import { MenuItems } from "@/lib/NavbarData";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import DashboardNav from "./DashboardNav";

export default function Navbar() {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    if (modalRef.current?.open) {
      modalRef.current?.close();
    }
  };

  const pathname = usePathname();

  useEffect(() => {
    closeModal();
  }, [pathname]);

  return (
    <div className="navbar flex justify-between items-center z-50 px-5 md:px-10 bg-base-200">
      {/* Left side menu items */}
      <div className="navbar-start flex items-center w-auto gap-4">
        <Link href={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
        </Link>
        <Link href={"/"} className="text-2xl font-bold flex items-center">
          Fuzail
        </Link>
        <span className="font-thin text-xl"> Developer</span>
      </div>

      {/* Right side menu items */}
      <div className="hidden lg:flex w-auto gap-2">
        {MenuItems.map((menu, index) => (
          <ul key={index} className="menu menu-horizontal px-1">
            <li>
              <Link href={menu.link}>{menu.title}</Link>
            </li>
          </ul>
        ))}
        <DashboardNav />
      </div>

      <div className="navbar-end lg:hidden items-center">
        <button className="btn btn-ghost" onClick={openModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
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

      {/* Mobile menu popup */}
      <div className="md:hidden">
        <dialog
          ref={modalRef}
          className="modal"
          onClick={(e) => {
            if (e.target === modalRef.current) closeModal();
          }}
        >
          <div className="modal-box h-[50%] rounded-2xl bg-base-200">
            <MobileMenu />
          </div>
        </dialog>
      </div>
    </div>
  );
}
