# Next.js + Netlify Starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/e61fe625-d8c2-419a-849a-21d44773077f/deploy-status)](https://app.netlify.com/sites/build-nextjs-on/deploys)

This is a [Next.js](https://nextjs.org/) v12 project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and set up to be instantly
deployed to [Netlify](https://netlify.com)!

This project demos the following capabilities of Next.js using publicly available APIs:

- Static site generation with `getStaticProps()`
- Dynamic route generation with `getStaticPaths()`
- Page build at request time with `getServerSideProps()`
- Incremental Static Regeneration

## Next.js on Netlify

You get all the features of Next.js on Netlify — it just works!

When you deploy a Next.js site to Netlify, the
[Essential Next.js Build Plugin](https://github.com/netlify/netlify-plugin-nextjs) will be auto-installed. This allows
for you to implement features like Preview Mode, and server-side rendering/incremental static regeneration.

Also demoed with this project is:

- Redirects via the netlify.toml file — so you can migrate your apps to Next.js iteratively without having to go all-in
  straight away

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/whitep4nth3r/next-netlify-starter)

(If you click this button, it will create a new repo for you that looks exactly like this one, and sets that repo up
immediately for deployment on Netlify)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Installation options

**Option one:** One-click deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/whitep4nth3r/next-netlify-starter)

**Option two:** Manual clone

1. Clone this repo: `git clone https://github.com/whitep4nth3r/next-netlify-starter.git`
2. Navigate to the directory and run `npm install`
3. Run `npm run dev`
4. Make your changes
5. Connect to [Netlify](https://netlify.com) manually (the `netlify.toml` file is the one you'll need to make sure stays
   intact to make sure the export is done and pointed to the right stuff)
