import Link from "next/link";
import Layout from "@/components/layout";
import AboutUs from "./aboutUs";
export default function Home() {
  return (
    <>
      <Layout title={"Inicio"} description={"Venta de Guitarra"}>
        <h1>Hola Mundo</h1>
      </Layout>
    </>
  );
}
