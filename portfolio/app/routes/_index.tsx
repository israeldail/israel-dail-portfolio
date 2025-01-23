import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Israel Dail" },
    { name: "description", content: "Israel Dail's portfolio website." },
  ];
};

export default function Index() {
  return (
    <div className="text-center p-10">
      { /* TODO: add meaningful content - short bio of myself, highlight skills, highlight current educational path,
           highlight done or on-going projects, link to contact form  */ }
      <h1>Landing page</h1>

    </div>
  );
}

