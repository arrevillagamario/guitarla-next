import Layout from "../components/layout";
import ListadoGuitarras from "../components/listado-guitarras";
import { useEffect } from "react";

const Tienda = () => {
  return (
    <div>
      <Layout
        title="Tienda Virtual"
        description="Tienda virtual, Venta de guitarras, Instrumentos, GuitarLA"
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra colección</h1>
          <ListadoGuitarras />
        </main>
      </Layout>
    </div>
  );
};

export default Tienda;
