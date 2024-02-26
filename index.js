/** @format */

const http = require("http");
const host = "127.0.0.1"; //localhost
const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("welcome to express server on my first trial");
});

const PORT = 3001;
app.listen(PORT, host, () => {
  console.log(`Server running on port,listen on  ..${PORT}`);
});

//htttp://localhost:3001
