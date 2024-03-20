import React from "react";
import Link from "next/link";
import styles from "../styles/footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.nav}>
          <Link href="/">Inicio</Link>
          <Link href="/aboutUs">Nosotros</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/shop">Tienda</Link>
        </nav>
        <p className={styles.copyright}>
          Todos los derechos reservador {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
