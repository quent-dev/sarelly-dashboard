/**
 * GET /shipping/dashboard
 * Dashboard page.
 */
exports.getDashboard = (req, res) => {
    if (!req.user) {
        return res.redirect('/login');
    } else {
        res.render('shipping/dashboard', {
            title: 'Dashboard'
        });
    }
  };
  