const pagesConfig = require("./pages.config");
const pages = {
  index: {
    entry: pagesConfig.entry,
    template: pagesConfig.template,
    chunks: ["chunk-vendors", "chunk-common", "index"],
  },
};

pagesConfig.pages.forEach(page => {
  pages[page.path] = {
    entry: page.entry,
    template: page.template || pagesConfig.template,
    chunks: ["chunk-vendors", "chunk-common", page.path],
  };
});

module.exports = {
  pages,
  chainWebpack: config => config.plugins.delete("named-chunks"),
  productionSourceMap: false,
  publicPath: "/multi/",
  devServer: {
    port: 31210,
    https: false,
    open: true,
  },
};
