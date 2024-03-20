import React from "react";
import styles from "../../styles/guitar.module.css";
import Image from "next/image";
import Layout from "@/components/layout";
import Loadable from "next/dist/shared/lib/loadable.shared-runtime";
function Guitar({ guitar }) {
  const { name, description, image, price } = guitar[0].attributes;
  return (
    <Layout title={`Guitarra - ${name}`}>
      <div className={styles.guitarra} key={guitar[0].id}>
        <Image
          src={image.data.attributes.url}
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
        </div>
      </div>
    </Layout>
  );
}

export default Guitar;
export async function getStaticPaths() {
  const response = await fetch("http://192.168.1.3:1337/api/guitars");
  const { data } = await response.json();
  const paths = data.map((guitar) => ({
    params: { url: guitar.attributes.url },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps({ params: { url } }) {
  try {
    const response = await fetch(
      `http://192.168.1.3:1337/api/guitars?filters[url]=${url}&populate=*`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const { data: guitar } = await response.json();
    return {
      props: { guitar },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { guitar: {} }, // O manejar de otra manera
    };
  }
}

// export async function getServerSideProps({query:{url}}) {

//   try {
//     const response = await fetch(
//         `http://192.168.1.3:1337/api/guitars?filters[url]=${url}&populate=imagen`
//       );
//     if (!response.ok) {
//       throw new Error(`Error: ${response.status}`);
//     }
//     const { data: guitar } = await response.json();
//     return {
//       props: { guitar },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       props: { guitar: {} }, // O manejar de otra manera
//     };
//   }
// }
