const { query } = require('express');
const { fetchGraphQL } = require('../config/shopify.js');

/**
 * GET /revenues/dashboard
 * Dashboard page.
 */
exports.getDashboard = (req, res) => {
    if (!req.user) {
        return res.redirect('/login');
    } else {
        const operation = `query Orders {
            orders(first:10, query:"created_at:>2024-01-01") {
                edges {
                    node {
                        name
                        createdAt
                        fulfillments {
                            createdAt
                            deliveredAt
                        }
                    }
                }
            }
        }`
        fetchGraphQL(operation).then((data) => {
            res.render('revenues/dashboard', {
                title: 'Dashboard',
                data: data.orders.edges
            });
        })
        
    }
  };
  