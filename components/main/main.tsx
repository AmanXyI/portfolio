import Image from "next/image";
import Post from "../post";
import { Button } from "../ui/button";
import Link from "next/link";

const posts = [
  {
    header:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus magnam, minus, officia vel asperiores provident quam nisi",
    image: "/amazon.webp",
    repo_link: "https://github.com/AmanXyI/e-commerce-website-reactjs",
    live_site: "/",
    comments: 103,
    likes: 456,
    liked: false,
    visits: 854,
  },
  {
    header:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus magnam, minus, officia vel asperiores provident quam nisi rerum nemo, corporis doloribus. Fugiat quasi placeat necessitatibus voluptatibus omnis consectetur atque qui!",
    comments: 42,
    likes: 86,
    liked: false,
    visits: 184,
  },
  {
    header:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus magnam, minus, officia vel asperiores provident quam nisi rerum nemo, corporis doloribus. Fugiat quasi placeat necessitatibus voluptatibus omnis consectetur atque qui! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus magnam, minus, officia vel asperiores provident quam nisi rerum nemo, corporis doloribus. Fugiat quasi placeat necessitatibus voluptatibus omnis consectetur atque qui!",
    image: "/spotify.webp",
    repo_link: "https://github.com/AmanXyI/e-commerce-website-reactjs",
    comments: 10,
    likes: 36,
    visits: 54,
  },
];

const Main = () => {
  return (
    <div className=" w-full h-[30rem]  ">
      {/* <ScrollArea className="h-full">main lorem1000</ScrollArea> */}
      {posts.map((post, index) => {
        return (
          <Post
            header={post.header}
            image={post.image}
            repo_link={post.repo_link}
            live_site={post.live_site}
            comments={post.comments}
            likes={post.likes}
            visits={post.visits}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Main;
