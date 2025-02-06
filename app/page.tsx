import { Header } from "./components/Header";

import { MainBanner } from "./components/MainBanner";
import { EmailSeparator } from "./components/EmailSeparator";

export const metadata = {
  title: "Yeremia Chris Saragi | Frontend Web Developer",
  description:
    "Frontend Web Developer specializing in building exceptional digital experiences. Explore my portfolio showcasing web development projects and professional experience.",
  keywords: [
    "Yeremia Chris Saragi",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Web Development",
  ],
  openGraph: {
    title: "Yeremia Chris Saragi | Frontend Web Developer",
    description:
      "Frontend Web Developer specializing in building exceptional digital experiences",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center">
        <Header />

        <MainBanner />
      </div>

      <EmailSeparator />

      <div className="max-w-5xl self-center space-y-5 pb-10 px-5  mx-auto text-white">
        <div className="mb-20 space-y-2">
          <h2 className="text-5xl text-center font-bold">
            About <span className="text-green-400">Me</span>
          </h2>
          <p className="text-center text-sm bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-700 text-transparent bg-clip-text bg-300% animate-shine font-medium">
            Crafting digital experiences with passion and purpose
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-bold">Yeremia Chris Saragi</h2>
          <p className="text-neutral-400 text-sm bg-gradient-to-r from-neutral-400 via-green-400 to-neutral-400 text-transparent bg-clip-text bg-300% animate-shine">
            Frontend Web Developer at PrimaKu
          </p>
        </div>
        <p className="text-neutral-400 text-sm">
          Hello! You can call me Yeremia. I am a Software Engineer who works
          with the React ecosystem, specializing in building modern and
          responsive web applications.
          <br />
          <br />
          I was born in 2000 in Kabanjahe, Sumatera Utara, Indonesia. When the
          pandemic hit in 2020, my university was closed for a few weeks, and I
          started to learn web development, especially front-end development,
          out of boredom.
          <br />
          <br />
          As part of my learning journey, I&apos;ve been working on various
          projects to apply and strengthen my knowledge. I am passionate about
          building web applications and continuously learning new technologies.
          <br />
          <br />
          As a full-stack engineer, here are my current favorite tech stack:
        </p>
      </div>
    </>
  );
}
