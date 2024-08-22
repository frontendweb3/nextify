> In working stage

<p align="center">
  <a href="https://section-blog-theme-docs.vercel.app">
      <img src="https://cdn.jsdelivr.net/gh/frontendweb3/nextify/.github/images/nextify.svg" height="128">
    <h1 align="center">Nextify - Open sourec Template</h1>
  </a>
</p>

<div style="display:flex; margin: 5px auto;">

  <img style="margin: 5px auto;" title="pnpm" alt="pnpm" src="https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220" />
  <img style="margin: 5px auto;" title="reactjs" alt="reactjs"  src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img style="margin: 5px auto;" title="nextjs" alt="nextjs"  src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"/>
  <img style="margin: 5px auto;" title="typescript" alt="typescript"  src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img style="margin: 5px auto;" title="fumadocs" alt="radix ui"  src="https://img.shields.io/badge/Fumadocs-8A2BE2?style=for-the-badge&logoColor=white"/>
  <img style="margin: 5px auto;" title="tailwind css" alt="tailwind css" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img style="margin: 5px auto;" title="markdown" alt="markdown"  src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white"/>
  <img style="margin: 5px auto;" title="mdx" alt="mdx" src="https://img.shields.io/badge/mdx-000204?style=for-the-badge&logo=mdx&logoColor=white">
  
</div>

<div style="margin-top: 10px auto;width:100%;"></div>

Nextify template is a prebuilt template for building documentation sites using [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [Fumadocs](https://fumadocs.vercel.app/docs/ui/comparisons).

<div style="margin: 10px auto;width:100%;padding-bottom: .3em;font-size: 2em;border-bottom: 1px solid var(--borderColor-muted, var(--color-border-muted));"></div>

### Features:

Every feature in the nextify template comes from fumadocs itself.

- In-built dark and light mode
- Support the Blog, tag page and Page 
- In-built Full-text Search functionality
- MDX support
- Syntax Highlighting
- Inbuilt components support
- Support the Next.js App Router and React server Component
- Tailwind CSS support
- I18n support
- Table of Contents
- Remote Source
- RTL Layout	

## Demo

![Demo](./.github/images/nextify-demo.gif)

### Pictures

![Nextify](./.github/images/nextify.png)

![Nextify Documentation](./.github/images/nextify-docs.png)

![Nextify Blog](./.github/images/nextify-blog.png)

![Nextify Reading Page](./.github/images/nextify-reading.png)

![Nextify Page](./.github/images/nextify-page.png)

![Nextify Footer](./.github/images/nextify-footer.png)

![Nextify Footer](./.github/images/nextify-search.png)

## Get Started

First step is to clone the Nextify template from github using git.

```bash
git clone https://github.com/frontendweb3/Nextify.git
```
Next install the package.

```bash
pnpm install
# or
npm install
```
Lastly run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open <http://localhost:3000> with your browser to see the result.

## MetaData/Frontmatter

Frontmatter for creating new documentation file.

```markdown
---
title: Architecture of Nextify
description: Architecture of Nextify template
---

Ut ullamco et aliqua `fugiat quis` Lorem aliquip in.

```

Frontmatter for creating new Blog post.

```markdown
---
title: 10 Things You Most Likely Didn't Know About Health.
description: Culpa laboris aliquip ea consectetur mollit ea ipsum sint qui culpa laboris
  dolor adipisicing proident. Et officia consequat do nulla tempor cupidatat
  elit.
date: 2022-11-12T08:05:53.939Z
draft: false
tags:
  - Health
  - Likely
  - Didn't Know
category:
  - Health
image: /images/vegetables.jpg
author: Curtis Lopez
---

Cupidatat voluptate deserunt non ea exercitation sit consequat ullamco ex nostrud elit magna. 


```

Frontmatter for creating new page.


```markdown
---
title: About us
description: About the author
date: 2022-11-08T08:55:59.004Z
tags:
  - Blog
  - About
author: Rajdeep Singh
---

Cupidatat voluptate deserunt non ea exercitation sit consequat.

```


## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.vercel.app) - learn about Fumadocs
