module.exports = {
    client: {
        service: {
            name: 'muftar-carriers',
            // URL to the GraphQL API
            url: 'https://ecostructure-mfa4wusola-uc.a.run.app/2023-01/graphql',
        },
        // Files processed by the extension
        includes: [
            'src/**/*.vue',
            'src/**/*.js',
        ],
    },
}