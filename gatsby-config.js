module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-material-ui`,
            options: {
                stylesProvider: {
                    injectFirst: true
                }
            }
        },
        `gatsby-plugin-styled-components`
    ]
};
