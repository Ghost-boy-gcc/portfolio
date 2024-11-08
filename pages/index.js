import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-3 text-2xl">Showcasing my projects and skills</p>
      </main>
    </div>
  );
} 