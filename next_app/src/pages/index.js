import Head from "next/head";
import { Body } from "../assets/styles/globalStyles.js";
import Home from "../components/home.jsx";
import Nav from "../components/navbar.jsx";

function App() {
  return (
    <html>
      <Head>
        <title>Guilherme Pimenta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <Nav></Nav>
        <Home></Home>
      </Body>
    </html>
  );
}

export default App;
