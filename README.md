# PRYAMO Website

A premium futuristic PRYAMO company website built with plain HTML, CSS, and a tiny JavaScript file. The homepage includes a dark enterprise IT design, orbit service carousel, service cards, ERP modules, industries, process, CTA, and footer.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:4173`.

## Build for production

```bash
npm run build
```

The optimized production files will be created in `dist/`.

## Preview the production build

```bash
npm run preview
```

## Deploy on Railway

1. Push this project to a GitHub repository.
2. Create a new Railway project and select **Deploy from GitHub repo**.
3. Railway will detect the Node.js app.
4. Set the build command to:

```bash
npm run build
```

5. Set the start command to:

```bash
npm start
```

6. Deploy. Railway will provide a public URL for the PRYAMO website.

## Project structure

```text
index.html          Main HTML file
package.json        Scripts and dependencies
src/main.js         Small JavaScript for content cards and the mobile menu
src/styles.css      Responsive futuristic styling and orbit animation
```

## Editing content

Most services, ERP modules, industries, and feature lists are stored as simple arrays in `src/main.js`, making it easy for a beginner to update without changing the design system.
