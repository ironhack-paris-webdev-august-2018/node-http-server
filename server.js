const http = require("http");

const server =
  http.createServer((request, response) => {
    console.log(`Someone has requested ${request.url}`);

    if (request.url === "/") {
      // say "Hello, world!" if they are asking for the home page
      response.write("Hello, world!");
      response.end();
    }
    else if (request.url === "/about") {
      response.write("I'm Nizar and I like pizza. 🍕");
      response.end();
    }
    else {
      // say "404" if they are asking for anything else
      response.statusCode = 404;
      response.write("404 Page Not Found");
      response.end();
    }
  });

server.listen(3000);
