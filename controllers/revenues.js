/**
 * GET /revenues/dashboard
 * Dashboard page.
 */
exports.getDashboard = (req, res) => {
    if (!req.user) {
        return res.redirect('/login');
    } else {
        res.render('revenues/dashboard', {
            title: 'Dashboard'
        });
    }
  };
  