import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

import type { Matiere } from "../../domain";
import { useCallback } from "react";

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
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
      e.stopPropagation();
    }
  }, []);

  return (
    <Select
      value={selectedMatiere.id}
      onValueChange={(value) =>
        setSelectedMatiere(matieres.find((matiere) => matiere.id === value)!)
      }
      aria-label="Sélectionner une matière"
    >
      <SelectTrigger 
        className="w-[180px] bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        onKeyDown={handleKeyDown}
      >
        <SelectValue placeholder="Sélectionner une matière" />
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
