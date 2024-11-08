import Head from 'next/head';

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-50 animate-pulse-slow"></div>

      <main className="relative z-10 text-center text-white">
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