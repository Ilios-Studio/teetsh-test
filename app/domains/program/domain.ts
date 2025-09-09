export interface Program {
  id: number;
  name: string;
  shortDescription: string;
  date: string;
  userId: string;
  nbOfUseLanding: number;
  nbOfUseInApp: number;
  schoolyearId: string;
  schoolId: string;
  programmationId: string;
  periodes: Periode[];
  matieres: Matiere[];
  columnWidth: number;
  fontSize: string;
  view: string;
  invertedRowCol: boolean;
  niveau: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  onePageMatiere: null | any;
  slug: string;
  documentId: string;
}

interface Periode {
  id: string;
  name: string;
  color: string;
  endDate: string;
  position: number;
  startDate: string;
  programmationId: string;
}

interface Matiere {
  id: string;
  name: string;
  color: string;
  domaines: Domaine[];
  position: number;
  programmationId: string;
}

interface Domaine {
  id: string;
  name: string;
  color: string;
  items: Item[];
  matiereId: string;
}

interface Item {
  y: number;
  id: string;
  value: string;
  Sequence: null | any;
  domaineId: string;
  periodeId: string;
  FicheDePrep: null | any;
  attachments: any[];
}

export type getProgramsFilter = {
  filters: {
    limit: number;
  };
};

export interface IProgramRepository {
  getPrograms: (filter?: getProgramsFilter) => Promise<Program[]>;
  getProgram: (documentId: string) => Promise<Program>;
}
