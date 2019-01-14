module.exports = {
  // index
  entry: "src/main.ts",
  path: "index",
  template: "public/index.html", // default
  pagesRoot: "src/pages/", // => @/
  pages: [
    {
      entry: "@/details/main.ts",
      path: "details",
      template: "public/index.html", // optional.use default if undefined
    },
    {
      entry: "@/classify/main.ts",
      path: "classify",
    },
    {
      entry: "@/ranking-list/main.ts",
      path: "ranking-list",
    },
    {
      entry: "@/completed/main.ts",
      path: "completed",
    },
    {
      entry: "@/details/main.ts",
      path: "details",
    },
  ],
};
