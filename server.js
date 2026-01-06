require("dotenv").config();
require("module-alias/register");
require("@/config/database")
const express = require("express");
const appRoute = require("@/routes");
const app = express();
const cors = require("cors");
const jsonMiddleware = require("@/middlewares/json.middleware");
const respone = require("@/middlewares/responseFormat");
const exeptionHandler = require("@/middlewares/exceptionHandler");
const notFound = require("@/middlewares/notFoundHandler");
const { apiRateLimiter } = require("@/middlewares/rateLimiter");


const port = 3017;

const allowedOrigins = ["http://localhost:5173", "https://mcuong17.github.io"];

// Middlewares
// app.use(express.json())
app.use(jsonMiddleware)
app.use(respone)



app.use(express.static("public"));
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});




// Router
app.use("/api", appRoute);
app.use(apiRateLimiter)
app.use(notFound )
app.use(exeptionHandler)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Client -> request -> controller -> model -> JSON respone/View
// Routing:
// app.METHOD('/pathname')


//Viết middleware taskCreateValidator.middleware để validate dữ liệu khi tạo một task mới
//