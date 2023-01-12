import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  children: JSX.Element;
  title?: string;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>"Oscar Ariel Saucedo"</title>
        <meta name='author' content='Oscar Ariel Saucedo' />
        <meta
          name='keywords'
          content={`Oscar Ariel Saucedo, developer, react`}
        />
      </Head>

      <Navbar />

      <main>{children}</main>
    </>
  );
};
