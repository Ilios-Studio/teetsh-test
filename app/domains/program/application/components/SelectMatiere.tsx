import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

import type { Matiere } from "../../domain";

type Props = {
  matieres: Matiere[];
  selectedMatiere: Matiere;
  setSelectedMatiere: (matiere: Matiere) => void;
};

export function SelectMatiere({
  matieres,
  selectedMatiere,
  setSelectedMatiere,
}: Props) {
  return (
    <Select
      value={selectedMatiere.id}
      onValueChange={(value) =>
        setSelectedMatiere(matieres.find((matiere) => matiere.id === value)!)
      }
    >
      <SelectTrigger className="w-[180px] bg-white">
        <SelectValue placeholder="Matière" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        {matieres.map((matiere) => (
          <SelectItem key={matiere.id} value={matiere.id}>
            {matiere.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
