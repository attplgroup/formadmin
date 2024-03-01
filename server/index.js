const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const connectDB = require("./api/config/database");
const formDataRoutes = require("./api/v1/routes/FormData.routes");

const app = express();
console.log("hiii");
connectDB.connectToDB();
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Routes

app.use("/", formDataRoutes);

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.info(`Server listening at port ${PORT}`);
});
