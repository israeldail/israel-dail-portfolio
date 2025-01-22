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
      boilerplate
    </div>
  );
}

