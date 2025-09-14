
const fs = require('fs');
const path = require('path');

exports.getuser = (name) => {
  // read file
  const buffer = fs.readFileSync(path.join(__dirname, '../data/users.json'));
  const jdata = JSON.parse(buffer);

  // find user
  const user = jdata.find((u) => u.name === name);

  if (user) {
    return {name:user.name,age:user.age}; // or return user if you need full object
  }

  return null;
};
