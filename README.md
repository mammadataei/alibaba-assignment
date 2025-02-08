# Alibaba Hotel Reservation Assignment

## Tech Stack

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [React Query](tanstack.com/query/)
- [React Leaflet](https://react-leaflet.js.org/)
- [Cypress](https://www.cypress.io/)
- [Vite Remix Router](https://github.com/mammadataei/vite-plugin-remix-router)
- [Vite Json Server](https://github.com/yracnet/vite-plugin-json-server/)
- [Vite PWA](https://vite-pwa-org.netlify.app/)
- etc.

## Getting Started

Install dependencies using pnpm:

```bash
pnpm install
```

Generate the mock data:

```bash
pnpm codegen
```

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the
result.

## Mock Server

The mock server is generated using the `vite-plugin-json-server` plugin. The
mock server is available at
[http://localhost:5173/api](http://localhost:5173/api). It will serve the data
from `server/db.json`. the data is generated using the factories available in
`tests/factories.ts`.

## Testing

Tests are written using Cypress E2E testing. To run the tests:

```bash
pnpm test
```

## Docker

Dockerfile is available to build the image. Note that the image only contains
the production build of the application, so it doesn't have the mock server. To
build the image:

```bash
docker build -t alibaba-hotel-reservation .
```

To run the image:

```bash
docker run -p 8080:80 alibaba-hotel-reservation
```

## CI Configuration

The project is configured to run linting, build, and tests on GitHub Actions.
The workflow is available at `.github/workflows/check.yml`.
