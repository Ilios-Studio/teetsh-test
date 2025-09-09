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

## Installation

```bash
npm install
```

## Launch

```bash
npm run dev
```

## Build

```bash
npm run build
```

> Env vars : VITE_BASE_STRAPI_API_URL

## project structure

```
src/
├── components/
│   ├── ui/                          # shadcn components
│   │   ├── button.tsx
│   │   ├── dialog.tsx
│   │   ├── tabs.tsx
│   │   └── ...
│   └── layout/
│       ├── Header.tsx
│       └── Layout.tsx
├── domains/
│   └── progression/
│       ├── types.ts                 # Domain types & interfaces
│       ├── infrastructure/
│       │   ├── api.ts              # API calls (fetchProgression, etc.)
│       │   └── queries.ts          # React Query hooks
│       ├── store/
│       │   └── progressionStore.ts # Zustand store (UI states)
│       └── components/
│           ├── ProgressionView.tsx  # Main adaptive component
│           ├── desktop/
│           │   ├── Grid.tsx        # Carousel container
│           │   ├── Periode.tsx     # Period slide
│           │   ├── Domaine.tsx     # Domain row
│           │   ├── ProgressionItem.tsx
│           │   └── TimelineHeader.tsx
│           ├── mobile/
│           │   ├── MobileListView.tsx
│           │   ├── PeriodFilter.tsx
│           │   └── DomainAccordion.tsx
│           └── shared/
│               ├── ItemModal.tsx   # Shared modal
│               └── ItemContent.tsx # Sanitized HTML display
├── shared/
│   ├── hooks/
│   │   └── useViewport.ts          # Mobile/desktop detection
│   ├── lib/
│   │   ├── utils.ts               # shadcn utils + helpers
│   │   ├── sanitize.ts            # DOMPurify wrapper
│   │   └── queryClient.ts         # React Query setup
│   └── providers/
│       └── AppProviders.tsx       # React Query + other providers
├── pages/
│   └── ProgressionPage.tsx
├── App.tsx
└── main.tsx


```

## What could be improved with more time

- Virtualization: if we have many entries (37 weeks \* x number of entries / domain) then we can have a lot of data to fetch without having them on screen = useless
- Adding offline editing solution -> with a lib like Y.js for example.
- Carousel instead of native overflow -> better animation management, transitions, and navigation through snapping.
- Filters for more granular display -> filter by week, by subject, by domain...
- Add shortcuts (key bindings) -> with react-hotkeys
- E2E tests with Cypress

If editing:

- Drag and drop on items
- Auto save
- Undo/Redo

## AI Usage

- Project structure definition and trade-offs between technologies
- DTO extraction from the provided dataset (IRL we would have a different domain interface for the frontend than the API DTO but for simplicity we stick to the provided dataset)

## Points of attention

- French-English naming in the dataset. It would be better to put everything in English.
- Confusion between Programmation and Progression in database. I assume that Progression is just a fintuning display of Programmation.
