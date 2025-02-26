"use client";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const socialMedia = [
    { link: "https://x.com/fuzail_ansarii", icon: FaXTwitter },
    {
      link: "https://www.linkedin.com/in/mohdfuzailansari/",
      icon: FaLinkedinIn,
    },
    { link: "https://github.com/fuzailansariii", icon: FaGithub },
  ];

  return (
    <div>
      <footer className="footer flex flex-col bg-base-300 text-base-content p-10">
        <div className="flex justify-between w-full">
          <nav>
            <h6 className="footer-title">Email</h6>
            <Link
              href={`mailto:${"fuzailansarisecret@gmail.com"}`}
              className="link link-hover"
            >
              fuzailansarisecret@gmail.com
            </Link>
          </nav>

          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="flex space-x-4">
              {socialMedia.map((icon, index) => (
                <Link href={icon.link} key={index} target="_blank">
                  <icon.icon className="size-6" />
                </Link>
              ))}
            </div>
          </nav>
        </div>
        <nav className="flex text-center justify-center w-full">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved Fuzail
            </p>
          </aside>
        </nav>
      </footer>
    </div>
  );
}
