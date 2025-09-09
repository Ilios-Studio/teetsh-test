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
      <h1 className="text-4xl font-bold text-foreground mb-4">
        Teetsh - Progression Test
      </h1>
      <p>
        Ceci est un projet de test pour le poste de Senior Software Engineer
        chez{" "}
        <a
          href="https://www.teetsh.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          Teetsh
        </a>
        .
      </p>
    </>
  );
}
