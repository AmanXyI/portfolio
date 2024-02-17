"use client";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import { BarChart2, Github, Heart, MessageCircle, Repeat } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

interface PostProps {
  children?: React.ReactNode;
  header: string;
  image?: string;
  repo_link?: string;
  live_site?: string;
  comments?: number;
  likes?: number;

  visits?: number;
}
const Post: React.FC<PostProps> = ({
  children,
  header,
  image,
  repo_link,
  live_site,
  comments,
  likes,

  visits,
}) => {
  const [like, setLike] = useState(false);
  return (
    <Card className="bg-transparent text-white border-[#333639] rounded-none border-r-transparent border-l-transparent border-t-transparent border-[1px] ">
      <CardHeader>
        <div className="flex ">
          <Avatar>
            <AvatarImage src="/bored_ape.jpg" />
            <AvatarFallback className="text-black">Image</AvatarFallback>
          </Avatar>
          <div className="px-4">
            <span className="flex gap-5 items-center">
              <h1>Aman ✨</h1>
              <p className="text-sm text-[#7a7e81]">14 Feb 2024</p>
            </span>
            <h1>{header}</h1>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pl-[5rem] pr-[2.5rem] ">
        <div className="rounded-lg overflow-hidden mb-2 ">
          {image && (
            <a href={repo_link} target="_blank" className="group relative">
              <Image
                className="group-hover:blur-lg transition rounded-lg"
                src={image}
                width={300}
                height={300}
                alt=""
                style={{
                  objectFit: "cover",
                  height: "20rem",
                  width: "36rem",
                }}
              />
              <div className="absolute opacity-0 text-[1rem] font-medium text-[#262829]  top-[50%] left-[50%] translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:opacity-100 transition-all">
                <h1>Click to view source code</h1>
              </div>
              <a
                href={live_site}
                target="_blank"
                className="absolute bottom-6 left-[50%] translate-x-[-50%] opacity-0 group-hover:translate-y-[-2rem] group-hover:opacity-100 transition-all bg-black px-6 py-3 rounded-full hover:bg-[#3a3942] "
              >
                Visit Live Site
              </a>
            </a>
          )}
        </div>
        {children}
        <div className=" h-9 px-1 mt-4 ">
          <div className="flex  justify-between text-[#a3a6a8]">
            <div className="flex gap-2 text-sm hover:text-blue-500 cursor-pointer transition-all">
              <MessageCircle size={20} />
              {comments}
            </div>
            <div className="flex gap-2 text-sm hover:text-green-400 cursor-pointer transition-all">
              <Repeat size={20} />
            </div>
            <div
              className={twMerge(
                "flex gap-2 text-sm hover:text-pink-400 cursor-pointer transition-all",
                like && "text-pink-400"
              )}
              onClick={() => setLike(!like)}
            >
              <div className="">
                {like ? (
                  <Image src="/heart-solid.svg" width={20} height={20} alt="" />
                ) : (
                  <Heart size={20} />
                )}
              </div>
              {/* @ts-ignore */}
              {like ? likes + 1 : likes}
            </div>
            <div className="flex gap-2 text-sm  hover:text-blue-500 cursor-pointer transition-all">
              <BarChart2 size={20} />
              {visits}
            </div>
            <div className="flex gap-2 text-sm hover:text-green-300 text-green-400 cursor-pointer transition-all">
              <a href="https://github.com/AmanXyI" target="_blank">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        {/* </div> */}
      </CardContent>
    </Card>
  );
};

export default Post;
