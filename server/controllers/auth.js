exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('error', 'Please login');
  res.redirect('/admin');
};

exports.logout = (req, res, next) => {
  req.logout();
  res.redirect('/');
};
