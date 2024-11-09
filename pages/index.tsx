import type { NextPage } from "next";
import Head from "next/head";
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <Hero />

        <section className="py-20 px-5 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ProjectCard title="Project 1" description="Description for project 1." />
            <ProjectCard title="Project 2" description="Description for project 2." />
            <ProjectCard title="Project 3" description="Description for project 3." />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;