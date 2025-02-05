import { Button } from "@/components/ui/button";
import { Header } from "./components/Header";
import { Contact, FileUser, Github, Linkedin, Mail } from "lucide-react";

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
      <Header />

      <main role="main" className="max-w-5xl mx-auto text-white">
        <section id="banner" aria-label="Introduction" className="px-12 mt-5">
          <p className="text-green-400">Hi, my name is</p>

          <div className="px-3 mt-5 space-y-5">
            <h1 className="scroll-m-20 text-neutral-200 text-6xl font-extrabold tracking-tight lg:text-7xl">
              Yeremia Chris Saragi
            </h1>
            <h2 className="scroll-m-20 text-5xl text-neutral-500 font-extrabold tracking-tight lg:text-6xl">
              Frontend Web Developer
            </h2>
            <p className="mt-5 text-neutral-500">
              Passionate Front-End Developer with 3+ years of expertise in
              JavaScript/TypeScript, specializing <br /> in Next.js & Nuxt.js.
              Committed to crafting exceptional digital experiences and driven
              to deliver <br /> impactful solutions as part of your team.
            </p>

            <Button className="p-6 mr-3 rounded-lg">
              Get In Touch <Contact className="text-neutral-500" />
            </Button>
            <Button className="p-6 rounded-lg">More About Me</Button>

            <div className="flex gap-5 items-center text-neutral-600">
              <Github
                className="hover:text-green-400 cursor-pointer duration-300"
                size={18}
              />
              <Linkedin
                className="hover:text-green-400 cursor-pointer duration-300"
                size={18}
              />
              <Mail
                className="hover:text-green-400 cursor-pointer duration-300"
                size={18}
              />
              <FileUser
                className="hover:text-green-400 cursor-pointer duration-300"
                size={18}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
