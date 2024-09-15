# Dad Joke Generator

## Details
This project has been built using TypeScript + React using the Vite bundler. To run the project simply run

```npm run dev```

All jokes served by the website are built using the various APIs at https://icanhazdadjoke.com
The API and its documentation can be found here: https://icanhazdadjoke.com/api. Jokes are stored using the `localStorage` API

## Features
The website contains the following items:
1. Ability for users to search for a joke based on some user input (search jokes)
2. Ability for users to retrieve a random joke on demand (Instant Joke)
3. Selecting a joke should take you to a dedicated page for that joke
4. A header, footer, and navigation for accessing the pages within the site
5. Ability to copy url to clipboard and share to your Facebook or X account. If a joke has been previously shared it will say so on the dedicated joke page.
6. Ability to view all previously viewed jokes (History).