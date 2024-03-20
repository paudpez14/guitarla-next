import React from "react";
import Layout from "@/components/layout";
import ListGuitar from "@/components/list_guitars";
function Shop({ guitars }) {
  return (
    <Layout
      title={"Tienda Virtual"}
      description={"Tienda Virtual, venta de guitarras e instrumentos"}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <ListGuitar  guitars={guitars}></ListGuitar>
      </main>
    </Layout>
  );
}

export default Shop;

export async function getServerSideProps() {
  try {
    const response = await fetch(
      `http://192.168.1.3:1337/api/guitars?populate=*`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const { data: guitars } = await response.json();
    return {
      props: { guitars },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { guitars: [] }, // O manejar de otra manera
    };
  }
}
