import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Israel Dail" },
    { name: "description", content: "Israel Dail's portfolio website." },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-4 items-center mx-auto w-[calc(100%-40px)] p-6 md:p-12 md:flex-row md:justify-center md:flex-wrap md:gap-6">
      { /* TODO: add meaningful content - short bio of myself, highlight skills, highlight current educational path,
           highlight done or on-going projects, link to contact form  */ }
      <div className="bg-[#a28089] text-[#000] rounded p-3 w-full transform hover:-translate-y-[5%] hover:shadow-lg transition duration-500 ease-in-out border border-[#000000] border-opacity-20 md:basis-[28%] md:grow">
      Hi, I'm <span className="text-[#51e2f5]">Israel Dail</span>, a passionate web designer and developer with a flair for creativity and functionality. I specialize in crafting responsive, user-friendly web applications that merge innovative design with seamless performance. Currently pursuing a A.S. in Computer Programming and Analysis, I’m constantly expanding my skill set and exploring new technologies. My journey is fueled by a love for problem-solving, continuous learning, and turning ideas into impactful digital experiences. Let’s build something amazing together!
      </div>

      <div className="bg-[#a28089] text-[#000] rounded p-3 w-full transform hover:-translate-y-[5%] hover:shadow-lg transition duration-500 ease-in-out border border-[#000000] border-opacity-20 md:basis-[68%] md:grow">
        {/* legend for color meaning */}
        <div className="grid grid-cols-[repeat(4,7em)]">
          <div className="h-6 w-6 bg-yellow-300 rounded-full mb-3"></div>
          <span className="justify-self-start">In progress</span>

          <div className="h-6 w-6 bg-emerald-300 rounded-full mb-3"></div>
          <span className="justify-self-start">Completed</span>
        </div>
        <div className="py-2 px-1 rounded border border-yellow-300">education progress goes here</div>
      </div>

      <div className="bg-[#a28089] text-[#000] rounded p-3 w-full transform hover:-translate-y-[5%] hover:shadow-lg transition duration-500 ease-in-out border border-[#000000] border-opacity-20 md:basis-[48%] md:grow">
        skills go here
      </div>

      <div className="bg-[#a28089] text-[#000] rounded p-3 w-full transform hover:-translate-y-[5%] hover:shadow-lg transition duration-500 ease-in-out border border-[#000000] border-opacity-20 md:basis-[48%] md:grow">
        complete/on-going projects go here
      </div>
    </div>
  );
}

