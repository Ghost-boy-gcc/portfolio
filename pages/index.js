import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary min-h-screen flex items-center justify-center">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center text-white">
        <h1 className="text-6xl font-extrabold animate-bounce-slow">
          Welcome to My Portfolio
        </h1>
        <p className="mt-5 text-2xl">
          Showcasing my projects and skills
        </p>
      </main>
    </div>
  );
} 