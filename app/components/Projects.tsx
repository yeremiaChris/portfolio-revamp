"use client";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const defaultMotionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

const contentAnimationProps = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: 0.4 },
};

const imageAnimationProps = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: 0.4 },
};

interface ProjectItemProps {
  title: string;
  description: string;
  tools: string;
  imageSrc: string;
  imageAlt: string;
}

const ProjectItem = ({
  title,
  description,
  tools,
  imageSrc,
  imageAlt,
}: ProjectItemProps) => (
  <div className="grid grid-cols-1 justify-center md:grid-cols-2 gap-10">
    <motion.div
      {...imageAnimationProps}
      className="relative rounded-lg border border-neutral-900 border-dashed overflow-hidden w-full h-72 md:hidden"
    >
      <Image src={imageSrc} alt={imageAlt} fill className="object-contain" />
    </motion.div>

    <motion.div {...contentAnimationProps} className="space-y-5">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-sm text-neutral-400">{description}</p>
      <p className="text-neutral-400 text-sm">Tool: {tools}</p>
      <Button>
        View Project <ExternalLink />
      </Button>
    </motion.div>

    <motion.div
      {...imageAnimationProps}
      className="hidden md:block relative rounded-lg border border-neutral-900 border-dashed overflow-hidden w-full h-full"
    >
      <Image src={imageSrc} alt={imageAlt} fill className="object-contain" />
    </motion.div>
  </div>
);

export const Projects = () => {
  const projects: ProjectItemProps[] = [
    {
      title: "Create Your AI Team",
      description:
        "Build, train, and deploy AI agents to automate tasks, research, and collaborate in real-time. Equip them with your favorite tools and dynamic knowledge for timeless productivity. Your AI agents learn, adapt, and help turn ideas into action—fast.",
      tools: "React, NextJs, TailwindCss",
      imageSrc: "/projects/manulife.jpg",
      imageAlt: "manulife",
    },
    // Add more projects here as needed
  ];

  return (
    <section
      id="projects"
      className="text-white mt-10 max-w-5xl mx-auto px-5 pb-10"
    >
      <motion.div
        {...defaultMotionProps}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-20 space-y-2"
      >
        <h2 className="md:text-5xl text-3xl font-bold">
          Proje<span className="text-green-400">cts</span>
        </h2>

        <p className="text-sm bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-700 text-transparent bg-clip-text bg-300% animate-shine font-medium">
          Showcasing my professional journey and achievements
        </p>
      </motion.div>

      <div className="space-y-14">
        {projects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};
