import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teetsh - Progression" },
    { name: "description", content: "Teetsh - Progression" },
  ];
}

export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      <p>
        This is a test project for the Senior Software Engineer position at
        Teetsh.
      </p>
    </>
  );
}
