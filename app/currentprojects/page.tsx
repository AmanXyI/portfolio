import Post from "@/components/post";
import Image from "next/image";

const posts = [
  {
    header:
      "Lorem, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, saepe, aliquid ducimus sunt earum reprehenderit minima praesentium, dicta nemo assumenda delectus repellendus? Qui minus aperiam, dicta obcaecati eum nostrum quos!ipsum dolor sit amet consectetur adipisicing elit. Accusamus magnam, minus, officia vel asperiores provident quam nisi",
    image: "/spotify.webp",
    repo_link: "https://github.com/AmanXyI/e-commerce-website-reactjs",
    live_site: "/",
  },
  {
    header:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus magnam, minus, officia vel asperiores provident quam nisi rerum nemo, corporis doloribus. Fugiat quasi placeat necessitatibus voluptatibus omnis consectetur atque qui!",
  },
];
const CurrentProjects = () => {
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
            key={index}
          />
        );
      })}
    </div>
  );
};

export default CurrentProjects;
