import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/guitar.module.css";
import stylesGrd from "../styles/grid.module.css";
function ListGuitar({ guitars }) {
  return (
    <div className={stylesGrd.grid}>
      {guitars?.map((guitar) => {
        const { description, image, name, price, url } = guitar.attributes;
        return (
          <div className={styles.guitarra} key={guitar.id}>
            <Image
              src={image.data.attributes.formats.medium.url}
              width={600}
              height={400}
              alt={`Imagen guitarra ${name}`}
            />

            <div className={styles.contenido}>
              <h3>{name}</h3>
              <p className={styles.descripcion}>
                {description[0].children[0].text}
              </p>
              <p className={styles.precio}>${price}</p>
              <Link className={styles.enlace} href={`/guitars/${url}`}>
                Ver Producto
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListGuitar;
