module.exports = {
  // index
  entry: "./src/main.ts",
  path: "index",
  template: "./public/index.html", // default
  pages: [
    {
      entry: "./src/pages/details/main.ts",
      path: "details",
      template: "./public/index.html", // optional.use default if undefined
    },
    {
      entry: "./src/pages/details/main.ts",
      path: "user/login",
    },
  ],
};
