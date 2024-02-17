import Post from "@/components/post";
import Image from "next/image";

const posts = [
  {
    header:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus magnam, minus, officia vel asperiores provident quam nisi",
    image: "/spotify.webp",
    repo_link: "/",
    live_site = "",
  },
  {
    header:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus magnam, minus, officia vel asperiores provident quam nisi rerum nemo, corporis doloribus. Fugiat quasi placeat necessitatibus voluptatibus omnis consectetur atque qui!",
  },
];
const AboutMe = () => {
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
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            corrupti praesentium corporis et eos distinctio tempora ex optio
            deleniti ipsam cum facere, dolorum eveniet modi delectus
            voluptatibus fugit debitis cumque?
          </Post>
        );
      })}
    </div>
  );
};

export default AboutMe;
