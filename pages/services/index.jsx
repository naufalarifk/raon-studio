import React from "react";
import Wrapper from "../../components/wrapper";
import Head from "next/head";

function index() {
  return (
    <>
      <Head>
        <title>Raon Studio</title>
        <link rel="icon" href="/logos/raon-logo.png" />
      </Head>
      <Wrapper>
        <p>services</p>
      </Wrapper>
    </>
  );
}

export default index;
