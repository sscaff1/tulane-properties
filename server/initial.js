const mongoose = require('mongoose');
const User = mongoose.model('User');
const USERNAME = 'admin';

const adminUser = new User({ username: USERNAME });
User.findByUsername(USERNAME, (err, user) => {
  if (!user) {
    User.register(adminUser, process.env.ADMIN_PASSWORD, (err, user) => {
      if (err) {
        console.log(err);
      }
    });
  }
});
