import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teetsh - Progression" },
    { name: "description", content: "Teetsh - Progression" },
  ];
}

export default function Home() {
  return <h1>Hello World</h1>;
}
