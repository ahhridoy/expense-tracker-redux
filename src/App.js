import React from "react";
import Balance from "./components/Balance";
import Form from "./components/Form";
import Layout from "./components/Layout";
import Lists from "./components/Lists";

function App() {
  return (
    <Layout>
      <Balance />
      <Form />
      <Lists />
    </Layout>
  );
}

export default App;
