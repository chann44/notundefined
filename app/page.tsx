import { ListItem } from "@/components/list-item";
import { List } from "@/components/list-layout";
import { projects, socialLinks, work } from "@/utils/data";
import { LuGithub, LuTwitter, LuLinkedin } from "react-icons/lu";

function About() {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="pt-8">
        <h1 className="text-4xl font-bold">
          Vikash{" "}
          <small className="text-xs font-extralight hover:font-medium">
            <a> aka 44chan</a>
          </small>
        </h1>
        <h2 className="font-light text-lg py-4">
          Full Stack Engineer building innovative blockchain solutions. Previously{" "}
          <span className="dark:text-white font-medium">@Levitate</span> working on{" "}
          <a
            className="dark:text-white font-semibold underline underline-offset-1"
            href="https://www.inflection.network/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inflection Network
          </a>
          {" "}- accelerating stablecoin adoption for the next billion users
        </h2>
        <div className="flex gap-x-2">
          <a href={socialLinks.Github}>
            <LuGithub className="h-6 w-6" />
          </a>
          <a href={socialLinks.Twitter}>
            <LuTwitter className="h-6 w-6" />
          </a>
          <a href={socialLinks.Linkedin}>
            <LuLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
      <article className="flex flex-col gap-3 mt-2 font-light">
        <h2 className="text-2xl font-medium">About</h2>
        <p className="">{`Hi! I am a developer based in India. In 2020, I decided to start programming, and I tumbled headfirst into the rabbit hole of coding. Since then, I've had the privilege of building software for startups and agencies.`}</p>
        <p className="">{`These days, my focus is all about the frontend development scene, where I'm having a blast experimenting with technologies like Next.js, React, Tailwind CSS, and TypeScript. It wasn't always a walk in the park, but the idea of creating something that could truly make a difference kept me motivated `}</p>
        <p>{`In my free time, I love diving into programming articles, and I also share my learnings on this blog when I'm not busy building cool stuff. It's all about the fun of learning and sharing,`}</p>
      </article>

      <List title="Experience">
        {work.map((data, index) => {
          return <ListItem {...data} key={index} />;
        })}
      </List>
      <List title="Project(s)">
        {projects.map(({ desc, link, name, Icon }, index) => {
          return (
            <ListItem
              title={name}
              right={
                <>
                  <a className="" href={link}>
                    View on Github
                  </a>
                </>
              }
              description={desc}
              key={index}
              logo={Icon}
            />
          );
        })}
      </List>
    </div>
  );
}

export default About;
