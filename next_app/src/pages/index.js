import Head from "next/head";
import Home from "../components/home.jsx";
import Nav from "../components/navbar.jsx";

function App() {
  return (
    <html>
      <Head>
        <title>Guilherme Pimenta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Home></Home>
      </body>
    </html>
  );
}

export default App;
