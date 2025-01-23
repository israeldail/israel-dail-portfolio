import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Israel Dail" },
    { name: "description", content: "Israel Dail's portfolio website." },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-3 lg:gap-8 items-center mx-auto w-[calc(100%-40px)] p-6 lg:p-12 lg:flex-row lg:justify-center lg:flex-wrap">
      <div className="bg-[#a28089] text-[#2D2D2D] rounded p-4 lg:p-6 w-full transform hover:-translate-y-[5%] hover:shadow-lg transition duration-500 ease-in-out border border-[#000000] border-opacity-20 lg:basis-[38%] lg:grow">
        <p className="text-base leading-relaxed">
          Hi, I'm <span className="text-[#51e2f5]">Israel Dail</span>, a passionate web designer and developer with a flair for creativity and functionality. I specialize in crafting responsive, user-friendly web applications that merge innovative design with seamless performance. Currently pursuing a A.S. in Computer Programming and Analysis, I’m constantly expanding my skill set and exploring new technologies. My journey is fueled by a love for problem-solving, continuous learning, and turning ideas into impactful digital experiences. Let’s build something amazing together!
        </p>
      </div>

      <div className="bg-[#a28089] text-[#2D2D2D] rounded p-4 lg:p-6 w-full transform hover:-translate-y-[5%] hover:shadow-lg transition duration-500 ease-in-out border border-[#000000] border-opacity-20 lg:basis-[58%] lg:grow">
        <div className="grid grid-cols-[repeat(1,8em)] md:grid-cols-[repeat(4,8em)] gap-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-6 w-6 bg-yellow-300 rounded-full"></div>
            <span>In progress</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-6 w-6 bg-emerald-300 rounded-full"></div>
            <span>Completed</span>
          </div>
        </div>
        <div className="py-2 px-1 rounded border-2 border-yellow-300 bg-[#f5f5f5]">
          <p className="text-2xl font-bold">Miami Dade College</p>
          <p className="text-[#36454F] text-sm md:text-base"><span className="font-bold">A.S. Computer Programming and Analysis</span> - Business Applications</p>
          <p className="text-[#36454F] text-sm md:text-base"><span className="font-bold">Anticipated Graduation year</span> - 2026</p>
          <p className="text-[#36454F] text-sm md:text-base"><span className="font-bold">Classes Currently enrolled in:</span> Intro to Python Programming</p>
        </div>
      </div>

      <div className="bg-[#a28089] text-[#2D2D2D] rounded p-4 lg:p-6 w-full transform hover:-translate-y-[5%] hover:shadow-lg transition duration-500 ease-in-out border border-[#000000] border-opacity-20 lg:basis-[48%] lg:grow">
        Skills go here
      </div>

      <div className="bg-[#a28089] text-[#2D2D2D] rounded p-4 lg:p-6 w-full transform hover:-translate-y-[5%] hover:shadow-lg transition duration-500 ease-in-out border border-[#000000] border-opacity-20 lg:basis-[48%] lg:grow">
        Completed/on-going projects go here
      </div>
    </div>
  );
}

