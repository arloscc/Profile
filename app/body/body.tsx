import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Facebook , Instagram ,  GitHub } from 'react-feather';



export default function body() {
  return (
    <>

    <div className="ProfileBox">
      <div className="det">
        <Image
          className="mitaka  det"
          src="/mitaka.jpg"
          width={4076}
          height={2497}
          alt="Picture of the author"
        />
  
        <div className="text1">
          <h1 className="deta">Hello im Carlos Susanto</h1>
          <div className="sosmed">
            <p className="detb">Developer / Designer</p>
          </div>
          <Link className="sos" href="https://www.instagram.com/ixta.edit/">
            <Instagram />
           
          </Link>
          <Link
            className="sos"
            href="https://www.facebook.com/carlos.susanto.50/"
          >
            <Facebook />
          </Link>
          <Link
            className="sos"
            href="https://github.com/arloscc"
          >
            <GitHub />
          </Link>

          
        </div>
      </div>
      </div>
    </>
  );
}
