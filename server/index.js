//////////////////////////////////////////////
//  Import packages
//////////////////////////////////////////////
import express from "express";
import ViteExpress from "vite-express";
import handlerFunctions from "./controller.js";

//////////////////////////////////////////////
//  Express instance and Middleware
//////////////////////////////////////////////
// Create Express instance
const app = express();

// Set up middleware
app.use(express.json());

//////////////////////////////////////////////
//  Endpoints
//////////////////////////////////////////////
const { getLaunches, addLaunch } = handlerFunctions;

app.get("/launches", getLaunches);
app.post("/launches", addLaunch);
// app.post("/invoices", addInvoice);
// app.delete("/invoices/:id", deleteInvoice);
// app.put("/invoices/:id", editInvoice);

//////////////////////////////////////////////
//  Config server on port
//////////////////////////////////////////////
// Open door to server with .listen()
ViteExpress.listen(app, 8001, () =>
  console.log("Server running, view at http://localhost:8001")
);
