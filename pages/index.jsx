import Head from "next/head";
import Hero from "@/components/Hero/Hero";


export default function Home() {
  return (
    <>
      <Head>
        <title>Movie Zone v2</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&family=Unbounded&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Hero />
    </>
  );
}
