import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

export default function Nav() {
  return (
    <>
      <div>
        <nav className="Navbar">
          <Link className="navname" href="/">
            Home
          </Link>
          <Link className="navname" href="/Folio">
            Portofolio
          </Link>
          <Link className="navname" href="/About">
            About Me
          </Link>
        </nav>
      </div>
    </>
  );
}
