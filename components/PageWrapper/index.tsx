import { FC } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

type PageWrapperProps = {
  children: React.ReactNode;
  title: string;
  iconsUsed?: { name: string; url: string }[];
};

const PageWrapper: FC<PageWrapperProps> = ({
  children,
  title,
  iconsUsed = [],
}) => (
  <div className="bg-gray-900 min-h-screen flex flex-col">
    <Head>
      <title>{title}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/faviconb/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/faviconb/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/faviconb/favicon-16x16.png"
      />
      <link rel="manifest" href="faviconb/site.webmanifest" />
    </Head>

    <Header />

    <main className="container mx-auto px-6 py-12 grow">{children}</main>
    <Footer />
  </div>
);

export default PageWrapper;
