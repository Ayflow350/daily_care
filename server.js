const express = require("express");
const next = require("next");
const morgan = require("morgan");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Log HTTP requests with Morgan
  server.use(morgan("combined"));

  // Handle Next.js requests
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(`https://daily-care-6y11.vercel.app` || 3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
