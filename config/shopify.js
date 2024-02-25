const dotenv = require('dotenv');
const adminApiClient = require('@shopify/admin-api-client')

dotenv.config({ path: '../.env' });


// Initialize the Shopify client
const client = adminApiClient.createAdminApiClient({
    storeDomain: process.env.SHOPIFY_STORE,
    apiVersion: '2024-01',
    accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
})

// Fetch data from the Shopify API
exports.fetchGraphQL = async function (query, variables) {
    const response = await client.fetch(query);

    if (response.errors) {
        console.error(response.errors);
    } else {
        const { errors, data, extensions} = await response.json();
        return data;
    }
}



