import { Button } from "@/components/ui/button";
import { Header } from "./components/Header";
import { Contact, FileUser, Github, Linkedin, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Separator } from "@/components/ui/separator";

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
      <div className="h-screen">
        <Header />

        <main role="main" className="max-w-5xl self-center  mx-auto text-white">
          <section
            id="banner"
            aria-label="Introduction"
            className="px-5 md:mt-5"
          >
            <p className="text-green-400 tracking-widest">Hi, my name is</p>

            <div className="md:px-3 mt-5 space-y-5">
              <h1 className="scroll-m-20 text-neutral-200 text-5xl md:text-6xl font-extrabold tracking-tight lg:text-7xl">
                Yeremia Chris <span className="bg-orange-500">Saragi</span>
              </h1>
              <h2 className="scroll-m-20 text-4xl md:text-5xl text-neutral-500 font-extrabold tracking-tight lg:text-6xl">
                Software Engineer
              </h2>
              <p className="mt-5 text-neutral-500 text-sm md:text-base">
                Passionate Front-End Developer with 3+ years of expertise in
                JavaScript/TypeScript, specializing
                <br className="hidden md:inline" /> in Next.js & Nuxt.js.
                Committed to crafting exceptional digital experiences and driven
                to deliver <br className="hidden md:inline" /> impactful
                solutions as part of your team.
              </p>

              <div className="flex gap-2 items-center">
                <Button className="md:p-6 rounded-lg">
                  Get In Touch <Contact className="text-neutral-500" />
                </Button>
                <Button className="md:p-6 rounded-lg">More About Me</Button>
              </div>

              <div className="flex gap-5 items-center text-neutral-600">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Github
                        className="hover:text-green-400 cursor-pointer duration-300"
                        size={18}
                      />
                      <TooltipContent>
                        <p className="border border-neutral-700 rounded-full mb-2 px-1.5">
                          Github
                        </p>
                      </TooltipContent>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Linkedin
                        className="hover:text-green-400 cursor-pointer duration-300"
                        size={18}
                      />
                      <TooltipContent>
                        <p className="border border-neutral-700 rounded-full mb-2 px-1.5">
                          LinkedIn
                        </p>
                      </TooltipContent>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Mail
                        className="hover:text-green-400 cursor-pointer duration-300"
                        size={18}
                      />
                      <TooltipContent>
                        <p className="border border-neutral-700 rounded-full mb-2 px-1.5">
                          Email
                        </p>
                      </TooltipContent>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <FileUser
                        className="hover:text-green-400 cursor-pointer duration-300"
                        size={18}
                      />
                      <TooltipContent>
                        <p className="border border-neutral-700 rounded-full mb-2 px-1.5">
                          CV
                        </p>
                      </TooltipContent>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </section>
        </main>
      </div>

      <div className="fixed bottom-40 -right-12 transform rotate-90 hidden md:flex items-center gap-2">
        <a
          href="mailto:yeremia997@gmail.com"
          className="hover:text-green-400 italic duration-300 text-white text-xs"
        >
          yeremia997@gmail.com
        </a>
        <Separator className="mt-1" />
      </div>
    </>
  );
}
