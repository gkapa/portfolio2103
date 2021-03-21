import React from "react";

import { useRouter } from "next/router";

import Head from "atoms/Head";
import Home from "components/home/Home";

export default function fun(props) {
  const nextRouter = useRouter();

  return (
    <>
      <Head
        title={"AWS + NextJS チャット機能 | Han Sahyeon"}
        // description={"ポートフォリオ用ページです。"}
        url={nextRouter.pathname}
      />
      <Home></Home>
    </>
  );
}
