import { Github, Instagram, Linkedin, Twitter, User, X } from "lucide-react";
import { Button } from "../ui/button";
import { useMemo } from "react";

const Sidebar = () => {
  const links = useMemo(
    () => [
      {
        icon: Linkedin,
        label: "Linkedin",
        href: "https://www.linkedin.com/in/aman-choudhari-0b9a92297/",
      },
      {
        icon: Github,
        label: "Github",
        href: "https://github.com/AmanXyI",
      },
      {
        icon: Twitter,
        label: "Twitter",
        href: "https://twitter.com/AmanXyI",
      },
      {
        icon: Instagram,
        label: "Instagram",
        href: "https://www.instagram.com/amanxyi/",
      },
    ],
    []
  );
  return (
    <div className="h-full  w-[18rem] px-[1rem] py-10">
      <h1 className="text-2xl font-semibold mb-5 text-[#b5b5bd]">Socials</h1>
      <div className="flex flex-col gap-3 ">
        {links.map((link, index) => {
          return (
            <a href={link.href} className="" key={index}>
              <Button className="" variant="social">
                <link.icon />
                {link.label}
              </Button>
            </a>
          );
        })}
        {/* contact me */}
        <Button variant="post" className="mt-6" size="lg">
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
