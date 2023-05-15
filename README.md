This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## To render blog content it's necessary to install
```bash
npm i @portabletext/react
```

## Folder structure
- To have different layout we follow the structure of the folders (site) & (studio)

## Adding Dark Mode
- First we need to add the following line to the tailwind.config
```bash
darkMode: 'class',
```

- Install next themes
```bash
npm i next-themes
```

- Create a component with the provider that uses 'use client'
This [Documentation](https://nextjs.org/docs/getting-started/react-essentials#context) explains why.

- Wrap the layout with the provider.