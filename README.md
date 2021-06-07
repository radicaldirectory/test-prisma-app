# Radical Directory – Web App

This repo contains the source code for the beginnings of Radical Directory.

It's a Next.js fullstack Typescript app, configured to interface with a Postgres database using Prisma as an ORM. Passwordless email authentication has been implemented using `next-auth`, and styling is handled by a fairly new CSS-in-JS library called Stitches. Storybook is also installed as a component explorer, and the beginnings of a component library is sketched out based upon Radix UI accessible component primitives.

Current work:

- Building out the basic UI
- Set up theming (Dark Mode)
- Learning how to use Typescript, Jest and React Testing Library for testing

Future plans:

- Optional password authentication (with proper hashing etc)
- Build a rich text editor using Slate.js
- Create a GraphQL API for client-side data fetching
- End-to-end tests with Cypress
