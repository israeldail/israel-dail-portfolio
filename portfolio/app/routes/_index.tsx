import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Israel Dail" },
    { name: "description", content: "Israel Dail's portfolio website." },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-4 items-center mx-auto w-[calc(100%-40px)] p-6 md:p-12 md:flex-row md:justify-center md:flex-wrap">
      { /* TODO: add meaningful content - short bio of myself, highlight skills, highlight current educational path,
           highlight done or on-going projects, link to contact form  */ }
      <div className="bg-[#a28089] text-white rounded p-6 w-full transform hover:-translate-y-[10%] hover:shadow-lg transition duration-500 ease-in-out md:basis-[28%] md:grow">
        bio goes here
      </div>

      <div className="bg-[#a28089] text-white rounded p-6 w-full transform hover:-translate-y-[10%] hover:shadow-lg transition duration-500 ease-in-out md:basis-[68%] md:grow">
        education progress goes here
      </div>

      <div className="bg-[#a28089] text-white rounded p-6 w-full transform hover:-translate-y-[10%] hover:shadow-lg transition duration-500 ease-in-out md:basis-[48%] md:grow">
        skills go here
      </div>

      <div className="bg-[#a28089] text-white rounded p-6 w-full transform hover:-translate-y-[10%] hover:shadow-lg transition duration-500 ease-in-out md:basis-[48%] md:grow">
        complete/on-going projects go here
      </div>
    </div>
  );
}

