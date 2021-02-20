const connection = require("../database-mysql/index.js");
var bcrypt = require("bcryptjs");

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

module.exports.getContact = (req, res) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM contact";
    connection.query(query, (err, result) => {
      if (err) {
        reject(res.send(err));
      } else {
        resolve(res.send(result));
      }
    });
  });
};

module.exports.deleteProduct = (req, res) => {
  return new Promise((resolve, reject) => {
    const id = req.params.id;
    const query = `DELETE FROM latestproduct Where id="${id}"`;
    connection.query(query, (err, result) => {
      if (err) {
        reject(res.send(err));
      } else {
        resolve(res.send("deleted"));
      }
    });
  });
};

module.exports.deleteService = (req, res) => {
  return new Promise((resolve, reject) => {
    const id = req.params.idService;
    const query = `DELETE FROM ourservices Where id="${id}"`;
    connection.query(query, (err, result) => {
      if (err) {
        reject(res.send(err));
      } else {
        resolve(res.send("deleted"));
      }
    });
  });
};

module.exports.deleteContact = (req, res) => {
  return new Promise((resolve, reject) => {
    const id = req.params.idContact;
    const query = `DELETE FROM contact Where id="${id}"`;
    connection.query(query, (err, result) => {
      if (err) {
        reject(res.send(err));
      } else {
        resolve(res.send("deleted"));
      }
    });
  });
};
//Admin side add our services
module.exports.postService = (req, res) => {
  return new Promise((resolve, reject) => {
    var data = [req.body.image, req.body.servicename, req.body.description];
    console.log(data);
    const query = `INSERT INTO  ourservices(image,servicename,description) VALUES ("${data[0]}","${data[1]}","${data[2]}")`;
    connection.query(query, (err, result) => {
      if (err) {
        reject(res.send(err));
      } else {
        resolve(res.send("service posted"));
      }
    });
  });
};

//Admin side add products
module.exports.postProduct = (req, res) => {
  return new Promise((resolve, reject) => {
    var data = [req.body.image, req.body.reference, req.body.price];
    console.log(data);
    const query = `INSERT INTO latestproduct(image,reference,price) VALUES ("${data[0]}","${data[1]}","${data[2]}")`;
    connection.query(query, (err, result) => {
      if (err) {
        reject(res.send(err));
      } else {
        resolve(res.send("product posted"));
      }
    });
  });
};

module.exports.addAdmin = (req, res) => {
  var values = [req.body.username, req.body.email, req.body.password];
  console.log(values);
  var query = `INSERT INTO admin_log(username, email, password) VALUES (?, ?, ?)`;
  connection.query(query, values, (err, result) => {
    res.send(result);
  });
};
module.exports.logIn = (req, res) => {
  var query = `SELECT password FROM admin_log WHERE username ="${req.body.username}" `;
  console.log("this is password: ", req.body.username);
  connection.query(query, (err, result) => {
    if (err) {
      console.log("user is not found");
      res.send(err);
    } else {
      if (result[0] === undefined) {
        console.log("its not found");
        res.end("Username is not found");
        return;
      }
      var checked = bcrypt.compareSync(
        `${req.body.password}`,
        result[0].password
      );it
      if (!checked) {
        res.end("Incorrect password");
        return;
      } else {
        res.send(checked);
      }
    }
  });
};
