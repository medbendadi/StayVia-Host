// postcss.config.cjs
module.exports = {
    plugins: {
      // PostCSS adapter for Tailwind v4+
      "@tailwindcss/postcss": {},
      // autoprefixer must be a string key in this shape for Next
      autoprefixer: {},
    },
  };
  