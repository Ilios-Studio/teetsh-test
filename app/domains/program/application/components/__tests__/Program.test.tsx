import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import type { Program as IProgram } from "../../../domain";
import { Program } from "../Program";
import userEvent from "@testing-library/user-event";

describe("Program", () => {
  const mockProgram: IProgram = {
    id: 1,
    name: "Programme Test",
    shortDescription: "Description test",
    date: "2024-01-01",
    userId: "user-1",
    nbOfUseLanding: 0,
    nbOfUseInApp: 0,
    schoolyearId: "schoolyear-1",
    schoolId: "school-1",
    programmationId: "prog-1",
    columnWidth: 200,
    fontSize: "14px",
    view: "grid",
    invertedRowCol: false,
    niveau: "CE1",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    publishedAt: "2024-01-01",
    onePageMatiere: null,
    slug: "programme-test",
    documentId: "doc-1",
    periodes: [
      {
        id: "periode-1",
        name: "Période 1",
        color: "bg-blue-400",
        endDate: "2024-03-01",
        position: 1,
        startDate: "2024-01-01",
        programmationId: "prog-1",
      },
    ],
    matieres: [
      {
        id: "matiere-1",
        name: "Mathématiques",
        color: "bg-red-400",
        position: 1,
        programmationId: "prog-1",
        domaines: [
          {
            id: "domaine-1",
            name: "Nombres",
            color: "bg-red-200",
            matiereId: "matiere-1",
            items: [
              {
                id: "item-1",
                value: "Compter jusqu'à 100",
                y: 0,
                Sequence: null,
                domaineId: "domaine-1",
                periodeId: "periode-1",
                FicheDePrep: null,
                attachments: [],
              },
            ],
          },
        ],
      },
      {
        id: "matiere-2",
        name: "Français",
        color: "bg-blue-400",
        position: 2,
        programmationId: "prog-1",
        domaines: [
          {
            id: "domaine-2",
            name: "Lecture",
            color: "bg-blue-200",
            matiereId: "matiere-2",
            items: [
              {
                id: "item-2",
                value: "Lire des mots simples",
                y: 0,
                Sequence: null,
                domaineId: "domaine-2",
                periodeId: "periode-1",
                FicheDePrep: null,
                attachments: [],
              },
            ],
          },
        ],
      },
    ],
  };

  it("displays first subject domains by default", () => {
    render(<Program data={mockProgram} />);

    // Initially shows first subject domains (Mathématiques)
    expect(screen.getByText("Nombres")).toBeInTheDocument();
    expect(screen.getByText("Compter jusqu'à 100")).toBeInTheDocument();

    // Should not show second subject domains initially
    expect(screen.queryByText("Lecture")).not.toBeInTheDocument();
    expect(screen.queryByText("Lire des mots simples")).not.toBeInTheDocument();

    // Should show the selected subject in the select
    expect(screen.getAllByText("Mathématiques")[0]).toBeInTheDocument();
  });

  it("changes domains when selecting a different subject", async () => {
    const user = userEvent.setup();
    render(<Program data={mockProgram} />);

    // Initially shows first subject domains (Mathématiques)
    expect(screen.getByText("Nombres")).toBeInTheDocument();
    expect(screen.queryByText("Lecture")).not.toBeInTheDocument();

    // Click on the select trigger
    await user.click(screen.getByTestId("select-matiere-trigger"));

    // Click on the second option (Français)
    await user.click(screen.getByTestId("select-matiere-option-matiere-2"));

    // Check that domains have changed to show Français domains
    expect(screen.getByText("Lecture")).toBeInTheDocument();
    expect(screen.getByText("Lire des mots simples")).toBeInTheDocument();

    // Check that Mathématiques domains are no longer visible
    expect(screen.queryByText("Nombres")).not.toBeInTheDocument();
    expect(screen.queryByText("Compter jusqu'à 100")).not.toBeInTheDocument();
  });
});
