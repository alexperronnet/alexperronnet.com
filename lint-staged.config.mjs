// @ts-check

/** @type {import('lint-staged').Configuration} */
const config = {
  "*.{astro,ts,mjs,json,jsonc,css}": "pnpm exec ultracite fix",
};

export default config;
