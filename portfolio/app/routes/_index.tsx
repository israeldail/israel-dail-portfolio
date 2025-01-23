import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Israel Dail" },
    { name: "description", content: "Israel Dail's portfolio website." },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-3 lg:gap-8 items-center mx-auto max-w-[1200px] w-[calc(100%-40px)] p-6 lg:p-12 lg:flex-row lg:justify-center lg:flex-wrap">
      <div className="bg-[#a28089] text-[#2D2D2D] rounded p-4 lg:p-6 w-full transform hover:-translate-y-[5%] hover:shadow-lg transition duration-500 ease-in-out border border-[#000000] border-opacity-20 lg:basis-[50%] lg:grow">
        <div className="text-4xl p-4">Bio</div>
        <hr className="p-2" />
        <p className="text-base leading-relaxed">
          Hi, I'm <span className="text-[#51e2f5]">Israel Dail</span>, a passionate web designer and developer with a flair for creativity and functionality. I specialize in crafting responsive, user-friendly web applications that merge innovative design with seamless performance. Currently pursuing a A.S. in Computer Programming and Analysis, I’m constantly expanding my skill set and exploring new technologies. My journey is fueled by a love for problem-solving, continuous learning, and turning ideas into impactful digital experiences. Let’s build something amazing together!
        </p>
      </div>

      <div className="bg-[#a28089] text-[#2D2D2D] rounded p-4 lg:p-6 w-full transform hover:-translate-y-[5%] hover:shadow-lg transition duration-500 ease-in-out border border-[#000000] border-opacity-20 lg:basis-[50%] lg:grow">
        <div className="text-4xl p-4">Education</div>
        <hr className="p-2" />
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
          <p className="text-[#36454F] text-sm md:text-base"><span className="font-bold">A.S.</span> - Computer Programming and Analysis Business Applications</p>
          <p className="text-[#36454F] text-sm md:text-base"><span className="font-bold">Anticipated Graduation year:</span> 2026</p>
          <p className="text-[#36454F] text-sm md:text-base"><span className="font-bold">Classes Currently enrolled in:</span> Intro to Python Programming</p>
        </div>
      </div>

      <div className="bg-[#a28089] text-[#2D2D2D] rounded p-4 lg:p-6 w-full transform hover:-translate-y-[5%] hover:shadow-lg transition duration-500 ease-in-out border border-[#000000] border-opacity-20 lg:basis-[48%] lg:grow">
        <div className="text-4xl p-4">Skills</div>
        <hr className="p-2" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <i className="fa-brands fa-js fa-5x justify-self-center"></i>
          <i className="fa-brands fa-python fa-5x justify-self-center"></i>
          <i className="fa-brands fa-react fa-5x justify-self-center"></i>
        </div>
      </div>

      <div className="bg-[#a28089] text-[#2D2D2D] rounded p-4 lg:p-6 w-full transform hover:-translate-y-[5%] hover:shadow-lg transition duration-500 ease-in-out border border-[#000000] border-opacity-20 lg:basis-[48%] lg:grow">
        <div className="text-4xl p-4">Projects</div>
        <hr className="p-2" />
        <p className="text-sm font-bold md:text-2xl">Kado Club<span className="text-sm font-normal md:text-base"> - finished product coming soon.</span></p>
      </div>
    </div>
  );
}

