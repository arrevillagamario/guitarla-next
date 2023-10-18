import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
const Layout = ({ children, title = "", description = "" }) => {
  return (
    <>
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <Header></Header>
      <h1>Desde Layout</h1>

      {children}

      <Footer></Footer>
    </>
  );
};

export default Layout;
