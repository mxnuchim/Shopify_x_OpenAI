import express from "express";
import cors from "cors";
import { configureRoutes } from "./routes/routes";
import { appConfig } from "./config/appConfig";
import { configureDB, populateDB } from "./config/db";

const app = express();
const port = appConfig.PORT;

app.use(express.json());
app.use(cors());

// Connect to MongoDB
configureDB();

// Populate db with any new data
// populateDB();

// Initialize routes
configureRoutes(app);

app.listen(port, () => {
  console.log(`Server's running on port ${port} 🚀`);
});
