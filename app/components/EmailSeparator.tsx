"use client";
import { Separator } from "@/components/ui/separator";
export const EmailSeparator = () => {
  return (
    <div className="fixed bottom-40 -right-12 transform rotate-90 hidden md:flex items-center gap-2">
      <a
        href="mailto:yeremia997@gmail.com"
        className="hover:text-green-400 italic duration-300 text-white text-xs"
      >
        yeremia997@gmail.com
      </a>
      <Separator className="mt-1" />
    </div>
  );
};
