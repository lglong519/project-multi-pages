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
      entry: "@/sort/main.ts",
      path: "sort",
    },
    {
      entry: "@/top/main.ts",
      path: "top",
    },
    {
      entry: "@/full/main.ts",
      path: "full",
    },
    {
      entry: "@/details/main.ts",
      path: "details",
    },
  ],
};
