const connection = require("../database-mysql/index.js");

module.exports.selectAll = (req, res) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM latestproduct";
    connection.query(query, (err, result) => {
      if (err) {
        reject(res.send(err));
      } else {
        resolve(res.send(result));
      }
    });
  });
};

module.exports.getAllServices = (req, res) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM ourservices";
    connection.query(query, (err, result) => {
      if (err) {
        reject(res.send(err));
      } else {
        resolve(res.send(result));
      }
    });
  });
};

module.exports.postContact = (req, res) => {
  return new Promise((resolve, reject) => {
    var data = [
      req.body.name,
      req.body.mobile,
      req.body.email,
      req.body.message,
    ];
    console.log(data);
    const query = `INSERT INTO contact(name,mobile,email,message) VALUES ("${data[0]}","${data[1]}","${data[2]}","${data[3]}")`;
    connection.query(query, (err, result) => {
      if (err) {
        reject(res.send(err));
      } else {
        resolve(res.send("posted"));
      }
    });
  });
};
