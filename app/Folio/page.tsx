import React from "react";
import Link from "next/link";
import styles from "./Folio.module.css";
import Nav from "../nav/nav";
import Image from "next/image";

export default function Folio() {
  return (
    <>
      <Nav />
      <div className={styles.apa}>
        <div className={styles.texth}>
          <h1 className={styles.head}>
            Galery Portfolio <span className={styles.ixta}>Ixta Edit</span>
          </h1>
          <h1 className={styles.headd}>
            Project Collections / Editing Project Collections
          </h1>
        </div>
      </div>
      <div className={styles.barcollection}>
        <div className={styles.collection}>
          <Image
            className={styles.dispa}
            src="/disp.png"
            width={400}
            height={200}
            alt="Picture of the author"
          />
          <div className={styles.keterangan}>
            <h1 className={styles.title1}>
              <Link href="https://github.com/arloscc/LaporAjav2">
                LaporAja!
              </Link>
            </h1>
            <p>Reporting App at Technology University of Yogyakarta </p>
          </div>
        </div>

        <div className={styles.collection2}>
          <Image
            className={styles.dispa}
            src="/dispb.png"
            width={400}
            height={200}
            alt="Picture of the author"
          />
          <div className={styles.keterangan}>
            <h1 className={styles.title1}>
              <Link href="https://www.youtube.com/channel/UCM2wl2aETJII-EVPEoGSzLQ">
                Youtube
              </Link>
            </h1>
            <p>Galery Editing on You Tube</p>
          </div>
        </div>
        <div className={styles.collection2}>
          <Image
            className={styles.dispa}
            src="/dispc.png"
            width={400}
            height={200}
            alt="Picture of the author"
          />
          <div className={styles.keterangan}>
            <h1 className={styles.title1}>
              <Link href="https://www.instagram.com/ixta.edit/">Instagram</Link>
            </h1>
            <p>Galery Editing on Instagram</p>
          </div>
        </div>
      </div>
    </>
  );
}
