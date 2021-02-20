const connection = require("../database-mysql/index.js");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

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

module.exports.signup = (req, res) => {
  var values = [req.body.username, req.body.email, req.body.password];
  var query = `INSERT INTO adminlog(username, email, password) VALUES (?, ?, ?)`;
  connection.query(query, values, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};
module.exports.login = (req, res) => {
  const password = req.body.password;
  var query = `SELECT password FROM adminlog WHERE username ="${req.body.username}" `;
  connection.query(query, (err, result) => {
    if (err) {
      res.send({ err });
    }
    if (result) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          const id = result[0].id;
          const token = jwt.sign({ id }, "secret", { expiresIn: "1h" });
          res.json({ auth: true, token, result });
        } else {
          res.json({ auth: false, message: "Incorrect password" });
        }
      });
    } else {
      res.json({ auth: false, message: "user is not found" });
    }
  });
};

const verifyjwt = (req, res, next) => {
  const token = req.headers["x-access-token"];
  console.log(req.headers);
  console.log("message from token", token);
  if (!token) {
    res.send("Please give us a token!");
  } else {
    jwt.verify(token, "secret", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "authentication failed" });
      } else {
        console.log(req);
        console.log(decoded);
        // req.user = decoded.id;
        next();
      }
    });
  }
};
module.exports.verify =
  (verifyjwt,
  (req, res) => {
    res.send("you are authenticated,congrats!");
  });

// else {
//   if (result[0] === undefined) {
//     console.log("its not found");
//     res.end("Username is not found");
//     return;
//   }
//   var checked = bcrypt.compareSync(
//     `${req.body.password}`,
//     result[0].password
//   );
//   it;
//   if (!checked) {
//     res.end("Incorrect password");
//     return;
//   } else {
//     res.send(checked);
//   }
// }
