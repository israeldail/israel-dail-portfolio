import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Israel Dail" },
    { name: "description", content: "Israel Dail's portfolio website." },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-4 items-center mx-auto w-[calc(100%-40px)] p-12 md:flex-row md:justify-center">
      { /* TODO: add meaningful content - short bio of myself, highlight skills, highlight current educational path,
           highlight done or on-going projects, link to contact form  */ }
      <div className="bg-[#a28089] rounded p-6 w-full md:grow">
        content
      </div>

      <div className="bg-[#a28089] rounded p-6 w-full md:grow">
        content
      </div>
    </div>
  );
}

