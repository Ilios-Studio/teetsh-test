# Test project for Teetsh

## Description

Test project for the Senior Software Engineer position at Teetsh. <3

## Technical Stack

- React -> UI
- React Router -> Framework overlay to have an "out of the box" solution for route management
- Tailwind CSS -> Styling with theming through CSS variables
- Shadcn UI -> UI Components + CVA for component variants. Shadcn is based on Radix and is accessible by default.
- React Query -> Query management to cache data.
- Zustand -> State management. Preferred over Context to avoid memory leaks.

## CMDS

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run test
```

```
Env vars :

- VITE_BASE_STRAPI_API_URL
- VITE_STRAPI_API_TOKEN
```

In order to visualize the requested progression, navigate here : http://localhost:5173/programs/wwdnw9553da0cdypjq2t9p3f

In order to visualize the a progressions with multiple matieres : http://localhost:5173/programs/zv041830n3auk8w52odgmb4b

## project structure

```
  app/
  ├── components/
  │   ├── ui/                         # shadcn components
  ├── domains/
  │   ├── service-locator.ts          # Dependency injection
  │   └── program/                    # Domain-driven design structure
  │       ├── domain.ts               # Domain types & interfaces
  │       ├── infrastructure/
  │       │   └── strapi-repository.ts # Strapi API implementation
  │       └── application/
  │           ├── queries.ts          # TanStack Query hooks
  │           └── components/         # UI components
  ├── hooks/
  ├── lib/
  ├── routes/                       # React Router pages
  │   ├── home.tsx                  # Home page
  │   ├── program.tsx               # Single program view
  │   └── programs.tsx              # Programs list
  ├── app.css                       # Global styles
  ├── dataset.json                  # Mock/sample data
  ├── root.tsx                      # App root component
  └── routes.ts                     # Route definitions

```

## What could be improved with more time

- Virtualization: if we have many entries (37 weeks \* x number of entries / domain) then we can have a lot of data to fetch without having them on screen = useless
- Adding offline editing solution -> with a lib like Y.js for example.
- Carousel instead of native overflow -> better animation management, transitions, and navigation through snapping.
- Filters for more granular display -> filter by week, by subject, by domain...
- Add shortcuts (key bindings) -> with react-hotkeys
- E2E tests with Cypress
- Better responsive -> mobile handling. I would create an adaptive version of the Program view. Probaby something based on the Y axis, so basically scrolling down.
- More unit tests for hooks, components, etc.

If editing:

- Drag and drop on items
- Auto save
- Undo/Redo

## AI Usage

- Project structure definition and trade-offs between technologies
- DTO extraction from the provided dataset (IRL we would have a different domain interface for the frontend than the API DTO but for simplicity we stick to the provided dataset)
- Accessibility -> review of code to improve accessibility and fix possibly missing aria attributes or wrong html semantic
- Help on some css attrs, especially for tailwind conf
- Supervising AI to write tests

## Points of attention

- French-English naming in the dataset. It would be better to put everything in English.
- Confusion between Programmation and Progression in database. I assume that Progression is just a fintuning display of Programmation.
