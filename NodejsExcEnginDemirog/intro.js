/** @format */
/** @format */

var http = require("http");

http
  .createServer(function (req, res) {
    console.log("created server with http,3000");

    if (req.url === "/admin") {
      res.write("admin page");
    } else {
      res.write("home page");
    }
    res.end(); // you must use end
  })

  .listen(3000);
