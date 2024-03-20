import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/header.module.css";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barr}`}>
        <Link href="/">
          <Image src="/img/logo.svg" width={300} height={40} alt="logotipo" />
        </Link>
        <nav className={styles.nav}>
          <Link
            href="/"
            className={router.pathname === "/" ? styles.active : ""}
          >
            Inicio
          </Link>
          <Link
            href="/aboutUs"
            className={router.pathname === "/aboutUs" ? styles.active : ""}
          >
            Nosotros
          </Link>
          <Link
            href="/blog"
            className={router.pathname === "/blog" ? styles.active : ""}
          >
            Blog
          </Link>
          <Link
            href="/shop"
            className={router.pathname === "/shop" ? styles.active : ""}
          >
            Tienda
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
