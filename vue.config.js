module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/scss/_animations.scss";
          @import "@/assets/scss/_variables.scss";
        `,
      },
    },
  },
};
