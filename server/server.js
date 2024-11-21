require("dotenv").config({ path: "../.env" });

const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const conatctRoute = require("./router/contact-router");
const connectdb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");


//tackling cors 

const corsOption = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credential:true,
};

app.use(cors(corsOption));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", conatctRoute);

app.use(errorMiddleware);

const PORT = 5000;

connectdb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
