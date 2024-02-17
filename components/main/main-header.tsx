"use client";
import Link from "next/link";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { AvatarImage } from "@radix-ui/react-avatar";

interface MainHeaderProps {
  children: React.ReactNode;
}
const MainHeader: React.FC<MainHeaderProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Projects",
        active: pathname === "/",
        href: "/",
      },
      {
        label: "Current projects",
        active: pathname === "/currentprojects",
        href: "/currentprojects",
      },
      {
        label: "About",
        active: pathname === "/about",
        href: "/about",
      },
      {
        label: "Blog",
        active: pathname === "/blog",
        href: "/blog",
      },
    ],
    [pathname]
  );
  return (
    <section className="pt-14 w-[42rem] border-[.5px] border-[#333639]  border-t-transparent border-b-transparent mx-8 relative">
      <ScrollArea className="h-full ">
        {/* header */}
        <div className="flex flex-col ">
          <article className="border-[1px] border-[#333639] border-r-transparent border-l-transparent border-t-transparent ">
            {/*add images */}

            <div
              className="bg-[#333639] h-[10rem] relative"
              style={{
                backgroundImage: `url('/bg1.jpg')`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
              }}
            >
              {/* <Image src="/bg1.jpg" alt="" width={200} height={100} /> */}
              <Avatar className="text-black bg-[#333639] w-[8rem] h-[8rem] absolute bottom-[-40%] left-5  border-black border-4">
                <AvatarImage src="/bored_ape.jpg" />
                <AvatarFallback>Name</AvatarFallback>
              </Avatar>
            </div>

            {/* twitter profile link */}
            <div className="h-[5rem] flex justify-end px-[2rem] py-[1rem]">
              <Button
                variant="general"
                size="sm"
                className="hover:bg-[#181919]"
              >
                Follow Me
              </Button>
            </div>

            {/* Bio section */}
            <div className="px-4">
              <div className="mb-4">
                <h1 className="text-[1.45rem] font-[700] ">Aman Choudhari</h1>
                <h2 className=" text-[#7a7e81]">@AmanXyI</h2>
              </div>

              <p className="mb-5 text-[1rem]">
                Full stack Web dev with expertise in ReactJs <br />
                Crafting seamless and responsive UI
              </p>

              <div className="">
                <p className="text-[#a3a6a8]">amanchoudhari1224@gmail.com</p>

                <p className="text-[#a3a6a8]">+91 9359141484</p>
              </div>
            </div>
            <div className="h-[3.5rem] flex ">
              {routes.map((route, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center hover:bg-[#181818] w-full  text-[1rem] relative"
                  >
                    <Link
                      href={route.href}
                      className="flex items-center justify-center h-full  w-full "
                    >
                      {route.label}
                    </Link>
                    {route.active && (
                      <span className="absolute h-[4px] w-[4rem] rounded-lg bg-[#1a8cd8]  translate-y-5  "></span>
                    )}
                  </div>
                );
              })}
            </div>
          </article>

          {/* childern */}
          {children}
        </div>
      </ScrollArea>
    </section>
  );
};

export default MainHeader;
