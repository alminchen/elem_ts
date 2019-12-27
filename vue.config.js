module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "~@/assets/sass/test.scss";`
            }
        }
    }
}