import express from "express";
import cors from "cors";
import ProductRoute from './routes/ProductRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(ProductRoute);

app.get("/", (req, res) => res.send("<h1>Hello World</h1>"));
app.listen(5000, () => console.log("Server running on port 5000"));
