const production = process.env.NODE_ENV === "production"

module.exports = {
  plugins: [
    require("tailwindcss"),
    ...(production
      ? [require("autoprefixer"), require("cssnano")({ preset: "default" })]
      : []),
  ],
};
