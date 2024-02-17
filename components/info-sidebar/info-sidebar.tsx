import { Button } from "../ui/button";
import InfoCard from "./info-card";

const InfoSidebar = () => {
  return (
    <div className="h-full  w-[20rem]  ">
      <h1 className="font-bold text-2xl ml-8 my-4">What I Know</h1>
      <article className="flex flex-col gap-4">
        <InfoCard title="Frontend">
          <div className="flex flex-wrap gap-[6px]">
            <Button variant="skill" size="skill_sm">
              HTML
            </Button>
            <Button variant="skill" size="skill_sm">
              CSS
            </Button>
            <Button
              variant="skill"
              size="skill_sm"
              className="border border-blue-600"
            >
              Tailwind
            </Button>
            <Button
              variant="skill"
              size="skill_sm"
              className="border border-yellow-600"
            >
              Javascript
            </Button>
            <Button variant="skill" size="skill_sm">
              Typescript
            </Button>

            <Button
              variant="skill"
              size="skill_sm"
              className="border border-blue-600"
            >
              ReactJs
            </Button>
            <Button variant="skill" size="skill_sm">
              NextJs
            </Button>
          </div>
        </InfoCard>
        <InfoCard title="Backend">
          <div className="flex flex-wrap gap-[6px]">
            <Button
              variant="skill"
              size="skill_sm"
              className="border border-green-600"
            >
              NodeJs
            </Button>
            <Button
              variant="skill"
              size="skill_sm"
              className="border border-gray-600"
            >
              ExpressJs
            </Button>
            <Button variant="skill" size="skill_sm">
              Next Auth
            </Button>
            <Button variant="skill" size="skill_sm">
              Socket.IO
            </Button>
            <Button variant="skill" size="skill_sm">
              GO
            </Button>
          </div>
        </InfoCard>
        <InfoCard title="Database">
          <div className="flex flex-wrap gap-[6px]">
            <Button
              variant="skill"
              size="skill_sm"
              className="border border-blue-600"
            >
              PostgreSQL
            </Button>
            <Button
              variant="skill"
              size="skill_sm"
              className="border border-green-600"
            >
              MongoDB
            </Button>
            <Button
              variant="skill"
              size="skill_sm"
              className="border border-red-600"
            >
              MySQL
            </Button>
            <Button
              variant="skill"
              size="skill_sm"
              className="border border-blue-600"
            >
              Prisma
            </Button>
            <Button variant="skill" size="skill_sm" className="">
              Supabase
            </Button>
          </div>
        </InfoCard>
      </article>
    </div>
  );
};

export default InfoSidebar;
