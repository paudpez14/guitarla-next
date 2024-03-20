import Layout from "@/components/layout";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../styles/about.module.css";
function AboutUs() {
  return (
    <Layout title={"Nosotros"} description={"Sobre Nosotros - GuitarLA"}>
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div>
          <div className={styles.contenido}>
            <Image
              src="/img/nosotros.jpg"
              width={1000}
              height={800}
              alt="Imagen sobre nosotros"
            ></Image>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              condimentum elementum justo ac fermentum. Integer elementum
              viverra maximus. Mauris mattis ut augue id lobortis. Proin sed
              vulputate nisl, a mattis risus. Nam venenatis, elit quis malesuada
              dictum, magna ante elementum sem, at vulputate enim ligula id ex.
              Praesent justo diam, cursus vel metus a, imperdiet convallis
              turpis. Proin placerat turpis id nulla consectetur, nec aliquet
              magna sollicitudin. Aliquam eu metus pretium, scelerisque enim et,
              laoreet nibh. Ut sed bibendum purus. Ut lobortis vulputate
              posuere. Sed varius sollicitudin mi quis condimentum. Nunc purus
              augue, sagittis ut consectetur eu, congue a velit.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default AboutUs;
