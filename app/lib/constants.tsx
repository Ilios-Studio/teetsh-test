import { BookIcon, HomeIcon } from "lucide-react";

export const ROUTES = {
  HOME: {
    title: "Accueil",
    url: "/",
    icon: HomeIcon,
  },
  PROGRAMS: {
    title: "Programmes",
    url: "/programs",
    icon: BookIcon,
  },
  PROGRAM: {
    title: "Programme",
    url: "/programs/:documentId",
    icon: BookIcon,
  },
};

export const SIDEBAR_ITEMS = Object.values(ROUTES).filter((v) => {
  const urlNotToInclude = ["/programs/:documentId"];
  return !urlNotToInclude.includes(v.url);
});
