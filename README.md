# Radical Directory – Web App

This repo contains the source code for the beginnings of Radical Directory.

It's a [Next.js](https://nextjs.org) fullstack Typescript app, configured to interface with a Postgres database using [Prisma](https://www.prisma.io) as an ORM. Passwordless email authentication has been implemented using `next-auth`, and styling is handled by a fairly new CSS-in-JS library called [Stitches](https://stitches.dev). [Storybook](https://storybook.js.org) is also installed as a component explorer, and the beginnings of a component library is sketched out based upon [Radix UI](https://www.radix-ui.com/docs/primitives/overview/introduction) accessible component primitives.

Current work:

- Building out the basic UI
- Set up theming (Dark Mode)
- Learning how to use Typescript, Jest and React Testing Library for testing
- Build a rich text editor using Slate.js

Future plans:

- Optional password authentication (with proper hashing etc)
- Create a GraphQL API for client-side data fetching
- End-to-end tests with Cypress

## lil guide for starting local development

First up you need a computer with [Node.js](https://nodejs.org/en/) and Postgres installed. The easiest way to install Postgres is [Postgres.app](https://postgresapp.com) (maybe get version 12?), and you might also like to have a Postgres GUI client like [Postico](https://eggerapps.at/postico/) (for Mac only).

Open a terminal in a suitable folder and run `git clone https://github.com/radicaldirectory/radical-directory.git`

`cd radical-directory` to go into the new folder
`npm i` to install dependencies for the app. there are quite a few, may take a sec.

the app is almost ready to run. but there are some extra things to do first.

### fonts

this app uses some fonts ([Viksjo](https://monokrom.no/fonts/viksjoe)) that can't be included in an open source repo due to licencing. this is annoying. it also contains another free font called [Lato](https://fonts.google.com/specimen/Lato). both are in or have been converted to .woff and .woff2 format.
the stylesheet expects there to be a directory in the root of the project called 'fonts', inside of which there are directories 'lato' and 'viksjo' which contain the font files. easiest is to just ask Meri to send them to you. otherwise you can manually get the fonts, [convert them](https://cloudconvert.com/woff-converter) and set them up like described.

### env file

there is a file in the repo called `.env.example`. If you can't see it, it's because files that start with a dot are hidden on file browsers. If you open up the repo in something like VSCode it should be right there.
The `.env.example` file is a template for you to create a file called `.env`. You should make one by copying and pasting the contents of the former into a new file. This `.env` file is where the secret codes and any kind of contextual information for running the app in connection to other services, such as a database.

### database

open Postgres.app if ur using that. click 'initialise'. now a database server is running on your computer. on a mac you can see an elephant in the menu bar. its ok to close the window.

in the previous step, we made a .env file that included this string: `DATABASE_URL="postgresql://postgres:postgres@localhost:5432/db?schema=public"`. This is a database connection URL that should work for the default database you just created. It addresses your local computer (localhost) on port 5432 (which is the default port for postgres - you can change this in postgres.app) with a username and password of postgres. Within this server it addresses a (not yet existing) database called db with a public schema.

run `npx prisma db push`. This runs a helpful tool by Prisma which connects to your database (using the connection URL) and sets up the data tables according to the way we want to use them in our app, i.e. the data schema. The data schema for the app is defined in the file `prisma/schema.prisma`. This command also generates the 'Prisma Client', which needs to be re-generated if the schema changes.

### running the app!

If everything worked well, now you can run the app. Run `npm run dev` to start Next.js. Then open your browser and go to [http://localhost:3000](http://localhost:3000) to see the app running.
