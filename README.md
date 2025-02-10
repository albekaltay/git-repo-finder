This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Description

The project has been deployed via Vercel. The case study was developed using Next.js, React, Module CSS, and RTK Query within Redux, utilizing the specified GitHub Developer API. Efforts were made to ensure a clean and user-friendly design while maintaining responsiveness. Code cleanliness and performance were prioritized, leveraging RTK Query’s caching and refetch advantages. TypeScript was used throughout the project to enhance type safety and maintainability.

On the main page, users are presented with a table where they can browse GitHub repositories. Three radio buttons allow users to filter repositories by programming language—JavaScript, Scala, and Python—with JavaScript selected by default. Additionally, a search input enables users to filter repositories based on keywords. This search operates automatically without a submit button, fetching results dynamically as the user types.

Sorting functionality has been implemented for stars, forks, and the last update date. Sorting is not performed on the client side but instead triggers a new data request to the API, ensuring up-to-date results. Pagination has also been integrated to enhance usability.

State persistence has been applied, ensuring that user preferences—including selected language, search input, sorting options, and pagination state—are preserved even after the page is closed and reopened.

The project follows best practices for modern frontend development. The file structure is well-organized, with type definitions stored separately for maintainability. Authentication has been implemented using NextAuth and GitHub OAuth.Tests were written using Jest to ensure the reliability of core functionalities. Finally, linting checks were performed before deployment to ensure code quality.

It was an enjoyable project—thank you!
