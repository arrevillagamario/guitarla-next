import Layout from "../components/layout";
import Image from "next/image";
import styles from "../styles/nosotros.module.css";

const Nosotros = () => {
  return (
    <div>
      <Layout
        title="Nosotros"
        description="Sobre nosotros, GuitarLA, Tienda de música"
      >
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>
          <div className={styles.contenido}>
            <Image
              src="/img/nosotros.jpg"
              alt="Imagen sobre nosotros"
              width={1000}
              height={800}
            />
            <div>
              <p>
                Duis egestas, lorem vel interdum posuere, neque enim imperdiet
                urna, vel suscipit sem risus quis risus. Phasellus quam orci,
                pretium a gravida id, vehicula pulvinar neque. Proin eleifend
                efficitur massa, non cursus ante iaculis in. Fusce viverra felis
                nec dui interdum consequat. Donec nec neque sit amet velit
                mollis semper scelerisque malesuada nisl.
              </p>
              <p>
                Proin pulvinar ex risus, vitae pharetra neque dapibus commodo.
                Vivamus nisl dolor, mollis vitae interdum id, lobortis eu nisl.
                Vivamus congue enim non luctus gravida. Suspendisse blandit
                lectus eget commodo mattis. Praesent facilisis mauris vitae est
                sollicitudin bibendum. Nullam bibendum lectus dui, non ultricies
                elit varius eget.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Nosotros;
